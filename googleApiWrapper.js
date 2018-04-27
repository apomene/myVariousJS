var map;
var world_geometry;

var countriesToZoom = {
    'Greece':       { lat: 37.43404,   lng: 25.3595490, zoom: 7, ccode: 'GR' },
    'Cyprus':       { lat: 35.14250,   lng: 33.36902,   zoom: 10, ccode: 'CY' },
    'Croatia':      { lat: 44.048090,  lng: 15.906063, zoom: 8, ccode: 'HR' },
    'Montenegro':   { lat: 42.796952,  lng: 19.185959,  zoom: 9, ccode: 'ME' },
    'Romania':      { lat: 45.6580,    lng: 25.6012, zoom: 7, ccode: 'RO' },
    'Serbia':       { lat: 44.158687,  lng: 20.843470,  zoom: 8, ccode: 'RS' },
    'Ukraine':      { lat: 48.7699,    lng: 30.6154,    zoom: 7, ccode: 'UA' },
    'Bulgaria':     { lat: 42.444460,  lng: 25.409694,  zoom: 8, ccode: 'BG' },
}

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        //center: { lat: 43.1598309, lng: 26.9695490 },
        center: { lat: 42.6598309, lng: 24.9695490 },
        animation: google.maps.Animation.BOUNCE,
        zoom: 6       
    });
    world_geometry = new google.maps.FusionTablesLayer({
        query: {
            select: 'geometry',
            from: '1N2LBk4JHwWpOY4d9fobIn27lfnZ5MDy-NoqqRpk',
            where: "ISO_2DIGIT IN ('GR', 'CY', 'HR', 'ME', 'RO', 'RS', 'UA','BG')"
        },
        suppressInfoWindows: true,
        styles: [
            {
                polygonOptions: {
                    strokeColor: "#FFFFFF",
                    strokeOpacity: "0.15",
                    fillOpacity: "0.20",
                    fillColor: "#FFFF00"
                }
            }
        ]
    });
    world_geometry.setMap(map);
}

function SetTLayer(country) {

    world_geometry.setMap(null);

    var where = "";
    if (country != undefined) {
        where = "ISO_2DIGIT IN ('" + country + "')";
    }
    else {
        where = "ISO_2DIGIT IN ('GR', 'CY', 'HR', 'ME', 'RO', 'RS', 'UA','BG')";
    }

    world_geometry.setOptions({
        query: {
            select: 'geometry',
            from: '1N2LBk4JHwWpOY4d9fobIn27lfnZ5MDy-NoqqRpk',
            where: where
        }
    });

    world_geometry.setMap(map);
}

function zoomToCountry(country) {
    var pt = { lng: countriesToZoom[country].lng, lat: countriesToZoom[country].lat };
    map.setCenter(pt);
    map.setZoom(countriesToZoom[country].zoom);
    SetTLayer(countriesToZoom[country].ccode);

    for (var i = 0; i < countryMaps.length; i++) {
        if (countriesToZoom[country].ccode == countryMaps[i].name) {
            var chart = document.getElementById(countryMaps[i].id);
            //chart.style.left = "20px";
            //chart.style.width = "600px !important";
            //chart.style.height = "300px !important";
           // chart.style.top = "10px";
            chart.style.display = 'block';
           
        }
        else {
            document.getElementById(countryMaps[i].id).style.display = 'none';
        }
    }

    //document.getElementById('chartContainer2').style.display = 'none';
    //document.getElementById('chartContainer3').style.display = 'none';
    //document.getElementById('chartContainer4').style.display = 'none';
    //document.getElementById('chartContainer5').style.display = 'none';
    //document.getElementById('chartContainer6').style.display = 'none';
    //document.getElementById('chartContainer7').style.display = 'none';
    //document.getElementById('chartContainer8').style.display = 'none';
   
}

function ZoomOut() {
    map.setCenter({ lat: 43.1598309, lng: 26.9695490 });
    map.setZoom(6);
    SetTLayer();

    for (var i = 0; i < countryMaps.length; i++) {
        //document.getElementById(countryMaps[i].id).className = countryMaps[i].cssClass;
        document.getElementById(countryMaps[i].id).style.display = 'block';
    }
    //document.getElementById('chartContainer2').style.display = 'block';
    //document.getElementById('chartContainer3').style.display = 'block';
    //document.getElementById('chartContainer4').style.display = 'block';
    //document.getElementById('chartContainer5').style.display = 'block';
    //document.getElementById('chartContainer6').style.display = 'block';
    //document.getElementById('chartContainer7').style.display = 'block';
    //document.getElementById('chartContainer8').style.display = 'block';
}

function placePin(init, pt, cityName, brand,cityCode) {
    if (pt === null) {
       
        return;
    }
    var labelContent = 1, labelClass = "labels", fillcolor;

   
    if (Cities[cityCode] != undefined) {
        //labelContent = (init) ? Cities[cityCode].markers.length + 1 : Cities[cityCode].count;
        labelContent = Cities[cityCode].count;
    }
    else {      
        return;
    }

    if (brand === "H") fillcolor = HertzColor;
    else if (brand === "D") fillcolor = DollarColor;
    else if (brand === "T") fillcolor = ThriftyColor;
    else if (brand === "F") fillcolor = FirefliyCOlor;

    var iconScale = Math.log(labelContent + 6);
    var customMarker = {
        path: "m -0.37890625,0.93359375 c 0,0 -8.91654695,-21.05586775 -14.61865975,-30.93221675 C -20,-38.663093 -20,-52.495076 -14.990866,-60.00307 -7.5,-71.230835 7.5,-71.254564 15.004112,-59.99677 20,-52.501856 20,-38.656172 15.00479,-30.004215 9.2462066,-20.030056 -0.37890625,0.93359375 -0.37890625,0.93359375 Z",
        fillColor: fillcolor,
        fillOpacity: 1,
        scale: iconScale * 0.2,
        strokeColor: 'black',
        strokeWeight: 1
    };

    var content;
    if (Cities[cityCode] != undefined) {
        AjaxCallforPivotdata(cityCode, Cities[cityCode].country).done(function (result) {
            var data = result.childNodes[0].innerHTML;
            if (data != "error") {
                //we need to parse it to JSON 
                data = $.parseJSON(data);
                content = CreateTableFromJSON(data, Cities[cityCode].name);
                var infowindow = new google.maps.InfoWindow({
                    content: content,
                    maxWidth: 300,
                    maxHeight: 900
                });

                //var marker = new google.maps.Marker({
                var marker = new MarkerWithLabel({
                    position: { lat: pt.lat, lng: pt.lng },
                    //draggable: true,
                    animation: google.maps.Animation.DROP,
                    title: cityName, //tmp
                    labelContent: labelContent,
                    labelAnchor: new google.maps.Point(13, 15 + 9 * iconScale),
                    labelClass: labelClass,
                    map: map,
                    icon: customMarker,
                    optimized: true,
                    labelVisible: false
                });
                marker.addListener('click', function () {
                    infowindow.open(map, marker);
                });

                //marker.label.labelDiv_.style.display = "none";
                if (cityCode)
                    Cities[cityCode].markers.push(marker);
             
                if (!init) {
                    setTimeout(function () {
                        marker.setAnimation(google.maps.Animation.BOUNCE);

                        setTimeout(function () { marker.setAnimation(null) }, 3570);
                    }, 250);
                }
            }

        });
    }
    else {

        //var marker = new google.maps.Marker({
        var marker = new MarkerWithLabel({
            position: { lat: pt.lat, lng: pt.lng },
            //draggable: true,
            animation: google.maps.Animation.DROP,
            title: cityName,
            labelContent: labelContent,
            labelAnchor: new google.maps.Point(13, 15 + 9 * iconScale),
            labelClass: labelClass,
            map: map,
            icon: customMarker,
            optimized: true,
            labelVisible: false
        });
        marker.addListener('click', function () {
            infowindow.open(map, marker);
        });

        //marker.label.labelDiv_.style.display = "none";
        if (cityCode)
            Cities[cityCode].markers.push(marker);

        if (!init) {
            setTimeout(function () {
                marker.setAnimation(google.maps.Animation.BOUNCE);

                setTimeout(function () { marker.setAnimation(null) }, 3570);
            }, 250);
        }
    }
}