//R66	
package three.math;

@:noCompletion
@:arrayAccess
abstract Vector2Data(FloatArray) to FloatArray from FloatArray{
	public inline function new(x:Float = 0, y:Float = 0){
		this = new FloatArray(2);
		this[0] = x;
		this[1] = y;
	}
	public var x(get,set):Float;
	public var y(get,set):Float;
	private inline function get_x():Float return this[0];
	private inline function get_y():Float return this[1];
	private inline function set_x(val:Float):Float return this[0] = val;
	private inline function set_y(val:Float):Float return this[1] = val;
}

@:arrayAccess
abstract Vector2(Vector2Data) to Vector2Data from Vector2Data
{
	public inline function new(x:Float = 0, y:Float = 0){
		this = new Vector2Data(x,y);
	}
	public var x(get,set):Float;
	public var y(get,set):Float;
	private inline function get_x():Float return this.x;
	private inline function get_y():Float return this.y;
	private inline function set_x(val:Float):Float return this.x = val;
	private inline function set_y(val:Float):Float return this.y = val;

	public inline function toString() return "Vector2("+x+", "+y+")";

	// three.js methods

	public inline function set(x:Float, y:Float):Vector2{
		this[0] = x;
		this[1] = y;
		return this;
	}


	public inline function setX( x:Float ):Vector2 {
		this[0] = x;
		return this;
	}


	public inline function setY( y:Float ):Vector2 {
		this[1] = y;
		return this;
	}


	public inline function setComponent( index:Int, value:Float ):Void {
		switch ( index ) {
			case 0: this[0] = value;
			case 1: this[1] = value;
		}
	}

	
	public inline function getComponent( index:Int ):Float {
		switch ( index ) {
			case 0: return this[0];
			case 1: return this[1];
		}
		return 0;
	}


	public inline function copy( v:Vector2 ):Vector2 {
		this[0] = v.x;
		this[1] = v.y;
		return this;
	}


	public inline function add( v:Vector2 ):Vector2{
		this[0] += v.x;
		this[1] += v.y;
		return this;
	}


	public inline function addVectors( a:Vector2, b:Vector2 ):Vector2 {
		this[0] = a.x + b.x;
		this[1] = a.y + b.y;
		return this;
	}


	public inline function addScalar( s:Float ):Vector2 {
		this[0] += s;
		this[1] += s;
		return this;
	}


	public inline function sub( v:Vector2 ):Vector2 {
		this[0] -= v.x;
		this[1] -= v.y;
		return this;
	}


	public inline function subVectors( a:Vector2, b:Vector2 ):Vector2 {
		this[0] = a.x - b.x;
		this[1] = a.y - b.y;
		return this;
	}


	public inline function multiplyScalar( s:Float ) {
		this[0] *= s;
		this[1] *= s;
		return this;
	}


	public inline function divideScalar (s:Float) : Vector2
	{
		if (s == 0) return set(0, 0);
		x /= s;
		y /= s;
		return this;
	}


	public inline function min (v:Vector2) : Vector2
	{
		if (x > v.x) x = v.x;
		if (y > v.y) y = v.y;
		return this;
	}
	
	
	public inline function max (v:Vector2) : Vector2
	{
		if (x < v.x) x = v.x;
		if (y < v.y) y = v.y;
		return this;
	}
	
	
	public inline function clamp (min:Vector2, max:Vector2) : Vector2
	{
		if (x < min.x) x = min.x else if (x > max.x) x = max.x;
		if (y < min.y) y = min.y else if (y > max.y) y = max.y;
		return this;
	}

	public inline function negate () : Vector2
	{
		return multiplyScalar( -1);
	}
	
	
	public inline function dot (v:Vector2) : Float
	{
		return x * v.x + y * v.y;
	}
	
	
	public inline function lengthSq () : Float
	{
		return x * x + y * y;
	}
	
	
	public inline function length () : Float
	{
		return Math.sqrt(x * x + y * y);
	}
	
	
	public inline function normalize () : Vector2
	{
		return divideScalar(length());
	}
	
	
	public inline function distanceTo (v:Vector2) : Float
	{
		return Math.sqrt(distanceToSquared(v));
	}
	
	
	public inline function distanceToSquared (v:Vector2) : Float
	{
		var dx = x - v.x, dy = y - v.y;
		return dx * dx + dy * dy;
	}
	
	
	public inline function setLength (l:Float) : Vector2
	{
		var oldLength = length();
		if (oldLength != 0 && l != oldLength) multiplyScalar(l / oldLength);
		return this;
	}
	
	
	public inline function lerp (v:Vector2, alpha:Float) : Vector2
	{
		x += (v.x - x) * alpha;
		y += (v.y - y) * alpha;
		return this;
	}


	public inline function equals (v:Vector2) : Bool
	{
		return ( ( v.x == x ) && ( v.y == y ) );
	}
	
	
	public inline function fromArray (a:Array<Float>) : Vector2
	{
		x = a[0];
		y = a[1];
		return this;
	}
	
	
	public inline function toArray () : Array<Float>
	{
		var a = new Array<Float>();
		a.push(x);
		a.push(y);
		return a;
	}


	public inline function clone () : Vector2
	{
		return new Vector2(x, y);
	}
}