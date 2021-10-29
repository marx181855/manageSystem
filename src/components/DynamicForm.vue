<template>
  <section>
    <el-form ref="form" label-width="120px">
      <el-form-item v-for="(item, index) in formComponentList" :key="index" :label="item.formLabel">
        <el-input v-if="item.componentName === 'el-input'" v-model="item.value" :type="item.type" :placeholder="item.placeholder"></el-input>
        <el-select v-if="item.componentName === 'el-select'" v-model="item.value" :type="item.type" :placeholder="item.placeholder">
          <el-option v-for="option in item.options" :label="option.label" :value="option.value" :key="option.value"></el-option>
        </el-select>
        <el-date-picker v-if="item.componentName === 'el-date-picker'" :type="item.type"></el-date-picker>
      </el-form-item>
    </el-form>
  </section>
  <section>
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="Activity name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="Activity zone">
        <el-select v-model="form.region" placeholder="please select your zone">
          <el-option label="Zone one" value="shanghai"></el-option>
          <el-option label="Zone two" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Activity time">
        <el-col :span="11">
          <el-date-picker
            v-model="form.date1"
            type="date"
            placeholder="Pick a date"
            style="width: 100%"
          ></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker v-model="form.date2" placeholder="Pick a time" style="width: 100%"></el-time-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="Instant delivery">
        <el-switch v-model="form.delivery"></el-switch>
      </el-form-item>
      <el-form-item label="Activity type">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="Online activities" name="type"></el-checkbox>
          <el-checkbox label="Promotion activities" name="type"></el-checkbox>
          <el-checkbox label="Offline activities" name="type"></el-checkbox>
          <el-checkbox label="Simple brand exposure" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="Resources">
        <el-radio-group v-model="form.resource">
          <el-radio label="Sponsor"></el-radio>
          <el-radio label="Venue"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="Activity form">
        <el-input v-model="form.desc" type="textarea"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
    </el-form>
  </section>
</template>

<script lang="ts" setup>
import { reactive, defineProps, defineEmits } from 'vue';

interface FormOptions {
  componentName: string;
  formLabel: string;
  value: any;
  placeholder: string;
  options?: OptionsItem[];
  type?: any;
  format?: string;

}

interface OptionsItem {
  label: any;
  value: any;
}

const props = defineProps<{
  formComponentList: FormOptions[];
}>();

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

const onSubmit = () => {
  console.log('submit!');
}

</script>

<style lang="scss" scoped>
</style>