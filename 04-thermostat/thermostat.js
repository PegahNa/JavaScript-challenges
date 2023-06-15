class Thermostat {
  constructor() {
    this.temperature = 20;
  }

  up() {
    // if (power_mode === true && this.temperature < 25 || )
    this.temperature += 1;
  }

  getTemperature() {
    return this.temperature;
  }

  setTemperature(temperature) {
    this.temperature = temperature;
  }
}

module.exports = Thermostat;
