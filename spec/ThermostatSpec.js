describe("Thermostat", function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("has a minimum temperature of 10 degrees", function() {
    expect(thermostat.MINIMUM).toEqual(10);
  });

  it ('initializes with a temperature of 20 degrees', function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it ('initializes with a medium-usage', function() {
    expect(thermostat.usage).toEqual("medium-usage");
  });

  describe('up', function() {
    it ('increases the temperature', function() {
      thermostat.up()
      expect(thermostat.temperature).toEqual(21)
    });
    it ('cannot go above maximum temperature', function() {
      thermostat.temperature = 25;
      expect(function() {thermostat.up()}).toThrowError('Cannot raise above maximum')
    });
  });

  describe('down', function() {
    it ('decreases the temperature', function() {
      thermostat.down()
      expect(thermostat.temperature).toEqual(19)
    });

    it ('cannot go below minimum temperature', function() {
      thermostat.temperature = 10;
      expect(function() {thermostat.down()}).toThrowError('Cannot go below minimum')
    });
  });

  describe('switchPowerSavingMode', function() {
    it("switches the power saving mode to off", function() {
      thermostat.switchPowerSavingMode();
      expect(thermostat.powerSavingMode).toEqual(false)
      expect(thermostat.powerSavingModeStatus).toEqual("Power saving off")
    });

    it("switches the power saving mode to on", function() {
      thermostat.switchPowerSavingMode();
      thermostat.switchPowerSavingMode();
      expect(thermostat.powerSavingMode).toEqual(true)
      expect(thermostat.powerSavingModeStatus).toEqual("Power saving on")
    });
  });

  describe('reset', function() {
    it ('resets the temperature to 20 degrees', function() {
      thermostat.reset();
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe('checkUsage', function() {
    it ('checks that the current energy usage is on low', function() {
      [1,2,3].forEach(function(i) {
        thermostat.down();
      });
      thermostat.checkUsage()
      expect(thermostat.usage).toEqual("Low-usage");
    });

    it ('checks that the current energy usage is on medium', function() {
      thermostat.checkUsage()
      expect(thermostat.usage).toEqual("Medium-usage");
    });

    it ('checks that the current energy usage is on high', function() {
      [1,2,3,4,5].forEach(function(i) {
        thermostat.up();
      });
      thermostat.checkUsage()
      expect(thermostat.usage).toEqual("High-usage");
    });
  });
});
