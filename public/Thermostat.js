function Thermostat() {
  this.temperature = 20;
  this.MINIMUM = 10;
  this.maximum = 25;
  this.powerSavingMode = true;
  this.usage = "Medium-usage";
  this.powerSavingModeStatus = "Power saving on";
}

Thermostat.prototype.up = function() {
  if (this.temperature === this.maximum) {
    alert ('Cannot raise above maximum')
    throw new Error ('Cannot raise above maximum')
  }
  this.temperature = this.temperature + 1;
}

Thermostat.prototype.down = function() {
  if (this.temperature === this.MINIMUM) {
    alert ('Cannot go below minimum')
    throw new Error ('Cannot go below minimum')
  }
  this.temperature = this.temperature - 1;
}

Thermostat.prototype.switchPowerSavingMode = function() {
  this.powerSavingMode = !this.powerSavingMode
  if (this.powerSavingMode) {
    this.maximum = 25;
    this.powerSavingModeStatus = "Power saving on"
  } else {
    this.maximum = 32;
    this.powerSavingModeStatus = "Power saving off"
  }
}

Thermostat.prototype.reset = function() {
  this.temperature = 20;
}

Thermostat.prototype.checkUsage = function() {
  if (this.temperature <= 18) {
    this.usage = "Low-usage";
  } else if (this.temperature > 18 && this.temperature < 25) {
    this.usage = "Medium-usage";
  } else {
    this.usage = "High-usage";
  }
}
