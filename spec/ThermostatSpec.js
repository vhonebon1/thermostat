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
});
