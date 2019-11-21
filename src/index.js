/* Automatically generated by './build/bin/build-entry.js' */

import PSwitch from './Components/switch/index.js';
import PIcon from './Components/icon/index.js';

const components = [
  PSwitch,
  PIcon
];

const install = function(Vue, opts = {}) {

  components.forEach(component => {
    Vue.component(component.name, component);
  });

};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '1.0.2',
  install,
  PSwitch,
  PIcon
};
