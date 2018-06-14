function run() {
FusionCharts.ready(function(){
          var fusioncharts = new FusionCharts({
                  type: 'angulargauge',
                  renderAt: 'chart-light',
                  width: '450',
                  height: '300',
                  dataFormat: 'json',
                  dataSource: {
                      "chart": {
                          "caption": "Light",
                          "subcaption": "Current Level",
                          "lowerLimit": "0",
			  "showValue": "1",
			  "pivotRadius": "10",
			  "gaugeFillMix": "{dark-40},{light-40},{dark-20}",                
                  	  "theme": "fint",
                          "upperLimit": "350",
						  "showBorder": "1",
						  "borderColor": "#1C437D",
						  "borderThickness": "5",
						  "borderAlpha": "80",
                          "theme": "fint"
                      },
                      "colorRange": {
                          "color": [{
                              "minValue": "0",
                              "maxValue": "50",
                              "code": "#555500"
                          },{
                              "minValue": "50",
                              "maxValue": "100",
                              "code": "#808015"
                          }, {
                              "minValue": "100",
                              "maxValue": "200",
                              "code": "#D4D46A"
                          }, {
                              "minValue": "200",
                              "maxValue": "300",
                              "code": "#FFFFAA"
                          }]
                      },
                      "dials": {
                          "dial": [{
                              "value": lightValue
                          }]
                      }
                  }
              }
          );
          fusioncharts.render();
      });
}
setInterval(run, 20000);
