// Endpoint
var SERVER_ENDPOINT = 'https://poloniex.com/public?command=returnChartData&currencyPair=BTC_ETH&start=0&end=9999999999&period=86400';

// Add a few headers - UITZONDERING
let customHeaders = new Headers();
customHeaders.append('Accept', 'application/json');

const fetchData =function(end){
  return fetch(end, {headers : customHeaders})
      .then(r => r.json())
      .then(data => data);
}

const getAPICoolestWay = async function(end){
  try
  {
  Microinteraction();
  const data = await fetchData(end);
  showdata(data);
  }
  catch(error)
  {
      console.warn(error)
  }
}

const showdata = function(data){
  const TimeList = []
  const PriceList = []

  for (d in data) 
    {
    const Price = data[d].weightedAverage;
    const unix_timestamp = data[d].date;
    
    const a = new Date(unix_timestamp * 1000);
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const year = a.getFullYear();
    const month = months[a.getMonth()];
    const date = a.getDate();
    const Time = date + ' ' + month + ' ' + year + ' ';
    TimeList.push(Time);
    PriceList.push(Price);
    }
    EndMicrointeraction();
    loadGraph(TimeList,PriceList);
};

const loadGraph = function (time,price)
{
let myChart = document.getElementById("myChart").getContext('2d');

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: time,
        datasets: [{
            label: 'Market Price (BTC)',
            fill: true,
            backgroundColor: 'rgb(143, 178, 220, 0.2)',
            borderColor: 'rgb(143, 178, 220)',
            data: price
        }]
    },
    options: 
    {
    layout:
    {
      padding:
      {
        left:24,
        right:48,
      }
    },
    legend:
    {
        display: false,
    },
    elements: 
    {
       point: 
      {
         radius: 0 
      } 
    },
    easing: 'easeInQuad'
    }
});
}

const Microinteraction = function()
{

  let myChart = document.getElementById("mychart");
  domData.innerHTML = "";
	let HTML = '<div class="microinteraction"><div></div><div></div><div></div></div>';
  domData.innerHTML += HTML;
}

const EndMicrointeraction = function()
{
  let myChart = document.getElementById("mychart");
  domData.innerHTML = "";
  let HTML = '<div class="o-graph"><canvas id="myChart"></canvas></div>';
  domData.innerHTML += HTML;
}

const AllTime = function () {
  ENDPOINT = SERVER_ENDPOINT + "&start=" + "0" + "&end=9999999999&period=86400";
  domTime.innerHTML = '<span class="js-time">all time</span>';
  getAPICoolestWay(ENDPOINT);
};

const TwoYear = function () {
  start = Math.floor(Date.now() / 1000);
  start = start - 63113852;
  ENDPOINT = SERVER_ENDPOINT + "&start=" + start + "&end=9999999999&period=86400";
  domTime.innerHTML = '<span class="js-time">2 years</span>';
  getAPICoolestWay(ENDPOINT);
};

const Year = function () {
  start = Math.floor(Date.now() / 1000);
  start = start - 31556926;
  ENDPOINT = SERVER_ENDPOINT + "&start=" + start + "&end=9999999999&period=86400";
  domTime.innerHTML = '<span class="js-time">1 year</span>';
  getAPICoolestWay(ENDPOINT);
};

const Month = function () {
  start = Math.floor(Date.now() / 1000);
  start = start - 2629744;
  ENDPOINT = SERVER_ENDPOINT + "&start=" + start + "&end=9999999999&period=86400";
  domTime.innerHTML = '<span class="js-time">1 month</span>';
  getAPICoolestWay(ENDPOINT);
};




const init = function()
{
  domTime = document.querySelector('.js-time');
  domData = document.querySelector('.js-microI');
  getAPICoolestWay(SERVER_ENDPOINT);
  document.querySelector('.js-button-AllTime').addEventListener('click', AllTime);
  document.querySelector('.js-button-2year').addEventListener('click', TwoYear);
  document.querySelector('.js-button-1year').addEventListener('click', Year);
  document.querySelector('.js-button-month').addEventListener('click', Month);

}


document.addEventListener('DOMContentLoaded', function() {
  console.info('DOM geladen');
  init();
  
});