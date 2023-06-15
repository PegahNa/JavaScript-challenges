class Thermostat {
  constructor() {
    this.temperature = 20;
    this.powerSaving = true;
  }

  up() {
    if (this.powerSaving === true && this.temperature < 25) {
      this.temperature += 1;
    } else if (this.powerSaving === false && this.temperature < 32) {
      this.temperature += 1;
    }
  }

  down() {
    if (this.temperature > 10) {
      this.temperature -= 1;
    }
  }

  reset() {
    this.temperature = 20;
  }

  setSavingMode(something) {
    this.powerSaving = something;
  }

  getTemperature() {
    return this.temperature;
  }

  energyUsage() {
    if (this.temperature < 18) {
      return "low Usage";
    } else if (this.temperature <= 25) {
      return "medium Usage";
    } else {
      return "high Usage";
    }
  }
}
module.exports = Thermostat;
