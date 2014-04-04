package ;

import Config;

class Log 
{
	static public function print(v:Dynamic){
		Sys.println(v);
	}

	static public function printTitle(v:Dynamic){
		Sys.println(BLUE+BOLD+'\t-- '+v+' --'+RESET+'\n');
	}

	static public function printError(v:Dynamic){
		Sys.println(RED+BOLD+"Error"+RESET+": "+v+RESET);
	}

	static public var RED_CODE = 1;
	static public var BLUE_CODE = 4;
	static public var RED = '\033[38;5;'+RED_CODE+'m';
	static public var BLUE = '\033[38;5;'+BLUE_CODE+'m';
	static public var BOLD = '\033[1m';
	static public var RESET = '\033[m';
}