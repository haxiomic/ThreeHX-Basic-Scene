/* TODO
- Issues with WebGLRenderer! Code works but terminal output JSON too large! Limit of 2^16 -> 65536 characters
- extraceDefinitions() should handle private variables
- extractDefinitions() should handle multiple classes
- extractDefinitions() should handle THREE class independently 
- would be great to extract comments. Maybe a jsDocs tool is best
*/

package;
import Config;

import sys.io.Process;

class Main{
	public function new(){
		if(Sys.args().length<=0){usage();Sys.exit(2);}

		var classID = Sys.args()[0];
		//Should process and search className if file not first found
		printTitle(classID);
		try{

			var jsFilePath:String = filePathFromClassID(classID);
			var fileContent = sys.io.File.getContent(jsFilePath);

			var definitions = extractDefinitions(classID);

			//For example
			for (field in Reflect.fields(definitions.instanceFunctionsPublic)){
				print(field+' : '+Reflect.field(definitions.instanceFunctionsPublic, field).params);
			}

		}catch(msg:String){

			printError(msg);
			Sys.exit(66);

		}
	}

	function usage(){
		print("Analyzer\n  Usage : neko analyzer.n <package>.<class>");
	}

	function print(v:Dynamic){
		Sys.println(v);
	}

	function printTitle(v:Dynamic){
		Sys.println(BLUE+BOLD+'\t-- '+v+' --'+RESET+'\n');
	}

	function printError(v:Dynamic){
		Sys.println(RED+BOLD+"Error"+RESET+": "+v+RESET);
	}

	//Terminal colors
	static var RED_CODE = 1;
	static var BLUE_CODE = 4;
	static var RED = '\033[38;5;'+RED_CODE+'m';
	static var BLUE = '\033[38;5;'+BLUE_CODE+'m';
	static var BOLD = '\033[1m';
	static var RESET = '\033[m';

	//javascript three.js 

	public function filePathFromClassID(classID:String):String{
		var IDcomponents = classID.split('.');
		if(IDcomponents[0]=='three')IDcomponents.shift();//remove three. from ID

		//file aliases
		var l:Int = IDcomponents.length-1;
		if(IDcomponents[l] == 'MathUtils')IDcomponents[l] = 'Math';
		if(IDcomponents[l] == 'THREE')IDcomponents[l] = 'Three';

		var pathAppend = IDcomponents.join('/')+'.js';
		var relPath = Config.threejsDirectory+'/src/'+pathAppend;

		if(sys.FileSystem.exists(relPath)){
			var fullPath = sys.FileSystem.fullPath(relPath);
			return fullPath;			
		}else{
			throw "couldn't find file "+Sys.getCwd()+relPath;
		}
	}

	//runs a nodejs process of three.js and extracts the class definitions during runtime
	public function extractDefinitions(classID:String){
		var className = classID.split('.').pop();

		//nodejs script to execute
		var js = '';

		//fake the environment three.js requires
		var setup = "
			self={};
			document={};document.createElement = function(){
				return {
					width:0,
					height:0,
					getContext: function(){
						return {
							fillStlye: function(){},
							fillRect: function(){},
							translate: function(){},
							scale: function(){},
							getImageData: function(){return{data:0}},
						}
					},
				}
			};
		";
		js+=setup;

		var utils = "
			//Disable console logging
			console.log = function() {}
			//console.warn = function() {}
			//console.error = function() {}

			function print(v){
				process.stdout.write(v + '\\n');
			}

			function printError(v){
				process.stderr.write('"+RED+BOLD+"nodejs"+RESET+": ' + v + '"+RESET+"\\n');
			}

			var STRIP_COMMENTS = /((\\/\\/.*$)|(\\/\\*[\\s\\S]*?\\*\\/))/mg;
			function getParamNames(func) {
			  var fnStr = func.toString().replace(STRIP_COMMENTS, '')
			  var result = fnStr.slice(fnStr.indexOf('(')+1, fnStr.indexOf(')')).match(/([^\\s,]+)/g)
			  if(result === null)
			     result = []
			  return result
			}

			function getFunctionBody(func) {
				var fnStr = func.toString();
				return fnStr.substring(fnStr.indexOf('{') + 1, fnStr.lastIndexOf('}'));
			}

			function getType(obj) {//better typing
			  return ({}).toString.call(obj).match(/\\s([a-zA-Z]+)/)[1].toLowerCase()
			}

			function isDefined(v){
				if(v==null)return false;
				return (typeof v !== 'undefined')
			}

			function isEmpty(obj) {
			    for(var prop in obj) {
			        if(obj.hasOwnProperty(prop))
			            return false;
			    }
			    return true;
			}

			function findClosingBrace(string, start){
				//find closing bracket
				var offset = start;
				var unmatchedCurl = 1;
				while(unmatchedCurl>0 && offset<string.length){
					var char = string[offset];
					if(char=='{')unmatchedCurl++;
					else if(char=='}')unmatchedCurl--;
					offset++;
				}
				var endIndex = offset;
				return endIndex;
			}
		"; 
		js+=utils;

		//get three.js file contents
		var relPath = Config.threejsDirectory+'/build/three.js';
		if(!sys.FileSystem.exists(relPath)){
			throw "couldn't find three.js "+Sys.getCwd()+relPath;
			return null;
		}
		var fullPath = sys.FileSystem.fullPath(relPath);

		var loadThreeJS = "
			var fs = require('fs');

			var threeJSPath = '"+fullPath+"';

			var data = fs.readFileSync(threeJSPath, {encoding:'utf-8'});
			eval(data);
		";
		js+=loadThreeJS;

		//Werid classes, THREE.Spline, THREE.Euler
		var compileDetails = "
			var className = '"+className+"';
			var classObj = THREE[className];
			var hasConstructor = false;

			if(!isDefined(classObj)){
				printError('cannot find class THREE.'+className);
				process.exit(1);
			};

			var classDefinitions = {};
			classDefinitions.constructor = null;
			classDefinitions.staticVariablesPublic = {};
			classDefinitions.staticFunctionsPublic = {};
			classDefinitions.staticVariablesPrivate = {};
			classDefinitions.staticFunctionsPrivate = {};
			classDefinitions.instanceVariablesPublic = {};
			classDefinitions.instanceFunctionsPublic = {};
			classDefinitions.instanceVariablesPrivate = {};
			classDefinitions.instanceFunctionsPrivate = {};


			//Constructor
			if(typeof classObj === 'function'){//class has a constructor
				classDefinitions.constructor = {
					name:className,
					params:getParamNames(classObj),
					code:getFunctionBody(classObj),
				}
				hasConstructor = true;
			}


			//Static Fields
			for(var field in classObj){
				var obj = classObj[field];

				if(typeof(obj) !== 'function'){
					var store = field[0] == '_' ? classDefinitions.staticVariablesPrivate : classDefinitions.staticVariablesPublic;//underscore prefix makes private
					store[field] = {
						value: isDefined(obj) ? obj.toString() : undefined,
						type: getType(obj),
					};
				}else{
					var store = field[0] == '_' ? classDefinitions.staticFunctionsPrivate : classDefinitions.staticFunctionsPublic;//underscore prefix makes private
					store[field] = {
						params: getParamNames(obj),
						code: getFunctionBody(obj),
					};
				}
			}

			if(hasConstructor){
				function extractInstanceFields(target){
					for(var field in target){
						var obj = null;
						try{obj = target[field]}catch(e){};

						if(field=='constructor')continue;//ignore constructor
						if(typeof(obj) !== 'function'){
							var store = field[0] == '_' ? classDefinitions.instanceVariablesPrivate : classDefinitions.instanceVariablesPublic;//underscore prefix makes private
							store[field] = {
								value: isDefined(obj) ? obj.toString() : undefined,
								type: getType(obj),
							};
						}else{
							var store = field[0] == '_' ? classDefinitions.instanceFunctionsPrivate : classDefinitions.instanceFunctionsPublic;//underscore prefix makes private
							store[field] = {
								params: getParamNames(obj),
								code: getFunctionBody(obj),
							};
						}
					}
				}

				function extractConstructorInstanceFields(constructorBody){
					//Regex and eval
					//non-function public fields defined with 'this.something = value;'
					var matchThisDot = /this\\.(\\S+)\\s*\\=(?!\\s*function)(\\s*[^\\;]+)\\s*\\;/g;
					var match;
					while((match = matchThisDot.exec(constructorBody)) != null){
						var field = match[1];
						var strValue = match[2];
						var type = undefined;

						//try and determine type
						var result;
						try{
							eval('result='+strValue);
						}catch(e){}
						type = getType(result);

						//add or update definitions Array
						var store = classDefinitions.instanceVariablesPublic;
						var lastType = isDefined(store[field]) ? store[field].type : undefined;
						var lastValue = isDefined(store[field]) ? store[field].value : undefined;
						store[field] = {
							value: isDefined(lastType) ? lastValue : strValue,
							type: isDefined(lastType) ? lastType : type,
						}	
					}

					//public function fields defined with 'this.something = function (){};'
					var matchThisFn = /this\\.(\\S+)\\s*\\=\\s*function\\s*\\((.*)\\)\\s*\\{/g;
					var match;
					while((match = matchThisFn.exec(constructorBody)) != null){
						var field = match[1];
						//find closing brace
						var startIndex = match.index;
						var endIndex = findClosingBrace(constructorBody, startIndex + match[0].length);
						var fnStr = constructorBody.substring(startIndex, endIndex);

						//save
						var store = classDefinitions.instanceFunctionsPublic;
						store[field] = {
							params: getParamNames(fnStr),
							code: getFunctionBody(fnStr),
						};
					}

					//private function fields, defined with 'function x(){...}'
					var matchPrivateFn = /(this\\.x\\s*\\=\\s*)?(?:function)\\s+(\\S+)\\s*\\((.*)\\)\\s*\\{/g
					var match;
					while((match = matchPrivateFn.exec(constructorBody)) != null){
						//if it's a this. = field, ignore
						if(getType(match[1]) == 'string'){
							if(match[1].match('this')!=null)continue;
						}

						var field = match[2];
						//find closing brace
						var startIndex = match.index;
						var endIndex = findClosingBrace(constructorBody, startIndex + match[0].length);
						var fnStr = constructorBody.substring(startIndex, endIndex);

						//save
						var store = classDefinitions.instanceFunctionsPrivate;
						store[field] = {
							params: getParamNames(fnStr),
							code: getFunctionBody(fnStr),
						};
					}

				}

				//Instance Fields
				//there are multiple ways of going about this.
				if(!isEmpty(classObj.prototype)){
					/*
					/*  Extract from prototype, fields defined in constructor with this are missed, however, since you cannot define private fields in the prototype, this method is fairly safe
					*/
					extractInstanceFields(classObj.prototype);
				}else{
					// try{
					//	/*
					//	/*  Extract from instance, create an instance and extract fields. Hope it doesn't die with default parameters
					//	*/
					//	var classInstance = new classObj();
					//	extractInstanceFields(classInstance);
					// }catch(e){
					// 	printError(e);
					// 	printError('Cannot create instance of THREE.'+className+' either the js environment is incomplete or the constructor is denying creation');
					// 	process.exit(1);
					// }
				}

				//From constructor, duplicates will overwrite if the new version has better typing information
				extractConstructorInstanceFields(classDefinitions.constructor.code);	
			}

			var output = JSON.stringify(classDefinitions);
			if(output.length>=65536){
				var outPath = './out.json';
				fs.writeFileSync(outPath, output, {encoding:'utf-8'});
				print('FILE:'+outPath);
			}else{
				print(output);
			}
		";
		js+=compileDetails;

		//create a nodejs process
		var p:Process = new Process("node", ["-e", js]);

		//run
		if(p.exitCode()!=0){
			throw "nodejs couldn't evaluate javascript\n"+p.stderr.readAll().toString();
			return null;
		}
		
		var result = p.stdout.readAll().toString();
		p.close();

		var definitonsData = '';

		if(StringTools.startsWith(result, "FILE:")){
			var r : EReg = ~/^FILE:(.*)$/i;
			r.match(result);
			var definitionsPath = r.matched(1);
			definitonsData = sys.io.File.getContent(definitionsPath);
			sys.FileSystem.deleteFile(definitionsPath);
		}else{
			definitonsData = StringTools.trim(result); 
		}

		return haxe.Json.parse(definitonsData);
	}

	static public function main(){
		new Main();
	}
}