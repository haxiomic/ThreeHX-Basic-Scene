(function () { "use strict";
var Main = function() {
	console.log("generateUUID: " + three.math.TMath.generateUUID());
	var v2;
	var this1;
	var data = new Float32Array(2);
	this1 = data;
	this1[0] = 23;
	this1[1] = 47;
	v2 = this1;
	{
		v2[0] = 55;
		v2[1] = 66;
		v2;
	}
	var a;
	var this2;
	var data1 = new Float32Array(2);
	this2 = data1;
	this2[0] = 5;
	this2[1] = 4;
	a = this2;
	{
		var _g = v2;
		_g[0] = _g[0] + a[0];
		var _g1 = v2;
		_g1[1] = _g1[1] + a[1];
		v2;
	}
	console.log(v2[0]);
};
Main.__name__ = true;
Main.main = function() {
	new Main();
};
Math.__name__ = true;
var Std = function() { };
Std.__name__ = true;
Std.string = function(s) {
	return js.Boot.__string_rec(s,"");
};
Std["int"] = function(x) {
	return x | 0;
};
var StringBuf = function() {
	this.b = "";
};
StringBuf.__name__ = true;
StringBuf.prototype = {
	add: function(x) {
		this.b += Std.string(x);
	}
};
var StringTools = function() { };
StringTools.__name__ = true;
StringTools.rpad = function(s,c,l) {
	if(c.length <= 0) return s;
	while(s.length < l) s = s + c;
	return s;
};
var js = {};
js.Boot = function() { };
js.Boot.__name__ = true;
js.Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) t = "object";
	switch(t) {
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) return o[0];
				var str = o[0] + "(";
				s += "\t";
				var _g1 = 2;
				var _g = o.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(i != 2) str += "," + js.Boot.__string_rec(o[i],s); else str += js.Boot.__string_rec(o[i],s);
				}
				return str + ")";
			}
			var l = o.length;
			var i1;
			var str1 = "[";
			s += "\t";
			var _g2 = 0;
			while(_g2 < l) {
				var i2 = _g2++;
				str1 += (i2 > 0?",":"") + js.Boot.__string_rec(o[i2],s);
			}
			str1 += "]";
			return str1;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString) {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str2 = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str2.length != 2) str2 += ", \n";
		str2 += s + k + " : " + js.Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str2 += "\n" + s + "}";
		return str2;
	case "function":
		return "<function>";
	case "string":
		return o;
	default:
		return String(o);
	}
};
var taurine = {};
taurine.math = {};
taurine.math._Degrees = {};
taurine.math._Degrees.Degrees_Impl_ = function() { };
taurine.math._Degrees.Degrees_Impl_.__name__ = true;
taurine.math._Degrees.Degrees_Impl_._new = function(f) {
	return f;
};
taurine.math._Degrees.Degrees_Impl_.toFloat = function(this1) {
	return this1;
};
taurine.math._Degrees.Degrees_Impl_.toRad = function(this1) {
	return this1 * 0.0174532925199432955;
};
taurine.math.FastMath = function() { };
taurine.math.FastMath.__name__ = true;
taurine.math.FastMath.invsqrt = function(v) {
	return 1 / Math.sqrt(v);
};
taurine.math.FastMath.isNaN = function(v) {
	return v != v;
};
taurine.math.FastMath.isFinite = function(v) {
	return v * 2 != v || Math.isFinite(v);
};
taurine.math.FastMath.abs = function(f) {
	if(f < 0) return -f; else return f;
};
taurine.math.FastMath.sqrt = function(v) {
	return Math.sqrt(v);
};
taurine.math.FastMath.sin = function(v) {
	return Math.sin(v);
};
taurine.math.FastMath.cos = function(v) {
	return Math.cos(v);
};
taurine.math.FastMath.acos = function(v) {
	return Math.acos(v);
};
taurine.math.MacroMath = function() { };
taurine.math.MacroMath.__name__ = true;
taurine.math._Mat2D = {};
taurine.math._Mat2D.Mat2D_Impl_ = function() { };
taurine.math._Mat2D.Mat2D_Impl_.__name__ = true;
taurine.math._Mat2D.Mat2D_Impl_.clone = function(this1) {
	var ret;
	var data = new Float32Array(6);
	ret = data;
	var _g = 0;
	while(_g < 6) {
		var i = _g++;
		ret[i] = this1[i];
	}
	return ret;
};
taurine.math._Mat2D.Mat2D_Impl_.copyTo = function(this1,dest) {
	var _g = 0;
	while(_g < 6) {
		var i = _g++;
		dest[i] = this1[i];
	}
	return dest;
};
taurine.math._Mat2D.Mat2D_Impl_.identity = function(this1) {
	var val = this1[3] = 1;
	this1[0] = val;
	var val1;
	var val2;
	var val3 = this1[5] = 0;
	val2 = this1[4] = val3;
	val1 = this1[2] = val2;
	this1[1] = val1;
	return this1;
};
taurine.math._Mat2D.Mat2D_Impl_.toString = function(this1) {
	var buf = new StringBuf();
	var support = [];
	var maxn = 0;
	buf.b += "mat2d(";
	var _g = 0;
	while(_g < 6) {
		var i = _g++;
		var s = support[i] = this1[i] + "";
		if(s.length > maxn) maxn = s.length;
	}
	var fst = true;
	var _g1 = 0;
	while(_g1 < 3) {
		var j = _g1++;
		buf.b += "\n      ";
		var _g11 = 0;
		while(_g11 < 2) {
			var k = _g11++;
			buf.add(StringTools.rpad(support[j * 2 + k]," ",maxn));
			buf.b += ", ";
		}
		if(j == 2) buf.b += "1"; else buf.b += "0";
	}
	buf.b += ")";
	return buf.b;
};
taurine.math._Mat2D.Mat2D_Impl_.eq = function(this1,b) {
	if(this1 == b) return true; else if(this1 == null || taurine.math._Mat2D.Mat2D_Impl_.eq(b,null)) return false;
	var _g = 0;
	while(_g < 6) {
		var i = _g++;
		var v = this1[i] - b[i];
		if(v != 0 && (v < 0 && v < -1e-06) || v > 0.000001) return false;
	}
	return true;
};
taurine.math._Mat2D.Mat2D_Impl_.getRaw = function(this1,idx) {
	return this1[idx];
};
taurine.math._Mat2D.Mat2D_Impl_.setRaw = function(this1,idx,v) {
	return this1[idx] = v;
};
taurine.math._Mat2DArray = {};
taurine.math._Mat2DArray.Mat2DArray_Impl_ = function() { };
taurine.math._Mat2DArray.Mat2DArray_Impl_.__name__ = true;
taurine.math._Mat2DArray.Mat2DArray_Impl_.copy = function(this1) {
	var len = this1.length;
	var ret;
	var this2;
	var data = new Float32Array((len >>> 3 | 0) << 3);
	this2 = data;
	ret = this2;
	ret.set(this1.subarray(0,len),0);
	return ret;
};
taurine.math._Mat2DArray.Mat2DArray_Impl_.cloneAt = function(this1,index) {
	var out;
	var data = new Float32Array(6);
	out = data;
	index <<= 3;
	var _g = 0;
	while(_g < 6) {
		var i = _g++;
		out[i] = this1[index + i];
	}
	return out;
};
taurine.math._Mat2DArray.Mat2DArray_Impl_.copyTo = function(this1,index,out,outIndex) {
	index <<= 3;
	outIndex = outIndex << 3;
	var _g = 0;
	while(_g < 6) {
		var i = _g++;
		out[outIndex + i] = this1[index + i];
	}
	return out;
};
taurine.math._Mat2DArray.Mat2DArray_Impl_.identity = function(this1,index) {
	index = index << 3;
	var val = this1[index + 3] = 1;
	this1[index] = val;
	var val1;
	var val2;
	var val3 = this1[index + 5] = 0;
	val2 = this1[index + 4] = val3;
	val1 = this1[index + 2] = val2;
	this1[index + 1] = val1;
	return this1;
};
taurine.math._Mat2DArray.Mat2DArray_Impl_.invert_impl = function(this1,index,out,outIndex) {
	if(out == null) {
		out = this1;
		outIndex = index;
	}
	outIndex = outIndex << 3;
	index <<= 3;
	var aa = this1[index];
	var ab = this1[index + 1];
	var ac = this1[index + 2];
	var ad = this1[index + 3];
	var atx = this1[index + 4];
	var aty = this1[index + 5];
	var det = aa * ad - ab * ac;
	if(det == 0) return null; else {
		det = 1.0 / det;
		out[outIndex] = ad * det;
		out[outIndex + 1] = -ab * det;
		out[outIndex + 2] = -ac * det;
		out[outIndex + 3] = aa * det;
		out[outIndex + 4] = (ac * aty - ad * atx) * det;
		out[outIndex + 5] = (ab * atx - aa * aty) * det;
		return out;
	}
};
taurine.math._Mat2DArray.Mat2DArray_Impl_.determinant = function(this1,index) {
	index <<= 3;
	return this1[index] * this1[index + 3] - this1[index + 1] * this1[index + 2];
};
taurine.math._Mat2DArray.Mat2DArray_Impl_.mul_impl = function(this1,index,b,bIndex,out,outIndex) {
	if(out == null) {
		out = this1;
		outIndex = index;
	}
	outIndex = outIndex << 3;
	index <<= 3;
	bIndex <<= 3;
	var aa = this1[index];
	var ab = this1[index + 1];
	var ac = this1[index + 2];
	var ad = this1[index + 3];
	var atx = this1[index + 4];
	var aty = this1[index + 5];
	var ba = b[bIndex];
	var bb = b[bIndex + 1];
	var bc = b[bIndex + 2];
	var bd = b[bIndex + 3];
	var btx = b[bIndex + 4];
	var bty = b[bIndex + 5];
	out[outIndex] = aa * ba + ab * bc;
	out[outIndex + 1] = aa * bb + ab * bd;
	out[outIndex + 2] = ac * ba + ad * bc;
	out[outIndex + 3] = ac * bb + ad * bd;
	out[outIndex + 4] = ba * atx + bc * aty + btx;
	out[outIndex + 5] = bb * atx + bd * aty + bty;
	return out;
};
taurine.math._Mat2DArray.Mat2DArray_Impl_.translate_impl = function(this1,index,x,y,out,outIndex) {
	if(out == null) {
		out = this1;
		outIndex = index;
	}
	index <<= 3;
	outIndex = outIndex << 3;
	out[outIndex] = this1[index];
	out[outIndex + 1] = this1[index + 1];
	out[outIndex + 2] = this1[index + 2];
	out[outIndex + 3] = this1[index + 3];
	out[outIndex + 4] = this1[index + 4] + x;
	out[outIndex + 5] = this1[index + 5] + y;
	return out;
};
taurine.math._Mat2DArray.Mat2DArray_Impl_.scale_impl = function(this1,index,vx,vy,out,outIndex) {
	if(out == null) {
		out = this1;
		outIndex = index;
	}
	outIndex = outIndex << 3;
	index <<= 3;
	out[outIndex] = this1[index] * vx;
	out[outIndex + 1] = this1[index + 1] * vy;
	out[outIndex + 2] = this1[index + 2] * vx;
	out[outIndex + 3] = this1[index + 3] * vy;
	out[outIndex + 4] = this1[index + 4] * vx;
	out[outIndex + 5] = this1[index + 5] * vy;
	return out;
};
taurine.math._Mat2DArray.Mat2DArray_Impl_.rotate_impl = function(this1,index,angle,out,outIndex) {
	if(out == null) {
		out = this1;
		outIndex = index;
	}
	outIndex = outIndex << 3;
	index <<= 3;
	var aa = this1[index];
	var ab = this1[index + 1];
	var ac = this1[index + 2];
	var ad = this1[index + 3];
	var atx = this1[index + 4];
	var aty = this1[index + 5];
	var st = Math.sin(angle);
	var ct = Math.cos(angle);
	out[outIndex] = aa * ct + ab * st;
	out[outIndex + 1] = -aa * st + ab * ct;
	out[outIndex + 2] = ac * ct + ad * st;
	out[outIndex + 3] = -ac * st + ct * ad;
	out[outIndex + 4] = ct * atx + st * aty;
	out[outIndex + 5] = ct * aty - st * atx;
	return out;
};
taurine.math._Mat2DArray.Mat2DArray_Impl_.eq = function(this1,index,b,bIndex) {
	index <<= 3;
	bIndex <<= 3;
	if(this1 == b && index == bIndex) return true; else if(this1 == null || b == null) return false;
	var _g = 0;
	while(_g < 6) {
		var i = _g++;
		var v = this1[index + i] - b[bIndex + i];
		if(v != 0 && (v < 0 && v < -1e-06) || v > 0.000001) return false;
	}
	return true;
};
taurine.math._Mat2DArray.Mat2DArray_Impl_.toString = function(this1) {
	var buf = new StringBuf();
	var len = this1.length >>> 3;
	if(len << 3 > this1.length) len--;
	buf.b += "mat2d[";
	if(len == null) buf.b += "null"; else buf.b += "" + len;
	buf.b += "]\n{";
	var support = [];
	var maxn = 0;
	var _g = 0;
	while(_g < len) {
		var i = _g++;
		buf.b += "\n\t";
		buf.b += "mat2d(";
		var _g1 = 0;
		while(_g1 < 6) {
			var j = _g1++;
			var s = support[j] = this1[(i << 3) + j] + "";
			if(s.length > maxn) maxn = s.length;
		}
		var fst = true;
		var _g11 = 0;
		while(_g11 < 3) {
			var j1 = _g11++;
			if(fst) fst = false; else buf.b += "\n\t      ";
			var _g2 = 0;
			while(_g2 < 2) {
				var k = _g2++;
				buf.add(StringTools.rpad(support[j1 * 2 + k]," ",maxn));
				buf.b += ", ";
			}
			if(j1 == 2) buf.b += "1"; else buf.b += "0";
		}
		buf.b += "), ";
	}
	buf.b += "\n}";
	return buf.b;
};
taurine.math._Mat2DArray.Mat2DArray_Impl_.getRaw = function(this1,idx) {
	return this1[idx];
};
taurine.math._Mat2DArray.Mat2DArray_Impl_.setRaw = function(this1,idx,v) {
	return this1[idx] = v;
};
taurine.math._Mat3 = {};
taurine.math._Mat3.Mat3_Impl_ = function() { };
taurine.math._Mat3.Mat3_Impl_.__name__ = true;
taurine.math._Mat3.Mat3_Impl_.clone = function(this1) {
	var ret;
	var data = new Float32Array(9);
	ret = data;
	var _g = 0;
	while(_g < 9) {
		var i = _g++;
		ret[i] = this1[i];
	}
	return ret;
};
taurine.math._Mat3.Mat3_Impl_.copyTo = function(this1,dest) {
	var _g = 0;
	while(_g < 9) {
		var i = _g++;
		dest[i] = this1[i];
	}
	return dest;
};
taurine.math._Mat3.Mat3_Impl_.identity = function(this1) {
	var val;
	var val1 = this1[8] = 1;
	val = this1[4] = val1;
	this1[0] = val;
	var val2;
	var val3;
	var val4;
	var val5;
	var val6 = this1[7] = 0;
	val5 = this1[6] = val6;
	val4 = this1[5] = val5;
	val3 = this1[3] = val4;
	val2 = this1[2] = val3;
	this1[1] = val2;
	return this1;
};
taurine.math._Mat3.Mat3_Impl_.toString = function(this1) {
	var buf = new StringBuf();
	var support = [];
	var maxn = 0;
	buf.b += "mat3(";
	var _g = 0;
	while(_g < 9) {
		var i = _g++;
		var s = support[i] = this1[i] + "";
		if(s.length > maxn) maxn = s.length;
	}
	var _g1 = 0;
	while(_g1 < 3) {
		var j = _g1++;
		buf.b += "\n     ";
		var _g11 = 0;
		while(_g11 < 3) {
			var k = _g11++;
			buf.add(StringTools.rpad(support[j * 3 + k]," ",maxn));
			buf.b += ", ";
		}
	}
	buf.b += ")";
	return buf.b;
};
taurine.math._Mat3.Mat3_Impl_.eq = function(this1,b) {
	if(this1 == b) return true; else if(this1 == null || taurine.math._Mat3.Mat3_Impl_.eq(b,null)) return false;
	var _g = 0;
	while(_g < 9) {
		var i = _g++;
		var v = this1[i] - b[i];
		if(v != 0 && (v < 0 && v < -1e-06) || v > 0.000001) return false;
	}
	return true;
};
taurine.math._Mat3.Mat3_Impl_.getRaw = function(this1,idx) {
	return this1[idx];
};
taurine.math._Mat3.Mat3_Impl_.setRaw = function(this1,idx,v) {
	return this1[idx] = v;
};
taurine.math._Mat3Array = {};
taurine.math._Mat3Array.Mat3Array_Impl_ = function() { };
taurine.math._Mat3Array.Mat3Array_Impl_.__name__ = true;
taurine.math._Mat3Array.Mat3Array_Impl_.copy = function(this1) {
	var len = this1.length;
	var ret;
	var this2;
	var data = new Float32Array((len / 9 | 0) * 9);
	this2 = data;
	ret = this2;
	ret.set(this1.subarray(0,len),0);
	return ret;
};
taurine.math._Mat3Array.Mat3Array_Impl_.cloneAt = function(this1,index) {
	var out;
	var data = new Float32Array(9);
	out = data;
	index *= 9;
	var _g = 0;
	while(_g < 9) {
		var i = _g++;
		out[i] = this1[index + i];
	}
	return out;
};
taurine.math._Mat3Array.Mat3Array_Impl_.copyTo = function(this1,index,out,outIndex) {
	index *= 9;
	outIndex *= 9;
	var _g = 0;
	while(_g < 9) {
		var i = _g++;
		out[outIndex + i] = this1[index + i];
	}
	return out;
};
taurine.math._Mat3Array.Mat3Array_Impl_.identity = function(this1,index) {
	index = index * 9;
	var val;
	var val1 = this1[index + 8] = 1;
	val = this1[index + 4] = val1;
	this1[index] = val;
	var val2;
	var val3;
	var val4;
	var val5;
	var val6 = this1[index + 7] = 0;
	val5 = this1[index + 6] = val6;
	val4 = this1[index + 5] = val5;
	val3 = this1[index + 3] = val4;
	val2 = this1[index + 2] = val3;
	this1[index + 1] = val2;
	return this1;
};
taurine.math._Mat3Array.Mat3Array_Impl_.transpose_impl = function(this1,index,out,outIndex) {
	if(out == null) {
		out = this1;
		outIndex = index;
	}
	outIndex = outIndex * 9;
	index *= 9;
	if(outIndex == index && out == this1) {
		var tmp = this1[index + 1];
		this1[index + 1] = this1[index + 3];
		this1[index + 3] = tmp;
		tmp = this1[index + 2];
		this1[index + 2] = this1[index + 6];
		this1[index + 6] = tmp;
		tmp = this1[index + 5];
		this1[index + 5] = this1[index + 7];
		this1[index + 7] = tmp;
		return out;
	} else {
		out[outIndex] = this1[index];
		out[outIndex + 1] = this1[index + 3];
		out[outIndex + 2] = this1[index + 6];
		out[outIndex + 3] = this1[index + 1];
		out[outIndex + 4] = this1[index + 4];
		out[outIndex + 5] = this1[index + 7];
		out[outIndex + 6] = this1[index + 2];
		out[outIndex + 7] = this1[index + 5];
		out[outIndex + 8] = this1[index + 8];
		return out;
	}
};
taurine.math._Mat3Array.Mat3Array_Impl_.invert_impl = function(this1,index,out,outIndex) {
	if(out == null) {
		out = this1;
		outIndex = index;
	}
	outIndex = outIndex * 9;
	index *= 9;
	var a00 = this1[index];
	var a01 = this1[index + 1];
	var a02 = this1[index + 2];
	var a10 = this1[index + 3];
	var a11 = this1[index + 4];
	var a12 = this1[index + 5];
	var a20 = this1[index + 6];
	var a21 = this1[index + 7];
	var a22 = this1[index + 8];
	var b01 = a22 * a11 - a12 * a21;
	var b11 = -a22 * a10 + a12 * a20;
	var b21 = a21 * a10 - a11 * a20;
	var det = a00 * b01 + a01 * b11 + a02 * b21;
	if(det == 0) return null; else {
		det = 1 / det;
		out[outIndex] = b01 * det;
		out[outIndex + 1] = (-a22 * a01 + a02 * a21) * det;
		out[outIndex + 2] = (a12 * a01 - a02 * a11) * det;
		out[outIndex + 3] = b11 * det;
		out[outIndex + 4] = (a22 * a00 - a02 * a20) * det;
		out[outIndex + 5] = (-a12 * a00 + a02 * a10) * det;
		out[outIndex + 6] = b21 * det;
		out[outIndex + 7] = (-a21 * a00 + a01 * a20) * det;
		out[outIndex + 8] = (a11 * a00 - a01 * a10) * det;
		return out;
	}
};
taurine.math._Mat3Array.Mat3Array_Impl_.adjoint_impl = function(this1,index,out,outIndex) {
	if(out == null) {
		out = this1;
		outIndex = index;
	}
	outIndex = outIndex * 9;
	index *= 9;
	var a00 = this1[index];
	var a01 = this1[index + 1];
	var a02 = this1[index + 2];
	var a10 = this1[index + 3];
	var a11 = this1[index + 4];
	var a12 = this1[index + 5];
	var a20 = this1[index + 6];
	var a21 = this1[index + 7];
	var a22 = this1[index + 8];
	out[outIndex] = a11 * a22 - a12 * a21;
	out[outIndex + 1] = a02 * a21 - a01 * a22;
	out[outIndex + 2] = a01 * a12 - a02 * a11;
	out[outIndex + 3] = a12 * a20 - a10 * a22;
	out[outIndex + 4] = a00 * a22 - a02 * a20;
	out[outIndex + 5] = a02 * a10 - a00 * a12;
	out[outIndex + 6] = a10 * a21 - a11 * a20;
	out[outIndex + 7] = a01 * a20 - a00 * a21;
	out[outIndex + 8] = a00 * a11 - a01 * a10;
	return out;
};
taurine.math._Mat3Array.Mat3Array_Impl_.determinant = function(this1,index) {
	index *= 9;
	var a00 = this1[index];
	var a01 = this1[index + 1];
	var a02 = this1[index + 2];
	var a10 = this1[index + 3];
	var a11 = this1[index + 4];
	var a12 = this1[index + 5];
	var a20 = this1[index + 6];
	var a21 = this1[index + 7];
	var a22 = this1[index + 8];
	return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
};
taurine.math._Mat3Array.Mat3Array_Impl_.mul_impl = function(this1,index,b,bIndex,out,outIndex) {
	if(out == null) {
		out = this1;
		outIndex = index;
	}
	outIndex = outIndex * 9;
	index *= 9;
	bIndex *= 9;
	var a00 = this1[index];
	var a01 = this1[index + 1];
	var a02 = this1[index + 2];
	var a10 = this1[index + 3];
	var a11 = this1[index + 4];
	var a12 = this1[index + 5];
	var a20 = this1[index + 6];
	var a21 = this1[index + 7];
	var a22 = this1[index + 8];
	var b00 = b[bIndex];
	var b01 = b[bIndex + 1];
	var b02 = b[bIndex + 2];
	var b10 = b[bIndex + 3];
	var b11 = b[bIndex + 4];
	var b12 = b[bIndex + 5];
	var b20 = b[bIndex + 6];
	var b21 = b[bIndex + 7];
	var b22 = b[bIndex + 8];
	out[outIndex] = b00 * a00 + b01 * a10 + b02 * a20;
	out[outIndex + 1] = b00 * a01 + b01 * a11 + b02 * a21;
	out[outIndex + 2] = b00 * a02 + b01 * a12 + b02 * a22;
	out[outIndex + 3] = b10 * a00 + b11 * a10 + b12 * a20;
	out[outIndex + 4] = b10 * a01 + b11 * a11 + b12 * a21;
	out[outIndex + 5] = b10 * a02 + b11 * a12 + b12 * a22;
	out[outIndex + 6] = b20 * a00 + b21 * a10 + b22 * a20;
	out[outIndex + 7] = b20 * a01 + b21 * a11 + b22 * a21;
	out[outIndex + 8] = b20 * a02 + b21 * a12 + b22 * a22;
	return out;
};
taurine.math._Mat3Array.Mat3Array_Impl_.translate_impl = function(this1,index,x,y,out,outIndex) {
	if(out == null) {
		out = this1;
		outIndex = index;
	}
	if(out == this1 && outIndex == index) {
		index *= 9;
		var a00 = this1[index];
		var a01 = this1[index + 1];
		var a02 = this1[index + 2];
		var a10 = this1[index + 3];
		var a11 = this1[index + 4];
		var a12 = this1[index + 5];
		var a20 = this1[index + 6];
		var a21 = this1[index + 7];
		var a22 = this1[index + 8];
		this1[index + 6] = x * a00 + y * a10 + a20;
		this1[index + 7] = x * a01 + y * a11 + a21;
		this1[index + 8] = x * a02 + y * a12 + a22;
	} else {
		index *= 9;
		outIndex = outIndex * 9;
		var a001 = this1[index];
		var a011 = this1[index + 1];
		var a021 = this1[index + 2];
		var a101 = this1[index + 3];
		var a111 = this1[index + 4];
		var a121 = this1[index + 5];
		var a201 = this1[index + 6];
		var a211 = this1[index + 7];
		var a221 = this1[index + 8];
		out[outIndex] = a001;
		out[outIndex + 1] = a011;
		out[outIndex + 2] = a021;
		out[outIndex + 3] = a101;
		out[outIndex + 4] = a111;
		out[outIndex + 5] = a121;
		out[outIndex + 6] = x * a001 + y * a101 + a201;
		out[outIndex + 7] = x * a011 + y * a111 + a211;
		out[outIndex + 8] = x * a021 + y * a121 + a221;
	}
	return out;
};
taurine.math._Mat3Array.Mat3Array_Impl_.scale_impl = function(this1,index,x,y,out,outIndex) {
	if(out == null) {
		out = this1;
		outIndex = index;
	}
	outIndex = outIndex * 9;
	index *= 9;
	var a00 = this1[index] * x;
	var a01 = this1[index + 1] * x;
	var a02 = this1[index + 2] * x;
	var a10 = this1[index + 3] * y;
	var a11 = this1[index + 4] * y;
	var a12 = this1[index + 5] * y;
	var a20 = this1[index + 6];
	var a21 = this1[index + 7];
	var a22 = this1[index + 8];
	out[outIndex] = a00;
	out[outIndex + 1] = a01;
	out[outIndex + 2] = a02;
	out[outIndex + 3] = a10;
	out[outIndex + 4] = a11;
	out[outIndex + 5] = a12;
	if(out != this1 || index != outIndex) {
		out[outIndex + 6] = a20;
		out[outIndex + 7] = a21;
		out[outIndex + 8] = a22;
	}
	return out;
};
taurine.math._Mat3Array.Mat3Array_Impl_.rotate_impl = function(this1,index,angle,x,y,out,outIndex) {
	if(out == null) {
		out = this1;
		outIndex = index;
	}
	outIndex = outIndex * 9;
	index *= 9;
	var a00 = this1[index];
	var a01 = this1[index + 1];
	var a02 = this1[index + 2];
	var a10 = this1[index + 3];
	var a11 = this1[index + 4];
	var a12 = this1[index + 5];
	var a20 = this1[index + 6];
	var a21 = this1[index + 7];
	var a22 = this1[index + 8];
	var c = Math.cos(angle);
	var s = Math.sin(angle);
	var t = 1 - c;
	out[outIndex] = c * a00 + s * a10;
	out[outIndex + 1] = c * a01 + s * a11;
	out[outIndex + 2] = c * a02 + s * a12;
	out[outIndex + 3] = c * a10 - s * a00;
	out[outIndex + 4] = c * a11 - s * a01;
	out[outIndex + 5] = c * a12 - s * a02;
	out[outIndex + 6] = a20;
	out[outIndex + 7] = a21;
	out[outIndex + 8] = a22;
	return out;
};
taurine.math._Mat3Array.Mat3Array_Impl_.fromMat2D = function(this1,index,b,bIndex) {
	index *= 9;
	bIndex <<= 3;
	this1[index] = b[bIndex];
	this1[index + 1] = b[bIndex + 1];
	this1[index + 2] = 0;
	this1[index + 3] = b[bIndex + 2];
	this1[index + 4] = b[bIndex + 3];
	this1[index + 5] = 0;
	this1[index + 6] = b[bIndex + 4];
	this1[index + 7] = b[bIndex + 5];
	this1[index + 8] = 1;
	return this1;
};
taurine.math._Mat3Array.Mat3Array_Impl_.fromMat4 = function(this1,index,b,bIndex) {
	index *= 9;
	bIndex <<= 4;
	this1[index] = b[bIndex];
	this1[index + 1] = b[bIndex + 1];
	this1[index + 2] = b[bIndex + 2];
	this1[index + 3] = b[bIndex + 4];
	this1[index + 4] = b[bIndex + 5];
	this1[index + 5] = b[bIndex + 6];
	this1[index + 6] = b[bIndex + 8];
	this1[index + 7] = b[bIndex + 9];
	this1[index + 8] = b[bIndex + 10];
	return this1;
};
taurine.math._Mat3Array.Mat3Array_Impl_.fromQuat = function(this1,index,quat,quatIndex) {
	index *= 9;
	quatIndex <<= 2;
	var x = quat[quatIndex];
	var y = quat[quatIndex + 1];
	var z = quat[quatIndex + 2];
	var w = quat[quatIndex + 3];
	var x2 = x + x;
	var y2 = y + y;
	var z2 = z + z;
	var xx = x * x2;
	var xy = x * y2;
	var xz = x * z2;
	var yy = y * y2;
	var yz = y * z2;
	var zz = z * z2;
	var wx = w * x2;
	var wy = w * y2;
	var wz = w * z2;
	this1[index] = 1 - (yy + zz);
	this1[index + 3] = xy + wz;
	this1[index + 6] = xz - wy;
	this1[index + 1] = xy - wz;
	this1[index + 4] = 1 - (xx + zz);
	this1[index + 7] = yz + wx;
	this1[index + 2] = xz + wy;
	this1[index + 5] = yz - wx;
	this1[index + 8] = 1 - (xx + yy);
	return this1;
};
taurine.math._Mat3Array.Mat3Array_Impl_.normalFromMat4 = function(this1,index,b,bIndex) {
	index *= 9;
	bIndex <<= 4;
	var a00 = b[bIndex];
	var a01 = b[bIndex + 1];
	var a02 = b[bIndex + 2];
	var a03 = b[bIndex + 3];
	var a10 = b[bIndex + 4];
	var a11 = b[bIndex + 5];
	var a12 = b[bIndex + 6];
	var a13 = b[bIndex + 7];
	var a20 = b[bIndex + 8];
	var a21 = b[bIndex + 9];
	var a22 = b[bIndex + 10];
	var a23 = b[bIndex + 11];
	var a30 = b[bIndex + 12];
	var a31 = b[bIndex + 13];
	var a32 = b[bIndex + 14];
	var a33 = b[bIndex + 15];
	var b00 = a00 * a11 - a01 * a10;
	var b01 = a00 * a12 - a02 * a10;
	var b02 = a00 * a13 - a03 * a10;
	var b03 = a01 * a12 - a02 * a11;
	var b04 = a01 * a13 - a03 * a11;
	var b05 = a02 * a13 - a03 * a12;
	var b06 = a20 * a31 - a21 * a30;
	var b07 = a20 * a32 - a22 * a30;
	var b08 = a20 * a33 - a23 * a30;
	var b09 = a21 * a32 - a22 * a31;
	var b10 = a21 * a33 - a23 * a31;
	var b11 = a22 * a33 - a23 * a32;
	var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
	if(det == 0) return null;
	det = 1.0 / det;
	this1[index] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
	this1[index + 1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
	this1[index + 2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
	this1[index + 3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
	this1[index + 4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
	this1[index + 5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
	this1[index + 6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
	this1[index + 7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
	this1[index + 8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
	return this1;
};
taurine.math._Mat3Array.Mat3Array_Impl_.eq = function(this1,index,b,bIndex) {
	index *= 9;
	bIndex *= 9;
	if(this1 == b && index == bIndex) return true; else if(this1 == null || b == null) return false;
	var _g = 0;
	while(_g < 9) {
		var i = _g++;
		var v = this1[index + i] - b[bIndex + i];
		if(v != 0 && (v < 0 && v < -1e-06) || v > 0.000001) return false;
	}
	return true;
};
taurine.math._Mat3Array.Mat3Array_Impl_.toString = function(this1) {
	var buf = new StringBuf();
	var len = this1.length / 9 | 0;
	if(len * 9 > this1.length) len--;
	buf.b += "mat3[";
	if(len == null) buf.b += "null"; else buf.b += "" + len;
	buf.b += "]\n{";
	var support = [];
	var maxn = 0;
	var _g = 0;
	while(_g < len) {
		var i = _g++;
		buf.b += "\n\t";
		buf.b += "mat3(";
		var _g1 = 0;
		while(_g1 < 9) {
			var j = _g1++;
			var s = support[j] = this1[i * 9 + j] + "";
			if(s.length > maxn) maxn = s.length;
		}
		var fst = true;
		var _g11 = 0;
		while(_g11 < 3) {
			var j1 = _g11++;
			if(fst) fst = false; else buf.b += "\n\t     ";
			var _g2 = 0;
			while(_g2 < 3) {
				var k = _g2++;
				buf.add(StringTools.rpad(support[j1 * 3 + k]," ",maxn));
			}
		}
		buf.b += "), ";
	}
	buf.b += "\n}";
	return buf.b;
};
taurine.math._Mat3Array.Mat3Array_Impl_.getRaw = function(this1,idx) {
	return this1[idx];
};
taurine.math._Mat3Array.Mat3Array_Impl_.setRaw = function(this1,idx,v) {
	return this1[idx] = v;
};
taurine.math._Mat4 = {};
taurine.math._Mat4.Mat4_Impl_ = function() { };
taurine.math._Mat4.Mat4_Impl_.__name__ = true;
taurine.math._Mat4.Mat4_Impl_.clone = function(this1) {
	var ret;
	var data = new Float32Array(16);
	ret = data;
	var _g = 0;
	while(_g < 16) {
		var i = _g++;
		ret[i] = this1[i];
	}
	return ret;
};
taurine.math._Mat4.Mat4_Impl_.copyTo = function(this1,dest) {
	var _g = 0;
	while(_g < 16) {
		var i = _g++;
		dest[i] = this1[i];
	}
	return dest;
};
taurine.math._Mat4.Mat4_Impl_.identity = function(this1) {
	var val;
	var val1;
	var val2 = this1[15] = 1;
	val1 = this1[10] = val2;
	val = this1[5] = val1;
	this1[0] = val;
	var val3;
	var val4;
	var val5;
	var val6;
	var val7;
	var val8;
	var val9;
	var val10;
	var val11;
	var val12;
	var val13 = this1[14] = 0;
	val12 = this1[13] = val13;
	val11 = this1[12] = val12;
	val10 = this1[11] = val11;
	val9 = this1[9] = val10;
	val8 = this1[8] = val9;
	val7 = this1[7] = val8;
	val6 = this1[6] = val7;
	val5 = this1[4] = val6;
	val4 = this1[3] = val5;
	val3 = this1[2] = val4;
	this1[1] = val3;
	return this1;
};
taurine.math._Mat4.Mat4_Impl_.toString = function(this1) {
	var buf = new StringBuf();
	var support = [];
	var maxn = 0;
	buf.b += "mat4(";
	var _g = 0;
	while(_g < 16) {
		var i = _g++;
		var s = support[i] = this1[i] + "";
		if(s.length > maxn) maxn = s.length;
	}
	var fst = true;
	var _g1 = 0;
	while(_g1 < 4) {
		var j = _g1++;
		if(fst) fst = false; else buf.b += "     ";
		var _g11 = 0;
		while(_g11 < 4) {
			var k = _g11++;
			buf.add(StringTools.rpad(support[(j << 2) + k]," ",maxn));
		}
	}
	buf.b += ")";
	return buf.b;
};
taurine.math._Mat4.Mat4_Impl_.eq = function(this1,b) {
	if(this1 == b) return true; else if(this1 == null || taurine.math._Mat4.Mat4_Impl_.eq(b,null)) return false;
	var _g = 0;
	while(_g < 16) {
		var i = _g++;
		var v = this1[i] - b[i];
		if(v != 0 && (v < 0 && v < -1e-06) || v > 0.000001) return false;
	}
	return true;
};
taurine.math._Mat4.Mat4_Impl_.getRaw = function(this1,idx) {
	return this1[idx];
};
taurine.math._Mat4.Mat4_Impl_.setRaw = function(this1,idx,v) {
	return this1[idx] = v;
};
taurine.math._Mat4Array = {};
taurine.math._Mat4Array.Mat4Array_Impl_ = function() { };
taurine.math._Mat4Array.Mat4Array_Impl_.__name__ = true;
taurine.math._Mat4Array.Mat4Array_Impl_.cloneAt = function(this1,index) {
	var out;
	var data = new Float32Array(16);
	out = data;
	index <<= 4;
	var _g = 0;
	while(_g < 16) {
		var i = _g++;
		out[i] = this1[index + i];
	}
	return out;
};
taurine.math._Mat4Array.Mat4Array_Impl_.copy = function(this1) {
	var len = this1.length;
	var ret;
	var this2;
	var data = new Float32Array(len >>> 4 << 4);
	this2 = data;
	ret = this2;
	ret.set(this1.subarray(0,len),0);
	return ret;
};
taurine.math._Mat4Array.Mat4Array_Impl_.copyTo = function(this1,index,out,outIndex) {
	index <<= 4;
	outIndex = outIndex << 4;
	var _g = 0;
	while(_g < 16) {
		var i = _g++;
		out[outIndex + i] = this1[index + i];
	}
	return out;
};
taurine.math._Mat4Array.Mat4Array_Impl_.identity = function(this1,index) {
	index = index << 4;
	var val;
	var val1;
	var val2 = this1[index + 15] = 1;
	val1 = this1[index + 10] = val2;
	val = this1[index + 5] = val1;
	this1[index] = val;
	var val3;
	var val4;
	var val5;
	var val6;
	var val7;
	var val8;
	var val9;
	var val10;
	var val11;
	var val12;
	var val13 = this1[index + 14] = 0;
	val12 = this1[index + 13] = val13;
	val11 = this1[index + 12] = val12;
	val10 = this1[index + 11] = val11;
	val9 = this1[index + 9] = val10;
	val8 = this1[index + 8] = val9;
	val7 = this1[index + 7] = val8;
	val6 = this1[index + 6] = val7;
	val5 = this1[index + 4] = val6;
	val4 = this1[index + 3] = val5;
	val3 = this1[index + 2] = val4;
	this1[index + 1] = val3;
	return this1;
};
taurine.math._Mat4Array.Mat4Array_Impl_.transpose_impl = function(this1,index,out,outIndex) {
	if(out == null) {
		out = this1;
		outIndex = index;
	}
	outIndex = outIndex << 4;
	index <<= 4;
	if(outIndex == index && out == this1) {
		var tmp = this1[index + 1];
		this1[index + 1] = this1[index + 4];
		this1[index + 4] = tmp;
		tmp = this1[index + 2];
		this1[index + 2] = this1[index + 8];
		this1[index + 8] = tmp;
		tmp = this1[index + 3];
		this1[index + 3] = this1[index + 12];
		this1[index + 12] = tmp;
		tmp = this1[index + 6];
		this1[index + 6] = this1[index + 9];
		this1[index + 9] = tmp;
		tmp = this1[index + 7];
		this1[index + 7] = this1[index + 13];
		this1[index + 13] = tmp;
		tmp = this1[index + 11];
		this1[index + 11] = this1[index + 14];
		this1[index + 14] = tmp;
		return out;
	} else {
		out[outIndex] = this1[index];
		out[outIndex + 1] = this1[index + 4];
		out[outIndex + 2] = this1[index + 8];
		out[outIndex + 3] = this1[index + 12];
		out[outIndex + 4] = this1[index + 1];
		out[outIndex + 5] = this1[index + 5];
		out[outIndex + 6] = this1[index + 9];
		out[outIndex + 7] = this1[index + 13];
		out[outIndex + 8] = this1[index + 2];
		out[outIndex + 9] = this1[index + 6];
		out[outIndex + 10] = this1[index + 10];
		out[outIndex + 11] = this1[index + 14];
		out[outIndex + 12] = this1[index + 3];
		out[outIndex + 13] = this1[index + 7];
		out[outIndex + 14] = this1[index + 11];
		out[outIndex + 15] = this1[index + 15];
		return out;
	}
};
taurine.math._Mat4Array.Mat4Array_Impl_.invert_impl = function(this1,index,out,outIndex) {
	if(out == null) {
		out = this1;
		outIndex = index;
	}
	outIndex = outIndex << 4;
	index <<= 4;
	var a00 = this1[index];
	var a01 = this1[index + 1];
	var a02 = this1[index + 2];
	var a03 = this1[index + 3];
	var a10 = this1[index + 4];
	var a11 = this1[index + 5];
	var a12 = this1[index + 6];
	var a13 = this1[index + 7];
	var a20 = this1[index + 8];
	var a21 = this1[index + 9];
	var a22 = this1[index + 10];
	var a23 = this1[index + 11];
	var a30 = this1[index + 12];
	var a31 = this1[index + 13];
	var a32 = this1[index + 14];
	var a33 = this1[index + 15];
	var b00 = a00 * a11 - a01 * a10;
	var b01 = a00 * a12 - a02 * a10;
	var b02 = a00 * a13 - a03 * a10;
	var b03 = a01 * a12 - a02 * a11;
	var b04 = a01 * a13 - a03 * a11;
	var b05 = a02 * a13 - a03 * a12;
	var b06 = a20 * a31 - a21 * a30;
	var b07 = a20 * a32 - a22 * a30;
	var b08 = a20 * a33 - a23 * a30;
	var b09 = a21 * a32 - a22 * a31;
	var b10 = a21 * a33 - a23 * a31;
	var b11 = a22 * a33 - a23 * a32;
	var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
	if(det == 0) return null; else {
		det = 1 / det;
		out[outIndex] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
		out[outIndex + 1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
		out[outIndex + 2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
		out[outIndex + 3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
		out[outIndex + 4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
		out[outIndex + 5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
		out[outIndex + 6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
		out[outIndex + 7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
		out[outIndex + 8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
		out[outIndex + 9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
		out[outIndex + 10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
		out[outIndex + 11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
		out[outIndex + 12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
		out[outIndex + 13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
		out[outIndex + 14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
		out[outIndex + 15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
		return out;
	}
};
taurine.math._Mat4Array.Mat4Array_Impl_.adjoint_impl = function(this1,index,out,outIndex) {
	if(out == null) {
		out = this1;
		outIndex = index;
	}
	outIndex = outIndex << 4;
	index <<= 4;
	var a00 = this1[index];
	var a01 = this1[index + 1];
	var a02 = this1[index + 2];
	var a03 = this1[index + 3];
	var a10 = this1[index + 4];
	var a11 = this1[index + 5];
	var a12 = this1[index + 6];
	var a13 = this1[index + 7];
	var a20 = this1[index + 8];
	var a21 = this1[index + 9];
	var a22 = this1[index + 10];
	var a23 = this1[index + 11];
	var a30 = this1[index + 12];
	var a31 = this1[index + 13];
	var a32 = this1[index + 14];
	var a33 = this1[index + 15];
	out[outIndex] = a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22);
	out[outIndex + 1] = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
	out[outIndex + 2] = a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12);
	out[outIndex + 3] = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
	out[outIndex + 4] = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
	out[outIndex + 5] = a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22);
	out[outIndex + 6] = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
	out[outIndex + 7] = a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12);
	out[outIndex + 8] = a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21);
	out[outIndex + 9] = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
	out[outIndex + 10] = a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11);
	out[outIndex + 11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
	out[outIndex + 12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
	out[outIndex + 13] = a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21);
	out[outIndex + 14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
	out[outIndex + 15] = a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11);
	out;
	return out;
};
taurine.math._Mat4Array.Mat4Array_Impl_.det = function(this1,index) {
	index <<= 4;
	var a00 = this1[index];
	var a01 = this1[index + 1];
	var a02 = this1[index + 2];
	var a03 = this1[index + 3];
	var a10 = this1[index + 4];
	var a11 = this1[index + 5];
	var a12 = this1[index + 6];
	var a13 = this1[index + 7];
	var a20 = this1[index + 8];
	var a21 = this1[index + 9];
	var a22 = this1[index + 10];
	var a23 = this1[index + 11];
	var a30 = this1[index + 12];
	var a31 = this1[index + 13];
	var a32 = this1[index + 14];
	var a33 = this1[index + 15];
	var b00 = a00 * a11 - a01 * a10;
	var b01 = a00 * a12 - a02 * a10;
	var b02 = a00 * a13 - a03 * a10;
	var b03 = a01 * a12 - a02 * a11;
	var b04 = a01 * a13 - a03 * a11;
	var b05 = a02 * a13 - a03 * a12;
	var b06 = a20 * a31 - a21 * a30;
	var b07 = a20 * a32 - a22 * a30;
	var b08 = a20 * a33 - a23 * a30;
	var b09 = a21 * a32 - a22 * a31;
	var b10 = a21 * a33 - a23 * a31;
	var b11 = a22 * a33 - a23 * a32;
	return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
};
taurine.math._Mat4Array.Mat4Array_Impl_.mul_impl = function(this1,index,b,bIndex,out,outIndex) {
	if(out == null) {
		out = this1;
		outIndex = index;
	}
	outIndex = outIndex << 4;
	index <<= 4;
	bIndex <<= 4;
	var a00 = this1[index];
	var a01 = this1[index + 1];
	var a02 = this1[index + 2];
	var a03 = this1[index + 3];
	var a10 = this1[index + 4];
	var a11 = this1[index + 5];
	var a12 = this1[index + 6];
	var a13 = this1[index + 7];
	var a20 = this1[index + 8];
	var a21 = this1[index + 9];
	var a22 = this1[index + 10];
	var a23 = this1[index + 11];
	var a30 = this1[index + 12];
	var a31 = this1[index + 13];
	var a32 = this1[index + 14];
	var a33 = this1[index + 15];
	var b0 = b[bIndex];
	var b1 = b[bIndex + 1];
	var b2 = b[bIndex + 2];
	var b3 = b[bIndex + 3];
	var b4 = b[bIndex + 4];
	var b5 = b[bIndex + 5];
	var b6 = b[bIndex + 6];
	var b7 = b[bIndex + 7];
	var b8 = b[bIndex + 8];
	var b9 = b[bIndex + 9];
	var b10 = b[bIndex + 10];
	var b11 = b[bIndex + 11];
	var b12 = b[bIndex + 12];
	var b13 = b[bIndex + 13];
	var b14 = b[bIndex + 14];
	var b15 = b[bIndex + 15];
	out[outIndex] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
	out[outIndex + 1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
	out[outIndex + 2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
	out[outIndex + 3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
	out[outIndex + 4] = b4 * a00 + b5 * a10 + b6 * a20 + b7 * a30;
	out[outIndex + 5] = b4 * a01 + b5 * a11 + b6 * a21 + b7 * a31;
	out[outIndex + 6] = b4 * a02 + b5 * a12 + b6 * a22 + b7 * a32;
	out[outIndex + 7] = b4 * a03 + b5 * a13 + b6 * a23 + b7 * a33;
	out[outIndex + 8] = b8 * a00 + b9 * a10 + b10 * a20 + b11 * a30;
	out[outIndex + 9] = b8 * a01 + b9 * a11 + b10 * a21 + b11 * a31;
	out[outIndex + 10] = b8 * a02 + b9 * a12 + b10 * a22 + b11 * a32;
	out[outIndex + 11] = b8 * a03 + b9 * a13 + b10 * a23 + b11 * a33;
	out[outIndex + 12] = b12 * a00 + b13 * a10 + b14 * a20 + b15 * a30;
	out[outIndex + 13] = b12 * a01 + b13 * a11 + b14 * a21 + b15 * a31;
	out[outIndex + 14] = b12 * a02 + b13 * a12 + b14 * a22 + b15 * a32;
	out[outIndex + 15] = b12 * a03 + b13 * a13 + b14 * a23 + b15 * a33;
	return out;
};
taurine.math._Mat4Array.Mat4Array_Impl_.translate_impl = function(this1,index,x,y,z,out,outIndex) {
	if(out == null) {
		out = this1;
		outIndex = index;
	}
	index <<= 4;
	if(out == this1 && outIndex == index) {
		var i12 = this1[index] * x + this1[index + 4] * y + this1[index + 8] * z + this1[index + 12];
		var i13 = this1[index + 1] * x + this1[index + 5] * y + this1[index + 9] * z + this1[index + 13];
		var i14 = this1[index + 2] * x + this1[index + 6] * y + this1[index + 10] * z + this1[index + 14];
		var i15 = this1[index + 3] * x + this1[index + 7] * y + this1[index + 11] * z + this1[index + 15];
		this1[index + 12] = i12;
		this1[index + 13] = i13;
		this1[index + 14] = i14;
		this1[index + 15] = i15;
	} else {
		outIndex = outIndex << 4;
		var a00 = this1[index];
		var a01 = this1[index + 1];
		var a02 = this1[index + 2];
		var a03 = this1[index + 3];
		var a10 = this1[index + 4];
		var a11 = this1[index + 5];
		var a12 = this1[index + 6];
		var a13 = this1[index + 7];
		var a20 = this1[index + 8];
		var a21 = this1[index + 9];
		var a22 = this1[index + 10];
		var a23 = this1[index + 11];
		var a30 = this1[index + 12];
		var a31 = this1[index + 13];
		var a32 = this1[index + 14];
		var a33 = this1[index + 15];
		out[outIndex] = a00;
		out[outIndex + 1] = a01;
		out[outIndex + 2] = a02;
		out[outIndex + 3] = a03;
		out[outIndex + 4] = a10;
		out[outIndex + 5] = a11;
		out[outIndex + 6] = a12;
		out[outIndex + 7] = a13;
		out[outIndex + 8] = a20;
		out[outIndex + 9] = a21;
		out[outIndex + 10] = a22;
		out[outIndex + 11] = a23;
		out[outIndex + 12] = a00 * x + a10 * y + a20 * z + a30;
		out[outIndex + 13] = a01 * x + a11 * y + a21 * z + a31;
		out[outIndex + 14] = a02 * x + a12 * y + a22 * z + a32;
		out[outIndex + 15] = a03 * x + a13 * y + a23 * z + a33;
	}
	return out;
};
taurine.math._Mat4Array.Mat4Array_Impl_.scale_impl = function(this1,index,x,y,z,out,outIndex) {
	if(out == null) {
		out = this1;
		outIndex = index;
	}
	outIndex = outIndex << 4;
	index <<= 4;
	var a00 = this1[index] * x;
	var a01 = this1[index + 1] * x;
	var a02 = this1[index + 2] * x;
	var a03 = this1[index + 3] * x;
	var a10 = this1[index + 4] * y;
	var a11 = this1[index + 5] * y;
	var a12 = this1[index + 6] * y;
	var a13 = this1[index + 7] * y;
	var a20 = this1[index + 8] * z;
	var a21 = this1[index + 9] * z;
	var a22 = this1[index + 10] * z;
	var a23 = this1[index + 11] * z;
	var a30 = this1[index + 12];
	var a31 = this1[index + 13];
	var a32 = this1[index + 14];
	var a33 = this1[index + 15];
	out[outIndex] = a00;
	out[outIndex + 1] = a01;
	out[outIndex + 2] = a02;
	out[outIndex + 3] = a03;
	out[outIndex + 4] = a10;
	out[outIndex + 5] = a11;
	out[outIndex + 6] = a12;
	out[outIndex + 7] = a13;
	out[outIndex + 8] = a20;
	out[outIndex + 9] = a21;
	out[outIndex + 10] = a22;
	out[outIndex + 11] = a23;
	if(out != this1 || index != outIndex) {
		out[outIndex + 12] = a30;
		out[outIndex + 13] = a31;
		out[outIndex + 14] = a32;
		out[outIndex + 15] = a33;
	}
	return out;
};
taurine.math._Mat4Array.Mat4Array_Impl_.rotate_impl = function(this1,index,angle,x,y,z,out,outIndex) {
	if(out == null) {
		out = this1;
		outIndex = index;
	}
	outIndex = outIndex << 4;
	index <<= 4;
	var x1 = x;
	var y1 = y;
	var z1 = z;
	var a00 = this1[index];
	var a01 = this1[index + 1];
	var a02 = this1[index + 2];
	var a03 = this1[index + 3];
	var a10 = this1[index + 4];
	var a11 = this1[index + 5];
	var a12 = this1[index + 6];
	var a13 = this1[index + 7];
	var a20 = this1[index + 8];
	var a21 = this1[index + 9];
	var a22 = this1[index + 10];
	var a23 = this1[index + 11];
	var c = Math.cos(angle);
	var s = Math.sin(angle);
	var t = 1 - c;
	var len = 1 / Math.sqrt(x1 * x1 + y1 * y1 + z1 * z1);
	x1 *= len;
	y1 *= len;
	z1 *= len;
	var b00 = x1 * x1 * t + c;
	var b01 = y1 * x1 * t + z1 * s;
	var b02 = z1 * x1 * t - y1 * s;
	var b10 = x1 * y1 * t - z1 * s;
	var b11 = y1 * y1 * t + c;
	var b12 = z1 * y1 * t + x1 * s;
	var b20 = x1 * z1 * t + y1 * s;
	var b21 = y1 * z1 * t - x1 * s;
	var b22 = z1 * z1 * t + c;
	out[outIndex] = a00 * b00 + a10 * b01 + a20 * b02;
	out[outIndex + 1] = a01 * b00 + a11 * b01 + a21 * b02;
	out[outIndex + 2] = a02 * b00 + a12 * b01 + a22 * b02;
	out[outIndex + 3] = a03 * b00 + a13 * b01 + a23 * b02;
	out[outIndex + 4] = a00 * b10 + a10 * b11 + a20 * b12;
	out[outIndex + 5] = a01 * b10 + a11 * b11 + a21 * b12;
	out[outIndex + 6] = a02 * b10 + a12 * b11 + a22 * b12;
	out[outIndex + 7] = a03 * b10 + a13 * b11 + a23 * b12;
	out[outIndex + 8] = a00 * b20 + a10 * b21 + a20 * b22;
	out[outIndex + 9] = a01 * b20 + a11 * b21 + a21 * b22;
	out[outIndex + 10] = a02 * b20 + a12 * b21 + a22 * b22;
	out[outIndex + 11] = a03 * b20 + a13 * b21 + a23 * b22;
	if(this1 != out || index != outIndex) {
		out[outIndex + 12] = this1[index + 12];
		out[outIndex + 13] = this1[index + 13];
		out[outIndex + 14] = this1[index + 14];
		out[outIndex + 15] = this1[index + 15];
	}
	return out;
};
taurine.math._Mat4Array.Mat4Array_Impl_.rotateX_impl = function(this1,index,angle,out,outIndex) {
	if(out == null) {
		out = this1;
		outIndex = index;
	}
	outIndex = outIndex << 4;
	index <<= 4;
	var s = Math.sin(angle);
	var c = Math.cos(angle);
	var a10 = this1[index + 4];
	var a11 = this1[index + 5];
	var a12 = this1[index + 6];
	var a13 = this1[index + 7];
	var a20 = this1[index + 8];
	var a21 = this1[index + 9];
	var a22 = this1[index + 10];
	var a23 = this1[index + 11];
	if(this1 != out || index != outIndex) {
		out[outIndex] = this1[index];
		out[outIndex + 1] = this1[index + 1];
		out[outIndex + 2] = this1[index + 2];
		out[outIndex + 3] = this1[index + 3];
		out[outIndex + 12] = this1[index + 12];
		out[outIndex + 13] = this1[index + 13];
		out[outIndex + 14] = this1[index + 14];
		out[outIndex + 15] = this1[index + 15];
	}
	out[outIndex + 4] = a10 * c + a20 * s;
	out[outIndex + 5] = a11 * c + a21 * s;
	out[outIndex + 6] = a12 * c + a22 * s;
	out[outIndex + 7] = a13 * c + a23 * s;
	out[outIndex + 8] = a20 * c - a10 * s;
	out[outIndex + 9] = a21 * c - a11 * s;
	out[outIndex + 10] = a22 * c - a12 * s;
	out[outIndex + 11] = a23 * c - a13 * s;
	return out;
};
taurine.math._Mat4Array.Mat4Array_Impl_.rotateY_impl = function(this1,index,angle,out,outIndex) {
	if(out == null) {
		out = this1;
		outIndex = index;
	}
	outIndex = outIndex << 4;
	index <<= 4;
	var s = Math.sin(angle);
	var c = Math.cos(angle);
	var a00 = this1[index];
	var a01 = this1[index + 1];
	var a02 = this1[index + 2];
	var a03 = this1[index + 3];
	var a20 = this1[index + 8];
	var a21 = this1[index + 9];
	var a22 = this1[index + 10];
	var a23 = this1[index + 11];
	if(this1 != out || index != outIndex) {
		out[outIndex + 4] = this1[index + 4];
		out[outIndex + 5] = this1[index + 5];
		out[outIndex + 6] = this1[index + 6];
		out[outIndex + 7] = this1[index + 7];
		out[outIndex + 12] = this1[index + 12];
		out[outIndex + 13] = this1[index + 13];
		out[outIndex + 14] = this1[index + 14];
		out[outIndex + 15] = this1[index + 15];
	}
	out[outIndex] = a00 * c - a20 * s;
	out[outIndex + 1] = a01 * c - a21 * s;
	out[outIndex + 2] = a02 * c - a22 * s;
	out[outIndex + 3] = a03 * c - a23 * s;
	out[outIndex + 8] = a00 * s + a20 * c;
	out[outIndex + 9] = a01 * s + a21 * c;
	out[outIndex + 10] = a02 * s + a22 * c;
	out[outIndex + 11] = a03 * s + a23 * c;
	return out;
};
taurine.math._Mat4Array.Mat4Array_Impl_.rotateZ_impl = function(this1,index,angle,out,outIndex) {
	if(out == null) {
		out = this1;
		outIndex = index;
	}
	outIndex = outIndex << 4;
	index <<= 4;
	var s = Math.sin(angle);
	var c = Math.cos(angle);
	var a00 = this1[index];
	var a01 = this1[index + 1];
	var a02 = this1[index + 2];
	var a03 = this1[index + 3];
	var a10 = this1[index + 4];
	var a11 = this1[index + 5];
	var a12 = this1[index + 6];
	var a13 = this1[index + 7];
	out[outIndex] = a00 * c + a10 * s;
	out[outIndex + 1] = a01 * c + a11 * s;
	out[outIndex + 2] = a02 * c + a12 * s;
	out[outIndex + 3] = a03 * c + a13 * s;
	out[outIndex + 4] = a10 * c - a00 * s;
	out[outIndex + 5] = a11 * c - a01 * s;
	out[outIndex + 6] = a12 * c - a02 * s;
	out[outIndex + 7] = a13 * c - a03 * s;
	if(this1 != out || index != outIndex) {
		out[outIndex + 8] = this1[index + 8];
		out[outIndex + 9] = this1[index + 9];
		out[outIndex + 10] = this1[index + 10];
		out[outIndex + 11] = this1[index + 11];
		out[outIndex + 12] = this1[index + 12];
		out[outIndex + 13] = this1[index + 13];
		out[outIndex + 14] = this1[index + 14];
		out[outIndex + 15] = this1[index + 15];
	}
	return out;
};
taurine.math._Mat4Array.Mat4Array_Impl_.fromQuatPos = function(this1,index,quat,quatIndex,x,y,z) {
	index <<= 4;
	quatIndex <<= 2;
	var x1 = quat[quatIndex];
	var y1 = quat[quatIndex + 1];
	var z1 = quat[quatIndex + 2];
	var w = quat[quatIndex + 3];
	var x2 = x1 + x1;
	var y2 = y1 + y1;
	var z2 = z1 + z1;
	var xx = x1 * x2;
	var xy = x1 * y2;
	var xz = x1 * z2;
	var yy = y1 * y2;
	var yz = y1 * z2;
	var zz = z1 * z2;
	var wx = w * x2;
	var wy = w * y2;
	var wz = w * z2;
	this1[index] = 1 - (yy + zz);
	this1[index + 1] = xy + wz;
	this1[index + 2] = xz - wy;
	this1[index + 3] = 0;
	this1[index + 4] = xy - wz;
	this1[index + 5] = 1 - (xx + zz);
	this1[index + 6] = yz + wx;
	this1[index + 7] = 0;
	this1[index + 8] = xz + wy;
	this1[index + 9] = yz - wx;
	this1[index + 10] = 1 - (xx + yy);
	this1[index + 11] = 0;
	this1[index + 12] = x1;
	this1[index + 13] = y1;
	this1[index + 14] = z1;
	this1[index + 15] = 1;
	return this1;
};
taurine.math._Mat4Array.Mat4Array_Impl_.fromQuat = function(this1,index,quat,quatIndex) {
	index <<= 4;
	quatIndex <<= 2;
	var x = quat[quatIndex];
	var y = quat[quatIndex + 1];
	var z = quat[quatIndex + 2];
	var w = quat[quatIndex + 3];
	var x2 = x + x;
	var y2 = y + y;
	var z2 = z + z;
	var xx = x * x2;
	var xy = x * y2;
	var xz = x * z2;
	var yy = y * y2;
	var yz = y * z2;
	var zz = z * z2;
	var wx = w * x2;
	var wy = w * y2;
	var wz = w * z2;
	this1[index] = 1 - (yy + zz);
	this1[index + 1] = xy + wz;
	this1[index + 2] = xz - wy;
	this1[index + 3] = 0;
	this1[index + 4] = xy - wz;
	this1[index + 5] = 1 - (xx + zz);
	this1[index + 6] = yz + wx;
	this1[index + 7] = 0;
	this1[index + 8] = xz + wy;
	this1[index + 9] = yz - wx;
	this1[index + 10] = 1 - (xx + yy);
	var val;
	var val1;
	var val2 = this1[index + 14] = 0;
	val1 = this1[index + 13] = val2;
	val = this1[index + 12] = val1;
	this1[index + 11] = val;
	this1[index + 15] = 1;
	return this1;
};
taurine.math._Mat4Array.Mat4Array_Impl_.frustum = function(this1,index,left,right,bottom,top,near,far) {
	index <<= 4;
	var rl = 1 / (right - left);
	var tb = 1 / (top - bottom);
	var nf = 1 / (near - far);
	this1[index] = near * 2 * rl;
	this1[index + 1] = 0;
	this1[index + 2] = 0;
	this1[index + 3] = 0;
	this1[index + 4] = 0;
	this1[index + 5] = near * 2 * tb;
	this1[index + 6] = 0;
	this1[index + 7] = 0;
	this1[index + 8] = (right + left) * rl;
	this1[index + 9] = (top + bottom) * tb;
	this1[index + 10] = (far + near) * nf;
	this1[index + 11] = -1;
	this1[index + 12] = 0;
	this1[index + 13] = 0;
	this1[index + 14] = far * near * 2 * nf;
	this1[index + 15] = 0;
	return this1;
};
taurine.math._Mat4Array.Mat4Array_Impl_.perspective = function(this1,index,fovy,aspect,near,far) {
	index <<= 4;
	var f = 1.0 / Math.tan(fovy / 2);
	var nf = 1 / (near - far);
	this1[index] = f / aspect;
	var val;
	var val1;
	var val2 = this1[index + 4] = 0;
	val1 = this1[index + 3] = val2;
	val = this1[index + 2] = val1;
	this1[index + 1] = val;
	this1[index + 5] = f;
	var val3;
	var val4;
	var val5 = this1[index + 9] = 0;
	val4 = this1[index + 8] = val5;
	val3 = this1[index + 7] = val4;
	this1[index + 6] = val3;
	this1[index + 10] = (far + near) * nf;
	this1[index + 11] = -1;
	var val6 = this1[index + 13] = 0;
	this1[index + 12] = val6;
	this1[index + 14] = 2 * far * near * nf;
	this1[index + 15] = 0;
	return this1;
};
taurine.math._Mat4Array.Mat4Array_Impl_.ortho = function(this1,index,left,right,bottom,top,near,far) {
	index <<= 4;
	var lr = 1 / (left - right);
	var bt = 1 / (bottom - top);
	var nf = 1 / (near - far);
	this1[index] = -2 * lr;
	var val;
	var val1;
	var val2 = this1[index + 4] = 0;
	val1 = this1[index + 3] = val2;
	val = this1[index + 2] = val1;
	this1[index + 1] = val;
	this1[index + 5] = -2 * bt;
	var val3;
	var val4;
	var val5 = this1[index + 9] = 0;
	val4 = this1[index + 8] = val5;
	val3 = this1[index + 7] = val4;
	this1[index + 6] = val3;
	this1[index + 10] = 2 * nf;
	this1[index + 11] = 0;
	this1[index + 12] = (left + right) * lr;
	this1[index + 13] = (top + bottom) * bt;
	this1[index + 14] = (far + near) * nf;
	this1[index + 15] = 1;
	return this1;
};
taurine.math._Mat4Array.Mat4Array_Impl_.lookAt = function(this1,index,eye,eyeIndex,center,centerIndex,up) {
	index <<= 4;
	eyeIndex = eyeIndex << 2;
	centerIndex = centerIndex << 2;
	var eyex = eye[eyeIndex];
	var eyey = eye[eyeIndex + 1];
	var eyez = eye[eyeIndex + 2];
	var upx = up[0];
	var upy = up[1];
	var upz = up[2];
	var centerx = center[centerIndex];
	var centery = center[centerIndex + 1];
	var centerz = center[centerIndex + 2];
	if(taurine.math.FastMath.abs(eyex - centerx) < 0.000001 && taurine.math.FastMath.abs(eyey - centery) < 0.000001 && taurine.math.FastMath.abs(eyez - centerz) < 0.000001) taurine.math._Mat4Array.Mat4Array_Impl_.identity(this1,index); else {
		var x0;
		var x1;
		var x2;
		var y0;
		var y1;
		var y2;
		var z0;
		var z1;
		var z2;
		var len;
		z0 = eyex - centerx;
		z1 = eyey - centery;
		z2 = eyez - centerz;
		len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
		z0 *= len;
		z1 *= len;
		z2 *= len;
		x0 = upy * z2 - upz * z1;
		x1 = upz * z0 - upx * z2;
		x2 = upx * z1 - upy * z0;
		len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
		if(len == 0) {
			x0 = 0;
			x1 = 0;
			x2 = 0;
		} else {
			len = 1 / len;
			x0 *= len;
			x1 *= len;
			x2 *= len;
		}
		y0 = z1 * x2 - z2 * x1;
		y1 = z2 * x0 - z0 * x2;
		y2 = z0 * x1 - z1 * x0;
		len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);
		if(len == 0) {
			y0 = 0;
			y1 = 0;
			y2 = 0;
		} else {
			len = 1 / len;
			y0 *= len;
			y1 *= len;
			y2 *= len;
		}
		this1[index] = x0;
		this1[index + 1] = y0;
		this1[index + 2] = z0;
		this1[index + 3] = 0;
		this1[index + 4] = x1;
		this1[index + 5] = y1;
		this1[index + 6] = z1;
		this1[index + 7] = 0;
		this1[index + 8] = x2;
		this1[index + 9] = y2;
		this1[index + 10] = z2;
		this1[index + 11] = 0;
		this1[index + 12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
		this1[index + 13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
		this1[index + 14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
		this1[index + 15] = 1;
	}
	return this1;
};
taurine.math._Mat4Array.Mat4Array_Impl_.eq = function(this1,index,b,bIndex) {
	index <<= 4;
	bIndex <<= 4;
	if(this1 == b && index == bIndex) return true; else if(this1 == null || b == null) return false;
	var _g = 0;
	while(_g < 16) {
		var i = _g++;
		var v = this1[index + i] - b[bIndex + i];
		if(v != 0 && (v < 0 && v < -1e-06) || v > 0.000001) return false;
	}
	return true;
};
taurine.math._Mat4Array.Mat4Array_Impl_.toString = function(this1) {
	var buf = new StringBuf();
	var len = this1.length >>> 4;
	if(len << 4 > this1.length) len--;
	buf.b += "mat4[";
	if(len == null) buf.b += "null"; else buf.b += "" + len;
	buf.b += "]\n{";
	var support = [];
	var maxn = 0;
	var _g = 0;
	while(_g < len) {
		var i = _g++;
		buf.b += "\n\t";
		buf.b += "mat4(";
		var _g1 = 0;
		while(_g1 < 16) {
			var j = _g1++;
			var s = support[j] = this1[(i << 4) + j] + "";
			if(s.length > maxn) maxn = s.length;
		}
		var fst = true;
		var _g11 = 0;
		while(_g11 < 4) {
			var j1 = _g11++;
			if(fst) fst = false; else buf.b += "\n\t     ";
			var _g2 = 0;
			while(_g2 < 4) {
				var k = _g2++;
				buf.add(StringTools.rpad(support[(j1 << 2) + k]," ",maxn));
			}
		}
		buf.b += "), ";
	}
	buf.b += "\n}";
	return buf.b;
};
taurine.math._Mat4Array.Mat4Array_Impl_.getRaw = function(this1,idx) {
	return this1[idx];
};
taurine.math._Mat4Array.Mat4Array_Impl_.setRaw = function(this1,idx,v) {
	return this1[idx] = v;
};
taurine.math._Quat = {};
taurine.math._Quat.Quat_Impl_ = function() { };
taurine.math._Quat.Quat_Impl_.__name__ = true;
taurine.math._Quat.Quat_Impl_.set = function(this1,x,y,z,w) {
	this1[0] = x;
	this1[1] = y;
	this1[2] = z;
	this1[3] = w;
	return this1;
};
taurine.math._Quat.Quat_Impl_.toString = function(this1) {
	var buf = new StringBuf();
	buf.b += "quat(";
	var fst = true;
	var _g = 0;
	while(_g < 4) {
		var j = _g++;
		if(fst) fst = false; else buf.b += ", ";
		buf.b += Std.string(this1[j]);
	}
	buf.b += ")";
	return buf.b;
};
taurine.math._Quat.Quat_Impl_.getRaw = function(this1,idx) {
	return this1[idx];
};
taurine.math._Quat.Quat_Impl_.setRaw = function(this1,idx,v) {
	return this1[idx] = v;
};
taurine.math._QuatArray = {};
taurine.math._QuatArray.QuatArray_Impl_ = function() { };
taurine.math._QuatArray.QuatArray_Impl_.__name__ = true;
taurine.math._QuatArray.QuatArray_Impl_.cloneAt = function(this1,index) {
	var out;
	var data = new Float32Array(4);
	out = data;
	index <<= 2;
	out[0] = this1[index];
	out[1] = this1[index + 1];
	out[2] = this1[index + 2];
	out[3] = this1[index + 3];
	return out;
};
taurine.math._QuatArray.QuatArray_Impl_.rotationTov = function(this1,index,a,aIndex,b,bIndex) {
	bIndex <<= 2;
	aIndex <<= 2;
	var ax = a[aIndex];
	var ay = a[aIndex + 1];
	var az = a[aIndex + 2];
	var bx = b[bIndex];
	var by = b[bIndex + 1];
	var bz = b[bIndex + 2];
	return taurine.math._QuatArray.QuatArray_Impl_.rotationTo(this1,index,ax,ay,az,bx,by,bz);
};
taurine.math._QuatArray.QuatArray_Impl_.rotationTo = function(this1,index,ax,ay,az,bx,by,bz) {
	var dot = bx * ax + by * ay + bz * az;
	index <<= 2;
	if(dot < -0.999999) {
		var tmp0 = .0;
		var tmp1 = -az;
		var tmp2 = ay;
		var tmplen = Math.sqrt(tmp1 * tmp1 + tmp2 * tmp2);
		if(tmplen < 0.000001) {
			tmp0 = az;
			tmp1 = 0;
			tmp2 = -ax;
		}
		var len = tmp0 * tmp0 + tmp1 * tmp1 + tmp2 * tmp2;
		if(len > 0) {
			len = 1 / Math.sqrt(len);
			tmp0 = tmp0 * len;
			tmp1 = tmp1 * len;
			tmp2 = tmp2 * len;
		}
		var r = 1.57079632679489656;
		var s = Math.sin(r);
		this1[index] = s * tmp0;
		this1[index + 1] = s * tmp1;
		this1[index + 2] = s * tmp2;
		var val = Math.cos(r);
		this1[index + 3] = val;
		return this1;
	} else if(dot > 0.999999) {
		var val1;
		var val2 = this1[index + 2] = 0;
		val1 = this1[index + 1] = val2;
		this1[index] = val1;
		this1[index + 3] = 1;
		return this1;
	} else {
		var tmp01 = ay * bz - az * by;
		var tmp11 = az * bx - ax * bz;
		var tmp21 = ax * by - ay * bx;
		this1[index] = tmp01;
		this1[index + 1] = tmp11;
		this1[index + 2] = tmp21;
		this1[index + 3] = 1 + dot;
		return taurine.math._QuatArray.QuatArray_Impl_.normalize_internal(this1,index,this1,index);
	}
};
taurine.math._QuatArray.QuatArray_Impl_.setAxes = function(this1,index,view,vindex,right,rindex,up,uindex) {
	index <<= 2;
	vindex <<= 2;
	rindex <<= 2;
	uindex <<= 2;
	var m0 = right[rindex];
	var m3 = right[rindex + 1];
	var m6 = right[rindex + 2];
	var m1 = up[uindex];
	var m4 = up[uindex + 1];
	var m7 = up[uindex + 2];
	var m2 = view[vindex];
	var m5 = view[vindex + 1];
	var m8 = view[vindex + 2];
	taurine.math._QuatArray.QuatArray_Impl_.fromMat3_internal(this1,index,m0,m1,m2,m3,m4,m5,m6,m7,m8);
	return taurine.math._QuatArray.QuatArray_Impl_.normalize_internal(this1,index,this1,index);
};
taurine.math._QuatArray.QuatArray_Impl_.fromMat3_internal = function(this1,index,m0,m1,m2,m3,m4,m5,m6,m7,m8) {
	var fTrace = m0 + m4 + m8;
	if(fTrace > 0.0) {
		var fRoot = Math.sqrt(fTrace + 1.0);
		this1[index + 3] = 0.5 * fRoot;
		fRoot = 0.5 / fRoot;
		this1[index] = (m7 - m5) * fRoot;
		this1[index + 1] = (m2 - m6) * fRoot;
		this1[index + 2] = (m3 - m1) * fRoot;
	} else {
		var i = 0;
		if(m4 > m0) {
			i = 1;
			if(m8 > m4) i = 2;
		} else if(m8 > m0) i = 2;
		var j = (i + 1) % 3;
		var k = (i + 2) % 3;
		var mi3i;
		var mj3j;
		var mk3k;
		var mk3j;
		var mj3k;
		var mj3i;
		var mi3j;
		var mk3i;
		var mi3k;
		switch(i) {
		case 0:
			mi3i = m0;
			mj3j = m4;
			mk3k = m8;
			mk3j = m7;
			mj3k = m5;
			mj3i = m3;
			mi3j = m1;
			mk3i = m6;
			mi3k = m2;
			break;
		case 1:
			mi3i = m4;
			mj3j = m8;
			mk3k = m0;
			mk3j = m2;
			mj3k = m6;
			mj3i = m7;
			mi3j = m5;
			mk3i = m1;
			mi3k = m3;
			break;
		default:
			mi3i = m8;
			mj3j = m0;
			mk3k = m4;
			mk3j = m3;
			mj3k = m1;
			mj3i = m2;
			mi3j = m6;
			mk3i = m5;
			mi3k = m7;
		}
		var fRoot1 = Math.sqrt(mi3i - mj3j - mk3k + 1.0);
		this1[index + i] = 0.5 * fRoot1;
		fRoot1 = 0.5 / fRoot1;
		this1[index + 3] = (mk3j - mj3k) * fRoot1;
		this1[index + j] = (mj3i + mi3j) * fRoot1;
		this1[index + k] = (mk3i + mi3k) * fRoot1;
	}
	return this1;
};
taurine.math._QuatArray.QuatArray_Impl_.copy = function(this1) {
	var len = this1.length;
	var ret;
	var this2;
	var data = new Float32Array(len >>> 2 << 2);
	this2 = data;
	ret = this2;
	ret.set(this1.subarray(0,len),0);
	return ret;
};
taurine.math._QuatArray.QuatArray_Impl_.copyTo = function(this1,index,out,outIndex) {
	index <<= 2;
	outIndex = outIndex << 2;
	out[outIndex] = this1[index];
	out[outIndex + 1] = this1[index + 1];
	out[outIndex + 2] = this1[index + 2];
	out[outIndex + 3] = this1[index + 3];
	return out;
};
taurine.math._QuatArray.QuatArray_Impl_.setAt = function(this1,index,x,y,z,w) {
	index <<= 2;
	this1[index] = x;
	this1[index + 1] = y;
	this1[index + 2] = z;
	this1[index + 3] = w;
	return this1;
};
taurine.math._QuatArray.QuatArray_Impl_.identity = function(this1,index) {
	index = index << 2;
	var val;
	var val1 = this1[index + 2] = 0;
	val = this1[index + 1] = val1;
	this1[index] = val;
	this1[index + 3] = 1;
	return this1;
};
taurine.math._QuatArray.QuatArray_Impl_.setAxisAngle = function(this1,index,axisX,axisY,axisZ,rad) {
	index <<= 2;
	var rad1 = rad * .5;
	var s = Math.sin(rad1);
	this1[index] = s * axisX;
	this1[index + 1] = s * axisY;
	this1[index + 2] = s * axisZ;
	var val = Math.cos(rad1);
	this1[index + 3] = val;
	return this1;
};
taurine.math._QuatArray.QuatArray_Impl_.mul_impl = function(this1,index,b,bIndex,out,outIndex) {
	if(out == null) {
		out = this1;
		outIndex = index;
	}
	index <<= 2;
	bIndex <<= 2;
	outIndex = outIndex << 2;
	var ax = this1[index];
	var ay = this1[index + 1];
	var az = this1[index + 2];
	var aw = this1[index + 3];
	var bx = b[bIndex];
	var by = b[bIndex + 1];
	var bz = b[bIndex + 2];
	var bw = b[bIndex + 3];
	out[outIndex] = ax * bw + aw * bx + ay * bz - az * by;
	out[outIndex + 1] = ay * bw + aw * by + az * bx - ax * bz;
	out[outIndex + 2] = az * bw + aw * bz + ax * by - ay * bx;
	out[outIndex + 3] = aw * bw - ax * bx - ay * by - az * bz;
	return out;
};
taurine.math._QuatArray.QuatArray_Impl_.rotateX_impl = function(this1,index,rad,out,outIndex) {
	if(out == null) {
		out = this1;
		outIndex = index;
	}
	index <<= 2;
	outIndex = outIndex << 2;
	var rad1 = rad * .5;
	var ax = this1[index];
	var ay = this1[index + 1];
	var az = this1[index + 2];
	var aw = this1[index + 3];
	var bx = Math.sin(rad1);
	var bw = Math.cos(rad1);
	out[outIndex] = ax * bw + aw * bx;
	out[outIndex + 1] = ay * bw + az * bx;
	out[outIndex + 2] = az * bw - ay * bx;
	out[outIndex + 3] = aw * bw - ax * bx;
	return out;
};
taurine.math._QuatArray.QuatArray_Impl_.rotateY_impl = function(this1,index,rad,out,outIndex) {
	if(out == null) {
		out = this1;
		outIndex = index;
	}
	index <<= 2;
	outIndex = outIndex << 2;
	var rad1 = rad * .5;
	var ax = this1[index];
	var ay = this1[index + 1];
	var az = this1[index + 2];
	var aw = this1[index + 3];
	var by = Math.sin(rad1);
	var bw = Math.cos(rad1);
	out[outIndex] = ax * bw - az * by;
	out[outIndex + 1] = ay * bw + aw * by;
	out[outIndex + 2] = az * bw + ax * by;
	out[outIndex + 3] = aw * bw - ay * by;
	return out;
};
taurine.math._QuatArray.QuatArray_Impl_.rotateZ_impl = function(this1,index,rad,out,outIndex) {
	if(out == null) {
		out = this1;
		outIndex = index;
	}
	index <<= 2;
	outIndex = outIndex << 2;
	var rad1 = rad * .5;
	var ax = this1[index];
	var ay = this1[index + 1];
	var az = this1[index + 2];
	var aw = this1[index + 3];
	var bz = Math.sin(rad1);
	var bw = Math.cos(rad1);
	out[outIndex] = ax * bw + ay * bz;
	out[outIndex + 1] = ay * bw - ax * bz;
	out[outIndex + 2] = az * bw + aw * bz;
	out[outIndex + 3] = aw * bw - az * bz;
	return out;
};
taurine.math._QuatArray.QuatArray_Impl_.calculateW = function(this1,index) {
	index <<= 2;
	var x = this1[index];
	var y = this1[index + 1];
	var z = this1[index + 2];
	var val = 1.0 - x * x - y * y - z * z;
	var val1 = -Math.sqrt(val < 0?-val:val);
	this1[index + 3] = val1;
	return this1;
};
taurine.math._QuatArray.QuatArray_Impl_.slerp_impl = function(this1,index,to,toIndex,amount,out,outIndex) {
	if(out == null) {
		out = this1;
		outIndex = index;
	}
	index <<= 2;
	toIndex <<= 2;
	outIndex = outIndex << 2;
	var ax = this1[index];
	var ay = this1[index + 1];
	var az = this1[index + 2];
	var aw = this1[index + 3];
	var bx = to[toIndex];
	var by = to[toIndex + 1];
	var bz = to[toIndex + 2];
	var bw = to[toIndex + 3];
	var omega;
	var cosom;
	var sinom;
	var scale0;
	var scale1;
	cosom = ax * bx + ay * by + az * bz + aw * bw;
	if(cosom < 0.0) {
		cosom = -cosom;
		bx = -bx;
		by = -by;
		bz = -bz;
		bw = -bw;
	}
	if(1.0 - cosom > 0.000001) {
		omega = Math.acos(cosom);
		sinom = Math.sin(omega);
		scale0 = Math.sin((1.0 - amount) * omega) / sinom;
		scale1 = Math.sin(amount * omega) / sinom;
	} else {
		scale0 = 1.0 - amount;
		scale1 = amount;
	}
	out[outIndex] = scale0 * ax + scale1 * bx;
	out[outIndex + 1] = scale0 * ay + scale1 * by;
	out[outIndex + 2] = scale0 * az + scale1 * bz;
	out[outIndex + 3] = scale0 * aw + scale1 * bw;
	return out;
};
taurine.math._QuatArray.QuatArray_Impl_.invert_impl = function(this1,index,out,outIndex) {
	if(out == null) {
		out = this1;
		outIndex = index;
	}
	index <<= 2;
	outIndex = outIndex << 2;
	var a0 = this1[index];
	var a1 = this1[index + 1];
	var a2 = this1[index + 2];
	var a3 = this1[index + 3];
	var dot = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3;
	if(dot == 0) {
		var v;
		var v1;
		var v2 = out[outIndex + 3] = 0;
		v1 = out[outIndex + 2] = v2;
		v = out[outIndex + 1] = v1;
		out[outIndex] = v;
		return out;
	}
	var invDot = 1.0 / dot;
	out[outIndex] = -a0 * invDot;
	out[outIndex + 1] = -a1 * invDot;
	out[outIndex + 2] = -a2 * invDot;
	out[outIndex + 3] = a3 * invDot;
	return out;
};
taurine.math._QuatArray.QuatArray_Impl_.conjugate_impl = function(this1,index,out,outIndex) {
	if(out == null) {
		out = this1;
		outIndex = index;
	}
	index <<= 2;
	outIndex = outIndex << 2;
	out[outIndex] = -this1[index];
	out[outIndex + 1] = -this1[index + 1];
	out[outIndex + 2] = -this1[index + 2];
	out[outIndex + 3] = this1[index + 3];
	return out;
};
taurine.math._QuatArray.QuatArray_Impl_.normalize_internal = function(this1,index,out,outIndex) {
	var out1 = out;
	var x = this1[index];
	var y = this1[index + 1];
	var z = this1[index + 2];
	var w = this1[index + 3];
	var len = x * x + y * y + z * z + w * w;
	if(len > 0) {
		len = 1 / Math.sqrt(len);
		out1[outIndex] = x * len;
		out1[outIndex + 1] = y * len;
		out1[outIndex + 2] = z * len;
		out1[outIndex + 3] = w * len;
	}
	return out;
};
taurine.math._QuatArray.QuatArray_Impl_.toString = function(this1) {
	var buf = new StringBuf();
	var len = this1.length >>> 2;
	if(len << 2 > this1.length) len--;
	buf.b += "vec4[";
	if(len == null) buf.b += "null"; else buf.b += "" + len;
	buf.b += "]\n{";
	var _g = 0;
	while(_g < len) {
		var i = _g++;
		buf.b += "\n\t";
		buf.b += "vec4(";
		var fst = true;
		var _g1 = 0;
		while(_g1 < 4) {
			var j = _g1++;
			if(fst) fst = false; else buf.b += ", ";
			buf.b += Std.string(this1[(i << 2) + j]);
		}
		buf.b += "), ";
	}
	buf.b += "\n}";
	return buf.b;
};
taurine.math._QuatArray.QuatArray_Impl_.getRaw = function(this1,idx) {
	return this1[idx];
};
taurine.math._QuatArray.QuatArray_Impl_.setRaw = function(this1,idx,v) {
	return this1[idx] = v;
};
taurine.math._Rad = {};
taurine.math._Rad.Rad_Impl_ = function() { };
taurine.math._Rad.Rad_Impl_.__name__ = true;
taurine.math._Rad.Rad_Impl_._new = function(f) {
	return f;
};
taurine.math._Rad.Rad_Impl_.fromDegrees = function(deg) {
	return deg * 0.0174532925199432955;
};
taurine.math._Rad.Rad_Impl_.toDeg = function(this1) {
	return this1 * 57.2957795130823229;
};
taurine.math._Rad.Rad_Impl_["float"] = function(this1) {
	return this1;
};
taurine.math._Rad.Rad_Impl_.cos = function(this1) {
	return Math.cos(this1);
};
taurine.math._Rad.Rad_Impl_.sin = function(this1) {
	return Math.sin(this1);
};
taurine.math._Rad.Rad_Impl_.tan = function(this1) {
	return Math.tan(this1);
};
taurine.math._SingleVector = {};
taurine.math._SingleVector.SingleVector_Impl_ = function() { };
taurine.math._SingleVector.SingleVector_Impl_.__name__ = true;
taurine.math._SingleVector.SingleVector_Impl_._new = function(data) {
	return data;
};
taurine.math._SingleVector.SingleVector_Impl_.get_length = function(this1) {
	return this1.length;
};
taurine.math._SingleVector.SingleVector_Impl_.alloc = function(len) {
	var data = new Float32Array(len);
	return data;
};
taurine.math._SingleVector.SingleVector_Impl_.get = function(this1,idx) {
	return this1[idx];
};
taurine.math._SingleVector.SingleVector_Impl_.set = function(this1,idx,val) {
	return this1[idx] = val;
};
taurine.math._SingleVector.SingleVector_Impl_.getData = function(this1) {
	return this1;
};
taurine.math._SingleVector.SingleVector_Impl_.blit = function(src,srcPos,dest,destPos,len) {
	dest.set(src.subarray(srcPos,srcPos + len),destPos);
};
taurine.math._Vec2 = {};
taurine.math._Vec2.Vec2_Impl_ = function() { };
taurine.math._Vec2.Vec2_Impl_.__name__ = true;
taurine.math._Vec2.Vec2_Impl_.clone = function(this1) {
	var x = this1[0];
	var y = this1[1];
	var ret;
	var data = new Float32Array(2);
	ret = data;
	ret[0] = x;
	ret[1] = y;
	return ret;
};
taurine.math._Vec2.Vec2_Impl_.copyTo = function(this1,dest) {
	var x = this1[0];
	var y = this1[1];
	dest[0] = x;
	dest[1] = y;
	return dest;
};
taurine.math._Vec2.Vec2_Impl_.set = function(this1,x,y) {
	this1[0] = x;
	this1[1] = y;
	return this1;
};
taurine.math._Vec2.Vec2_Impl_.add = function(this1,b,out) {
	if(taurine.math._Vec2.Vec2_Impl_.eq(out,null)) out = this1;
	var x = this1[0];
	var y = this1[1];
	var b0 = b[0];
	var b1 = b[1];
	out[0] = x + b0;
	out[1] = y + b1;
	return out;
};
taurine.math._Vec2.Vec2_Impl_.sub = function(this1,b,out) {
	if(taurine.math._Vec2.Vec2_Impl_.eq(out,null)) out = this1;
	var x = this1[0];
	var y = this1[1];
	var b0 = b[0];
	var b1 = b[1];
	out[0] = x - b0;
	out[1] = y - b1;
	return out;
};
taurine.math._Vec2.Vec2_Impl_.mul = function(this1,b,out) {
	if(taurine.math._Vec2.Vec2_Impl_.eq(out,null)) out = this1;
	var x = this1[0];
	var y = this1[1];
	var b0 = b[0];
	var b1 = b[1];
	out[0] = x * b0;
	out[1] = y * b1;
	return out;
};
taurine.math._Vec2.Vec2_Impl_.div = function(this1,b,out) {
	if(taurine.math._Vec2.Vec2_Impl_.eq(out,null)) out = this1;
	var x = this1[0];
	var y = this1[1];
	var b0 = b[0];
	var b1 = b[1];
	out[0] = x / b0;
	out[1] = y / b1;
	return out;
};
taurine.math._Vec2.Vec2_Impl_.$length = function(this1) {
	var x = this1[0];
	var y = this1[1];
	return Math.sqrt(x * x + y * y);
};
taurine.math._Vec2.Vec2_Impl_.sqrlen = function(this1) {
	var x = this1[0];
	var y = this1[1];
	return x * x + y * y;
};
taurine.math._Vec2.Vec2_Impl_.dot = function(this1,b) {
	var x = this1[0];
	var y = this1[1];
	return b[0] * x + b[1] * y;
};
taurine.math._Vec2.Vec2_Impl_.lerp = function(this1,to,amount,out) {
	if(taurine.math._Vec2.Vec2_Impl_.eq(out,null)) out = this1;
	var x = this1[0];
	var y = this1[1];
	var bx = to[0];
	var by = to[1];
	out[0] = x + amount * (bx - x);
	out[1] = y + amount * (by - y);
	return out;
};
taurine.math._Vec2.Vec2_Impl_.transformMat4 = function(this1,m,out) {
	var this2 = taurine.math._Vec2Array.Vec2Array_Impl_.transformMat4_impl(this1,0,m,0,out,0);
	return this2;
};
taurine.math._Vec2.Vec2_Impl_.toString = function(this1) {
	var buf = new StringBuf();
	buf.b += "vec4(";
	var fst = true;
	var _g = 0;
	while(_g < 2) {
		var j = _g++;
		if(fst) fst = false; else buf.b += ", ";
		buf.b += Std.string(this1[j]);
	}
	buf.b += ")";
	return buf.b;
};
taurine.math._Vec2.Vec2_Impl_.eq = function(this1,b) {
	return this1 == b || this1 != null && !taurine.math._Vec2.Vec2_Impl_.eq(b,null) && b[0] == this1[0] && b[1] == this1[1];
};
taurine.math._Vec2.Vec2_Impl_.getRaw = function(this1,idx) {
	return this1[idx];
};
taurine.math._Vec2.Vec2_Impl_.setRaw = function(this1,idx,v) {
	return this1[idx] = v;
};
taurine.math._Vec2Array = {};
taurine.math._Vec2Array.Vec2Array_Impl_ = function() { };
taurine.math._Vec2Array.Vec2Array_Impl_.__name__ = true;
taurine.math._Vec2Array.Vec2Array_Impl_.copy = function(this1) {
	var len = this1.length;
	var ret;
	var this2;
	var data = new Float32Array(len >>> 1 << 1);
	this2 = data;
	ret = this2;
	ret.set(this1.subarray(0,len),0);
	return ret;
};
taurine.math._Vec2Array.Vec2Array_Impl_.cloneAt = function(this1,index) {
	var out;
	var data = new Float32Array(2);
	out = data;
	index <<= 1;
	out[0] = this1[index];
	out[1] = this1[index + 1];
	return out;
};
taurine.math._Vec2Array.Vec2Array_Impl_.copyTo = function(this1,index,out,outIndex) {
	index <<= 1;
	outIndex = outIndex << 1;
	out[outIndex] = this1[index];
	out[outIndex + 1] = this1[index + 1];
	return out;
};
taurine.math._Vec2Array.Vec2Array_Impl_.setAt = function(this1,index,x,y,z) {
	index <<= 1;
	this1[index] = x;
	this1[index + 1] = y;
	return this1;
};
taurine.math._Vec2Array.Vec2Array_Impl_.add_impl = function(this1,index,b,bIndex,out,outIndex) {
	if(out == null) {
		out = this1;
		outIndex = index;
	}
	index <<= 1;
	bIndex <<= 1;
	outIndex = outIndex << 1;
	out[outIndex] = this1[index] + b[bIndex];
	out[outIndex + 1] = this1[index + 1] + b[bIndex + 1];
	return out;
};
taurine.math._Vec2Array.Vec2Array_Impl_.sub_impl = function(this1,index,b,bIndex,out,outIndex) {
	if(out == null) {
		out = this1;
		outIndex = index;
	}
	index <<= 1;
	bIndex <<= 1;
	outIndex = outIndex << 1;
	out[outIndex] = this1[index] - b[bIndex];
	out[outIndex + 1] = this1[index + 1] - b[bIndex + 1];
	return out;
};
taurine.math._Vec2Array.Vec2Array_Impl_.mul_impl = function(this1,index,b,bIndex,out,outIndex) {
	if(out == null) {
		out = this1;
		outIndex = index;
	}
	index <<= 1;
	bIndex <<= 1;
	outIndex = outIndex << 1;
	out[outIndex] = this1[index] * b[bIndex];
	out[outIndex + 1] = this1[index + 1] * b[bIndex + 1];
	return out;
};
taurine.math._Vec2Array.Vec2Array_Impl_.div_impl = function(this1,index,b,bIndex,out,outIndex) {
	if(out == null) {
		out = this1;
		outIndex = index;
	}
	index <<= 1;
	bIndex <<= 1;
	outIndex = outIndex << 1;
	out[outIndex] = this1[index] / b[bIndex];
	out[outIndex + 1] = this1[index + 1] / b[bIndex + 1];
	return out;
};
taurine.math._Vec2Array.Vec2Array_Impl_.maxFrom_impl = function(this1,index,b,bIndex,out,outIndex) {
	if(out == null) {
		out = this1;
		outIndex = index;
	}
	index <<= 1;
	bIndex <<= 1;
	outIndex = outIndex << 1;
	var t0 = this1[index];
	var t1 = this1[index + 1];
	var b0 = b[bIndex];
	var b1 = b[bIndex + 1];
	if(t0 > b0) out[outIndex] = t0; else out[outIndex] = b0;
	if(t1 > b1) out[outIndex + 1] = t1; else out[outIndex + 1] = b1;
	return out;
};
taurine.math._Vec2Array.Vec2Array_Impl_.minFrom_impl = function(this1,index,b,bIndex,out,outIndex) {
	if(out == null) {
		out = this1;
		outIndex = index;
	}
	index <<= 1;
	bIndex <<= 1;
	outIndex = outIndex << 1;
	var t0 = this1[index];
	var t1 = this1[index + 1];
	var b0 = b[bIndex];
	var b1 = b[bIndex + 1];
	if(t0 < b0) out[outIndex] = t0; else out[outIndex] = b0;
	if(t1 < b1) out[outIndex + 1] = t1; else out[outIndex + 1] = b1;
	return out;
};
taurine.math._Vec2Array.Vec2Array_Impl_.max = function(this1,startIndex,endIndex,out,outIndex) {
	if(endIndex == null) endIndex = -1;
	if(startIndex == null) startIndex = 0;
	outIndex <<= 1;
	var mx;
	var my;
	mx = my = -1. / 0;
	var len = this1.length >>> 0;
	if(len < 0) return null;
	if(endIndex < 0) endIndex = len + endIndex + 1;
	if(endIndex > len) endIndex = len;
	var _g = startIndex;
	while(_g < endIndex) {
		var i = _g++;
		var i1 = i << 1;
		var tmp = this1[i1];
		if(mx < tmp) mx = tmp;
		tmp = this1[i1 + 1];
		if(my < tmp) my = tmp;
	}
	out[outIndex] = mx;
	out[outIndex + 1] = my;
	return out;
};
taurine.math._Vec2Array.Vec2Array_Impl_.min = function(this1,startIndex,endIndex,out,outIndex) {
	if(endIndex == null) endIndex = -1;
	if(startIndex == null) startIndex = 0;
	outIndex <<= 1;
	var mx;
	var my;
	mx = my = -1. / 0;
	var len = this1.length >>> 0;
	if(len < 0) return null;
	if(endIndex < 0) endIndex = len + endIndex + 1;
	if(endIndex > len) endIndex = len;
	var _g = startIndex;
	while(_g < endIndex) {
		var i = _g++;
		var tmp = this1[i << 1];
		if(mx > tmp) mx = tmp;
		tmp = this1[(i << 1) + 1];
		if(my > tmp) my = tmp;
	}
	out[outIndex] = mx;
	out[outIndex + 1] = my;
	return out;
};
taurine.math._Vec2Array.Vec2Array_Impl_.scale_impl = function(this1,index,scalar,out,outIndex) {
	if(out == null) {
		out = this1;
		outIndex = index;
	}
	index <<= 1;
	outIndex = outIndex << 1;
	out[outIndex] = this1[index] * scalar;
	out[outIndex + 1] = this1[index + 1] * scalar;
	return out;
};
taurine.math._Vec2Array.Vec2Array_Impl_.dist = function(this1,index,b,bIndex) {
	index <<= 1;
	bIndex <<= 1;
	var a0 = this1[index];
	var a1 = this1[index + 1];
	var b0 = b[bIndex];
	var b1 = b[bIndex + 1];
	a0 -= b0;
	a1 -= b1;
	return Math.sqrt(a0 * a0 + a1 * a1);
};
taurine.math._Vec2Array.Vec2Array_Impl_.sqrdist = function(this1,index,b,bIndex) {
	index <<= 1;
	bIndex <<= 1;
	var a0 = this1[index];
	var a1 = this1[index + 1];
	var b0 = b[bIndex];
	var b1 = b[bIndex + 1];
	a0 -= b0;
	a1 -= b1;
	return a0 * a0 + a1 * a1;
};
taurine.math._Vec2Array.Vec2Array_Impl_.lengthAt = function(this1,index) {
	index <<= 1;
	var x = this1[index];
	var y = this1[index + 1];
	return Math.sqrt(x * x + y * y);
};
taurine.math._Vec2Array.Vec2Array_Impl_.sqrlenAt = function(this1,index) {
	index <<= 1;
	var x = this1[index];
	var y = this1[index + 1];
	return x * x + y * y;
};
taurine.math._Vec2Array.Vec2Array_Impl_.neg_impl = function(this1,index,out,outIndex) {
	if(out == null) {
		out = this1;
		outIndex = index;
	}
	index <<= 1;
	outIndex = outIndex << 1;
	var x = this1[index];
	var y = this1[index + 1];
	out[outIndex] = -x;
	out[outIndex + 1] = -y;
	return out;
};
taurine.math._Vec2Array.Vec2Array_Impl_.normalize_impl = function(this1,index,out,outIndex) {
	if(out == null) {
		out = this1;
		outIndex = index;
	}
	index <<= 1;
	outIndex = outIndex << 1;
	var x = this1[index];
	var y = this1[index + 1];
	var len = x * x + y * y;
	if(len > 0) {
		len = 1 / Math.sqrt(len);
		out[outIndex] = x * len;
		out[outIndex + 1] = y * len;
	}
	return out;
};
taurine.math._Vec2Array.Vec2Array_Impl_.dot = function(this1,index,b,bIndex) {
	index <<= 1;
	bIndex <<= 1;
	var x = this1[index];
	var y = this1[index + 1];
	return b[bIndex] * x + b[bIndex + 1] * y;
};
taurine.math._Vec2Array.Vec2Array_Impl_.lerp_impl = function(this1,index,to,toIndex,amount,out,outIndex) {
	if(out == null) {
		out = this1;
		outIndex = index;
	}
	index <<= 1;
	outIndex = outIndex << 1;
	toIndex <<= 1;
	var x = this1[index];
	var y = this1[index + 1];
	var bx = to[toIndex];
	var by = to[toIndex + 1];
	out[outIndex] = x + amount * (bx - x);
	out[outIndex + 1] = y + amount * (by - y);
	return out;
};
taurine.math._Vec2Array.Vec2Array_Impl_.transformMat2D_impl = function(this1,index,m,mIndex,out,outIndex) {
	if(out == null) {
		out = this1;
		outIndex = index;
	}
	index <<= 1;
	outIndex = outIndex << 1;
	mIndex <<= 3;
	var x = this1[index];
	var y = this1[index + 1];
	out[outIndex] = m[mIndex] * x + m[mIndex + 2] * y + m[mIndex + 4];
	out[outIndex + 1] = m[mIndex + 1] * x + m[mIndex + 3] * y + m[mIndex + 4];
	return out;
};
taurine.math._Vec2Array.Vec2Array_Impl_.transformMat3_impl = function(this1,index,m,mIndex,out,outIndex) {
	if(out == null) {
		out = this1;
		outIndex = index;
	}
	index <<= 1;
	outIndex = outIndex << 1;
	mIndex <<= 4;
	var x = this1[index];
	var y = this1[index + 1];
	var m0 = m[mIndex];
	var m1 = m[mIndex + 1];
	var m3 = m[mIndex + 3];
	var m4 = m[mIndex + 4];
	var m6 = m[mIndex + 6];
	var m7 = m[mIndex + 7];
	out[outIndex] = m0 * x + m3 * y + m6;
	out[outIndex + 1] = m1 * x + m4 * y + m7;
	return out;
};
taurine.math._Vec2Array.Vec2Array_Impl_.transformMat4_impl = function(this1,index,m,mIndex,out,outIndex) {
	if(out == null) {
		out = this1;
		outIndex = index;
	}
	index <<= 1;
	outIndex = outIndex << 1;
	mIndex <<= 4;
	var x = this1[index];
	var y = this1[index + 1];
	var z = this1[index + 2];
	var m0 = m[mIndex];
	var m1 = m[mIndex + 1];
	var m4 = m[mIndex + 4];
	var m5 = m[mIndex + 5];
	var m12 = m[mIndex + 12];
	var m13 = m[mIndex + 13];
	out[outIndex] = m0 * x + m4 * y + m12;
	out[outIndex + 1] = m1 * x + m5 * y + m13;
	return out;
};
taurine.math._Vec2Array.Vec2Array_Impl_.eq = function(this1,index,b,bIndex) {
	index <<= 1;
	bIndex <<= 1;
	return this1 == b && index == bIndex || this1 != null && b != null && b[bIndex] == this1[index] && b[bIndex + 1] == this1[index + 1];
};
taurine.math._Vec2Array.Vec2Array_Impl_.toString = function(this1) {
	var buf = new StringBuf();
	var len = this1.length >>> 1;
	if(len << 1 > this1.length) len--;
	buf.b += "vec3[";
	if(len == null) buf.b += "null"; else buf.b += "" + len;
	buf.b += "]\n{";
	var _g = 0;
	while(_g < len) {
		var i = _g++;
		buf.b += "\n\t";
		buf.b += "vec3(";
		var fst = true;
		var _g1 = 0;
		while(_g1 < 3) {
			var j = _g1++;
			if(fst) fst = false; else buf.b += ", ";
			buf.b += Std.string(this1[(i << 1) + j]);
		}
		buf.b += "), ";
	}
	buf.b += "\n}";
	return buf.b;
};
taurine.math._Vec2Array.Vec2Array_Impl_.getRaw = function(this1,idx) {
	return this1[idx];
};
taurine.math._Vec2Array.Vec2Array_Impl_.setRaw = function(this1,idx,v) {
	return this1[idx] = v;
};
taurine.math._Vec3 = {};
taurine.math._Vec3.Vec3_Impl_ = function() { };
taurine.math._Vec3.Vec3_Impl_.__name__ = true;
taurine.math._Vec3.Vec3_Impl_.clone = function(this1) {
	var x = this1[0];
	var y = this1[1];
	var z = this1[2];
	var ret;
	var data = new Float32Array(3);
	ret = data;
	ret[0] = x;
	ret[1] = y;
	ret[2] = z;
	return ret;
};
taurine.math._Vec3.Vec3_Impl_.copyTo = function(this1,dest) {
	var x = this1[0];
	var y = this1[1];
	var z = this1[2];
	dest[0] = x;
	dest[1] = y;
	dest[2] = z;
	return dest;
};
taurine.math._Vec3.Vec3_Impl_.set = function(this1,x,y,z) {
	this1[0] = x;
	this1[1] = y;
	this1[2] = z;
	return this1;
};
taurine.math._Vec3.Vec3_Impl_.add = function(this1,b,out) {
	if(taurine.math._Vec3.Vec3_Impl_.eq(out,null)) out = this1;
	var x = this1[0];
	var y = this1[1];
	var z = this1[2];
	var b0 = b[0];
	var b1 = b[1];
	var b2 = b[2];
	out[0] = x + b0;
	out[1] = y + b1;
	out[2] = z + b2;
	return out;
};
taurine.math._Vec3.Vec3_Impl_.sub = function(this1,b,out) {
	if(taurine.math._Vec3.Vec3_Impl_.eq(out,null)) out = this1;
	var x = this1[0];
	var y = this1[1];
	var z = this1[2];
	var b0 = b[0];
	var b1 = b[1];
	var b2 = b[2];
	out[0] = x - b0;
	out[1] = y - b1;
	out[2] = z - b2;
	return out;
};
taurine.math._Vec3.Vec3_Impl_.mul = function(this1,b,out) {
	if(taurine.math._Vec3.Vec3_Impl_.eq(out,null)) out = this1;
	var x = this1[0];
	var y = this1[1];
	var z = this1[2];
	var b0 = b[0];
	var b1 = b[1];
	var b2 = b[2];
	out[0] = x * b0;
	out[1] = y * b1;
	out[2] = z * b2;
	return out;
};
taurine.math._Vec3.Vec3_Impl_.div = function(this1,b,out) {
	if(taurine.math._Vec3.Vec3_Impl_.eq(out,null)) out = this1;
	var x = this1[0];
	var y = this1[1];
	var z = this1[2];
	var b0 = b[0];
	var b1 = b[1];
	var b2 = b[2];
	out[0] = x / b0;
	out[1] = y / b1;
	out[2] = z / b2;
	return out;
};
taurine.math._Vec3.Vec3_Impl_.$length = function(this1) {
	var x = this1[0];
	var y = this1[1];
	var z = this1[2];
	return Math.sqrt(x * x + y * y + z * z);
};
taurine.math._Vec3.Vec3_Impl_.sqrlen = function(this1) {
	var x = this1[0];
	var y = this1[1];
	var z = this1[2];
	return x * x + y * y + z * z;
};
taurine.math._Vec3.Vec3_Impl_.dot = function(this1,b) {
	var x = this1[0];
	var y = this1[1];
	var z = this1[2];
	return b[0] * x + b[1] * y + b[2] * z;
};
taurine.math._Vec3.Vec3_Impl_.lerp = function(this1,to,amount,out) {
	if(taurine.math._Vec3.Vec3_Impl_.eq(out,null)) out = this1;
	var x = this1[0];
	var y = this1[1];
	var z = this1[2];
	var bx = to[0];
	var by = to[1];
	var bz = to[2];
	out[0] = x + amount * (bx - x);
	out[1] = y + amount * (by - y);
	out[2] = z + amount * (bz - z);
	return out;
};
taurine.math._Vec3.Vec3_Impl_.eq = function(this1,b) {
	if(this1 == b) return true; else if(this1 == null || b == null) return false;
	var _g = 0;
	while(_g < 3) {
		var i = _g++;
		var v = this1[i] - b[i];
		if(v != 0 && (v < 0 && v < -1e-06) || v > 0.000001) return false;
	}
	return true;
};
taurine.math._Vec3.Vec3_Impl_.toString = function(this1) {
	var buf = new StringBuf();
	buf.b += "vec3(";
	var fst = true;
	var _g = 0;
	while(_g < 3) {
		var j = _g++;
		if(fst) fst = false; else buf.b += ", ";
		buf.b += Std.string(this1[j]);
	}
	buf.b += ")";
	return buf.b;
};
taurine.math._Vec3.Vec3_Impl_.getRaw = function(this1,idx) {
	return this1[idx];
};
taurine.math._Vec3.Vec3_Impl_.setRaw = function(this1,idx,v) {
	return this1[idx] = v;
};
taurine.math._Vec3Array = {};
taurine.math._Vec3Array.Vec3Array_Impl_ = function() { };
taurine.math._Vec3Array.Vec3Array_Impl_.__name__ = true;
taurine.math._Vec3Array.Vec3Array_Impl_.copy = function(this1) {
	var len = this1.length;
	var ret;
	var this2;
	var data = new Float32Array(len >>> 2 << 2);
	this2 = data;
	ret = this2;
	ret.set(this1.subarray(0,len),0);
	return ret;
};
taurine.math._Vec3Array.Vec3Array_Impl_.cloneAt = function(this1,index) {
	var out;
	var data = new Float32Array(3);
	out = data;
	index <<= 2;
	out[0] = this1[index];
	out[1] = this1[index + 1];
	out[2] = this1[index + 2];
	return out;
};
taurine.math._Vec3Array.Vec3Array_Impl_.copyTo = function(this1,index,out,outIndex) {
	index <<= 2;
	outIndex = outIndex << 2;
	out[outIndex] = this1[index];
	out[outIndex + 1] = this1[index + 1];
	out[outIndex + 2] = this1[index + 2];
	return out;
};
taurine.math._Vec3Array.Vec3Array_Impl_.setAt = function(this1,index,x,y,z) {
	index <<= 2;
	this1[index] = x;
	this1[index + 1] = y;
	this1[index + 2] = z;
	return this1;
};
taurine.math._Vec3Array.Vec3Array_Impl_.add_impl = function(this1,index,b,bIndex,out,outIndex) {
	if(out == null) {
		out = this1;
		outIndex = index;
	}
	index <<= 2;
	bIndex <<= 2;
	outIndex = outIndex << 2;
	out[outIndex] = this1[index] + b[bIndex];
	out[outIndex + 1] = this1[index + 1] + b[bIndex + 1];
	out[outIndex + 2] = this1[index + 2] + b[bIndex + 2];
	return out;
};
taurine.math._Vec3Array.Vec3Array_Impl_.sub_impl = function(this1,index,b,bIndex,out,outIndex) {
	if(out == null) {
		out = this1;
		outIndex = index;
	}
	index <<= 2;
	bIndex <<= 2;
	outIndex = outIndex << 2;
	out[outIndex] = this1[index] - b[bIndex];
	out[outIndex + 1] = this1[index + 1] - b[bIndex + 1];
	out[outIndex + 2] = this1[index + 2] - b[bIndex + 2];
	return out;
};
taurine.math._Vec3Array.Vec3Array_Impl_.mul_impl = function(this1,index,b,bIndex,out,outIndex) {
	if(out == null) {
		out = this1;
		outIndex = index;
	}
	index <<= 2;
	bIndex <<= 2;
	outIndex = outIndex << 2;
	out[outIndex] = this1[index] * b[bIndex];
	out[outIndex + 1] = this1[index + 1] * b[bIndex + 1];
	out[outIndex + 2] = this1[index + 2] * b[bIndex + 2];
	return out;
};
taurine.math._Vec3Array.Vec3Array_Impl_.div_impl = function(this1,index,b,bIndex,out,outIndex) {
	if(out == null) {
		out = this1;
		outIndex = index;
	}
	index <<= 2;
	bIndex <<= 2;
	outIndex = outIndex << 2;
	out[outIndex] = this1[index] / b[bIndex];
	out[outIndex + 1] = this1[index + 1] / b[bIndex + 1];
	out[outIndex + 2] = this1[index + 2] / b[bIndex + 2];
	return out;
};
taurine.math._Vec3Array.Vec3Array_Impl_.maxFrom_impl = function(this1,index,b,bIndex,out,outIndex) {
	if(out == null) {
		out = this1;
		outIndex = index;
	}
	index <<= 2;
	bIndex <<= 2;
	outIndex = outIndex << 2;
	var t0 = this1[index];
	var t1 = this1[index + 1];
	var t2 = this1[index + 2];
	var b0 = b[bIndex];
	var b1 = b[bIndex + 1];
	var b2 = b[bIndex + 2];
	if(t0 > b0) out[outIndex] = t0; else out[outIndex] = b0;
	if(t1 > b1) out[outIndex + 1] = t1; else out[outIndex + 1] = b1;
	if(t2 > b2) out[outIndex + 2] = t2; else out[outIndex + 2] = b2;
	return out;
};
taurine.math._Vec3Array.Vec3Array_Impl_.minFrom_impl = function(this1,index,b,bIndex,out,outIndex) {
	if(out == null) {
		out = this1;
		outIndex = index;
	}
	index <<= 2;
	bIndex <<= 2;
	outIndex = outIndex << 2;
	var t0 = this1[index];
	var t1 = this1[index + 1];
	var t2 = this1[index + 2];
	var b0 = b[bIndex];
	var b1 = b[bIndex + 1];
	var b2 = b[bIndex + 2];
	if(t0 < b0) out[outIndex] = t0; else out[outIndex] = b0;
	if(t1 < b1) out[outIndex + 1] = t1; else out[outIndex + 1] = b1;
	if(t2 < b2) out[outIndex + 2] = t2; else out[outIndex + 2] = b2;
	return out;
};
taurine.math._Vec3Array.Vec3Array_Impl_.max = function(this1,startIndex,endIndex,out,outIndex) {
	if(endIndex == null) endIndex = -1;
	if(startIndex == null) startIndex = 0;
	var mx;
	var my;
	var mz;
	mx = my = mz = -1. / 0;
	var len = this1.length >>> 1;
	if(len < 0) return null;
	if(endIndex < 0) endIndex = len + endIndex + 1;
	if(endIndex > len) endIndex = len;
	var _g = startIndex;
	while(_g < endIndex) {
		var i = _g++;
		var i1 = i << 2;
		var tmp = this1[i1];
		if(mx < tmp) mx = tmp;
		tmp = this1[i1 + 1];
		if(my < tmp) my = tmp;
		tmp = this1[i1 + 2];
		if(mz < tmp) mz = tmp;
	}
	out[outIndex] = mx;
	out[outIndex + 1] = my;
	out[outIndex + 2] = mz;
	return out;
};
taurine.math._Vec3Array.Vec3Array_Impl_.min = function(this1,startIndex,endIndex,out,outIndex) {
	if(endIndex == null) endIndex = -1;
	if(startIndex == null) startIndex = 0;
	var mx;
	var my;
	var mz;
	mx = my = mz = -1. / 0;
	var len = this1.length >>> 1;
	if(len < 0) return null;
	if(endIndex < 0) endIndex = len + endIndex + 1;
	if(endIndex > len) endIndex = len;
	var _g = startIndex;
	while(_g < endIndex) {
		var i = _g++;
		var tmp = this1[i << 2];
		if(mx > tmp) mx = tmp;
		tmp = this1[(i << 2) + 1];
		if(my > tmp) my = tmp;
		tmp = this1[(i << 2) + 2];
		if(mz > tmp) mz = tmp;
	}
	out[outIndex] = mx;
	out[outIndex + 1] = my;
	out[outIndex + 2] = mz;
	return out;
};
taurine.math._Vec3Array.Vec3Array_Impl_.scale_impl = function(this1,index,scalar,out,outIndex) {
	if(out == null) {
		out = this1;
		outIndex = index;
	}
	index <<= 2;
	outIndex = outIndex << 2;
	out[outIndex] = this1[index] * scalar;
	out[outIndex + 1] = this1[index + 1] * scalar;
	out[outIndex + 2] = this1[index + 2] * scalar;
	return out;
};
taurine.math._Vec3Array.Vec3Array_Impl_.dist = function(this1,index,b,bIndex) {
	index <<= 2;
	bIndex <<= 2;
	var a0 = this1[index];
	var a1 = this1[index + 1];
	var a2 = this1[index + 2];
	var b0 = b[bIndex];
	var b1 = b[bIndex + 1];
	var b2 = b[bIndex + 2];
	a0 -= b0;
	a1 -= b1;
	a2 -= b2;
	return Math.sqrt(a0 * a0 + a1 * a1 + a2 * a2);
};
taurine.math._Vec3Array.Vec3Array_Impl_.sqrdist = function(this1,index,b,bIndex) {
	index <<= 2;
	bIndex <<= 2;
	var a0 = this1[index];
	var a1 = this1[index + 1];
	var a2 = this1[index + 2];
	var b0 = b[bIndex];
	var b1 = b[bIndex + 1];
	var b2 = b[bIndex + 2];
	a0 -= b0;
	a1 -= b1;
	a2 -= b2;
	return a0 * a0 + a1 * a1 + a2 * a2;
};
taurine.math._Vec3Array.Vec3Array_Impl_.lengthAt = function(this1,index) {
	index <<= 2;
	var x = this1[index];
	var y = this1[index + 1];
	var z = this1[index + 2];
	return Math.sqrt(x * x + y * y + z * z);
};
taurine.math._Vec3Array.Vec3Array_Impl_.sqrlenAt = function(this1,index) {
	index <<= 2;
	var x = this1[index];
	var y = this1[index + 1];
	var z = this1[index + 2];
	return x * x + y * y + z * z;
};
taurine.math._Vec3Array.Vec3Array_Impl_.neg_impl = function(this1,index,out,outIndex) {
	if(out == null) {
		out = this1;
		outIndex = index;
	}
	index <<= 2;
	outIndex = outIndex << 2;
	var x = this1[index];
	var y = this1[index + 1];
	var z = this1[index + 2];
	out[outIndex] = -x;
	out[outIndex + 1] = -y;
	out[outIndex + 2] = -z;
	return out;
};
taurine.math._Vec3Array.Vec3Array_Impl_.normalize_impl = function(this1,index,out,outIndex) {
	if(out == null) {
		out = this1;
		outIndex = index;
	}
	index <<= 2;
	outIndex = outIndex << 2;
	var x = this1[index];
	var y = this1[index + 1];
	var z = this1[index + 2];
	var len = x * x + y * y + z * z;
	if(len > 0) {
		len = 1 / Math.sqrt(len);
		out[outIndex] = x * len;
		out[outIndex + 1] = y * len;
		out[outIndex + 2] = z * len;
	}
	return out;
};
taurine.math._Vec3Array.Vec3Array_Impl_.dot = function(this1,index,b,bIndex) {
	index <<= 2;
	bIndex <<= 2;
	var x = this1[index];
	var y = this1[index + 1];
	var z = this1[index + 2];
	return b[bIndex] * x + b[bIndex + 1] * y + b[bIndex + 2] * z;
};
taurine.math._Vec3Array.Vec3Array_Impl_.lerp_impl = function(this1,index,to,toIndex,amount,out,outIndex) {
	if(out == null) {
		out = this1;
		outIndex = index;
	}
	index <<= 2;
	outIndex = outIndex << 2;
	toIndex <<= 2;
	var x = this1[index];
	var y = this1[index + 1];
	var z = this1[index + 2];
	var bx = to[toIndex];
	var by = to[toIndex + 1];
	var bz = to[toIndex + 2];
	out[outIndex] = x + amount * (bx - x);
	out[outIndex + 1] = y + amount * (by - y);
	out[outIndex + 2] = z + amount * (bz - z);
	return out;
};
taurine.math._Vec3Array.Vec3Array_Impl_.transformMat4_impl = function(this1,index,m,mIndex,out,outIndex) {
	if(out == null) {
		out = this1;
		outIndex = index;
	}
	index <<= 2;
	outIndex = outIndex << 2;
	mIndex <<= 4;
	var x = this1[index];
	var y = this1[index + 1];
	var z = this1[index + 2];
	var m0 = m[mIndex];
	var m1 = m[mIndex + 1];
	var m2 = m[mIndex + 2];
	var m4 = m[mIndex + 4];
	var m5 = m[mIndex + 5];
	var m6 = m[mIndex + 6];
	var m8 = m[mIndex + 8];
	var m9 = m[mIndex + 9];
	var m10 = m[mIndex + 10];
	var m12 = m[mIndex + 12];
	var m13 = m[mIndex + 13];
	var m14 = m[mIndex + 14];
	out[outIndex] = m0 * x + m4 * y + m8 * z + m12;
	out[outIndex + 1] = m1 * x + m5 * y + m9 * z + m13;
	out[outIndex + 2] = m2 * x + m6 * y + m10 * z + m14;
	return out;
};
taurine.math._Vec3Array.Vec3Array_Impl_.transformMat3_impl = function(this1,index,m,mIndex,out,outIndex) {
	if(out == null) {
		out = this1;
		outIndex = index;
	}
	index <<= 2;
	outIndex = outIndex << 2;
	mIndex *= 9;
	var x = this1[index];
	var y = this1[index + 1];
	var z = this1[index + 2];
	var m0 = m[mIndex];
	var m1 = m[mIndex + 1];
	var m2 = m[mIndex + 2];
	var m3 = m[mIndex + 3];
	var m4 = m[mIndex + 4];
	var m5 = m[mIndex + 5];
	var m6 = m[mIndex + 6];
	var m7 = m[mIndex + 7];
	var m8 = m[mIndex + 8];
	out[outIndex] = m0 * x + m3 * y + m6 * z;
	out[outIndex + 1] = m1 * x + m4 * y + m7 * z;
	out[outIndex + 2] = m2 * x + m5 * y + m8 * z;
	return out;
};
taurine.math._Vec3Array.Vec3Array_Impl_.transformQuat_impl = function(this1,index,q,qIndex,out,outIndex) {
	if(out == null) {
		out = this1;
		outIndex = index;
	}
	index <<= 2;
	outIndex = outIndex << 2;
	qIndex <<= 2;
	var x = this1[index];
	var y = this1[index + 1];
	var z = this1[index + 2];
	var qx = q[qIndex];
	var qy = q[qIndex + 1];
	var qz = q[qIndex + 2];
	var qw = q[qIndex + 3];
	var ix = qw * x + qy * z - qz * y;
	var iy = qw * y + qz * x - qx * z;
	var iz = qw * z + qx * y - qy * x;
	var iw = -qx * x - qy * y - qz * z;
	out[outIndex] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
	out[outIndex + 1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
	out[outIndex + 2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
	return out;
};
taurine.math._Vec3Array.Vec3Array_Impl_.eq = function(this1,index,b,bIndex) {
	index <<= 2;
	bIndex <<= 2;
	if(this1 == b && index == bIndex) return true; else if(this1 == null || b == null) return false;
	var _g = 0;
	while(_g < 3) {
		var i = _g++;
		var v = this1[index + i] - b[bIndex + i];
		if(v != 0 && (v < 0 && v < -1e-06) || v > 0.000001) return false;
	}
	return true;
};
taurine.math._Vec3Array.Vec3Array_Impl_.toString = function(this1) {
	var buf = new StringBuf();
	var len = this1.length >>> 2;
	if(len << 2 > this1.length) len--;
	buf.b += "vec3[";
	if(len == null) buf.b += "null"; else buf.b += "" + len;
	buf.b += "]\n{";
	var _g = 0;
	while(_g < len) {
		var i = _g++;
		buf.b += "\n\t";
		buf.b += "vec3(";
		var fst = true;
		var _g1 = 0;
		while(_g1 < 3) {
			var j = _g1++;
			if(fst) fst = false; else buf.b += ", ";
			buf.b += Std.string(this1[(i << 2) + j]);
		}
		buf.b += "), ";
	}
	buf.b += "\n}";
	return buf.b;
};
taurine.math._Vec3Array.Vec3Array_Impl_.getRaw = function(this1,idx) {
	return this1[idx];
};
taurine.math._Vec3Array.Vec3Array_Impl_.setRaw = function(this1,idx,v) {
	return this1[idx] = v;
};
taurine.math._Vec4 = {};
taurine.math._Vec4.Vec4_Impl_ = function() { };
taurine.math._Vec4.Vec4_Impl_.__name__ = true;
taurine.math._Vec4.Vec4_Impl_.clone = function(this1) {
	var x = this1[0];
	var y = this1[1];
	var z = this1[2];
	var w = this1[3];
	var ret;
	var data = new Float32Array(4);
	ret = data;
	ret[0] = x;
	ret[1] = y;
	ret[2] = z;
	ret[3] = w;
	return ret;
};
taurine.math._Vec4.Vec4_Impl_.copyTo = function(this1,dest) {
	var x = this1[0];
	var y = this1[1];
	var z = this1[2];
	var w = this1[3];
	dest[0] = x;
	dest[1] = y;
	dest[2] = z;
	dest[3] = w;
	return dest;
};
taurine.math._Vec4.Vec4_Impl_.set = function(this1,x,y,z,w) {
	this1[0] = x;
	this1[1] = y;
	this1[2] = z;
	this1[3] = w;
	return this1;
};
taurine.math._Vec4.Vec4_Impl_.add = function(this1,b,out) {
	if(taurine.math._Vec4.Vec4_Impl_.eq(out,null)) out = this1;
	var x = this1[0];
	var y = this1[1];
	var z = this1[2];
	var w = this1[3];
	var b0 = b[0];
	var b1 = b[1];
	var b2 = b[2];
	var b3 = b[3];
	out[0] = x + b0;
	out[1] = y + b1;
	out[2] = z + b2;
	out[3] = w + b3;
	return out;
};
taurine.math._Vec4.Vec4_Impl_.sub = function(this1,b,out) {
	if(taurine.math._Vec4.Vec4_Impl_.eq(out,null)) out = this1;
	var x = this1[0];
	var y = this1[1];
	var z = this1[2];
	var w = this1[3];
	var b0 = b[0];
	var b1 = b[1];
	var b2 = b[2];
	var b3 = b[3];
	out[0] = x - b0;
	out[1] = y - b1;
	out[2] = z - b2;
	out[3] = w - b3;
	return out;
};
taurine.math._Vec4.Vec4_Impl_.mul = function(this1,b,out) {
	if(taurine.math._Vec4.Vec4_Impl_.eq(out,null)) out = this1;
	var x = this1[0];
	var y = this1[1];
	var z = this1[2];
	var w = this1[3];
	var b0 = b[0];
	var b1 = b[1];
	var b2 = b[2];
	var b3 = b[3];
	out[0] = x * b0;
	out[1] = y * b1;
	out[2] = z * b2;
	out[3] = w * b3;
	return out;
};
taurine.math._Vec4.Vec4_Impl_.div = function(this1,b,out) {
	if(taurine.math._Vec4.Vec4_Impl_.eq(out,null)) out = this1;
	var x = this1[0];
	var y = this1[1];
	var z = this1[2];
	var w = this1[3];
	var b0 = b[0];
	var b1 = b[1];
	var b2 = b[2];
	var b3 = b[3];
	out[0] = x / b0;
	out[1] = y / b1;
	out[2] = z / b2;
	out[3] = w / b3;
	return out;
};
taurine.math._Vec4.Vec4_Impl_.$length = function(this1) {
	var x = this1[0];
	var y = this1[1];
	var z = this1[2];
	var w = this1[3];
	return Math.sqrt(x * x + y * y + z * z + w * w);
};
taurine.math._Vec4.Vec4_Impl_.sqrlen = function(this1) {
	var x = this1[0];
	var y = this1[1];
	var z = this1[2];
	var w = this1[3];
	return x * x + y * y + z * z + w * w;
};
taurine.math._Vec4.Vec4_Impl_.dot = function(this1,b) {
	var x = this1[0];
	var y = this1[1];
	var z = this1[2];
	var w = this1[3];
	return b[0] * x + b[1] * y + b[2] * z + b[3] * w;
};
taurine.math._Vec4.Vec4_Impl_.lerp = function(this1,to,amount,out) {
	if(taurine.math._Vec4.Vec4_Impl_.eq(out,null)) out = this1;
	var x = this1[0];
	var y = this1[1];
	var z = this1[2];
	var w = this1[3];
	var bx = to[0];
	var by = to[1];
	var bz = to[2];
	var bw = to[3];
	out[0] = x + amount * (bx - x);
	out[1] = y + amount * (by - y);
	out[2] = z + amount * (bz - z);
	out[3] = w + amount * (bw - w);
	return out;
};
taurine.math._Vec4.Vec4_Impl_.eq = function(this1,b) {
	if(this1 == b) return true; else if(this1 == null || b == null) return false;
	var _g = 0;
	while(_g < 4) {
		var i = _g++;
		var v = this1[i] - b[i];
		if(v != 0 && (v < 0 && v < -1e-06) || v > 0.000001) return false;
	}
	return true;
};
taurine.math._Vec4.Vec4_Impl_.toString = function(this1) {
	var buf = new StringBuf();
	buf.b += "vec4(";
	var fst = true;
	var _g = 0;
	while(_g < 4) {
		var j = _g++;
		if(fst) fst = false; else buf.b += ", ";
		buf.b += Std.string(this1[j]);
	}
	buf.b += ")";
	return buf.b;
};
taurine.math._Vec4.Vec4_Impl_.getRaw = function(this1,idx) {
	return this1[idx];
};
taurine.math._Vec4.Vec4_Impl_.setRaw = function(this1,idx,v) {
	return this1[idx] = v;
};
taurine.math._Vec4Array = {};
taurine.math._Vec4Array.Vec4Array_Impl_ = function() { };
taurine.math._Vec4Array.Vec4Array_Impl_.__name__ = true;
taurine.math._Vec4Array.Vec4Array_Impl_.copy = function(this1) {
	var len = this1.length;
	var ret;
	var this2;
	var data = new Float32Array(len >>> 2 << 2);
	this2 = data;
	ret = this2;
	ret.set(this1.subarray(0,len),0);
	return ret;
};
taurine.math._Vec4Array.Vec4Array_Impl_.copyTo = function(this1,index,out,outIndex) {
	index <<= 2;
	outIndex = outIndex << 2;
	out[outIndex] = this1[index];
	out[outIndex + 1] = this1[index + 1];
	out[outIndex + 2] = this1[index + 2];
	out[outIndex + 3] = this1[index + 3];
	return out;
};
taurine.math._Vec4Array.Vec4Array_Impl_.cloneAt = function(this1,index) {
	var out;
	var data = new Float32Array(4);
	out = data;
	index <<= 2;
	out[0] = this1[index];
	out[1] = this1[index + 1];
	out[2] = this1[index + 2];
	out[3] = this1[index + 3];
	return out;
};
taurine.math._Vec4Array.Vec4Array_Impl_.setAt = function(this1,index,x,y,z,w) {
	index <<= 2;
	this1[index] = x;
	this1[index + 1] = y;
	this1[index + 2] = z;
	this1[index + 3] = w;
	return this1;
};
taurine.math._Vec4Array.Vec4Array_Impl_.add_impl = function(this1,index,b,bIndex,out,outIndex) {
	if(out == null) {
		out = this1;
		outIndex = index;
	}
	index <<= 2;
	bIndex <<= 2;
	outIndex = outIndex << 2;
	out[outIndex] = this1[index] + b[bIndex];
	out[outIndex + 1] = this1[index + 1] + b[bIndex + 1];
	out[outIndex + 2] = this1[index + 2] + b[bIndex + 2];
	out[outIndex + 3] = this1[index + 3] + b[bIndex + 3];
	return out;
};
taurine.math._Vec4Array.Vec4Array_Impl_.sub_impl = function(this1,index,b,bIndex,out,outIndex) {
	if(out == null) {
		out = this1;
		outIndex = index;
	}
	index <<= 2;
	bIndex <<= 2;
	outIndex = outIndex << 2;
	out[outIndex] = this1[index] - b[bIndex];
	out[outIndex + 1] = this1[index + 1] - b[bIndex + 1];
	out[outIndex + 2] = this1[index + 2] - b[bIndex + 2];
	out[outIndex + 3] = this1[index + 3] - b[bIndex + 3];
	return out;
};
taurine.math._Vec4Array.Vec4Array_Impl_.mul_impl = function(this1,index,b,bIndex,out,outIndex) {
	if(out == null) {
		out = this1;
		outIndex = index;
	}
	index <<= 2;
	bIndex <<= 2;
	outIndex = outIndex << 2;
	out[outIndex] = this1[index] * b[bIndex];
	out[outIndex + 1] = this1[index + 1] * b[bIndex + 1];
	out[outIndex + 2] = this1[index + 2] * b[bIndex + 2];
	out[outIndex + 3] = this1[index + 3] * b[bIndex + 3];
	return out;
};
taurine.math._Vec4Array.Vec4Array_Impl_.div_impl = function(this1,index,b,bIndex,out,outIndex) {
	if(out == null) {
		out = this1;
		outIndex = index;
	}
	index <<= 2;
	bIndex <<= 2;
	outIndex = outIndex << 2;
	out[outIndex] = this1[index] / b[bIndex];
	out[outIndex + 1] = this1[index + 1] / b[bIndex + 1];
	out[outIndex + 2] = this1[index + 2] / b[bIndex + 2];
	out[outIndex + 3] = this1[index + 3] / b[bIndex + 3];
	return out;
};
taurine.math._Vec4Array.Vec4Array_Impl_.maxFrom_impl = function(this1,index,b,bIndex,out,outIndex) {
	if(out == null) {
		out = this1;
		outIndex = index;
	}
	index <<= 2;
	bIndex <<= 2;
	outIndex = outIndex << 2;
	var t0 = this1[index];
	var t1 = this1[index + 1];
	var t2 = this1[index + 2];
	var t3 = this1[index + 3];
	var b0 = b[bIndex];
	var b1 = b[bIndex + 1];
	var b2 = b[bIndex + 2];
	var b3 = b[bIndex + 3];
	if(t0 > b0) out[outIndex] = t0; else out[outIndex] = b0;
	if(t1 > b1) out[outIndex + 1] = t1; else out[outIndex + 1] = b1;
	if(t2 > b2) out[outIndex + 2] = t2; else out[outIndex + 2] = b2;
	if(t3 > b3) out[outIndex + 3] = t3; else out[outIndex + 3] = b3;
	return out;
};
taurine.math._Vec4Array.Vec4Array_Impl_.minFrom_impl = function(this1,index,b,bIndex,out,outIndex) {
	if(out == null) {
		out = this1;
		outIndex = index;
	}
	index <<= 2;
	bIndex <<= 2;
	outIndex = outIndex << 2;
	var t0 = this1[index];
	var t1 = this1[index + 1];
	var t2 = this1[index + 2];
	var t3 = this1[index + 3];
	var b0 = b[bIndex];
	var b1 = b[bIndex + 1];
	var b2 = b[bIndex + 2];
	var b3 = b[bIndex + 3];
	if(t0 < b0) out[outIndex] = t0; else out[outIndex] = b0;
	if(t1 < b1) out[outIndex + 1] = t1; else out[outIndex + 1] = b1;
	if(t2 < b2) out[outIndex + 2] = t2; else out[outIndex + 2] = b2;
	if(t3 < b3) out[outIndex + 3] = t3; else out[outIndex + 3] = b3;
	return out;
};
taurine.math._Vec4Array.Vec4Array_Impl_.max = function(this1,startIndex,endIndex,out,outIndex) {
	if(endIndex == null) endIndex = -1;
	if(startIndex == null) startIndex = 0;
	outIndex <<= 2;
	var mx;
	var my;
	var mz;
	var mw;
	mx = my = mz = mw = -1. / 0;
	var len = this1.length >>> 1;
	if(len < 0) return null;
	if(endIndex < 0) endIndex = len + endIndex + 1;
	if(endIndex > len) endIndex = len;
	var _g = startIndex;
	while(_g < endIndex) {
		var i = _g++;
		var tmp = this1[i << 2];
		if(mx < tmp) mx = tmp;
		tmp = this1[(i << 2) + 1];
		if(my < tmp) my = tmp;
		tmp = this1[(i << 2) + 2];
		if(mz < tmp) mz = tmp;
		tmp = this1[(i << 2) + 3];
		if(mw < tmp) mw = tmp;
	}
	out[outIndex] = mx;
	out[outIndex + 1] = my;
	out[outIndex + 2] = mz;
	out[outIndex + 3] = mw;
	return out;
};
taurine.math._Vec4Array.Vec4Array_Impl_.min = function(this1,startIndex,endIndex,out,outIndex) {
	if(endIndex == null) endIndex = -1;
	if(startIndex == null) startIndex = 0;
	outIndex <<= 2;
	var mx;
	var my;
	var mz;
	var mw;
	mx = my = mz = mw = -1. / 0;
	var len = this1.length >>> 1;
	if(len < 0) return null;
	if(endIndex < 0) endIndex = len + endIndex + 1;
	if(endIndex > len) endIndex = len;
	var _g = startIndex;
	while(_g < endIndex) {
		var i = _g++;
		var tmp = this1[i << 2];
		if(mx > tmp) mx = tmp;
		tmp = this1[(i << 2) + 1];
		if(my > tmp) my = tmp;
		tmp = this1[(i << 2) + 2];
		if(mz > tmp) mz = tmp;
		tmp = this1[(i << 2) + 3];
		if(mw > tmp) mw = tmp;
	}
	out[outIndex] = mx;
	out[outIndex + 1] = my;
	out[outIndex + 2] = mz;
	out[outIndex + 3] = mw;
	return out;
};
taurine.math._Vec4Array.Vec4Array_Impl_.scale_impl = function(this1,index,scalar,out,outIndex) {
	if(out == null) {
		out = this1;
		outIndex = index;
	}
	index <<= 2;
	outIndex = outIndex << 2;
	out[outIndex] = this1[index] * scalar;
	out[outIndex + 1] = this1[index + 1] * scalar;
	out[outIndex + 2] = this1[index + 2] * scalar;
	out[outIndex + 3] = this1[index + 3] * scalar;
	return out;
};
taurine.math._Vec4Array.Vec4Array_Impl_.dist = function(this1,index,b,bIndex) {
	index <<= 2;
	bIndex <<= 2;
	var a0 = this1[index];
	var a1 = this1[index + 1];
	var a2 = this1[index + 2];
	var a3 = this1[index + 3];
	var b0 = b[bIndex];
	var b1 = b[bIndex + 1];
	var b2 = b[bIndex + 2];
	var b3 = b[bIndex + 3];
	a0 -= b0;
	a1 -= b1;
	a2 -= b2;
	a3 -= b3;
	return Math.sqrt(a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3);
};
taurine.math._Vec4Array.Vec4Array_Impl_.sqrdist = function(this1,index,b,bIndex) {
	index <<= 2;
	bIndex <<= 2;
	var a0 = this1[index];
	var a1 = this1[index + 1];
	var a2 = this1[index + 2];
	var a3 = this1[index + 3];
	var b0 = b[bIndex];
	var b1 = b[bIndex + 1];
	var b2 = b[bIndex + 2];
	var b3 = b[bIndex + 3];
	a0 -= b0;
	a1 -= b1;
	a2 -= b2;
	a3 -= b3;
	return a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3;
};
taurine.math._Vec4Array.Vec4Array_Impl_.lengthAt = function(this1,index) {
	index <<= 2;
	var x = this1[index];
	var y = this1[index + 1];
	var z = this1[index + 2];
	var w = this1[index + 3];
	return Math.sqrt(x * x + y * y + z * z + w * w);
};
taurine.math._Vec4Array.Vec4Array_Impl_.sqrlenAt = function(this1,index) {
	index <<= 2;
	var x = this1[index];
	var y = this1[index + 1];
	var z = this1[index + 2];
	var w = this1[index + 3];
	return x * x + y * y + z * z + w * w;
};
taurine.math._Vec4Array.Vec4Array_Impl_.neg_impl = function(this1,index,out,outIndex) {
	if(out == null) {
		out = this1;
		outIndex = index;
	}
	index <<= 2;
	outIndex = outIndex << 2;
	var x = this1[index];
	var y = this1[index + 1];
	var z = this1[index + 2];
	var w = this1[index + 3];
	out[outIndex] = -x;
	out[outIndex + 1] = -y;
	out[outIndex + 2] = -z;
	out[outIndex + 3] = -w;
	return out;
};
taurine.math._Vec4Array.Vec4Array_Impl_.normalize_impl = function(this1,index,out,outIndex) {
	if(out == null) {
		out = this1;
		outIndex = index;
	}
	index <<= 2;
	outIndex = outIndex << 2;
	var x = this1[index];
	var y = this1[index + 1];
	var z = this1[index + 2];
	var w = this1[index + 3];
	var len = x * x + y * y + z * z + w * w;
	if(len > 0) {
		len = 1 / Math.sqrt(len);
		out[outIndex] = x * len;
		out[outIndex + 1] = y * len;
		out[outIndex + 2] = z * len;
		out[outIndex + 3] = w * len;
	}
	return out;
};
taurine.math._Vec4Array.Vec4Array_Impl_.dot = function(this1,index,b,bIndex) {
	index <<= 2;
	bIndex <<= 2;
	var x = this1[index];
	var y = this1[index + 1];
	var z = this1[index + 2];
	var w = this1[index + 3];
	return b[bIndex] * x + b[bIndex + 1] * y + b[bIndex + 2] * z + b[bIndex + 3] * w;
};
taurine.math._Vec4Array.Vec4Array_Impl_.lerp_impl = function(this1,index,to,toIndex,amount,out,outIndex) {
	if(out == null) {
		out = this1;
		outIndex = index;
	}
	index <<= 2;
	outIndex = outIndex << 2;
	toIndex <<= 2;
	var x = this1[index];
	var y = this1[index + 1];
	var z = this1[index + 2];
	var w = this1[index + 3];
	var bx = to[toIndex];
	var by = to[toIndex + 1];
	var bz = to[toIndex + 2];
	var bw = to[toIndex + 3];
	out[outIndex] = x + amount * (bx - x);
	out[outIndex + 1] = y + amount * (by - y);
	out[outIndex + 2] = z + amount * (bz - z);
	out[outIndex + 3] = w + amount * (bw - w);
	return out;
};
taurine.math._Vec4Array.Vec4Array_Impl_.transformMat4_impl = function(this1,index,m,mIndex,out,outIndex) {
	if(out == null) {
		out = this1;
		outIndex = index;
	}
	index <<= 2;
	outIndex = outIndex << 2;
	mIndex <<= 4;
	var x = this1[index];
	var y = this1[index + 1];
	var z = this1[index + 2];
	var w = this1[index + 3];
	var m0 = m[mIndex];
	var m1 = m[mIndex + 1];
	var m2 = m[mIndex + 2];
	var m3 = m[mIndex + 3];
	var m4 = m[mIndex + 4];
	var m5 = m[mIndex + 5];
	var m6 = m[mIndex + 6];
	var m7 = m[mIndex + 7];
	var m8 = m[mIndex + 8];
	var m9 = m[mIndex + 9];
	var m10 = m[mIndex + 10];
	var m11 = m[mIndex + 11];
	var m12 = m[mIndex + 12];
	var m13 = m[mIndex + 13];
	var m14 = m[mIndex + 14];
	var m15 = m[mIndex + 15];
	out[outIndex] = m0 * x + m4 * y + m8 * z + m12 * w;
	out[outIndex + 1] = m1 * x + m5 * y + m9 * z + m13 * w;
	out[outIndex + 2] = m2 * x + m6 * y + m10 * z + m14 * w;
	out[outIndex + 3] = m3 * x + m7 * y + m11 * z + m15 * w;
	return out;
};
taurine.math._Vec4Array.Vec4Array_Impl_.transformQuat_impl = function(this1,index,q,qIndex,out,outIndex) {
	if(out == null) {
		out = this1;
		outIndex = index;
	}
	index <<= 2;
	outIndex = outIndex << 2;
	qIndex <<= 2;
	var x = this1[index];
	var y = this1[index + 1];
	var z = this1[index + 2];
	var w = this1[index + 3];
	var qx = q[qIndex];
	var qy = q[qIndex + 1];
	var qz = q[qIndex + 2];
	var qw = q[qIndex + 3];
	var ix = qw * x + qy * z - qz * y;
	var iy = qw * y + qz * x - qx * z;
	var iz = qw * z + qx * y - qy * x;
	var iw = -qx * x - qy * y - qz * z;
	out[outIndex] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
	out[outIndex + 1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
	out[outIndex + 2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
	return out;
};
taurine.math._Vec4Array.Vec4Array_Impl_.eq = function(this1,index,b,bIndex) {
	index <<= 2;
	bIndex <<= 2;
	if(this1 == b && index == bIndex) return true; else if(this1 == null || b == null) return false;
	var _g = 0;
	while(_g < 4) {
		var i = _g++;
		var v = this1[index + i] - b[bIndex + i];
		if(v != 0 && (v < 0 && v < -1e-06) || v > 0.000001) return false;
	}
	return true;
};
taurine.math._Vec4Array.Vec4Array_Impl_.toString = function(this1) {
	var buf = new StringBuf();
	var len = this1.length >>> 2;
	if(len << 2 > this1.length) len--;
	buf.b += "vec4[";
	if(len == null) buf.b += "null"; else buf.b += "" + len;
	buf.b += "]\n{";
	var _g = 0;
	while(_g < len) {
		var i = _g++;
		buf.b += "\n\t";
		buf.b += "vec4(";
		var fst = true;
		var _g1 = 0;
		while(_g1 < 4) {
			var j = _g1++;
			if(fst) fst = false; else buf.b += ", ";
			buf.b += Std.string(this1[(i << 2) + j]);
		}
		buf.b += "), ";
	}
	buf.b += "\n}";
	return buf.b;
};
taurine.math._Vec4Array.Vec4Array_Impl_.getRaw = function(this1,idx) {
	return this1[idx];
};
taurine.math._Vec4Array.Vec4Array_Impl_.setRaw = function(this1,idx,v) {
	return this1[idx] = v;
};
var three = {};
three.THREE = function() { };
three.THREE.__name__ = true;
three.math = {};
three.math.TMath = function() { };
three.math.TMath.__name__ = true;
three.math.TMath.generateUUID = function() {
	var uuid = new Array();
	var rnd = 0;
	var r;
	var _g = 0;
	while(_g < 36) {
		var i = _g++;
		if(i == 8 || i == 13 || i == 18 || i == 23) uuid[i] = "-"; else if(i == 14) uuid[i] = "4"; else {
			if(rnd <= 2) rnd = 33554432 + Std["int"](Math.random() * 16777216) | 0;
			r = rnd & 15;
			rnd = rnd >> 4;
			uuid[i] = three.math.TMath.chars[i == 19?r & 3 | 8:r];
		}
	}
	return uuid.join("");
};
three.math.TMath.clamp = function(x,a,b) {
	if(x < a) return a; else if(x > b) return b; else return x;
};
three.math.TMath.clampBottom = function(x,a) {
	if(x < a) return a; else return x;
};
three.math.TMath.mapLinear = function(x,a1,a2,b1,b2) {
	return b1 + (x - a1) * (b2 - b1) / (a2 - a1);
};
three.math.TMath.smoothstep = function(x,min,max) {
	if(x <= min) return 0;
	if(x >= max) return 1;
	x = (x - min) / (max - min);
	return x * x * (3 - 2 * x);
};
three.math.TMath.smootherstep = function(x,min,max) {
	if(x <= min) return 0;
	if(x >= max) return 1;
	x = (x - min) / (max - min);
	return x * x * x * (x * (x * 6 - 15) + 10);
};
three.math.TMath.random16 = function() {
	return (65280 * Math.random() + 255 * Math.random()) / 65535;
};
three.math.TMath.randInt = function(low,high) {
	return low + Math.floor(Math.random() * (high - low + 1));
};
three.math.TMath.randFloat = function(low,high) {
	return low + Math.random() * (high - low);
};
three.math.TMath.randFloatSpread = function(range) {
	return range * (0.5 - Math.random());
};
three.math.TMath.sign = function(x) {
	if(x < 0) return -1; else if(x > 0) return 1; else return 0;
};
three.math.TMath.degToRad = function(degrees) {
	return degrees * three.math.TMath.degreeToRadiansFactor;
};
three.math.TMath.radToDeg = function(radians) {
	return radians * three.math.TMath.radianToDegreesFactor;
};
three.math.TMath.isPowerOfTwo = function(value) {
	return (value & value - 1) == 0 && value != 0;
};
three.math._Vector2 = {};
three.math._Vector2.Vector2_Impl_ = function() { };
three.math._Vector2.Vector2_Impl_.__name__ = true;
three.math._Vector2.Vector2_Impl_._new = function(x,y) {
	if(y == null) y = 0;
	if(x == null) x = 0;
	var this1;
	var data = new Float32Array(2);
	this1 = data;
	this1[0] = x;
	this1[1] = y;
	return this1;
};
three.math._Vector2.Vector2_Impl_.get_x = function(this1) {
	return this1[0];
};
three.math._Vector2.Vector2_Impl_.set_x = function(this1,val) {
	return this1[0] = val;
};
three.math._Vector2.Vector2_Impl_.get_y = function(this1) {
	return this1[1];
};
three.math._Vector2.Vector2_Impl_.set_y = function(this1,val) {
	return this1[1] = val;
};
three.math._Vector2.Vector2_Impl_.set = function(this1,x,y) {
	this1[0] = x;
	this1[1] = y;
	return this1;
};
three.math._Vector2.Vector2_Impl_.setX = function(this1,x) {
	this1[0] = x;
	return this1;
};
three.math._Vector2.Vector2_Impl_.setY = function(this1,y) {
	this1[1] = y;
	return this1;
};
three.math._Vector2.Vector2_Impl_.setComponent = function(this1,index,value) {
	switch(index) {
	case 0:
		this1[0] = value;
		break;
	case 1:
		this1[1] = value;
		break;
	}
};
three.math._Vector2.Vector2_Impl_.getComponent = function(this1,index) {
	switch(index) {
	case 0:
		return this1[0];
	case 1:
		return this1[1];
	}
	return 0;
};
three.math._Vector2.Vector2_Impl_.copy = function(this1,v) {
	this1[0] = v[0];
	this1[1] = v[1];
	return this1;
};
three.math._Vector2.Vector2_Impl_.add = function(this1,v) {
	var _g = this1;
	_g[0] = _g[0] + v[0];
	var _g1 = this1;
	_g1[1] = _g1[1] + v[1];
	return this1;
};
three.math._Vector2.Vector2_Impl_.addVectors = function(this1,a,b) {
	this1[0] = a[0] + b[0];
	this1[1] = a[1] + b[1];
	return this1;
};
three.math._Vector2.Vector2_Impl_.addScalar = function(this1,s) {
	var _g = this1;
	_g[0] = _g[0] + s;
	var _g1 = this1;
	_g1[1] = _g1[1] + s;
	return this1;
};
three.math._Vector2.Vector2_Impl_.sub = function(this1,v) {
	var _g = this1;
	_g[0] = _g[0] - v[0];
	var _g1 = this1;
	_g1[1] = _g1[1] - v[1];
	return this1;
};
three.math._Vector2.Vector2_Impl_.subVectors = function(this1,a,b) {
	this1[0] = a[0] - b[0];
	this1[1] = a[1] - b[1];
	return this1;
};
three.math._Vector2.Vector2_Impl_.multiplyScalar = function(this1,s) {
	var _g = this1;
	_g[0] = _g[0] * s;
	var _g1 = this1;
	_g1[1] = _g1[1] * s;
	return this1;
};
three.math._Vector2.Vector2_Impl_.divideScalar = function(this1,s) {
	if(s == 0) {
		this1[0] = 0;
		this1[1] = 0;
		return this1;
	}
	var _g = this1;
	_g[0] = _g[0] / s;
	var _g1 = this1;
	_g1[1] = _g1[1] / s;
	return this1;
};
three.math._Vector2.Vector2_Impl_.min = function(this1,v) {
	if(this1[0] > v[0]) this1[0] = v[0];
	if(this1[1] > v[1]) this1[1] = v[1];
	return this1;
};
three.math._Vector2.Vector2_Impl_.max = function(this1,v) {
	if(this1[0] < v[0]) this1[0] = v[0];
	if(this1[1] < v[1]) this1[1] = v[1];
	return this1;
};
three.math._Vector2.Vector2_Impl_.clamp = function(this1,min,max) {
	if(this1[0] < min[0]) this1[0] = min[0]; else if(this1[0] > max[0]) this1[0] = max[0];
	if(this1[1] < min[1]) this1[1] = min[1]; else if(this1[1] > max[1]) this1[1] = max[1];
	return this1;
};
three.math._Vector2.Vector2_Impl_.negate = function(this1) {
	var _g = this1;
	_g[0] = _g[0] * -1;
	var _g1 = this1;
	_g1[1] = _g1[1] * -1;
	return this1;
};
three.math._Vector2.Vector2_Impl_.dot = function(this1,v) {
	return this1[0] * v[0] + this1[1] * v[1];
};
three.math._Vector2.Vector2_Impl_.lengthSq = function(this1) {
	return this1[0] * this1[0] + this1[1] * this1[1];
};
three.math._Vector2.Vector2_Impl_.$length = function(this1) {
	return Math.sqrt(this1[0] * this1[0] + this1[1] * this1[1]);
};
three.math._Vector2.Vector2_Impl_.normalize = function(this1) {
	var s = Math.sqrt(this1[0] * this1[0] + this1[1] * this1[1]);
	if(s == 0) {
		this1[0] = 0;
		this1[1] = 0;
		return this1;
	} else {
		var _g = this1;
		_g[0] = _g[0] / s;
		var _g1 = this1;
		_g1[1] = _g1[1] / s;
		return this1;
	}
};
three.math._Vector2.Vector2_Impl_.distanceTo = function(this1,v) {
	return Math.sqrt((function($this) {
		var $r;
		var dx = this1[0] - v[0];
		var dy = this1[1] - v[1];
		$r = dx * dx + dy * dy;
		return $r;
	}(this)));
};
three.math._Vector2.Vector2_Impl_.distanceToSquared = function(this1,v) {
	var dx = this1[0] - v[0];
	var dy = this1[1] - v[1];
	return dx * dx + dy * dy;
};
three.math._Vector2.Vector2_Impl_.setLength = function(this1,l) {
	var oldLength = Math.sqrt(this1[0] * this1[0] + this1[1] * this1[1]);
	if(oldLength != 0 && l != oldLength) {
		var s = l / oldLength;
		var _g = this1;
		_g[0] = _g[0] * s;
		var _g1 = this1;
		_g1[1] = _g1[1] * s;
		this1;
	}
	return this1;
};
three.math._Vector2.Vector2_Impl_.lerp = function(this1,v,alpha) {
	var _g = this1;
	_g[0] = _g[0] + (v[0] - this1[0]) * alpha;
	var _g1 = this1;
	_g1[1] = _g1[1] + (v[1] - this1[1]) * alpha;
	return this1;
};
three.math._Vector2.Vector2_Impl_.equals = function(this1,v) {
	return v[0] == this1[0] && v[1] == this1[1];
};
three.math._Vector2.Vector2_Impl_.fromArray = function(this1,a) {
	this1[0] = a[0];
	this1[1] = a[1];
	return this1;
};
three.math._Vector2.Vector2_Impl_.toArray = function(this1) {
	var a = new Array();
	a.push(this1[0]);
	a.push(this1[1]);
	return a;
};
three.math._Vector2.Vector2_Impl_.clone = function(this1) {
	var this2;
	var data = new Float32Array(2);
	this2 = data;
	this2[0] = this1[0];
	this2[1] = this1[1];
	return this2;
};
Math.NaN = Number.NaN;
Math.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
Math.POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
Math.isFinite = function(i) {
	return isFinite(i);
};
Math.isNaN = function(i1) {
	return isNaN(i1);
};
String.__name__ = true;
Array.__name__ = true;
taurine.math.FastMath.NaN = 0.0 / 0.0;
taurine.math.FastMath.POSITIVE_INFINITY = 1. / 0;
taurine.math.FastMath.NEGATIVE_INFINITY = -1. / 0;
taurine.math.FastMath.EPSILON = 0.000001;
taurine.math._Rad.Rad_Impl_._toDeg = 57.2957795130823229;
taurine.math._Rad.Rad_Impl_._fromDeg = 0.0174532925199432955;
three.THREE.CullFaceNone = 0;
three.THREE.CullFaceBack = 1;
three.THREE.CullFaceFront = 2;
three.THREE.CullFaceFrontBack = 3;
three.THREE.FrontFaceDirectionCW = 0;
three.THREE.FrontFaceDirectionCCW = 1;
three.THREE.BasicShadowMap = 0;
three.THREE.PCFShadowMap = 1;
three.THREE.PCFSoftShadowMap = 2;
three.THREE.FrontSide = 0;
three.THREE.BackSide = 1;
three.THREE.DoubleSide = 2;
three.THREE.NoShading = 0;
three.THREE.FlatShading = 1;
three.THREE.SmoothShading = 2;
three.THREE.NoColors = 0;
three.THREE.FaceColors = 1;
three.THREE.VertexColors = 2;
three.THREE.NoBlending = 0;
three.THREE.NormalBlending = 1;
three.THREE.AdditiveBlending = 2;
three.THREE.SubtractiveBlending = 3;
three.THREE.MultiplyBlending = 4;
three.THREE.CustomBlending = 5;
three.THREE.AddEquation = 100;
three.THREE.SubtractEquation = 101;
three.THREE.ReverseSubtractEquation = 102;
three.THREE.ZeroFactor = 200;
three.THREE.OneFactor = 201;
three.THREE.SrcColorFactor = 202;
three.THREE.OneMinusSrcColorFactor = 203;
three.THREE.SrcAlphaFactor = 204;
three.THREE.OneMinusSrcAlphaFactor = 205;
three.THREE.DstAlphaFactor = 206;
three.THREE.OneMinusDstAlphaFactor = 207;
three.THREE.DstColorFactor = 208;
three.THREE.OneMinusDstColorFactor = 209;
three.THREE.SrcAlphaSaturateFactor = 210;
three.THREE.MultiplyOperation = 0;
three.THREE.MixOperation = 1;
three.THREE.AddOperation = 2;
three.THREE.RepeatWrapping = 1000;
three.THREE.ClampToEdgeWrapping = 1001;
three.THREE.MirroredRepeatWrapping = 1002;
three.THREE.NearestFilter = 1003;
three.THREE.NearestMipMapNearestFilter = 1004;
three.THREE.NearestMipMapLinearFilter = 1005;
three.THREE.LinearFilter = 1006;
three.THREE.LinearMipMapNearestFilter = 1007;
three.THREE.LinearMipMapLinearFilter = 1008;
three.THREE.UnsignedByteType = 1009;
three.THREE.ByteType = 1010;
three.THREE.ShortType = 1011;
three.THREE.UnsignedShortType = 1012;
three.THREE.IntType = 1013;
three.THREE.UnsignedIntType = 1014;
three.THREE.FloatType = 1015;
three.THREE.UnsignedShort4444Type = 1016;
three.THREE.UnsignedShort5551Type = 1017;
three.THREE.UnsignedShort565Type = 1018;
three.THREE.AlphaFormat = 1019;
three.THREE.RGBFormat = 1020;
three.THREE.RGBAFormat = 1021;
three.THREE.LuminanceFormat = 1022;
three.THREE.LuminanceAlphaFormat = 1023;
three.THREE.RGB_S3TC_DXT1_Format = 2001;
three.THREE.RGBA_S3TC_DXT1_Format = 2002;
three.THREE.RGBA_S3TC_DXT3_Format = 2003;
three.THREE.RGBA_S3TC_DXT5_Format = 2004;
three.math.TMath.PI2 = Math.PI * 2;
three.math.TMath.chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
three.math.TMath.degreeToRadiansFactor = Math.PI / 180;
three.math.TMath.radianToDegreesFactor = 180 / Math.PI;
Main.main();
})();
