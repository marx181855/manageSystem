<template>
  <section>
    <el-form ref="form" label-width="120px">
      <el-form-item v-for="(item, index) in formComponentList" :key="index" :label="item.formLabel">
        <el-input
          v-if="item.componentName === 'el-input'"
          v-model="item.value"
          :type="item.type"
          :placeholder="item.placeholder"
        >
        </el-input>
        <el-select
          v-if="item.componentName === 'el-select'"
          v-model="item.value"
          :type="item.type"
          :placeholder="item.placeholder"
        >
          <el-option
            v-for="option in item.options"
            :label="option.label"
            :value="option.value"
            :key="option.value"
          >
          </el-option>
        </el-select>
        <el-date-picker
          v-if="item.componentName === 'el-date-picker'"
          :type="item.type"
          :value-format="item.valueFormat"
          :placeholder="item.placeholder"
          v-model="item.value"
        >
        </el-date-picker>
        <el-time-picker
          v-if="item.componentName === 'el-time-picker'"
          :value-format="item.valueFormat"
          :placeholder="item.placeholder"
          v-model="item.value"
        >
        </el-time-picker>
        <el-switch
          v-if="item.componentName === 'el-switch'"
          v-model="item.value"
        >
        </el-switch>
        <el-checkbox-group
          v-if="item.componentName === 'el-checkbox-group'"
          v-model="item.value"
        >
          <el-checkbox
            v-for="option in item.options"
            :label="option.label"
            :key="option.label"
          >
          </el-checkbox>
        </el-checkbox-group>
        <el-radio-group
            v-if="item.componentName === 'el-radio-group'"
            v-model="item.value"
        >
          <el-radio
            v-for="option in item.options"
            :label="option.label"
            :key="option.label"
            >
            </el-radio>
        </el-radio-group>
      </el-form-item>
      <slot></slot>
    </el-form>
  </section>
</template>

<script lang="ts" setup>
// 加个表单验证就行了
import { reactive, defineProps, defineEmits } from 'vue';

export interface FormOptions {
  componentName: string;
  formLabel?: string;
  value?: any;
  placeholder?: string;
  options?: OptionsItem[];
  type?: any;
  valueFormat?: string;

}

interface OptionsItem {
  label: any;
  value?: any;
}

defineProps<{ formComponentList: FormOptions[]; }>();

const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
});


</script>

<style lang="scss" scoped>
</style>