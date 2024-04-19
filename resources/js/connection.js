var protocol = window.location.protocol;
 
 var mqttBroker='home.onesmartapi.com';
 var userName='dinuka';
 var password='dinuka'
 var port = protocol === 'https:' ? 8084 : 1884;
var mqttClientId = Math.random();
var mqttUseSSL = protocol === 'https:';

if(protocol === 'https')
{
     mqttClientId ='wss/'+Math.random();
}else{
 
     mqttClientId ='ws/'+Math.random();
}

var client = new Paho.MQTT.Client(mqttBroker, port,mqttClientId);

console.log("client ID:-"+mqttClientId);

