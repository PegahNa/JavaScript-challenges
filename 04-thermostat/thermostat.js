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

  getTemperature() {
    return this.temperature;
  }

  lowUsage() {
    if (this.temperature < 18) {
      console.log("low Usage");
    }
  }

  mediumUsage() {
    if (this.temperature > 18 && this.temperature < 25) {
      console.log("medium Usage");
    }
  }

  highUsage() {
    if (this.temperature > 25) {
      console.log("high Usage");
    }
  }
}
module.exports = Thermostat;
