<template>
  <div
    class="p-switch"
    :class="{ 'is-disabled': switch_disabled, 'is-checked': checked }"
    :style="{ 'font-size': font_size}"
    role="switch"
    :aria-checked="checked"
    :aria-disabled="switch_disabled"
    @click.prevent="switchValue"
  >
    <input
      class="p-switch__input"
      type="checkbox"
      @change="handleChange"
      ref="input"
      :id="id"
      :name="name"
      :true-value="onValue"
      :false-value="offValue"
      :disabled="switch_disabled"
      @keydown.enter="switchValue"
    />
    <span
      :class="['p-switch__label', 'p-switch__label--left', !checked ? 'is-active' : '']"
      v-if="textPosition == 'outside'"
    >
      <span :aria-hidden="checked">{{ offText }}</span>
    </span>
    <div
      class="p-switch__core"
      :class="[size == 'large' ? 'p-switch__core--large' : '',size == 'small' ? 'p-switch__core--small' : '',size == 'mini' ? 'p-switch__core--mini' : '']"
      ref="core"
      :style="{ 'width': core_width, 'height': core_height}"
    >
      <span
        :class="['p-switch__label', 'p-switch__label--off--inside']"
        v-if="textPosition == 'inside' && !checked"
      >
        <span :aria-hidden="checked">{{ offText }}</span>
      </span>
      <span
        :class="['p-switch__label', 'p-switch__label--on--inside']"
        v-if="textPosition == 'inside' && checked"
      >
        <span :aria-hidden="checked">{{ onText }}</span>
      </span>
    </div>
    <span
      :class="['p-switch__label', 'p-switch__label--right', checked ? 'is-active' : '']"
      v-if="textPosition == 'outside'"
    >
      <span :aria-hidden="!checked">{{ onText }}</span>
    </span>
  </div>
</template>
<script>
import Focus from "../../../Mixins/focus";

export default {
  name: "PSwitch",
  mixins: [Focus("input")],
  props: {
    value: {
      type: [Boolean, String, Number],
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "normal"
    },
    fontSize: {
      type: String,
      default: "14px"
    },
    textPosition: {
      type: String,
      default: ""
    },
    onText: {
      type: String,
      default: "on"
    },
    offText: {
      type: String,
      default: "off"
    },
    onColor: {
      type: String,
      default: "#409EFF"
    },
    offColor: {
      type: String,
      default: "#C0CCDA"
    },
    onValue: {
      type: [Boolean, String, Number],
      default: true
    },
    offValue: {
      type: [Boolean, String, Number],
      default: false
    },
    name: {
      type: String,
      default: ""
    },
    id: String
  },
  data() {
    return {
      core_width: "",
      core_height: "",
      font_size: ""
    };
  },
  created() {
    if (!~[this.onValue, this.offValue].indexOf(this.value)) {
      this.$emit("input", this.offValue);
    }
  },
  computed: {
    checked() {
      return this.value === this.onValue;
    },
    switch_disabled() {
      return this.disabled;
    }
  },
  watch: {
    checked() {
      this.$refs.input.checked = this.checked;
      if (this.onColor || this.offColor) {
        this.setBackgroundColor();
      }
    }
  },
  methods: {
    handleChange() {
      const val = this.checked ? this.offValue : this.onValue;
      this.$emit("input", val);
      this.$emit("change", val);
      this.$nextTick(() => {
        this.$refs.input.checked = this.checked;
      });
    },
    setBackgroundColor() {
      let newColor = this.checked ? this.onColor : this.offColor;
      this.$refs.core.style.borderColor = newColor;
      this.$refs.core.style.backgroundColor = newColor;
    },
    switchValue() {
      !this.switch_disabled && this.handleChange();
    }
  },
  mounted() {
    switch (this.size) {
      case "large":
        this.core_width = "70px";
        this.core_height = "35px";
        break;
      case "small":
        this.core_width = "50px";
        this.core_height = "25px";
        break;
      case "mini":
        this.core_width = "40px";
        this.core_height = "20px";
        break;
      default:
        this.core_width = "60px";
        this.core_height = "30px";
        break;
    }
    this.font_size = this.fontSize || "14px";
    if (this.onColor || this.offColor) {
      this.setBackgroundColor();
    }
    this.$refs.input.checked = this.checked;
  }
};
</script>
