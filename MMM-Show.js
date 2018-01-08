Module.register("MMM-Show",{
	// Default module config.
	defaults: {
		text: "hello"
	},
	start: function() {
    console.log('Starting module: ' + this.name);
    this.update(this);
  },
	update: function(self) {
		this.sendSocketNotification('show','pageLoaded');
	},
	getScripts: function () {
		return ["type-it.js"];
	},
	// Override dom generator.
	getDom: function() {
		var wrapper = document.createElement("span");
		//wrapper.class="type-it";
		wrapper.id="type-it";
		//wrapper.innerHTML = this.config.text;
		wrapper.style.fontSize="100px";//this.config.size
		return wrapper;
	},
	socketNotificationReceived: function(notification, payload) {
		console.log(this.name + " received a socket notification: " + notification + " - Payload: " + payload);
		if(notification=="show")
		{
			var instance=new TypeIt('#type-it', {
				strings:['Unfortunately','','NOT YOU!'],
				lifeLike:true

	 		});
			// setTimeout(()=>{
			// 	instance
			// 	.options({speed: 400})
			// 	.type('It is')
			// 	.delete(1)
	  	// 	.type('NOT YOU');
			// },500);

			//this.config.text=;
		  //this.updateDom();
		}
	},
	notificationReceived: function(notification, payload, sender) {
	if (sender) {
		Log.log(this.name + " received a module notification: " + notification + " from sender: " + sender.name);
	} else {
		Log.log(this.name + " received a system notification: " + notification);
	}
}
});
