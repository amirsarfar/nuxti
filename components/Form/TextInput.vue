<template>
  <div class="input-control">
    <label :for="name" :class="labelClasses">{{ label }}</label>
    <input
      :class="inputClasses"
      :name="name"
      @focus="inputFocused"
      @blur="inputBlured"
      @keyup="inputChanged"
      v-model="val"
    />
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    name: String,
    label: String,
    value: String,
    required: Boolean
  },
  data() {
    return {
      focused: false,
      val: this.value ? this.value : "",
    };
  },
  computed: {
    labelClasses() {
      return {
        "hover-label": this.focused || this.val.trim() != ""
      };
    },
    inputClasses() {
      return [
        "rounded border-gray-300 border focus:outline-none focus:ring focus:border-gray-50 focus:ring-blue-200",
      ];
    },
  },
  methods: {
    inputFocused() {
      this.focused = true;
    },
    inputBlured() {
      this.focused = false;
    },
    inputChanged() {
      this.$emit('input', this.val);
    }
  }
};
</script>

<style lang="scss">
.input-control {
  @apply relative;
  label {
    @apply transform -translate-y-1/2 absolute top-1/2 left-4 transition-all text-gray-800;
    &.hover-label {
      @apply text-gray-400 top-1/4 text-sm;
    }
  }
  input {
    @apply w-full h-12 pl-4 pt-4 text-xl font-normal;
  }
}
</style>
