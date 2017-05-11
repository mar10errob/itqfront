import Vue from 'vue'

new Vue({
	el: '#app',
	data: {
		message: "Bienvenido Mario Alberto"
	},
	methods: {
		changeMessage: function () {
			this.message = "Otro Mensaje";
		}
	}
})