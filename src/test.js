
/* <![CDATA[ */
  var ge;
  var geocoder; 
  
  google.load("earth", "1");
  google.load("maps", "2.99"); 
  
  function init() {
  geocoder = new GClientGeocoder(); 
  
  google.earth.createInstance('map3d', initCB, failureCB);
  }
  
  function initCB(instance) {
  ge = instance;
  ge.getWindow().setVisibility(true);
  
  ge.getNavigationControl().setVisibility(ge.VISIBILITY_AUTO);
  
  ge.getLayerRoot().enableLayerById(ge.LAYER_BORDERS, true);
  ge.getLayerRoot().enableLayerById(ge.LAYER_ROADS, true);
  ge.getLayerRoot().enableLayerById(ge.LAYER_TERRAIN, true); 
  
  function finished(object) {
    if (!object) {
      alert('bad or NULL kml');
      return;
    }
    ge.getFeatures().appendChild(object);
  }
  
  //google.earth.fetchKml(ge, 'http://www.marceldeiss.fr/googleearth/domaine-marcel-deiss.kmz', finished);
  google.earth.fetchKml(ge, 'http://www.marceldeiss.fr/googleearth/domaine-marcel-deiss11.kmz', finished);
  //google.earth.fetchKml(ge, 'http://anniston2/deiss/googleearth/domaine-marcel-deiss15.kmz', finished);
  //google.earth.fetchKml(ge, 'http://www.marceldeiss.fr/googleearth/cvi.kml', finished);
  
  
  Zoom_Vignoble('Grand_Cru_Altenberg')
  
  }
  function Zoom_Vignoble(lieu) // ZOOM LookAt name Grand Cru Schoenenbourg.kml
  {
   var lookAt = ge.createLookAt('');
   switch(lieu)
   {
      case 'Grand_Cru_Schoenenbourg': lookAt.set(48.17018168650095, 7.30797607512327, 0, ge.ALTITUDE_RELATIVE_TO_GROUND, -59.08237732440807, 75.77351062585599, 1557.85545732121); break;
      case 'Grand_Cru_Mambourg': lookAt.set(48.13872773224845, 7.308694505738207, 0, ge.ALTITUDE_RELATIVE_TO_GROUND, 0.0003274789192645819, 67.72061579075887, 1667.005323199666); break;
    case 'Grand_Cru_Altenberg': lookAt.set(48.20867923356164, 7.355669357503756, 0, ge.ALTITUDE_RELATIVE_TO_GROUND, -26.23342139130784, 76.89209940928866, 641.317908622269); break;
    case 'Burg': lookAt.set(48.21540543035092, 7.342430298793942, 0, ge.ALTITUDE_RELATIVE_TO_GROUND, -26.50391251561044, 76.13772404788074, 1252.041585118253); break;
    case 'Burlenberg': lookAt.set(48.21257398009621, 7.350985800909663, 0, ge.ALTITUDE_RELATIVE_TO_GROUND, -28.84989602815016, 73.6789067586647, 514.4178599564632); break;
    case 'Engelgarten': lookAt.set(48.20143045710672, 7.357292644795407, 0, ge.ALTITUDE_RELATIVE_TO_GROUND, -0.002532084470251089, 66.23485045379974, 790.4413990533419); break;
    case 'Grasberg': lookAt.set(48.21373890616065, 7.359341444260838, 0, ge.ALTITUDE_RELATIVE_TO_GROUND, -140.214337284338, 67.03760336737349, 1030.654709329021); break;
    case 'Gruenspiel': lookAt.set(48.20224324582494, 7.342488584464321, 0, ge.ALTITUDE_RELATIVE_TO_GROUND, -0.7061049744584352, 71.12170587329742, 807.8448798869682); break;
    case 'Huebuhl': lookAt.set(48.20160030302093, 7.348042376276831, 0, ge.ALTITUDE_RELATIVE_TO_GROUND, -13.58373458413951, 71.6809724070875, 474.2683145523563); break;
    case 'Langenberg': lookAt.set(48.23763903868941, 7.37047685940848, 0, ge.ALTITUDE_RELATIVE_TO_GROUND, 56.40310479572805, 69.32897344967425, 1544.490804007835); break;
    case 'Rotenberg': lookAt.set(48.19763595526819, 7.350975423003991, 0, ge.ALTITUDE_RELATIVE_TO_GROUND, 161.2527051550638, 71.27097661942835, 806.105858094343); break;	
    case 'Schoffweg': lookAt.set(48.21005535007803, 7.360656708026378, 0, ge.ALTITUDE_RELATIVE_TO_GROUND, 72.09489588734594, 69.16571567161304, 596.5720846724876); break;
   }
   ge.getView().setAbstractView(lookAt);
  }
  /* ORDRE DES CHAMPS pour le lookAt.set()
      <latitude>48.17018168650095</latitude>
      <longitude>7.30797607512327</longitude>
      <altitude>0</altitude>
      <heading>-59.08237732440807</heading>
      <tilt>75.77351062585599</tilt>
      <range>1557.85545732121</range>
      
      <div id="map3d_container" style="border: 0px solid #000000; width: 75%; height: 100%;float:left;display: block; "><div id="map3d" style="height: 75%; height: 100%;float:left;display: block;"></div></div>
  */
  
  function failureCB() {
  alert('Erreur lors du chargement GoogleEarth');
  }
  
  /* ]]> */
  