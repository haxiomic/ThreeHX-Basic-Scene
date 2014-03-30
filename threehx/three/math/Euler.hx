package three.math;

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
	private inline function set_x(val:Float):Float{ v3.x = val; this.updateQuaternion(); return v3.x; }
	private inline function set_y(val:Float):Float{ v3.y = val; this.updateQuaternion(); return v3.y; }
	private inline function set_z(val:Float):Float{ v3.z = val; this.updateQuaternion(); return v3.z; }
	private inline function set_order(val:String):String{ this.order = val; this.updateQuaternion(); return this.order; }

	static public var RotationOrders:Array<String> = [ 'XYZ', 'YZX', 'ZXY', 'XZY', 'YXZ', 'ZYX' ];
	static public inline var DefaultOrder = 'XYZ';

	// three.js methods

	public function updateQuaternion(){
		if(this.quaternion != null){
			this.quaternion.setFromEuler(this, false);
		}
	}


	public function set(x:Float, y:Float, z:Float, order:String = DefaultOrder) {
		this.x = x;
		this.y = y;
		this.z = z;
		this.order = order;

		this.updateQuaternion();
		return this;
	}
	//copy: function ( euler ) {
	//setFromRotationMatrix: function ( m, order ) {
	//setFromQuaternion: function ( q, order, update ) {
	//reorder: function () {
	//fromArray: function ( array ) {
	//toArray: function () {
	//equals: function ( euler ) {
	//clone: function () {
}