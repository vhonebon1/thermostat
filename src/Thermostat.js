function Thermostat() {
  this.temperature = 20;
}

Thermostat.prototype.up = function(num) {
  this.temperature = this.temperature + num;
}
