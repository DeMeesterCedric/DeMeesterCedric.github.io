const SERVER_ENDPOINT = 'https://api.nasa.gov/insight_weather/?api_key=dExwaBnXRzmESBZqFiDEsbKUHeugVAGj1X0wyrx2&feedtype=json&ver=1.0';

let day = 1;
var sols = [];
let customHeaders = new Headers();
customHeaders.append('Accept', 'application/json');

const fetchData = function () {
  return fetch(SERVER_ENDPOINT, { headers: customHeaders })
    .then(r => r.json())
    .then(data => data);
}

const getAPICoolestWay = async function () {
  try {
    const data = await fetchData();
    showdata(data);
  }
  catch (error) {
    console.warn(error)
  }
}


const showdata = function (data) {
  console.log(data);
  for (d in data) {
    var sol = "";
    for (i in d) {
      sol += d[i];
    }
    if (sol == "sol_keys") {
      break;
    }
    sols.push(sol);
    sol = "";
  }
  for (d in data) {
    var sol = "";
    for (i in d) {
      sol += d[i];
    }
    if (sol != "sol_keys" && sol != "validity_checks") {
      var dateFull = data[d].First_UTC;
      console.log(dateFull);
      dateParts = dateFull.split("T");
      var tempHigh = parseFloat(data[d].AT.mx);
      var tempLow = parseFloat(data[d].AT.mn);
      if (d == sols[6]) {
        document.querySelector('#content').insertAdjacentHTML(
          'beforeend',
          `<div class="o-day">
            <div class="o-day-big">Sol ${d}</div>
            <div>${dateParts[0]}</div>
        </div>
        <div class="o-weather">
            <div>Hight: ${((tempHigh - 32) / 1.8).toFixed(0)}°C</div>
            <div>Low: ${((tempLow - 32) / 1.8).toFixed(0)}°C</div>
        </div>`
        )
      }
    }
  }
  for (d in data) {
    var sol = "";
    for (i in d) {
      sol += d[i];
    }
    if (sol != "sol_keys" && sol != "validity_checks") {
      var dateFull = data[d].First_UTC;
      dateParts = dateFull.split("T");
      var tempHigh = parseFloat(data[d].AT.mx);
      var tempLow = parseFloat(data[d].AT.mn);
      if (d != sols[6]) {
        document.querySelector('#content').insertAdjacentHTML(
          'beforeend',
          `<div class="o-block">
              <div class="o-block-big">Sol ${d}</div>
              <div class="o-block-small">${dateParts[0]}</div>
              <div class="o-block-line"></div>
              <div class="o-block-normal">Hight: ${((tempHigh - 32) / 1.8).toFixed(0)}°C</div>
              <div class="o-block-normal">Low: ${((tempLow - 32) / 1.8).toFixed(0)}°C</div>
            </div>`
        )
      }
    }
  }
};

const init = function () {
  domData = document.querySelector('.js-data');
  getAPICoolestWay();
}

document.addEventListener('DOMContentLoaded', function () {
  console.info('DOM geladen');
  init();

});