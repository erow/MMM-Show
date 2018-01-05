var NodeHelper = require("node_helper");
module.exports = NodeHelper.create({
  start: function() {
    console.log('MMM-Show started ...');
    // sendSocketNotification('show', {
    //   type: 'notification',
    //   title: 'MQTT Error',
    //   message: 'The MQTT Client has suffered an error: ' + error
    // });
  },
  socketNotificationReceived: function(notification, payload) {
    console.log(notification,payload);
    this.sendSocketNotification('hello',"sf");
  }
});
