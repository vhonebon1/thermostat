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

  describe('up', function() {
    it ('increases the temperature', function() {
      thermostat.up(5)
      expect(thermostat.temperature).toEqual(25)
    });
  });

  describe('down', function() {
    it ('decreases the temperature', function() {
      thermostat.down(5)
      expect(thermostat.temperature).toEqual(15)
    });
  });

  describe('setMaxTemp', function() {
    it("sets the maximum temperature if power saving mode is on", function() {
      spyOn(thermostat, "powerSavingMode").and.returnValue(true)
      expect(thermostat.maximum).toEqual(25)
    });

    it("sets the maximum temperature if power saving mode is off", function() {
      thermostat.turnPowerSavingOff()
      thermostat.setMaxTemp()
      expect(thermostat.maximum).toEqual(32)
    });
  });

  describe('turnPowerSavingOff', function() {
    it("turns the power saving mode off", function() {
      thermostat.turnPowerSavingOff()
      expect(thermostat.powerSavingMode).toEqual(false)
    });
  });
});
