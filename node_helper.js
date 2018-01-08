var NodeHelper = require("node_helper");
var http = require('http');

//server

module.exports = NodeHelper.create({
  start: function() {
    console.log('MMM-Show started ...');
    var self=this;
    //create a server object:
    self.sendSocketNotification('qwesa','Yzcs');
    http.createServer(function (req, res) {
  	  res.write('ok'); //write a response to the client
  	  res.end(); //end the response
  	  console.log('show msg');
  	  self.sendSocketNotification('show','You !');
  	}).listen(8087); //the server object listens on port 8087
  },
  socketNotificationReceived: function(notification, payload) {
    console.log(notification,payload);
    this.sendSocketNotification('show','You !');
  }
});
