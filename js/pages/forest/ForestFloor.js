 
function ForestFloor( activeTexture ,  params ){

  var forestFloorGeo = new THREE.PlaneGeometry( params.width , params.height , 300 , 300 );

  forestFloorGeo.computeVertexNormals();
  console.log('IPOS');
  console.log( G.iPosition );

  var forestFloorMat = new THREE.ShaderMaterial({

    uniforms:{

      lightPos:{type:"v3",value: G.iPoint},
      cameraPos:{type:"v3",value: G.camera.position},
      size:{ type:"v2" , value:new THREE.Vector2( params.width , params.height ) },
      t_active:{ type:"t" , value: activeTexture},
      t_audio:G.t_audio,
      t_normal:{ type:"t" , value: G.TEXTURES.normal_moss},
      normalScale:{ type:"f" , value: .5 },
      texScale:{ type:"f" , value: .6 },

    },
    vertexShader: G.shaders.vs.forestFloor,
    fragmentShader: G.shaders.fs.forestFloor,


  });


  var forestFloor = new THREE.Mesh(
    forestFloorGeo,
    forestFloorMat
  );

  return forestFloor;


}


