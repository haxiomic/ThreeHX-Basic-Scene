//r66

package three.math;

@:noCompletion
typedef Matrix4Data = FloatArray;

@:arrayAccess
abstract Matrix4(Matrix4Data) to Matrix4Data from Matrix4Data{
	
	public function new(
		n11:Float = 1, n12:Float = 0, n13:Float = 0, n14:Float = 0,
		n21:Float = 0, n22:Float = 1, n23:Float = 0, n24:Float = 0,
		n31:Float = 0, n32:Float = 0, n33:Float = 1, n34:Float = 0,
		n41:Float = 0, n42:Float = 0, n43:Float = 0, n44:Float = 1){

		this = new Matrix4Data(16);
		set(
			n11, n12, n13, n14,
			n21, n22, n23, n24,
			n31, n32, n33, n34,
			n41, n42, n43, n44
		);
	}


	public var elements(get,set):Matrix3;//#! access to elements can be phased out, since elements == matrix3
	private inline function get_elements():Matrix3 return this;
	private inline function set_elements(v:Matrix3):Matrix3 return this = v;

	public inline function toString() return "Matrix4:\n("+this[0]+", "+this[1]+", "+this[2]+", "+this[3]+",\n"+
											           " "+this[4]+", "+this[5]+", "+this[6]+", "+this[7]+",\n"+
											           " "+this[8]+", "+this[9]+", "+this[10]+", "+this[11]+",\n"+
											           " "+this[12]+", "+this[13]+", "+this[14]+", "+this[15]+")";

	// three.js methods
	
	public function set (
		n11:Float, n12:Float, n13:Float, n14:Float,
		n21:Float, n22:Float, n23:Float, n24:Float,
		n31:Float, n32:Float, n33:Float, n34:Float,
		n41:Float, n42:Float, n43:Float, n44:Float) : Matrix4
	{
		var e = this;
		e[0] = n11; e[4] = n12; e[8] = n13; e[12] = n14;
		e[1] = n21; e[5] = n22; e[9] = n23; e[13] = n24;
		e[2] = n31; e[6] = n32; e[10] = n33; e[14] = n34;
		e[3] = n41; e[7] = n42; e[11] = n43; e[15] = n44;
		return this;
	}
	
	public function identity () :Matrix4{
		set(
			1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
		);
		return this;
	}


	public function copy (m:Matrix4) : Matrix4{
		set(
			m[0], m[4], m[8], m[12]
			m[1], m[5], m[9], m[13]
			m[2], m[6], m[10], m[14]
			m[3], m[7], m[11], m[15]
		);
		return this;
	}

	public function extractPosition(m:Matrix4):Matrix4{
		trace('DEPRECATED: Matrix4\'s .extractPosition() has been renamed to .copyPosition().');
		return copyPosition(m);
	}

	public function copyPosition(m:Matrix4):Matrix4{
		this[12] = m[12];
        this[13] = m[13];
        this[14] = m[14];
        return this;
	}

	public function extractRotation (me:Matrix4) : Matrix4
	{
		var v1 = new Vector3();
		
		var scaleX = 1 / v1.set(me[0], me[1], me[2]).length();
		var scaleY = 1 / v1.set(me[4], me[5], me[6]).length();
		var scaleZ = 1 / v1.set(me[8], me[9], me[10]).length();
		
		this[0] = me[0] * scaleX;
		this[1] = me[1] * scaleX;
		this[2] = me[2] * scaleX;
		
		this[4] = me[4] * scaleY;
		this[5] = me[5] * scaleY;
		this[6] = me[6] * scaleY;
		
		this[8] = me[8] * scaleZ;
		this[9] = me[9] * scaleZ;
		this[10] = me[10] * scaleZ;
		
		return this;
	}


	public function makeRotationFromEuler (euler:Euler) : Matrix4
	{
		var x = euler.x,
			y = euler.y,
			z = euler.z;

		var a = Math.cos(x), b = Math.sin(x);
		var c = Math.cos(y), d = Math.sin(y);
		var e = Math.cos(z), f = Math.sin(z);
		
		if (euler.order == 'XYZ')
		{
			var ae = a * e, 
				af = a * f, 
				be = b * e, 
				bf = b * f;

			this[0] = c * e;
			this[4] = -c * f;
			this[8] = d;
			
			this[1] = af + be * d;
			this[5] = ae - bf * d;
			this[9] = -b * c;
			
			this[2] = bf - ae * d;
			this[6] = be + af * d;
			this[10] = a * c;
			
		}else if(euler.order == 'YXZ'){

			var ce = c * e,
                cf = c * f,
                de = d * e,
                df = d * f;


			this[0] = ce + df * b;
			this[4] = de * b - cf;
			this[8] = a * d;
			
			this[1] = a * f;
			this[5] = a * e;
			this[9] = -b;
			
			this[2] = cf * b - de;
            this[6] = df + ce * b;
            this[10] = a * c;

		}else if (euler.order === 'ZXY') {

            var ce = c * e,
                cf = c * f,
                de = d * e,
                df = d * f;

            this[0] = ce - df * b;
            this[4] = -a * f;
            this[8] = de + cf * b;

            this[1] = cf + de * b;
            this[5] = a * e;
            this[9] = df - ce * b;

            this[2] = -a * d;
            this[6] = b;
            this[10] = a * c;

        } else if (euler.order === 'ZYX') {

            var ae = a * e,
                af = a * f,
                be = b * e,
                bf = b * f;

            this[0] = c * e;
            this[4] = be * d - af;
            this[8] = ae * d + bf;

            this[1] = c * f;
            this[5] = bf * d + ae;
            this[9] = af * d - be;

            this[2] = -d;
            this[6] = b * c;
            this[10] = a * c;

        } else if (euler.order === 'YZX') {

            var ac = a * c,
                ad = a * d,
                bc = b * c,
                bd = b * d;

            this[0] = c * e;
            this[4] = bd - ac * f;
            this[8] = bc * f + ad;

            this[1] = f;
            this[5] = a * e;
            this[9] = -b * e;

            this[2] = -d * e;
            this[6] = ad * f + bc;
            this[10] = ac - bd * f;

        } else if (euler.order === 'XZY') {

            var ac = a * c,
                ad = a * d,
                bc = b * c,
                bd = b * d;

            this[0] = c * e;
            this[4] = -f;
            this[8] = d * e;

            this[1] = ac * f + bd;
            this[5] = a * e;
            this[9] = ad * f - bc;

            this[2] = bc * f - ad;
            this[6] = b * e;
            this[10] = bd * f + ac;

        }
		
		this[3] = 0;
		this[7] = 0;
		this[11] = 0;
		
		this[12] = 0;
		this[13] = 0;
		this[14] = 0;
		this[15] = 1;
		
		return this;
	}



	public function setRotationFromQuaternion(q:Quaternion): Matrix4{
		trace('DEPRECATED: Matrix4\'s .setRotationFromQuaternion() has been deprecated in favor of makeRotationFromQuaternion.  Please update your code.');
        return makeRotationFromQuaternion(q);
	}

	public function makeRotationFromQuaternion(q:Quaternion): Matrix4{
        var x = q.x,
            y = q.y,
            z = q.z,
            w = q.w;
        var x2 = x + x,
            y2 = y + y,
            z2 = z + z;
        var xx = x * x2,
            xy = x * y2,
            xz = x * z2;
        var yy = y * y2,
            yz = y * z2,
            zz = z * z2;
        var wx = w * x2,
            wy = w * y2,
            wz = w * z2;

        this[0] = 1 - (yy + zz);
        this[4] = xy - wz;
        this[8] = xz + wy;

        this[1] = xy + wz;
        this[5] = 1 - (xx + zz);
        this[9] = yz - wx;

        this[2] = xz - wy;
        this[6] = yz + wx;
        this[10] = 1 - (xx + yy);

        // last column
        this[3] = 0;
        this[7] = 0;
        this[11] = 0;

        // bottom row
        this[12] = 0;
        this[13] = 0;
        this[14] = 0;
        this[15] = 1;

        return this;

    }

    public function lookAt (eye:Vector3, target:Vector3, up:Vector3) : Matrix4
	{
		var x = new Vector3(), y = new Vector3(), z = new Vector3();

		
		z.subVectors(eye, target).normalize();
		if (z.length() == 0) z.z = 1;
		
		x.crossVectors(up, z).normalize();
		if (x.length() == 0) 
		{
			z.x += 0.0001;
			x.crossVectors(up, z).normalize();
		}
		
		y.crossVectors(z, x);
		
		this[0] = x.x;	this[4] = y.x;	this[8] = z.x;
		this[1] = x.y;	this[5] = y.y;	this[9] = z.y;
		this[2] = x.z;	this[6] = y.z;	this[10] = z.z;
		
		return this;
	}


	public function multiply (m:Matrix4, n:Matrix4 = null) : Matrix4
	{
		if (n != null) return multiplyMatrices(m, n);
		return multiplyMatrices(this, m);
	}
	
	
	public function multiplyMatrices (a:Matrix4, b:Matrix4) : Matrix4
	{
		var ae = a;
		var be = b;
		
		var a11 = ae[0], a12 = ae[4], a13 = ae[8], a14 = ae[12];
		var a21 = ae[1], a22 = ae[5], a23 = ae[9], a24 = ae[13];
		var a31 = ae[2], a32 = ae[6], a33 = ae[10], a34 = ae[14];
		var a41 = ae[3], a42 = ae[7], a43 = ae[11], a44 = ae[15];
		
		var b11 = be[0], b12 = be[4], b13 = be[8], b14 = be[12];
		var b21 = be[1], b22 = be[5], b23 = be[9], b24 = be[13];
		var b31 = be[2], b32 = be[6], b33 = be[10], b34 = be[14];
		var b41 = be[3], b42 = be[7], b43 = be[11], b44 = be[15];
		
		this[0] = a11 * b11 + a12 * b21 + a13 * b31 + a14 * b41;
		this[4] = a11 * b12 + a12 * b22 + a13 * b32 + a14 * b42;
		this[8] = a11 * b13 + a12 * b23 + a13 * b33 + a14 * b43;
		this[12] = a11 * b14 + a12 * b24 + a13 * b34 + a14 * b44;
		
		this[1] = a21 * b11 + a22 * b21 + a23 * b31 + a24 * b41;
		this[5] = a21 * b12 + a22 * b22 + a23 * b32 + a24 * b42;
		this[9] = a21 * b13 + a22 * b23 + a23 * b33 + a24 * b43;
		this[13] = a21 * b14 + a22 * b24 + a23 * b34 + a24 * b44;
		
		this[2] = a31 * b11 + a32 * b21 + a33 * b31 + a34 * b41;
		this[6] = a31 * b12 + a32 * b22 + a33 * b32 + a34 * b42;
		this[10] = a31 * b13 + a32 * b23 + a33 * b33 + a34 * b43;
		this[14] = a31 * b14 + a32 * b24 + a33 * b34 + a34 * b44;
		
		this[3] = a41 * b11 + a42 * b21 + a43 * b31 + a44 * b41;
		this[7] = a41 * b12 + a42 * b22 + a43 * b32 + a44 * b42;
		this[11] = a41 * b13 + a42 * b23 + a43 * b33 + a44 * b43;
		this[15] = a41 * b14 + a42 * b24 + a43 * b34 + a44 * b44;
		
		return this;
	}

	public function multiplyToArray (a:Matrix4, b:Matrix4, r:Array<Float>) : Matrix4
	{
		multiplyMatrices(a, b);
		r[0] = this[0]; r[1] = this[1]; r[2] = this[2]; r[3] = this[3];
		r[4] = this[4]; r[5] = this[5]; r[6] = this[6]; r[7] = this[7];
		r[8] = this[8]; r[9] = this[9]; r[10] = this[10]; r[11] = this[11];
		r[12] = this[12]; r[13] = this[13]; r[14] = this[14]; r[15] = this[15];
		return this;
	}
	
	
	public function multiplyScalar (s:Float) : Matrix4
	{
		this[0] *= s; this[4] *= s; this[8] *= s; this[12] *= s;
		this[1] *= s; this[5] *= s; this[9] *= s; this[13] *= s;
		this[2] *= s; this[6] *= s; this[10] *= s; this[14] *= s;
		this[3] *= s; this[7] *= s; this[11] *= s; this[15] *= s;
		return this;
	}
	
	
	public function multiplyVector3 (v:Vector3) : Vector3
	{
		trace('DEPRECATED: Matrix4\'s .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) or vector.applyProjection( matrix ) instead.');
		return v.applyProjection(this);
	}
	
	
	public function multiplyVector4 (v:Vector3) : Vector3
	{
		trace('DEPRECATED: Matrix4\'s .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead.');
		return v.applyMatrix4(this);
	}

	public function multiplyVector3Array (a:Array<Float>) : Array<Float>
	{
		var v1 = new Vector3();
		var i = 0, il = a.length;
		while (i < il)
		{
			v1.x = a[i];
			v1.y = a[i + 1];
			v1.z = a[i + 2];
			v1.applyProjection(this);
			a[i] = v1.x;
			a[i + 1] = v1.y;
			a[i + 2] = v1.z;
			i += 3;
		}
		return a;
	}
	
	
	public function rotateAxis (v:Vector3)
	{
		trace('DEPRECATED: Matrix4\'s .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead.');
		v.transformDirection(this);
	}
	
	
	public function crossVector (v:Vector3) : Vector3
	{
		trace('DEPRECATED: Matrix4\'s .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead.');
		return v.applyMatrix4(this);
	}
	
	
	public function determinant () : Float
	{
		var n11 = this[0], n12 = this[4], n13 = this[8], n14 = this[12];
		var n21 = this[1], n22 = this[5], n23 = this[9], n24 = this[13];
		var n31 = this[2], n32 = this[6], n33 = this[10], n34 = this[14];
		var n41 = this[3], n42 = this[7], n43 = this[11], n44 = this[15];
		
		//#!TODO: make this more efficient
        //( based on http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm )

		return (
			n41 * (
				n14 * n23 * n32
				-n13 * n24 * n32
				-n14 * n22 * n33
				+n12 * n24 * n33
				+n13 * n22 * n34
				-n12 * n23 * n34
			) +
			n42 * (
				n11 * n23 * n34
				-n11 * n24 * n33
				+n14 * n21 * n33
				-n13 * n21 * n34
				+n13 * n24 * n31
				-n14 * n23 * n31
			) +
			n43 * (
				n11 * n24 * n32
				-n11 * n22 * n34
				-n14 * n21 * n32
				+n12 * n21 * n34
				+n14 * n22 * n31
				-n12 * n24 * n31
			) +
			n44 * (
				-n13 * n22 * n31
				-n11 * n23 * n32
				+n11 * n22 * n33
				+n13 * n21 * n32
				-n12 * n21 * n33
				+n12 * n23 * n31
			)
		);
	}
	
	
	public function transpose () : Matrix4
	{
		var tmp:Float;
		
		tmp = this[1]; this[1] = this[4]; this[4] = tmp;
		tmp = this[2]; this[2] = this[8]; this[8] = tmp;
		tmp = this[6]; this[6] = this[9]; this[9] = tmp;
		
		tmp = this[3]; this[3] = this[12]; this[12] = tmp;
		tmp = this[7]; this[7] = this[13]; this[13] = tmp;
		tmp = this[11]; this[11] = this[14]; this[14] = tmp;
		
		return this;
		
	}


	public function flattenToArray (flat:Array<Float> = null) : Array<Float>
	{
		if (flat == null) 
		{
			flat = new Array<Float>();
			var i = 0;
			while (i++ < 16) flat.push(0.0);
		}

		flat[ 0 ] = this[0]; flat[ 1 ] = this[1]; flat[ 2 ] = this[2]; flat[ 3 ] = this[3];
		flat[ 4 ] = this[4]; flat[ 5 ] = this[5]; flat[ 6 ] = this[6]; flat[ 7 ] = this[7];
		flat[ 8 ] = this[8]; flat[ 9 ] = this[9]; flat[ 10 ] = this[10]; flat[ 11 ] = this[11];
		flat[ 12 ] = this[12]; flat[ 13 ] = this[13]; flat[ 14 ] = this[14]; flat[ 15 ] = this[15];
		return flat;
	}
	
	
	public function flattenToArrayOffset (flat:Array<Float>, offset:Int) : Array<Float>
	{
		flat[ offset ] = this[0];
		flat[ offset + 1 ] = this[1];
		flat[ offset + 2 ] = this[2];
		flat[ offset + 3 ] = this[3];
		
		flat[ offset + 4 ] = this[4];
		flat[ offset + 5 ] = this[5];
		flat[ offset + 6 ] = this[6];
		flat[ offset + 7 ] = this[7];
		
		flat[ offset + 8 ]  = this[8];
		flat[ offset + 9 ]  = this[9];
		flat[ offset + 10 ] = this[10];
		flat[ offset + 11 ] = this[11];
		
		flat[ offset + 12 ] = this[12];
		flat[ offset + 13 ] = this[13];
		flat[ offset + 14 ] = this[14];
		flat[ offset + 15 ] = this[15];
		
		return flat;
	}
	
	
	public function getPosition () : Vector3
	{
		trace('DEPRECATED: Matrix4\'s .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead.');
		return new Vector3(this[12], this[13], this[14]);
	}
	
	
	public function setPosition (v:Vector3) : Matrix4
	{
		this[12] = v.x;
		this[13] = v.y;
		this[14] = v.z;
		return this;
	}
	
	
	public function getInverse (m:Matrix4) : Matrix4
	{
		var me = m;
		
		var n11 = me[0], n12 = me[4], n13 = me[8], n14 = me[12];
		var n21 = me[1], n22 = me[5], n23 = me[9], n24 = me[13];
		var n31 = me[2], n32 = me[6], n33 = me[10], n34 = me[14];
		var n41 = me[3], n42 = me[7], n43 = me[11], n44 = me[15];
		
		this[0] = n23*n34*n42 - n24*n33*n42 + n24*n32*n43 - n22*n34*n43 - n23*n32*n44 + n22*n33*n44;
		this[4] = n14*n33*n42 - n13*n34*n42 - n14*n32*n43 + n12*n34*n43 + n13*n32*n44 - n12*n33*n44;
		this[8] = n13*n24*n42 - n14*n23*n42 + n14*n22*n43 - n12*n24*n43 - n13*n22*n44 + n12*n23*n44;
		this[12] = n14*n23*n32 - n13*n24*n32 - n14*n22*n33 + n12*n24*n33 + n13*n22*n34 - n12*n23*n34;
		this[1] = n24*n33*n41 - n23*n34*n41 - n24*n31*n43 + n21*n34*n43 + n23*n31*n44 - n21*n33*n44;
		this[5] = n13*n34*n41 - n14*n33*n41 + n14*n31*n43 - n11*n34*n43 - n13*n31*n44 + n11*n33*n44;
		this[9] = n14*n23*n41 - n13*n24*n41 - n14*n21*n43 + n11*n24*n43 + n13*n21*n44 - n11*n23*n44;
		this[13] = n13*n24*n31 - n14*n23*n31 + n14*n21*n33 - n11*n24*n33 - n13*n21*n34 + n11*n23*n34;
		this[2] = n22*n34*n41 - n24*n32*n41 + n24*n31*n42 - n21*n34*n42 - n22*n31*n44 + n21*n32*n44;
		this[6] = n14*n32*n41 - n12*n34*n41 - n14*n31*n42 + n11*n34*n42 + n12*n31*n44 - n11*n32*n44;
		this[10] = n12*n24*n41 - n14*n22*n41 + n14*n21*n42 - n11*n24*n42 - n12*n21*n44 + n11*n22*n44;
		this[14] = n14*n22*n31 - n12*n24*n31 - n14*n21*n32 + n11*n24*n32 + n12*n21*n34 - n11*n22*n34;
		this[3] = n23*n32*n41 - n22*n33*n41 - n23*n31*n42 + n21*n33*n42 + n22*n31*n43 - n21*n32*n43;
		this[7] = n12*n33*n41 - n13*n32*n41 + n13*n31*n42 - n11*n33*n42 - n12*n31*n43 + n11*n32*n43;
		this[11] = n13*n22*n41 - n12*n23*n41 - n13*n21*n42 + n11*n23*n42 + n12*n21*n43 - n11*n22*n43;
		this[15] = n12*n23*n31 - n13*n22*n31 + n13*n21*n32 - n11*n23*n32 - n12*n21*n33 + n11*n22*n33;
		
		var det = me[ 0 ] * this[ 0 ] + me[ 1 ] * this[ 4 ] + me[ 2 ] * this[ 8 ] + me[ 3 ] * this[ 12 ];
		
		if (det == 0)
		{
			trace('Matrix4.getInverse: cant invert matrix, determinant is 0');
			identity();
			return this;
		}
		
		multiplyScalar(1 / det);
		return this;
	}
	public function translate(v:Vector3) {
        trace('DEPRECATED: Matrix4\'s .translate() has been removed.');
    }

    public function rotateX(angle:Float) {
        trace('DEPRECATED: Matrix4\'s .rotateX() has been removed.');
    }

    public function rotateY(angle:Float) {
        trace('DEPRECATED: Matrix4\'s .rotateY() has been removed.');
    }

    public function rotateZ(angle:Float) {
        trace('DEPRECATED: Matrix4\'s .rotateZ() has been removed.');
    }

    public function rotateByAxis(axis:Vector3, angle:Float) {
        trace('DEPRECATED: Matrix4\'s .rotateByAxis() has been removed.');
    }	
	
	public function scale (v:Vector3) : Matrix4
	{
		var x = v.x, y = v.y, z = v.z;
		this[0] *= x; this[4] *= y; this[8] *= z;
		this[1] *= x; this[5] *= y; this[9] *= z;
		this[2] *= x; this[6] *= y; this[10] *= z;
		this[3] *= x; this[7] *= y; this[11] *= z;
		
		return this;
	}

	public function getMaxScaleOnAxis () : Float
	{
		
		var scaleXSq = this[0] * this[0] + this[1] * this[1] + this[2] * this[2];
		var scaleYSq = this[4] * this[4] + this[5] * this[5] + this[6] * this[6];
		var scaleZSq = this[8] * this[8] + this[9] * this[9] + this[10] * this[10];
		
		return Math.sqrt( Math.max( scaleXSq, Math.max( scaleYSq, scaleZSq ) ) );		
	}
	
	
	public function makeTranslation (x:Float, y:Float, z:Float) : Matrix4
	{
		set(
			1, 0, 0, x,
			0, 1, 0, y,
			0, 0, 1, z,
			0, 0, 0, 1
		);
		return this;
	}
	
	
	public function makeRotationX (theta:Float) : Matrix4
	{
		var c =  Math.cos(theta), s = Math.sin(theta);
		set(
			1, 0, 0, 0,
			0, c, -s, 0,
			0, s, c, 0,
			0, 0, 0, 1
		);
		return this;
	}
	
	
	public function makeRotationY (theta:Float) : Matrix4
	{
		var c = Math.cos(theta), s = Math.sin(theta);
		set(
			c, 0, s, 0,
			0, 1, 0, 0,
			-s, 0, c, 0,
			0, 0, 0, 1
		);
		return this;
	}
	
	
	public function makeRotationZ (theta:Float) : Matrix4
	{
		var c = Math.cos(theta), s = Math.sin(theta);
		set(
			c, -s, 0, 0,
			s, c, 0, 0,
			0, 0, 1, 0,
			0, 0, 0, 1
		);
		return this;
	}
	
	
	public function makeRotationAxis (axis:Vector3, angle:Float) : Matrix4
	{
		var c = Math.cos( angle );
		var s = Math.sin( angle );
		var t = 1 - c;
		var ax = axis.x, ay = axis.y, az = axis.z;
		var tx = t * ax, ty = t * ay;
		
		set(
			tx * ax + c,		tx * ay - s * az,	tx * az + s * ay,	0,
			tx * ay + s * az,	ty * ay + c,		ty * az - s * ax,	0,
			tx * az - s * ay,	ty * az + s * ax,	t * az * az + c,	0,
			0, 0, 0, 1
		);
		return this;
	}
	
	
	public function makeScale (x:Float, y:Float, z:Float) : Matrix4
	{
		set(
			x, 0, 0, 0,
			0, y, 0, 0,
			0, 0, z, 0,
			0, 0, 0, 1
		);
		return this;
	}
	
	
	public function compose (vpos:Vector3, q:Quaternion, vscale:Vector3) : Matrix4
	{ 
		return makeFromPositionQuaternionScale(vpos, q, vscale);
	}

	public function makeFromPositionQuaternionScale (vpos:Vector3, q:Quaternion, vscale:Vector3) : Matrix4
	{
		makeRotationFromQuaternion(q);
		scale(vscale);
		setPosition(vpos);
		return this;
	}
	
	
	//swapped scale/order arguments for default 'XYZ' order
	public function makeFromPositionEulerScale (vpos:Vector3, vrot:Vector3, vscale:Vector3, order:String = 'XYZ') : Matrix4
	{
		makeRotationFromEuler(vrot, order);
		scale(vscale);
		setPosition(vpos);
		return this;
	}

	public function decompose (position:Vector3 = null, quaternion:Quaternion = null, scale:Vector3 = null) : Array<Dynamic>
	{
		
		var ax = new Vector3(this[0], this[1], this[2]);
		var ay = new Vector3(this[4], this[5], this[6]);
		var az = new Vector3(this[8], this[9], this[10]);
		var matrix = new Matrix4();
		
		
		if (position == null) position = new Vector3();
		if (quaternion == null) quaternion = new Quaternion();
		if (scale == null) scale = new Vector3();
		
		scale.x = ax.length();
		scale.y = ay.length();
		scale.z = az.length();
		
		position.x = this[12];
		position.y = this[13];
		position.z = this[14];
		
		matrix.set(this);
		
		var invSX = 1 / sx;
        var invSY = 1 / sy;
        var invSZ = 1 / sz;

        matrix[0] *= invSX;
        matrix[1] *= invSX;
        matrix[2] *= invSX;

        matrix[4] *= invSY;
        matrix[5] *= invSY;
        matrix[6] *= invSY;

        matrix[8] *= invSZ;
        matrix[9] *= invSZ;
        matrix[10] *= invSZ;
		
		quaternion.setFromRotationMatrix(matrix);
		
		var arr = new Array<Dynamic>();
		arr.push(position);
		arr.push(quaternion);
		arr.push(scale);
		return arr;
	}
	
	public function makeFrustum (left:Float, right:Float, bottom:Float, top:Float, near:Float, far:Float) : Matrix4
	{
		var tx = 2 * near / (right - left);
		var ty = 2 * near / (top - bottom);
		var a = (right + left) / (right - left);
		var b = (top + bottom) / (top - bottom);
		var c = -(far + near) / (far - near);
		var d = -2 * far * near / (far - near);
		
		this[0] = tx;		this[4] = 0;		this[8] = a;		this[12] = 0;
		this[1] = 0;		this[5] = ty;		this[9] = b;		this[13] = 0;
		this[2] = 0;		this[6] = 0;		this[10] = c;		this[14] = d;
		this[3] = 0;		this[7] = 0;		this[11] = -1;		this[15] = 0;
		
		return this;
	}
	
	
	public function makePerspective (fov:Float, aspect:Float, near:Float, far:Float) : Matrix4
	{
		var ymax = near * Math.tan( MathUtils.degToRad(fov * 0.5) );
		var ymin = -ymax;
		var xmin = ymin * aspect;
		var xmax = ymax * aspect;
		return makeFrustum(xmin, xmax, ymin, ymax, near, far);
	}
	
	
	public function makeOrthographic (left:Float, right:Float, top:Float, bottom:Float, near:Float, far:Float) : Matrix4
	{
		var w = right - left;
		var h = top - bottom;
		var p = far - near;
		
		var tx = ( right + left ) / w;
		var ty = ( top + bottom ) / h;
		var tz = ( far + near ) / p;
		
		this[0] = 2 / w;	this[4] = 0;		this[8] = 0;		this[12] = -tx;
		this[1] = 0;		this[5] = 2 / h;	this[9] = 0;		this[13] = -ty;
		this[2] = 0;		this[6] = 0;		this[10] = -2/p;	this[14] = -tz;
		this[3] = 0;		this[7] = 0;		this[11] = 0;		this[15] = 1;
		
		return this;
	}

	
	public function clone () : Matrix4
	{
		var te = elements;
		return new Matrix4(
			te[0], te[4], te[8], te[12],
			te[1], te[5], te[9], te[13],
			te[2], te[6], te[10], te[14],
			te[3], te[7], te[11], te[15]
		);
	}
}