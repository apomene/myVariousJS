'use strict'
var countryMaps = [
    { name: 'GR', id: 'chartContainer',  cssClass:'DisplayHighChart' },
    { name: 'CY', id: 'chartContainer2', cssClass:'DisplayHighChart2' },
    { name: 'BG', id: 'chartContainer3', cssClass:'DisplayHighChart3' },
    { name: 'HR', id: 'chartContainer4', cssClass:'DisplayHighChart4' },
    { name: 'ME', id: 'chartContainer5', cssClass:'DisplayHighChart5' },
    { name: 'RO', id: 'chartContainer6', cssClass:'DisplayHighChart6' },
    { name: 'RS', id: 'chartContainer7', cssClass:'DisplayHighChart7' },
    { name: 'UA', id: 'chartContainer8', cssClass:'DisplayHighChart8' }
];

var countryCharts = [
    { name: 'Greece', id: 'chartContainer', cssClass: 'DisplayHighChart', mapsTo:'HR' },
    { name: 'Cyprus', id: 'chartContainer2', cssClass: 'DisplayHighChart2', mapsTo: 'MN' },
    { name: 'Bulgaria', id: 'chartContainer3', cssClass: 'DisplayHighChart3', mapsTo: 'RS' },
    { name: 'Croatia', id: 'chartContainer4', cssClass: 'DisplayHighChart4', mapsTo: 'BG' },
    { name: 'Montenegro', id: 'chartContainer5', cssClass: 'DisplayHighChart5', mapsTo: 'GR' },
    { name: 'Romania', id: 'chartContainer6', cssClass: 'DisplayHighChart6', mapsTo: 'RO' },
    { name: 'Serbia', id: 'chartContainer7', cssClass: 'DisplayHighChart7', mapsTo: 'UA' },
    { name: 'Ukraine', id: 'chartContainer8', cssClass: 'DisplayHighChart8', mapsTo: 'CY' }
];

function CreateMapsHTML() {
    ///Calculate witdh and height proportionally to screen resolution
    var fullWidth = document.documentElement.clientWidth;
    var fullHeighth = document.documentElement.clientHeight;
    var chartWidth = fullWidth / 5;
    var left = chartWidth + 40;
    chartWidth = chartWidth + "px";
    left = left + "px";
    var chHeight = fullHeighth / 5.4;
    var chartTop =40;
    var chartHeight = chHeight + "px";
  
    ///Create HTML dynamically -- mapHTML
    var mapHTML = ''
    for (var i = 0; i < countryMaps.length; i++) {
       if (i === 0) {
            var newTop = chartTop + "px";
            mapHTML = mapHTML + '<div id="' + countryMaps[3].id + '" class="' + countryMaps[3].cssClass + '" style="width:' + chartWidth + '; height:' + chartHeight + ' ;top:' + newTop + '; margin: 0 auto"> </div>';  
        }
       else if (i === 1)
        {
            chartTop = chartTop + chHeight + 5;
            var newTop = chartTop + "px";
            mapHTML = mapHTML + '<div id="' + countryMaps[4].id + '" class="' + countryMaps[4].cssClass + '" style="width:' + chartWidth + '; height:' + chartHeight + ' ;top:' + newTop + '; margin: 0 auto"> </div>';
        }
       else if (i === 2) {
            chartTop = chartTop + chHeight + 5;
            var newTop = chartTop + "px";
            mapHTML = mapHTML + '<div id="' + countryMaps[6].id + '" class="' + countryMaps[6].cssClass + '" style="width:' + chartWidth + '; height:' + chartHeight + ' ;top:' + newTop + '; margin: 0 auto"> </div>';
        }
       else if (i === 3) {
            chartTop = chartTop + chHeight + 5;
            var newTop = chartTop + "px";
            mapHTML = mapHTML + '<div id="' + countryMaps[2].id + '" class="' + countryMaps[2].cssClass + '" style="width:' + chartWidth + '; height:' + chartHeight + ' ;top:' + newTop + '; margin: 0 auto"> </div>';

        }
       else if (i === 4) {
            chartTop = chartTop + chHeight + 5;
            var newTop = chartTop + "px";
            mapHTML = mapHTML + '<div id="' + countryMaps[0].id + '" class="' + countryMaps[0].cssClass + '" style="width:' + chartWidth + '; height:' + chartHeight + ' ;top:' + newTop + '; margin: 0 auto"> </div>';

        }
       else if (i === 5) {
            var newTop = 40 + "px";
            mapHTML = mapHTML + '<div id="' + countryMaps[i].id + '" class="' + countryMaps[i].cssClass + '" style="left:' + left + '; width:' + chartWidth + '; height:' + chartHeight + ' ;top:' + newTop + '; margin: 0 auto"> </div>';

        }
       else if (i === 6) {
            chartTop = chartTop - 2* (chHeight + 5);
            var newTop = chartTop + "px";
            mapHTML = mapHTML + '<div id="' + countryMaps[7].id + '" class="' + countryMaps[7].cssClass + '" style="width:' + chartWidth + '; height:' + chartHeight + ' ;top:' + newTop + '; margin: 0 auto"> </div>';
        }
       else if (i === 7){
            chartTop = chartTop + chHeight + 5;
            var newTop = chartTop + "px";
            mapHTML = mapHTML + '<div id="' + countryMaps[1].id + '" class="' + countryMaps[1].cssClass + '" style="width:' + chartWidth + '; height:' + chartHeight + ' ;top:' + newTop + '; margin: 0 auto"> </div>';
        }        
        //else if ((i > 0) && (i < 5)) {
        //    chartTop = chartTop + chHeight+5;
        //    var newTop = chartTop + "px";
        //    mapHTML = mapHTML + '<div id="' + countryMaps[i].id + '" class="' + countryMaps[i].cssClass + '" style="width:' + chartWidth + '; height:' + chartHeight + ' ;top:' + newTop+'; margin: 0 auto"> </div>';     
        //}
        //else if (i == 5) {           
        //    var newTop = 40 + "px";
        //    mapHTML = mapHTML + '<div id="' + countryMaps[i].id + '" class="' + countryMaps[i].cssClass + '" style="left:' + left+ '; width:' + chartWidth + '; height:' + chartHeight + ' ;top:' + newTop + '; margin: 0 auto"> </div>';


        //}
        //else {
        //    if (i ===6) {
        //        chartTop = chartTop - 3* (chHeight + 5);
        //    }
        //    chartTop = chartTop + chHeight + 5;
        //    var newTop = chartTop + "px";
        //    mapHTML = mapHTML + '<div id="' + countryMaps[i].id + '" class="' + countryMaps[i].cssClass + '" style="width:' + chartWidth + '; height:' + chartHeight + ' ;top:' + newTop + '; margin: 0 auto"> </div>';
        //}            
   }
    document.getElementById("ChartsContainer").innerHTML = mapHTML;
}

function DrawMap(countryName) {

    //#region Configure Chart Map
    var title = {
        text: 'Moving Avg for ' + countryName
    };

    var subtitle = {
        text: ''//'Source: WorldClimate.com'
    };

    var xAxis = {
        //categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'
        //    , 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        categories: Days
    };

    var yAxis = {
        title: {
            text: ''//'Temperature (\xB0C)'
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
    };

    var tooltip = {
        valueSuffix: '\xB0C'
    }

    var legend = {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        borderWidth: 0
    };

    var series = [
        {
            name: 'This Year',
            //data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2]
        },
        {
            name: 'Last Year',
            //data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
            data: [-0.2, 0.8, 5.7, 11.3, 13.0, 22.0, 22.8]
        }
        //{
        //    name: 'Berlin',
        //    data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
        //},
        //{
        //    name: 'London',
        //    data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        //}
    ];

    //# End of region Configure Chart Map

    //#Build JSON Data
    var json = {};

    json.title = title;
    json.subtitle = subtitle;
    json.xAxis = xAxis;
    json.yAxis = yAxis;
    json.tooltip = tooltip;
    json.legend = legend;
    json.series = series;

    //#End Build JSON Data
    return json;
   
};

///get Cube Data 
function AjaxCallforCubedata() {

    return $.ajax({
        timeout: 10000,
        type: "GET",
        url: extractDomain(document.URL) + "/Reservations.asmx/GetCubeData",
        // dataType: "json",
        // contentType: "application/json; charset=utf-8",
       
        success: function (response) {
            console.log('succes', response)
        },
        error: function (xhr, ajaxOptions, thrownError) {
        }
    });
}



//#---Render Charts----
function RenderCharts() {

    for (var i = 0; i < countryMaps.length; i++) {
        var id = "#" + countryMaps[i].id;
        var countryname = countryMaps[i].name;
        var json = DrawMap(countryname);
        $(id).highcharts(json);
    }
};

function RenderChartsNew() {
    AjaxCallforCubedata().done(function (result) {
       var data = result.childNodes[0].innerHTML;
        if (data != "error") {
            //we need to parse it to JSON 
            data = $.parseJSON(data);
            var countryName = [];
            var series = [];
            for (var i = 0; i < data.length; i++) {
                series.push(CreateSeries(data[i]));
            }

            for (var i = 0; i < countryCharts.length; i++) {
                var id = "#" + countryCharts[i].id;
                var countryname = countryCharts[i].name;
                var json = DrawChart(countryname, series[i]);
                $(id).highcharts(json);
            }
        }
    });
}

function RenderBarCharts() {
    for (var i = 0; i < countryCharts.length; i++) {
        var id = countryCharts[i].id;
        var country = countryCharts[i].name;
        BarChart(id, country);
    }
}

//#end of render charts

function CreateSeries(cubeData) {

    var seriesCY = [];
    var seriesLY = [];

    for (var i = 0; i < cubeData.length; i++) {
        seriesCY.push(cubeData[i]["CYvalue"]);
        seriesLY.push(cubeData[i]["LYvalue"]);
    };

    var series = [ seriesCY , seriesLY ];
    return series;
}

function getDateBefore(daysBefore, isBefore = true) {
    var d = new Date(); //get today,
    if (isBefore) {
        d.setDate(d.getDate() - daysBefore);
    }
    else {
        d.setDate(d.getDate() + daysBefore);
    }

    var before = d.getDate();
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return months[d.getMonth()] + ' ' + before;
};

function createXAxis(seriesCount, daysAfter) {
    var xAxis = [];
    for (var i = seriesCount; i > 0; i--) {
        if (i > daysAfter) {
            xAxis.push(getDateBefore(i - daysAfter));
        }
        else {
            xAxis.push(getDateBefore(daysAfter - i, false));
        }
    }
    return xAxis;
}

function DrawChart(countryName,dataSeries) {

    //#region Configure Chart Map
    var title = {
        text: 'Moving Avg for ' + countryName
    };

    var subtitle = {
        text: ''//'Source: WorldClimate.com'
    };

    var categ = [];

    //for (var j = dataSeries[0].length;j>0; j--) {
    //        categ.push(j);
    //}

    var xAxis = {
        //categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'
        //    , 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        categories: createXAxis(dataSeries[0].length,31)
    };

    var yAxis = {
        title: {
            text: ''//'Temperature (\xB0C)'
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
    };

    var tooltip = {
        //valueSuffix: '\xB0C'
    }

    var legend = {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        borderWidth: 0
    };

    var thisYear = []

    for (var i = 0; i < dataSeries[0].length; i++) {
        if (dataSeries[0][i] == 0) {
            thisYear.push('');
        }
        else {
            thisYear.push(dataSeries[0][i]);
        }
    }


    var series = [
        {
            name: 'This Year',
            //data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
            data: thisYear
        },
        {
            name: 'Last Year',
            //data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
            data: dataSeries[1]
        }
      
    ];

    //# End of region Configure Chart Map

    //#Build JSON Data
    var json = {};

    json.title = title;
    json.subtitle = subtitle;
    json.xAxis = xAxis;
    json.yAxis = yAxis;
    json.tooltip = tooltip;
    json.legend = legend;
    json.series = series;

    //#End Build JSON Data
    return json;

};

function BarChart(id,country){

    Highcharts.chart(id, {
        chart: {
            type: 'column'
        },
        title: {
            text: 'MIS '+ country
        },
        subtitle: {
            text: ''//'Source: WorldClimate.com'
        },
        xAxis: {
            categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: ''//'Rainfall (mm)'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'This Year',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
            color: '#0000FF'

        }, {
            name: 'Last Year',
            data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3],
            color: '#FF0000'
      
        }]
    });
}




