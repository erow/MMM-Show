
Module.register("MMM-Show",{
	// Default module config.
	defaults: {
		text: "Hello"
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
		//wrapper.style.fontSize="100px";//this.config.size
		return wrapper;
	},
  	socketNotificationReceived: function(notification, payload) {
	   
		if(notification=="show")
		{
		console.log(this.name + " received a socket notification: " + notification + " - Payload: " + payload);
			this.config.text=payload;
		  this.updateDom();
		}
  	},
});
