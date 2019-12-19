const SERVER_ENDPOINT = 'https://api.nasa.gov/insight_weather/?api_key=dExwaBnXRzmESBZqFiDEsbKUHeugVAGj1X0wyrx2&feedtype=json&ver=1.0';

let customHeaders = new Headers();
customHeaders.append('Accept', 'application/json');

const fetchData =function(){
  return fetch(SERVER_ENDPOINT, {headers : customHeaders})
      .then(r => r.json())
      .then(data => data);
}

const getAPICoolestWay = async function(){
  try
  {
  const data = await fetchData();
  showdata(data);
  }
  catch(error)
  {
      console.warn(error)
  }
}


const showdata = function(data){
  console.log(data);
	domData.innerHTML = "";
  let HTML = 'test';
  //HTML += <div class = "js-data" value ="${d}"> ${data} ${data[d].symbol} => ${d}</div>;
	for (d in data) {
        var sol = "";
        for(i in d)
        {
          sol+= d[i];
        }
        if(sol == "sol_keys")
        {
          break;
        }
        else
        {
          for(e in i)
          console.log(i[e])
        }
        sol = "";
  }
	domData.innerHTML += HTML;
};

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

const init = function()
{
  domData = document.querySelector('.js-data');
  getAPICoolestWay();
}

document.addEventListener('DOMContentLoaded', function() {
  console.info('DOM geladen');
  KoolChart.create("chart1", "chartHolder", chartVars, "100%", "100%");
  init();
  
});