import HighlightBoot from "./boot/highlight";
import RevealBoot from "./boot/reveal";
import SlideActivator from "./slide-activator";

let bootableModules = [
  HighlightBoot,
  SlideActivator,
  RevealBoot,
];

class Bootloader {
  constructor(config = {}) {
    this.config = config;
  }

  boot() {
    let bootMod, bootable, config;
    for(let i = 0; i < bootableModules.length; ++i) {
      bootMod = bootableModules[i];
      config = this.config[bootMod.configKey];
      bootable = new bootMod(config);
      bootable.boot();
    }
  }
}

export default Bootloader;
