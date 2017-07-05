describe("Thermostat", function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
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

});
