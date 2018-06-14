function run() {
FusionCharts.ready(function(){
          var fusioncharts = new FusionCharts({
                  type: 'angulargauge',
                  renderAt: 'chart-container',
                  width: '450',
                  height: '300',
                  dataFormat: 'json',
                  dataSource: {
                      "chart": {
                          "caption": "Temperature",
                          "subcaption": "Current Level",
                          "lowerLimit": "0",
			  "showValue": "1",
			  "pivotRadius": "10",
			  "gaugeFillMix": "{dark-40},{light-40},{dark-20}",                
                  	  "theme": "fint",
                          "upperLimit": "100",
						  "showBorder": "1",
						  "borderColor": "#1C437D",
						  "borderThickness": "5",
						  "borderAlpha": "80",
                          "theme": "fint"
                      },
                      "colorRange": {
                          "color": [{
                              "minValue": "0",
                              "maxValue": "10",
                              "code": "#FFDAC8"
                          }, {
                              "minValue": "10",
                              "maxValue": "35",
                              "code": "#DB9B7A"
                          },{
                              "minValue": "35",
                              "maxValue": "75",
                              "code": "#79310D"
                          }, {
                              "minValue": "75",
                              "maxValue": "100",
                              "code": "#471800"
                          }]
                      },
                      "dials": {
                          "dial": [{
                              "value": temperValue
                          }]
                      }
                  }
              }
          );
          fusioncharts.render();
      });
} setInterval(run, 20000);
