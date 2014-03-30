package;

import three.THREE;
import three.math.TMath;

class Main{
	//var camera:Camera;
	//var scene:Scene;
	//var renderer:Renderer;
	//var mesh:Mesh;

	public function new(){
		init();
		animate();
		//#! mainloop
	}

	public function init(){
		var width = 500;
		var height = 500;

		//camera = new PerspectiveCamera(75, width / height, 1, 10000);
		//camera.position.z = 1000;

		//scene = new Scene();

		//var geometry:Geometry = new BoxGeometry(200, 200, 200);
		//var material:Material = new MeshBasicMaterial({
		//    color: 0xff0000,
		//    wireframe: true
		//});

		//mesh = new Mesh(geometry, material);
		//scene.add(mesh);

		//renderer = new WebGLRenderer();
		//renderer.setSize(width, height);
	}

	public function animate(){
		//mesh.rotation.x += 0.01;
		//mesh.rotation.y += 0.02;

		//renderer.render(scene, camera);
	}

	//static public function main(){}
}