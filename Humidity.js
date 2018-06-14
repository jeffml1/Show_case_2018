function run() {
FusionCharts.ready(function(){
	console.log("test")
          var fusioncharts = new FusionCharts({
                  type: 'angulargauge',
                  renderAt: 'chart-humidity',
                  width: '450',
                  height: '300',
                  dataFormat: 'json',
                  dataSource: {
                      "chart": {
                          "caption": "Humidity",
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
                              "maxValue": "5",
                              "code": "#003333"
                          }, {
                              "minValue": "5",
                              "maxValue": "20",
                              "code": "#0D4D4D"
                          },{
                              "minValue": "20",
                              "maxValue": "50",
                              "code": "#407F7F"
                          }, {
                              "minValue": "50",
                              "maxValue": "100",
                              "code": "#669999"
                          }]
                      },
                      "dials": {
                          "dial": [{
                              "value": humidityValue
                          }]
                      }
                  }
              }
          );
          fusioncharts.render();
      });

}setInterval(run, 20000);
