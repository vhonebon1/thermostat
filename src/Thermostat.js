function Thermostat() {
  this.temperature = 20;
  this.MINIMUM = 10;
}

Thermostat.prototype.up = function(num) {
  this.temperature = this.temperature + num;
}

Thermostat.prototype.down = function(num) {
  this.temperature = this.temperature - num;
}
