//R66
/*
Changed from Math to TMath to avoid conflict
*/
package three.math;

class TMath{
	public static var PI2:Float = Math.PI*2;

	static var chars:Array<String> = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
	public static inline function generateUUID():String{
		var uuid = new Array<String>();
		var rnd:Int = 0;
		var r:Int;

		for (i in 0...36) {

			if ( i == 8 || i == 13 || i == 18 || i == 23 ) {
		
				uuid[ i ] = '-';
		
			} else if ( i == 14 ) {
		
				uuid[ i ] = '4';
		
			} else {
		
				if (rnd <= 0x02) rnd = 0x2000000 + Std.int((Math.random()*0x1000000))|0;
				r = rnd & 0xf;
				rnd = rnd >> 4;
				uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];

			}
		}
		
		return uuid.join('');
	}

	// Clamp value to range <a, b>
	public static inline function clamp( x:Float, a:Float, b:Float ):Float{
		return ( x < a ) ? a : ( ( x > b ) ? b : x );
	}

	// Clamp value to range <a, inf)
	public static inline function clampBottom( x:Float, a:Float ):Float{
		return x < a ? a : x;
	}

	// Linear mapping from range <a1, a2> to range <b1, b2>
	public static inline function mapLinear( x:Float, a1:Float, a2:Float, b1:Float, b2:Float ):Float{
		return b1 + ( x - a1 ) * ( b2 - b1 ) / ( a2 - a1 );
	}

	// http://en.wikipedia.org/wiki/Smoothstep
	public static inline function smoothstep( x:Float, min:Float, max:Float ):Float{
		if ( x <= min ) return 0;
		if ( x >= max ) return 1;

		x = ( x - min )/( max - min );

		return x*x*(3 - 2*x);
	}

	public static inline function smootherstep( x:Float, min:Float, max:Float ):Float{
		if ( x <= min ) return 0;
		if ( x >= max ) return 1;

		x = ( x - min )/( max - min );

		return x*x*x*(x*(x*6 - 15) + 10);
	}

	// Random float from <0, 1> with 16 bits of randomness
	// (standard Math.random() creates repetitive patterns when applied over larger space)
	public static inline function random16() {
		return ( 65280 * Math.random() + 255 * Math.random() ) / 65535;
	}

	// Random integer from <low, high> interval
	public static inline function randInt( low:Float, high:Float ):Float{
		return low + Math.floor( Math.random() * ( high - low + 1 ) );
	}

	// Random float from <low, high> interval
	public static inline function randFloat( low:Float, high:Float ):Float{
		return low + Math.random() * ( high - low );
	}

	// Random float from <-range/2, range/2> interval
	public static inline function randFloatSpread( range:Float ):Float{
		return range * ( 0.5 - Math.random() );
	}

	public static inline function sign( x:Float ):Float{
		return ( x < 0 ) ? - 1 : ( x > 0 ) ? 1 : 0;
	}

	static var degreeToRadiansFactor:Float = Math.PI / 180;
	public static inline function degToRad(degrees:Float):Float{
		return degrees * degreeToRadiansFactor;
	}

	static var radianToDegreesFactor:Float = 180 / Math.PI;
	public static inline function radToDeg(radians:Float):Float{
		return radians * radianToDegreesFactor;
	}

	public static inline function isPowerOfTwo( value:Int ):Bool{
		return ( value & ( value - 1 ) ) == 0 && value != 0;
	}
}