

var dataString = ""

var temperValue = ""
var moistureValue = ""
var humidityValue = ""
var lightValue = ""

//Using the HiveMQ public Broker, with a random client Id
//var client = new Messaging.Client("broker.mqttdashboard.com", 8000, "myclientid_" + parseInt(Math.random() * 100, 10));

var client = new Messaging.Client("10.25.100.49", 1883, "WebAppTester" );
var jsonData = ""

//Gets  called if the websocket/mqtt connection gets disconnected for any reason
client.onConnectionLost = function (responseObject) {
    //Depending on your scenario you could implement a reconnect logic here
    alert("connection lost: " + responseObject.errorMessage);
};

//Gets called whenever you receive a message for your subscriptions
client.onMessageArrived = function (message) {
    //Do something with the push message you received
    console.log("Got a message, it arrived!");
    jsonData =  message.payloadString
    jsonData = JSON.parse(jsonData)
    dataString = jsonData["data"]
    dataString.replace(/^==+/i, '');
    console.log("DATA STR: " + dataString)
    extractValues()
    $('#messages').append('<span>Topic: ' + message.destinationName + '  | ' + message.payloadString + '</span><br/>');
};

//Connect Options
var options = {
    timeout: 3,
    useSSL:true,
    //Gets Called if the connection has sucessfully been established
    onSuccess: function () {
        alert("Connected");
    },
    //Gets Called if the connection could not be established
    onFailure: function (message) {
        alert("Connection failed: " + message.errorMessage);
    }
};

//Creates a new Messaging.Message Object and sends it to the HiveMQ MQTT Broker
var publish = function (payload, topic, qos) {
    //Send your message (also possible to serialize it as JSON or protobuf or just use a string, no limitations)
    var message = new Messaging.Message(payload);
    message.destinationName = topic;
    message.qos = qos;
    client.send(message);
}

console.log("Still Working");

function b64DecodeUnicode(str) {
 // Going backwards: from bytestream, to percent-encoding, to original string.
   return decodeURIComponent(atob(str).split('').map(function(c) {
   return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
   }).join(''));
}

function extractValues() {
var plantValues = b64DecodeUnicode(dataString);

console.log("DATASTRING: " + dataString);


var tempN = plantValues.indexOf("T");
tempN += 2
var tempS = plantValues.indexOf("M");
temperValue = plantValues.substring(tempN, tempS );
console.log("Temp VALUE: " + temperValue)

var moistureN = plantValues.indexOf("M");
moistureN += 2
moistureValue = plantValues.substring(moistureN, plantValues.length );
console.log("Moisture VALUE: " + moistureValue )

var humidityN = plantValues.indexOf("H");
humidityN += 2
var humidityS = plantValues.indexOf("T");
humidityValue = plantValues.substring(humidityN , humidityS -1 );
humidityValue.trim()
console.log("Humidity VALUE: " + humidityValue )

var lightN = plantValues.indexOf("L");
lightN += 2
var lightS = plantValues.indexOf("H");
lightValue = plantValues.substring(lightN , lightS -1);
lightValue = lightValue.trim();
console.log("Light VALUE: " + lightValue )

}
