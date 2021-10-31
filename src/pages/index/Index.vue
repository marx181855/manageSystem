<template>
  <el-container>
    <el-header height="70px" style="padding: 0;"><TheHeading></TheHeading></el-header>
    <el-container>
      <el-aside width="250px"><TheSidebar></TheSidebar></el-aside>
      <el-main><router-view></router-view></el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import TheHeading from '@/components/TheHeading.vue';
import TheSidebar from '@/components/TheDynamicSidebar.vue';
</script>

<style lang="scss" scoped>

</style>