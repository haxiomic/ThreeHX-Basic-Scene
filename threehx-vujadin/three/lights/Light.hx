package three.lights;

import three.core.Object3D;
import three.math.Color;
import three.math.Vector3;
import three.THREE;

/**
 * 
 * @author dcm
 */

class Light extends Object3D {
	
	public var color:Color;
	
	public function new(hex:Int = 0xffffffff) {
		super();
		
		color = new Color(hex);
	}
		
	public function __clone(object:Light = null):Light {
		if (object != null) object = new Light();
		
		object = cast super._clone(object);
		object.color.copy(color);
		return object;
	}
	
}
