function run(){
FusionCharts.ready(function(){
          var fusioncharts = new FusionCharts({
                  type: 'angulargauge',
                  renderAt: 'chart-moisture',
                  width: '450',
                  height: '300',
                  dataFormat: 'json',
                  dataSource: {
                      "chart": {
                          "caption": "Moisture",
                          "subcaption": "Current Level",
                          "lowerLimit": "0",
			  "showValue": "1",
			  "pivotRadius": "10",
			  "gaugeFillMix": "{dark-40},{light-40},{dark-20}",                
                  	  "theme": "fint",
                          "upperLimit": "5",
						  "showBorder": "1",
						  "borderColor": "#1C437D",
						  "borderThickness": "5",
						  "borderAlpha": "80",
                          "theme": "fint"
                      },
                      "colorRange": {
                          "color": [{
                              "minValue": "0",
                              "maxValue": "1",
                              "code": "#8EA3B3"
                          }, {
                              "minValue": "2",
                              "maxValue": "3",
                              "code": "#53748D"
                          }, {
                              "minValue": "4",
                              "maxValue": "5",
                              "code": "#021B2E"
                          }]
                      },
                      "dials": {
                          "dial": [{
                              "value": moistureValue
                          }]
                      }
                  }
              }
          );
          fusioncharts.render();
	  console.log("rendering M")
      });
}setInterval(run, 20000);
