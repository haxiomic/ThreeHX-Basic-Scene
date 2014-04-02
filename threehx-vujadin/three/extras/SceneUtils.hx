package three.extras;

import three.core.Geometry;
import three.core.Object3D;
import three.materials.Material;
import three.objects.Mesh;
import three.scenes.Scene;
import three.math.Matrix4;

/**
 * @author alteredq / http://alteredqualia.com/
 */

/**
 * 
 * @haxeport Krtolica Vujadin - GameStudioHx.com
 */
 
class SceneUtils {

	public static function createMultiMaterialObject(geometry:Geometry, materials:Array<Material>) {
		var group = new Object3D();
		for (i 0...materials.length) {
			group.add(new Mesh(geometry, materials[i]));
		}

		return group;
	}

	public static function detach(child:Object3D, parent:Object3D, scene:Scene) {
		child.applyMatrix(parent.matrixWorld);
		parent.remove(child);
		scene.add(child);
	}

	public static function attach(child:Object3D, parent:Object3D, scene:Scene) {
		var matrixWorldInverse = new Matrix4();
		matrixWorldInverse.getInverse(parent.matrixWorld);
		child.applyMatrix(matrixWorldInverse);

		scene.remove(child);
		parent.add(child);
	}
	
}