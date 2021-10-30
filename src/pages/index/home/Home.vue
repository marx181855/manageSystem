<template>
  <el-container>
    <el-header>配置化表单</el-header>
    <el-main>
      <DynamicForm :formComponentList="formComponentList">
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </DynamicForm>
    </el-main>
  </el-container>
  
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

import DynamicForm, { FormOptions } from '@/components/DynamicForm.vue';

const formComponentList = reactive<FormOptions[]>([
  {
    componentName: "el-input",
    formLabel: "活动名称",
    value: '',
    placeholder: "请选择活动区域",
  },
  {
    componentName: 'el-select',
    formLabel: '活动区域',
    placeholder: '请选择活动区域',
    value: '',
    options: [
      { label: '上海', value: '上海' },
      { label: '北京', value: '北京' },
    ],
  },
  {
    componentName: 'el-date-picker',
    formLabel: '活动日期',
    // type: 'date',
    valueFormat: 'YYYY-MM-DD',
    placeholder: '请选择日期',
    value: '',
  },
  {
    componentName: "el-time-picker",
    formLabel: '活动时间',
    valueFormat: "HH:mm:ss",
    placeholder: "选择时间",
    value: '',
  },
  {
    componentName: "el-switch",
    formLabel: "即时配送",
    value: false,
  },
  {
    componentName: 'el-checkbox-group',
    formLabel: '活动性质',
    value: [],
    options: [
      { label: '美食/餐厅线上活动' },
      { label: "地推活动" },
      { label: "线下主题活动" },
      { label: "单纯品牌曝光" }
    ],
  },
  {
    componentName: "el-radio-group",
    formLabel: "特殊资源",
    options: [{ label: "线上品牌商赞助" }, { label: "线下场地免费" }],
    value: '',
  }
]);

function onSubmit() {
  // 点击提交的时候，将值筛选出来
  const formValueList = formComponentList.map(x => x.value);
  console.log({ formValueList });
}

</script>

<style lang="scss" scoped>
</style>