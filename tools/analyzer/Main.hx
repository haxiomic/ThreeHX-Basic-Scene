/* TODO
- Instead of fancy runtime javascript analysis, just use typescript definitions!

- Should search for class names rather than explicit
- Issues with WebGLRenderer! Code works but terminal output JSON too large! Limit of 2^16 -> 65536 characters
- extraceDefinitions() should handle private variables
- extractDefinitions() should handle multiple classes
- extractDefinitions() should handle THREE class independently 
- would be great to extract comments. Maybe a jsDocs tool is best

- Need to do the same for haxe. Haxe completion sever should do the trick
*/

package;
import Config;

class Main{
	public function new(){
		if(Sys.args().length<=0){usage();Sys.exit(2);}

		var classID = Sys.args()[0];
		//Should process and search className if file not first found
		printTitle(classID);
		try{

			//var jsFilePath:String = Javascript.filePathFromClassID(classID);
			var definitions = Javascript.extractDefinitions(classID);

			/*	Format	*/
			/* var classDefinitions = {};
			/* classDefinitions.constructor = {{name, params, code}, ...};
			/* classDefinitions.staticVariablesPublic = {fieldname->{value, type}, ...};
			/* classDefinitions.staticFunctionsPublic = {fieldname->{params, code}, ...};
			/* ...
			*/

			//For example
			printTitle('Public Functions');
			for (field in Reflect.fields(definitions.instanceFunctionsPublic)){
				print(field+' : '+Reflect.field(definitions.instanceFunctionsPublic, field).params);
			}print('\n');

			printTitle('Private Functions');
			for (field in Reflect.fields(definitions.instanceFunctionsPrivate)){
				print(field+' : '+Reflect.field(definitions.instanceFunctionsPrivate, field).params);
			}print('\n');

			printTitle('Static Functions');
			for (field in Reflect.fields(definitions.staticFunctionsPublic)){
				print(field+' : '+Reflect.field(definitions.staticFunctionsPublic, field).params);
			}print('\n');

			printTitle('Static Variables');
			for (field in Reflect.fields(definitions.staticVariablesPublic)){
				print(field+' : '+Reflect.field(definitions.staticVariablesPublic, field).type);
			}print('\n');

		}catch(msg:String){

			printError(msg);
			Sys.exit(66);

		}
	}

	static public function main(){
		new Main();
	}

	static public function usage(){
		print("Analyzer\n  Usage : neko analyzer.n <package>.<class>");
	}

	static var print = Log.print;
	static var printTitle = Log.printTitle;
	static var printError = Log.printError;
	static var RED = Log.RED;
	static var BLUE = Log.BLUE;
	static var BOLD = Log.BOLD;
	static var RESET = Log.RESET;
}