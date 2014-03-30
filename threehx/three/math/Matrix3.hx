//R66
package three.math;

@:noCompletion
typedef Matrix3Data = FloatArray;

@:arrayAccess
abstract Matrix3(Matrix3Data) to Matrix3Data from Matrix3Data{
	public function new (
		n11:Float = 1, n12:Float = 0, n13:Float = 0,
		n21:Float = 0, n22:Float = 1, n23:Float = 0,
		n31:Float = 0, n32:Float = 0, n33:Float = 1){

		this = new Matrix3Data(9);
		set(n11, n12, n13,
			n21, n22, n23,
			n31, n32, n33);
	}

	public var elements(get,set):Matrix3;//#! access to elements can be phased out, since elements == matrix3
	private inline function get_elements():Matrix3 return this;
	private inline function set_elements(v:Matrix3):Matrix3 return this = v;

	public inline function toString() return "Matrix3:\n("+this[0]+", "+this[1]+", "+this[2]+",\n"+
											           " "+this[3]+", "+this[4]+", "+this[5]+",\n"+
											           " "+this[6]+", "+this[7]+", "+this[8]+")";

	// three.js methods

	public function set (
		n11:Float = 1, n12:Float = 0, n13:Float = 0,
		n21:Float = 0, n22:Float = 1, n23:Float = 0,
		n31:Float = 0, n32:Float = 0, n33:Float = 1) : Matrix3{

		this[0] = n11; this[3] = n12; this[6] = n13;
		this[1] = n21; this[4] = n22; this[7] = n23;
		this[2] = n31; this[5] = n32; this[8] = n33;
		return this;
	}


	public function identity () :Matrix3{
		set(
			1, 0, 0,
			0, 1, 0,
			0, 0, 1
		);
		return this;
	}


	public function copy (m:Matrix3) : Matrix3{
		set(
			m[0], m[3], m[6],
			m[1], m[4], m[7],
			m[2], m[5], m[8]
		);
		return this;
	}


	public function multiplyVector3 (v:Vector3) : Vector3{
		return v.applyMatrix3(this);
	}


	public function multiplyVector3Array (a:Array<Float>) : Array<Float>{
		var v1 = new Vector3();
		var i = 0, il = a.length;
		while (i < il)
		{
			v1.x = a[i];
			v1.y = a[i + 1];
			v1.z = a[i + 2];
			v1.applyMatrix3(this);
			
			a[i] = v1.x;
			a[i + 1] = v1.y;
			a[i + 2] = v1.z;
			i++;
		}
		return a;
	}


	public function multiplyScalar (s:Float) : Matrix3{
		this[0] *= s; this[3] *= s; this[6] *= s;
		this[1] *= s; this[4] *= s; this[7] *= s;
		this[2] *= s; this[5] *= s; this[8] *= s;
		return this;
	}


	public function determinant () : Float{
		var a = this[0], b = this[1], c = this[2];
		var d = this[3], e = this[4], f = this[5];
		var g = this[6], h = this[7], i = this[8];
		return a * e * i - a * f * h - b * d * i + b * f * g + c * d * h - c * e * g;
	}


	public function getInverse (m:Matrix4) : Matrix3{
		this[0] =  m[10] * m[5] - m[6] * m[9];
		this[1] = -m[10] * m[1] + m[2] * m[9];
		this[2] =  m[6]  * m[1] - m[2] * m[5];
		this[3] = -m[10] * m[4] + m[6] * m[8];
		this[4] =  m[10] * m[0] - m[2] * m[8];
		this[5] = -m[6]  * m[0] + m[2] * m[4];
		this[6] =  m[9]  * m[4] - m[5] * m[8];
		this[7] = -m[9]  * m[0] + m[1] * m[8];
		this[8] =  m[5]  * m[0] - m[1] * m[4];
		
		var det = m[0] * this[0] + m[1] * this[3] + m[2] * this[6];
		
		if (det == 0)
		{
			trace('Matrix3.getInverse: cant invert matrix, determinant is 0');
			identity();
			return this;
		}
		
		multiplyScalar(1.0 / det);
		return this;
	}


	public function transpose () : Matrix3{
		var tmp:Float;
		tmp = this[1]; this[1] = this[3]; this[3] = tmp;
		tmp = this[2]; this[2] = this[6]; this[6] = tmp;
		tmp = this[5]; this[5] = this[7]; this[7] = tmp;
		return this;
	}
	
	
	public function getNormalMatrix (m:Matrix4) : Matrix3{
		return getInverse(m).transpose();
	}
	
	
	public function transposeIntoArray (r:Array<Float>) : Matrix3{
		r[0] = this[0];
		r[1] = this[3];
		r[2] = this[6];
		r[3] = this[1];
		r[4] = this[4];
		r[5] = this[7];
		r[6] = this[2];
		r[7] = this[5];
		r[8] = this[8];
		return this;
	}


	public function clone () : Matrix3{
		return new Matrix3(
			this[0], this[3], this[6],
			this[1], this[4], this[7],
			this[2], this[5], this[8]
		);
	}
}