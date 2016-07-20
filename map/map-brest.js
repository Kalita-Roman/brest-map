'use strict'
import L from 'leaflet';
import 'leaflet-hash';

//Определяем карту, координаты центра и начальный масштаб
let сenter = [52.091, 23.695];

//L.Icon.Default.imagePath = 'http://api.tiles.mapbox.com/mapbox.js/v1.0.0beta0.0/images';
L.Icon.Default.imagePath = '//api.tiles.mapbox.com/mapbox.js/v1.0.0beta0.0/images';
let map = L.map('map').setView(сenter, 15);
var hash = new L.Hash(map);

//Добавляем на нашу карту слой OpenStreetMap
/*
L.tileLayer('//{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="//osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
*/

L.tileLayer('//{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
   // maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
}).addTo(map);


module.exports.map = map;