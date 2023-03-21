var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_guntur_3_1 = new ol.format.GeoJSON();
var features_guntur_3_1 = format_guntur_3_1.readFeatures(json_guntur_3_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_guntur_3_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_guntur_3_1.addFeatures(features_guntur_3_1);
var lyr_guntur_3_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_guntur_3_1, 
                style: style_guntur_3_1,
                interactive: true,
    title: 'guntur_3<br />\
    <img src="styles/legend/guntur_3_1_0.png" /> 2000 - 4600<br />\
    <img src="styles/legend/guntur_3_1_1.png" /> 4600 - 9200<br />\
    <img src="styles/legend/guntur_3_1_2.png" /> 9200 - 11800<br />\
    <img src="styles/legend/guntur_3_1_3.png" /> 11800 - 15400<br />\
    <img src="styles/legend/guntur_3_1_4.png" /> 15400 - 18000<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_guntur_3_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_guntur_3_1];
lyr_guntur_3_1.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'rating': 'rating', });
lyr_guntur_3_1.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'rating': 'TextEdit', });
lyr_guntur_3_1.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'rating': 'no label', });
lyr_guntur_3_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});