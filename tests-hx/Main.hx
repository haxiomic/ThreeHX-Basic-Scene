package;

import three.math.MathUtils;
import three.math.Matrix3;
import three.math.Vector2;
import three.math.Vector3;
import three.THREE;

import three.math.Euler;

class Main{

	@:noStack
	public function new(){
		trace("generateUUID: "+MathUtils.generateUUID());

		var v2:Vector2 = new Vector2(23,47);
		v2.set(55,66);
		var a:Vector2 = new Vector2(5,4);
		v2.add(a);
		v2.multiplyScalar(12);

		if(v2.x == (55+5)*12 && v2.y == (66+4)*12) trace(v2+" - PASSED");
		else trace(v2+" - FAILED");

		var v3:Vector3 = new Vector3(23,47,33);
		var b:Vector3 = new Vector3(34,536,13); 
		v3.add(b);
		v3.multiplyScalar(12);

		if(v3.x == (23+34)*12 && v3.y == (47+536)*12 && v3.z == (33+13)*12) trace(v3+" - PASSED");
		else trace(v3+" - FAILED");

		var m3 = new Matrix3();
		trace(m3);

		//trace(new Matrix4());
		trace(Euler.DefaultOrder);
	}

	static public function main(){new Main();}
}