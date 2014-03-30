##Let's get [three.js](https://github.com/mrdoob/three.js/) ported to Haxe!
The current approach is to port just enough to run the most basic scene, this will allow us to test design considerations and ensure that the foundations are rock solid for future development. This initial attempt will aim to run a very basic scene in GL, Flash and Canvas, however further development will focus on GL alone

###Design Considerations
- In three.js the renderer adds additional fields to objects, in haxe, this means objects have to be predefined with renderer specific fields. These fields should either be stored elsewhere or be define in a general, renderer agonistic manner on the object.
`Use foo3d as the interface to the renderer?`
- Easy upgrade path: needs to map well onto threejs codebase
`functions should be tagged with revision they were ported from`
- Port three.js tests

###Getting Involved
Execute `git clone --recursive https://github.com/haxiomic/ThreeHX-Basic-Scene.git` to clone the repo including the three.js submodule

The current ThreeHX library is in the ./threehx folder and the basic test scene is in ./basic-scene-hx, to build: `cd basic-scene-hx` and execute `lime test html5`

Mark todos or other important comments with a '#!' e.g. `//#! this bit needs finishing`, this makes them searchable later on.

If a file is incomplete, please put what you've done and what needs to be done at the top.

Mark the revision the file was ported from at the top e.g.: `//R66`, if a function is added from a different revision, add comment above it marking the revision - this should make updating much easier

Other three.js->hx porting projects, be sure to check them out!
[https://github.com/haxiomic/ThreeHX](https://github.com/haxiomic/ThreeHX)  
[https://github.com/eskojones/ThreeHX](https://github.com/eskojones/ThreeHX)  
[https://github.com/seacloud9/ThreeHX](https://github.com/seacloud9/ThreeHX)

###Important notes
- math.Math has become three.math.TMath to avoid conflict with standard Math lib

###Files touched in the basic scene, roughly in order
Excluding the WebGLRenderer dependancies because it accesses everything! If you've got time on your hands, pick one of these to port :) . Not all are actually used, but all are referenced in the basic-scene. 

- **Three.js**
- math/**Math.js**
- math/**Vector2.js**
- math/**Vector3.js**
- math/**Vector4.js**
- math/**Matrix3.js**
- math/**Matrix4.js**
- math/**Box3.js**
- math/**Sphere.js**
- math/**Color.js**
- math/**Quaternion.js**
- math/**Frustum.js**
- math/**Plane.js**
- math/**Euler.js**
- core/**EventDispatcher.js**
- core/**Geometry.js**
- core/**Face3.js**
- core/**Object3D.js**
- lights/**Light.js**
- objects/**Bone.js**
- scenes/**Scene.js**
- cameras/**Camera.js**
- cameras/**PerspectiveCamera.js**
- extras/geometries/**BoxGeometry.js**
- materials/**Material.js**
- materials/**MeshBasicMaterial.js**
- objects/**Mesh.js**
- renderers/**WebGLRenderer.js** 


#Complete

- **Three.hx**
- math/**TMath.hx**
- math/**Vector2.hx**

#Incomplete 

- math/**Color.hx**
- math/**Quaternion.hx**
- math/**Vector2.hx**
- math/**Vector3.hx**
- math/**Vector4.hx**
- math/**Euler.hx**
- math/**Line3.hx**
- math/**Box2.hx**
- math/**Box3.hx**
- math/**Matrix3.hx**
- math/**Matrix4.hx**
- math/**Ray.hx**
- math/**Sphere.hx**
- math/**Frustum.hx**
- math/**Plane.hx**
- math/**Spline.hx**
- math/**Triangle.hx**
- math/**Vertex.hx**
- math/**UV.hx**
- core/**Clock.hx**
- core/**EventDispatcher.hx**
- core/**Raycaster.hx**
- core/**Object3D.hx**
- core/**Projector.hx**
- core/**Face3.hx**
- core/**Face4.hx**
- core/**BufferGeometry.hx**
- core/**Geometry.hx**
- core/**Geometry2.hx**
- cameras/**Camera.hx**
- cameras/**OrthographicCamera.hx**
- cameras/**PerspectiveCamera.hx**
- lights/**Light.hx**
- lights/**AmbientLight.hx**
- lights/**AreaLight.hx**
- lights/**DirectionalLight.hx**
- lights/**HemisphereLight.hx**
- lights/**PointLight.hx**
- lights/**SpotLight.hx**
- loaders/**Loader.hx**
- loaders/**XHRLoader.hx**
- loaders/**ImageLoader.hx**
- loaders/**JSONLoader.hx**
- loaders/**LoadingManager.hx**
- loaders/**BufferGeometryLoader.hx**
- loaders/**Geometry2Loader.hx**
- loaders/**MaterialLoader.hx**
- loaders/**ObjectLoader.hx**
- loaders/**SceneLoader.hx**
- loaders/**TextureLoader.hx**
- materials/**Material.hx**
- materials/**LineBasicMaterial.hx**
- materials/**LineDashedMaterial.hx**
- materials/**MeshBasicMaterial.hx**
- materials/**MeshLambertMaterial.hx**
- materials/**MeshPhongMaterial.hx**
- materials/**MeshDepthMaterial.hx**
- materials/**MeshNormalMaterial.hx**
- materials/**MeshFaceMaterial.hx**
- materials/**ParticleSystemMaterial.hx**
- materials/**ShaderMaterial.hx**
- materials/**SpriteMaterial.hx**
- materials/**SpriteCanvasMaterial.hx**
- textures/**Texture.hx**
- textures/**CompressedTexture.hx**
- textures/**DataTexture.hx**
- objects/**ParticleSystem.hx**
- objects/**Line.hx**
- objects/**Mesh.hx**
- objects/**Bone.hx**
- objects/**SkinnedMesh.hx**
- objects/**MorphAnimMesh.hx**
- objects/**LOD.hx**
- objects/**Sprite.hx**
- scenes/**Scene.hx**
- scenes/**Fog.hx**
- scenes/**FogExp2.hx**
- renderers/**CanvasRenderer.hx**
- renderers/shaders/**ShaderChunk.hx**
- renderers/shaders/**UniformsUtils.hx**
- renderers/shaders/**UniformsLib.hx**
- renderers/shaders/**ShaderLib.hx**
- renderers/**WebGLRenderer.hx**
- renderers/**WebGLRenderTarget.hx**
- renderers/**WebGLRenderTargetCube.hx**
- renderers/renderables/**RenderableVertex.hx**
- renderers/renderables/**RenderableFace.hx**
- renderers/renderables/**RenderableObject.hx**
- renderers/renderables/**RenderableSprite.hx**
- renderers/renderables/**RenderableLine.hx**

### Unessential TODOs
- Create trimmed down implementation of waneck's taurine-hx vector classes so we're not bundling all of the library with threehx (see Vector2.hx classes)

*Currently porting from r66*