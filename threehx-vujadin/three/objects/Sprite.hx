package three.objects;

import three.core.Geometry;
import three.core.Object3D;
import three.materials.Material;
import three.materials.MeshBasicMaterial;
import three.materials.SpriteMaterial;
import three.THREE;

/**
 * @author mikael emtinger / http://gomo.se/
 * @author alteredq / http://alteredqualia.com/
 */

/**
 * ...
 * @haxeport Krtolica Vujadin - GameStudioHx.com
 */

class Sprite extends Object3D {
	
	public var material:SpriteMaterial;
	
	public function new(mat:SpriteMaterial = null) {
		super();
		
		material = mat != null ? mat : new SpriteMaterial();
	}
	
	public function update():Void {
		this.matrix.compose( this.position, this.quaternion, this.scale );
		this.matrixWorldNeedsUpdate = true;
	}
	
	public function clone(object:Sprite = null):Sprite {
		if (object == null) object = new Sprite(this.material);

		object = cast super._clone(object);

		return object;
	}
}