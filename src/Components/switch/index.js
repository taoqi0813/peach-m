import PSwitch from './src/switch';

/* istanbul ignore next */
PSwitch.install = function(Vue) {
  Vue.component(PSwitch.name, PSwitch);
};

export default PSwitch;

