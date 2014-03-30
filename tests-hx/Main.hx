package;

import three.THREE;
import three.math.TMath;
import three.math.Vector2;

class Main{

	public function new(){
		trace("generateUUID: "+TMath.generateUUID());

		var v2:Vector2 = new Vector2(23,47);
		v2.set(55,66);
		var a:Vector2 = new Vector2(5,4);
		v2.add(a);
		trace(v2.x);
	}

	static public function main(){new Main();}
}