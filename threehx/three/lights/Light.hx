//r66
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
		
	public function __clone(light:Light = null):Light {
		if (light != null) light = new Light();
		
		light = cast super._clone(light);
		light.color.copy(this.color);
		return light;
	}
	
}
