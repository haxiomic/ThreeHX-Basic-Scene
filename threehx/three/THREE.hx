//R66
package three;

class THREE{
	// GL STATE CONSTANTS

	public static inline var CullFaceNone:Int = 0;
	public static inline var CullFaceBack:Int = 1;
	public static inline var CullFaceFront:Int = 2;
	public static inline var CullFaceFrontBack:Int = 3;

	public static inline var FrontFaceDirectionCW:Int = 0;
	public static inline var FrontFaceDirectionCCW:Int = 1;

	// SHADOWING TYPES

	public static inline var BasicShadowMap:Int = 0;
	public static inline var PCFShadowMap:Int = 1;
	public static inline var PCFSoftShadowMap:Int = 2;

	// MATERIAL CONSTANTS

	// side

	public static inline var FrontSide:Int = 0;
	public static inline var BackSide:Int = 1;
	public static inline var DoubleSide:Int = 2;

	// shading

	public static inline var NoShading:Int = 0;
	public static inline var FlatShading:Int = 1;
	public static inline var SmoothShading:Int = 2;

	// colors

	public static inline var NoColors:Int = 0;
	public static inline var FaceColors:Int = 1;
	public static inline var VertexColors:Int = 2;

	// blending modes

	public static inline var NoBlending:Int = 0;
	public static inline var NormalBlending:Int = 1;
	public static inline var AdditiveBlending:Int = 2;
	public static inline var SubtractiveBlending:Int = 3;
	public static inline var MultiplyBlending:Int = 4;
	public static inline var CustomBlending:Int = 5;

	// custom blending equations
	// (numbers start from 100 not to clash with other
	//  mappings to OpenGL constants defined in Texture.js)

	public static inline var AddEquation:Int = 100;
	public static inline var SubtractEquation:Int = 101;
	public static inline var ReverseSubtractEquation:Int = 102;

	// custom blending destination factors

	public static inline var ZeroFactor:Int = 200;
	public static inline var OneFactor:Int = 201;
	public static inline var SrcColorFactor:Int = 202;
	public static inline var OneMinusSrcColorFactor:Int = 203;
	public static inline var SrcAlphaFactor:Int = 204;
	public static inline var OneMinusSrcAlphaFactor:Int = 205;
	public static inline var DstAlphaFactor:Int = 206;
	public static inline var OneMinusDstAlphaFactor:Int = 207;

	// custom blending source factors

	//public static inline var ZeroFactor:Int = 200;
	//public static inline var OneFactor:Int = 201;
	//public static inline var SrcAlphaFactor:Int = 204;
	//public static inline var OneMinusSrcAlphaFactor:Int = 205;
	//public static inline var DstAlphaFactor:Int = 206;
	//public static inline var OneMinusDstAlphaFactor:Int = 207;
	public static inline var DstColorFactor:Int = 208;
	public static inline var OneMinusDstColorFactor:Int = 209;
	public static inline var SrcAlphaSaturateFactor:Int = 210;


	// TEXTURE CONSTANTS

	public static inline var MultiplyOperation:Int = 0;
	public static inline var MixOperation:Int = 1;
	public static inline var AddOperation:Int = 2;

	// Mapping modes

	//public static inline var UVMapping = function () {};

	//public static inline var CubeReflectionMapping = function () {};
	//public static inline var CubeRefractionMapping = function () {};

	//public static inline var SphericalReflectionMapping = function () {};
	//public static inline var SphericalRefractionMapping = function () {};

	// Wrapping modes

	public static inline var RepeatWrapping:Int = 1000;
	public static inline var ClampToEdgeWrapping:Int = 1001;
	public static inline var MirroredRepeatWrapping:Int = 1002;

	// Filters

	public static inline var NearestFilter:Int = 1003;
	public static inline var NearestMipMapNearestFilter:Int = 1004;
	public static inline var NearestMipMapLinearFilter:Int = 1005;
	public static inline var LinearFilter:Int = 1006;
	public static inline var LinearMipMapNearestFilter:Int = 1007;
	public static inline var LinearMipMapLinearFilter:Int = 1008;

	// Data types

	public static inline var UnsignedByteType:Int = 1009;
	public static inline var ByteType:Int = 1010;
	public static inline var ShortType:Int = 1011;
	public static inline var UnsignedShortType:Int = 1012;
	public static inline var IntType:Int = 1013;
	public static inline var UnsignedIntType:Int = 1014;
	public static inline var FloatType:Int = 1015;

	// Pixel types

	//public static inline var UnsignedByteType:Int = 1009;
	public static inline var UnsignedShort4444Type:Int = 1016;
	public static inline var UnsignedShort5551Type:Int = 1017;
	public static inline var UnsignedShort565Type:Int = 1018;

	// Pixel formats

	public static inline var AlphaFormat:Int = 1019;
	public static inline var RGBFormat:Int = 1020;
	public static inline var RGBAFormat:Int = 1021;
	public static inline var LuminanceFormat:Int = 1022;
	public static inline var LuminanceAlphaFormat:Int = 1023;

	// Compressed texture formats

	public static inline var RGB_S3TC_DXT1_Format:Int = 2001;
	public static inline var RGBA_S3TC_DXT1_Format:Int = 2002;
	public static inline var RGBA_S3TC_DXT3_Format:Int = 2003;
	public static inline var RGBA_S3TC_DXT5_Format:Int = 2004;

	/*
	// Potential future PVRTC compressed texture formats
	public static inline var RGB_PVRTC_4BPPV1_Format:Int = 2100;
	public static inline var RGB_PVRTC_2BPPV1_Format:Int = 2101;
	public static inline var RGBA_PVRTC_4BPPV1_Format:Int = 2102;
	public static inline var RGBA_PVRTC_2BPPV1_Format:Int = 2103;
	*/
}