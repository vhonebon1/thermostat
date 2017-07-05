function Thermostat() {
  this.temperature = 20;
  this.MINIMUM = 10;
  this.maximum = 25;
  this.powerSavingMode = true;
}

Thermostat.prototype.up = function(num) {
  this.temperature = this.temperature + num;
}

Thermostat.prototype.down = function(num) {
  this.temperature = this.temperature - num;
}

Thermostat.prototype.setMaxTemp = function() {
  if (this.powerSavingMode == false)  {
  this.maximum = 32;
  }
}

Thermostat.prototype.turnPowerSavingOff = function() {
  this.powerSavingMode = false;
}

Thermostat.prototype.reset = function() {
  this.temperature = 20;
}

Thermostat.prototype.checkUsage = function() {
  if (this.temperature < 18) {
    return "low-usage";
  } else if (this.temperature > 18 && this.temperature < 25) {
    return "medium-usage";
  } else {
    return "high-usage";
  }
}
