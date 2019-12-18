const SERVER_ENDPOINT = 'https://api.nasa.gov/insight_weather/?api_key=dExwaBnXRzmESBZqFiDEsbKUHeugVAGj1X0wyrx2&feedtype=json&ver=1.0';

let customHeaders = new Headers();
customHeaders.append('Accept', 'application/json');

var chartData = [{
  r: [77.5, 72.5, 70.0, 45.0, 22.5, 42.5, 40.0, 62.5],
  theta: ["North", "N-E", "East", "S-E", "South", "S-W", "West", "N-W"],
  name: "11-14 m/s",
  marker: {color: "rgb(106,81,163)"},
  type: "barpolar"
}, {
  r: [57.5, 50.0, 45.0, 35.0, 20.0, 22.5, 37.5, 55.0],
  theta: ["North", "N-E", "East", "S-E", "South", "S-W", "West", "N-W"],
  name: "8-11 m/s",
  marker: {color: "rgb(158,154,200)"},
  type: "barpolar"
}, {
  r: [40.0, 30.0, 30.0, 35.0, 7.5, 7.5, 32.5, 40.0],
  theta: ["North", "N-E", "East", "S-E", "South", "S-W", "West", "N-W"],
  name: "5-8 m/s",
  marker: {color: "rgb(203,201,226)"},
  type: "barpolar"
}, {
  r: [20.0, 7.5, 15.0, 22.5, 2.5, 2.5, 12.5, 22.5],
  theta: ["North", "N-E", "East", "S-E", "South", "S-W", "West", "N-W"],
  name: "< 5 m/s",
  marker: {color: "rgb(242,240,247)"},
  type: "barpolar"
}]
var chartLayout = {
  title: "Wind Speed Distribution in Elysium Planitia, MARS",
  font: {size: 16},
  legend: {font: {size: 16}},
  polar: {
    barmode: "overlay",
    bargap: 0,
    radialaxis: {ticksuffix: "%", angle: 45, dtick: 10},
    angularaxis: {direction: "clockwise"}
  }
}

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
          console.log(sol);
          console.log(data[d])
        }
        sol = "";
  }
	domData.innerHTML += HTML;
};


const init = function()
{
  domData = document.querySelector('.js-data');
  getAPICoolestWay();
}

document.addEventListener('DOMContentLoaded', function() {
  console.info('DOM geladen');
  Plotly.newPlot(chart, chartData, chartLayout)
  init();
  
});