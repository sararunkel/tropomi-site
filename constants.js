const zoomThresh = 5;
const firstSymbolId = 'bridge-rail';//'road-simple'; 
const firstSymbolId2 = 'bridge-rail';//'road-simple';
const project ='albers'
const mapCenter = [-105, 40];
const mapZoom = 8;

mapboxgl.accessToken = 'pk.eyJ1Ijoic3J1bmtlbCIsImEiOiJjbGRrZmdyc3cxbWxmM29udWd6cHZqeXA0In0.KDgLcBpTZkKMYMVcoory4Q';
    // A selector or reference to HTML element
const map_container = '#comparison-container';
const STOPS = [
    0, '#0a62c0',
    1, '#6ed4fc',
    2, '#a0ffb8',
    3, '#fff837',
    4, '#ffa646',
    5, '#d05134',
    6, '#75001d',
    7, '#4e0014'
];
//Dictionary of stops for the census data
const census_STOPS = {'PercentPOC':[
    0, '#f3e5f5',
    20, '#ce93d8',
    40, '#ab47bc',
    60, '#8e24aa',
    80, '#6a1b9a',
    100, '#4a148c'], 
    'MedianIncome':[
    30000, '#f3e5f5',
    60000, '#ce93d8',
    90000, '#ab47bc',
    120000, '#8e24aa',
    180000, '#6a1b9a',
    2500000, '#4a148c'],
    'MedianAge':[
    15, '#f3e5f5',
    30, '#ce93d8',
    45, '#ab47bc',
    60, '#8e24aa',
    75, '#6a1b9a',
    100, '#4a148c'],
    'PercentPoverty':[
    0, '#f3e5f5',
    5, '#ce93d8',
    10, '#ab47bc',
    15, '#8e24aa',
    20, '#6a1b9a',
    25, '#4a148c'],
}
    //'admin-1-boundary';
const bounds = [
    [-106.08195926, 38.8791579], // Southwest coordinates
    [-103.95380958, 40.73862622] // Northeast coordinates
    ];



let leftData = 'data/monthly/HAQ_TEMPO_NO2_CONUS_QA75_L3_Monthly_012024_15Z_V3.geojson';
let rightData = 'data/monthly/HAQ_TEMPO_NO2_CONUS_QA75_L3_Monthly_012024_22Z_V3.geojson';
const censusData = 'data/CO_CSA_ACS.geojson';