
Module.register("MMM-Show",{
	// Default module config.
	defaults: {
		text: "You!"
	},
	start: function() {
    Log.info('Starting module: ' + this.name);
    this.update(this);
  },
	update: function(self) {
		self.sendSocketNotification('MQTT_SERVER',"1");
	},
	// Override dom generator.
	getDom: function() {

		var wrapper = document.createElement("div");
		wrapper.innerHTML = this.config.text;
		return wrapper;
	},
  socketNotificationReceived: function(notification, payload) {
	   console.log(this.name + " received a socket notification: " + notification + " - Payload: " + payload);
  },
});
