const Thermostat = require("./thermostat.js");

describe("Thermostat", () => {
  it("returns 20", () => {
    const new_thermostat = new Thermostat();
    new_thermostat.getTemperature();
    expect(new_thermostat.getTemperature()).toEqual(20);
  });

  it("returns higher temperature 1 level", () => {
    const new_thermostat = new Thermostat();
    new_thermostat.up();
    expect(new_thermostat.getTemperature()).toEqual(21);
  });

  it("returns higher temperature two levels", () => {
    const new_thermostat = new Thermostat();
    new_thermostat.up();
    new_thermostat.up();
    expect(new_thermostat.getTemperature()).toEqual(22);
  });

  it("returns lower temperature one levels", () => {
    const new_thermostat = new Thermostat();
    new_thermostat.down();
    expect(new_thermostat.getTemperature()).toEqual(19);
  });

  it("returns lower temperature two levels", () => {
    const new_thermostat = new Thermostat();
    new_thermostat.down();
    new_thermostat.down();
    expect(new_thermostat.getTemperature()).toEqual(18);
  });

  it("returns the temperature to 20", () => {
    const new_thermostat = new Thermostat();
    new_thermostat.reset();
    expect(new_thermostat.getTemperature()).toEqual(20);
  });
});
