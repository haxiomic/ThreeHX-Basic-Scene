package three.math;
//r66
/**
 * @author mrdoob / http://mrdoob.com/
 * @author WestLangley / http://github.com/WestLangley
 * @author bhouston / http://exocortex.com
 */

class Euler{
	public function new(x:Float = 0, y:Float = 0, z:Float = 0, order:String = DefaultOrder){
		v3 = new Vector3(x,y,z);
		this.order = order;
	}

	private var v3:Vector3;
	private var quaternion:Quaternion = null;

	public var order(default, set):String;
	public var x(get,set):Float;
	public var y(get,set):Float;
	public var z(get,set):Float;
	private inline function get_x():Float return v3.x;
	private inline function get_y():Float return v3.y;
	private inline function get_z():Float return v3.z;
	private inline function set_x(val:Float):Float{ v3.x = val; this._updateQuaternion(); return v3.x; }
	private inline function set_y(val:Float):Float{ v3.y = val; this._updateQuaternion(); return v3.y; }
	private inline function set_z(val:Float):Float{ v3.z = val; this._updateQuaternion(); return v3.z; }
	private inline function set_order(val:String):String{ this.order = val; this._updateQuaternion(); return this.order; }

	static public var RotationOrders:Array<String> = [ 'XYZ', 'YZX', 'ZXY', 'XZY', 'YXZ', 'ZYX' ];
	static public inline var DefaultOrder = 'XYZ';

	public function _updateQuaternion(){
		if(this.quaternion != null){
			this.quaternion.setFromEuler(this, false);
		}
	}


	public function set(x:Float, y:Float, z:Float, order:String = DefaultOrder):Euler {
		this.x = x;
		this.y = y;
		this.z = z;
		this.order = order;

		this._updateQuaternion();
		return this;
	}
	public function copy(euler:Euler):Euler {
		this.x = euler.x;
		this.y = euler.y;
		this.z = euler.z;
		this.order = euler.order;

		this._updateQuaternion();

		return this;
	}

	public function _clamp(x:Float):Float {
			return Math.min(Math.max(x, -1), 1);
	}

	public function setFromRotationMatrix(m:Matrix3, order:Int = 0):Euler {

		var te = m.elements;
		var m11 = te[0], m12 = te[4], m13 = te[8];
		var m21 = te[1], m22 = te[5], m23 = te[9];
		var m31 = te[2], m32 = te[6], m33 = te[10];

		order = order == 0 ? this.order : order;

		if (order == "XYZ") {
			this.y = Math.asin(_clamp(m13));
			if (Math.abs(m13) < 0.99999) {
				this.x = Math.atan2(-m23, m33);
				this.z = Math.atan2(-m12, m11);
			} else {
				this.x = Math.atan2(m32, m22);
				this.z = 0;
			}

		} else if (order == "YXZ") {
			this.x = Math.asin(-_clamp(m23));
			if (Math.abs(m23) < 0.99999) {
				this.y = Math.atan2(m13, m33);
				this.z = Math.atan2(m21, m22);
			} else {
				this.y = Math.atan2(-m31, m11);
				this.z = 0;
			}
		} else if (order == "ZXY") {
			this.x = Math.asin(_clamp(m32));
			if (Math.abs(m32) < 0.99999) {
				this.y = Math.atan2(-m31, m33);
				this.z = Math.atan2(-m12, m22);
			} else {
				this.y = 0;
				this.z = Math.atan2(m21, m11);
			}
		} else if (order == "ZYX") {
			this.y = Math.asin(-_clamp(m31));

			if (Math.abs(m31) < 0.99999) {
				this.x = Math.atan2(m32, m33);
				this.z = Math.atan2(m21, m11);
			} else {
				this.x = 0;
				this.z = Math.atan2(-m12, m22);
			}
		} else if (order == "YZX") {
			this.z = Math.asin(_clamp(m21));
			if (Math.abs(m21) < 0.99999) {
				this.x = Math.atan2(-m23, m22);
				this.y = Math.atan2(-m31, m11);
			} else {
				this.x = 0;
				this.y = Math.atan2(m13, m33);
			}
		} else if (order == "XZY") {
			this.z = Math.asin(-_clamp(m12));
			if (Math.abs(m12) < 0.99999) {
				this.x = Math.atan2(m32, m22);
				this.y = Math.atan2(m13, m11);
			} else {
				this.x = Math.atan2(-m23, m33);
				this.y = 0;
			}
		} else {
			trace("WARNING: Euler.setFromRotationMatrix() given unsupported order: " + order);
		}

		this.order = order;

		this._updateQuaternion();

		return this;
	}

	public function setFromQuaternion(q:Quaternion, order:Int = 0, update:Bool = true):Euler {
		// q is assumed to be normalized
		// clamp, to handle numerical problems


		// http://www.mathworks.com/matlabcentral/fileexchange/20696-function-to-convert-between-dcm-euler-angles-quaternions-and-euler-vectors/content/SpinCalc.m

		var sqx = q.x * q.x;
		var sqy = q.y * q.y;
		var sqz = q.z * q.z;
		var sqw = q.w * q.w;

		order = order == 0 ? this.order : order;

		if (order == "XYZ") {
			this.x = Math.atan2(2 * (q.x * q.w - q.y * q.z ), (sqw - sqx - sqy + sqz));
			this.y = Math.asin(_clamp(2 * (q.x * q.z + q.y * q.w)));
			this.z = Math.atan2(2 * (q.z * q.w - q.x * q.y), (sqw + sqx - sqy - sqz));
		} else if (order == "YXZ") {
			this.x = Math.asin(_clamp(2 * (q.x * q.w - q.y * q.z)));
			this.y = Math.atan2(2 * (q.x * q.z + q.y * q.w), (sqw - sqx - sqy + sqz));
			this.z = Math.atan2(2 * (q.x * q.y + q.z * q.w), (sqw - sqx + sqy - sqz));
		} else if (order == "ZXY") {
			this.x = Math.asin(_clamp(2 * (q.x * q.w + q.y * q.z)));
			this.y = Math.atan2(2 * (q.y * q.w - q.z * q.x), (sqw - sqx - sqy + sqz));
			this.z = Math.atan2(2 * (q.z * q.w - q.x * q.y), (sqw - sqx + sqy - sqz));
		} else if (order == "ZYX") {
			this.x = Math.atan2(2 * (q.x * q.w + q.z * q.y), (sqw - sqx - sqy + sqz));
			this.y = Math.asin(_clamp(2 * (q.y * q.w - q.x * q.z)));
			this.z = Math.atan2(2 * (q.x * q.y + q.z * q.w), (sqw + sqx - sqy - sqz));
		} else if (order == "YZX") {
			this.x = Math.atan2(2 * (q.x * q.w - q.z * q.y), (sqw - sqx + sqy - sqz));
			this.y = Math.atan2(2 * (q.y * q.w - q.x * q.z), (sqw + sqx - sqy - sqz));
			this.z = Math.asin(_clamp(2 * (q.x * q.y + q.z * q.w)));
		} else if (order == "XZY") {
			this.x = Math.atan2(2 * (q.x * q.w + q.y * q.z), (sqw - sqx + sqy - sqz));
			this.y = Math.atan2(2 * (q.x * q.z + q.y * q.w), (sqw + sqx - sqy - sqz));
			this.z = Math.asin(_clamp(2 * (q.z * q.w - q.x * q.y)));
		} else {
			trace("WARNING: Euler.setFromQuaternion() given unsupported order: " + order);
		}

		this.order = order;

		if (update) this._updateQuaternion();

		return this;
	}

	public function reorder(newOrder:Int) {
		// WARNING: this discards revolution information -bhouston
		var q = new Quaternion();
		q.setFromEuler(this, false);
		setFromQuaternion(q, newOrder);
	}

	public function fromArray(array:Array<Float>):Euler {
		this.x = array[0];
		this.y = array[1];
		this.z = array[2];
		if (array.length > 3) this.order = Std.int(array[3]);

		this._updateQuaternion();

		return this;
	}
	public function toArray():Array<Float> {
		return [this.x, this.y, this.z, this.order];
	}

	public function equals(euler:Euler):Bool {
		return (euler.x == this.x) && (euler.y == this.y) && (euler.z == this.z) && (euler.order == this.order);
	}

	public function clone():Euler {
		return new Euler(this.x, this.y, this.z, this.order);
	}
}