var chartVars = "KoolOnLoadCallFunction=chartReadyHandler";



function chartReadyHandler(id) {
  document.getElementById(id).setLayout(layoutStr);
  document.getElementById(id).setData(chartData);
}

var layoutStr =
  '<KoolChart backgroundColor="#FFFFFF"  borderStyle="none">'
   +'<Options>'
    +'<Caption text="Mars Wind" />'
    +'<SubCaption text="( mm )" textAlign="right" />'
    +'<Legend defaultMouseOverAction="true" useVisibleCheck="true"/>'
   +'</Options>'
   +'<WindRoseChart showDataTips="true" dataTipDisplayMode="mouse" paddingBottom="30">'
    +'<angularAxis>'
     +'<CategoryAxis id="aAxis" categoryField="Month"/>' 
    +'</angularAxis>'
    +'<series>'
     +'<WindRoseSeries field="Seoul" displayName="Seoul">'
      +'<fill>'
       +'<SolidColor color="#49e1d2" alpha="0.8"/>'
      +'</fill>'
      +'<showDataEffect>'
       +'<SeriesInterpolate duration="1000"/>' 
      +'</showDataEffect>'
     +'</WindRoseSeries>'
     +'<WindRoseSeries field="NewYork" displayName="New York">'
      +'<fill>'
       +'<SolidColor color="#54bbe8" alpha="0.8"/>'
      +'</fill>'
      +'<showDataEffect>'
       +'<SeriesInterpolate duration="1000"/>' 
      +'</showDataEffect>'
      +'</WindRoseSeries>'
     +'<WindRoseSeries field="Paris" displayName="Paris">'
      +'<fill>'
       +'<SolidColor color="#5560af" alpha="0.8"/>'
      +'</fill>'
      +'<showDataEffect>'
       +'<SeriesInterpolate duration="1000"/>' 
      +'</showDataEffect>'
     +'</WindRoseSeries>'
    +'</series>'
    +'<radialAxisRenderers>'
     +'<Axis2DRenderer axis="{aAxis}"/>'
    +'</radialAxisRenderers>'
   +'</WindRoseChart>'
  +'</KoolChart>';

var chartData =
  [{"Month":"Jan","Seoul":600,"NewYork":600,"Paris":400},
  {"Month":"Feb","Seoul":800,"NewYork":400,"Paris":0},
  {"Month":"Mar","Seoul":400,"NewYork":200,"Paris":0},
  {"Month":"Apr","Seoul":400,"NewYork":420,"Paris":0},
  {"Month":"May","Seoul":600,"NewYork":500,"Paris":0},
  {"Month":"Jun","Seoul":900,"NewYork":380,"Paris":340},
  {"Month":"Jul","Seoul":600,"NewYork":710,"Paris":430},
  {"Month":"Aug","Seoul":600,"NewYork":360,"Paris":0},
  {"Month":"Sep","Seoul":800,"NewYork":380,"Paris":0},
  {"Month":"Oct","Seoul":600,"NewYork":700,"Paris":480},
  {"Month":"Nov","Seoul":900,"NewYork":390,"Paris":440},
  {"Month":"Dec","Seoul":600,"NewYork":680,"Paris":0}];

  document.addEventListener('DOMContentLoaded', function() {
    console.info('DOM geladen2');
    KoolChart.create("chart1", "chartHolder", chartVars, "100%", "100%");
  });