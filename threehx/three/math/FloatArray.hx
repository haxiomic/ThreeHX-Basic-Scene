package three.math;

#if js
typedef FloatArrayBase = js.html.Float32Array;
#else
typedef FloatArrayBase = Array<Float>;
#end

@:arrayAccess
abstract FloatArray(FloatArrayBase) to FloatArrayBase from FloatArrayBase{
	public inline function new(length:Int){
		#if js
		this = new FloatArrayBase(length);
		#else
		this = new FloatArrayBase();
		#end
	}
}