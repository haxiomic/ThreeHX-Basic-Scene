/* TODO
would be better to load build/three.js and extract from there
*/

package;
import Config;

import sys.io.Process;

class Main{
	public function new(){
		if(Sys.args().length<=0){usage();Sys.exit(2);}

		var classID = Sys.args()[0];

		try{

			var jsFilePath:String = getFilePath(classID);
			var fileContent = sys.io.File.getContent(jsFilePath);

			getFunctions(fileContent);

		}catch(msg:String){
			printError(msg);
			Sys.exit(66);
		}

	}

	function usage(){
		print("Analyzer\n  Usage : neko analyzer.n <package>.<class>");
	}

	function print(v:Dynamic){
		Sys.println(v.toString());
	}

	function printError(v:Dynamic){
		Sys.println(RED+BOLD+"Error"+RESET+": "+v.toString()+RESET);
	}

	//Terminal colors
	static var RED_CODE = 1;
	static var BLUE_CODE = 4;
	static var RED = '\033[38;5;'+RED_CODE+'m';
	static var BLUE = '\033[38;5;'+BLUE_CODE+'m';
	static var BOLD = '\033[1m';
	static var RESET = '\033[m';

	//javascript three.js 

	function getFilePath(classID:String):String{
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

	function getFunctions(fileContent:String):Array<String>{
		// /(\w+)\s*:\s*function\s*\((.*)\)/igm // name: function (...)

		// [a-zA-Z\.0-9_$]+\.prototype\s*=\s*\{ // THREE.Vector3.prototype = {
		
		var setup = "THREE={};self={};";
		var main = "
			//try{
				"+fileContent+"
			//}
			//catch(e){}
		";
		var log = ";
			//console.log(THREE);
			for(var prop in THREE){
				var obj = THREE[prop];
				console.log(prop + ' = ' + obj.toString());
				if(obj.prototype !== undefined){
					console.log(obj.prototype);
				}
			}

			function printTitle(v){
				process.stdout.write('"+BOLD+BLUE+"'+v+'"+RESET+"\\n');
			}
		";


		//Execute js with node
		var p:Process = new Process("node", ["-e",setup+main+log]);
		if(p.exitCode()!=0){
			throw "nodejs couldn't evaluate javascript\n"+p.stderr.readAll().toString();
			return null;
		}
		print(p.stdout.readAll().toString());

		return null;
	}

	static public function main(){
		new Main();
	}
}