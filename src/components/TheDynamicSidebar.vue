<template>
  <!-- 写法二，最多支持3级子菜单 -->
  <section>
    <el-menu :default-active="$route.path" background-color="#324157" text-color="#bfcbd9" active-text-color="#20a0ff" router unique-opened>
      <template v-for="(item, index) in menu" :key="index">
        <el-menu-item v-if="!item.subMenus" :index="`/${item.routePath}`">
          <i :class="item.icon || defaultIcon"></i>
          <span>{{ item.name }}</span>
        </el-menu-item>
        <el-sub-menu v-else :index="item.routePath">
          <template #title>
            <i :class="item.icon || defaultIcon"></i>
            <span>{{ item.name }}</span>
          </template>
          <template v-for="(subItem, index) in item.subMenus" :key="index">
            <el-menu-item v-if="!subItem.subMenus" :index="`/${item.routePath}/${subItem.routePath}`">
              <i :class="subItem.icon || defaultIcon"></i>
              <span>{{ subItem.name }}</span>
            </el-menu-item>
            <el-sub-menu v-else :index="subItem.routePath">
              <template #title>
                <i :class="subItem.icon || defaultIcon"></i>
                <span>{{ subItem.name }}</span>
              </template>
              <template v-for="(subThreeItem, index) in subItem.subMenus" :key="index">
                <el-menu-item v-if="!subThreeItem.subMenus" :index="`/${item.routePath}/${subItem.routePath}/${subThreeItem.routePath}`">
                  <i :class="subThreeItem.icon || defaultIcon"></i>
                  <span>{{ subThreeItem.name }}</span>
                </el-menu-item>
                <el-sub-menu v-else :index="subThreeItem.routePath">
                  <template #title>
                    <i :class="subThreeItem.icon || defaultIcon"></i>
                    <span>{{ subThreeItem.name }}</span>
                  </template>
                  <template v-for="(subFourItem, index) in subThreeItem.subMenus" :key="index">
                    <el-menu-item :index="`/${item.routePath}/${subItem.routePath}/${subThreeItem.routePath}/${subFourItem.routePath}`">
                      <i :class="subFourItem.icon || defaultIcon"></i>
                      <span>{{ subFourItem.name }}</span>
                    </el-menu-item>
                  </template>
                </el-sub-menu>
              </template>
            </el-sub-menu>
          </template>
        </el-sub-menu>
      </template>
    </el-menu>
  </section>
  <!-- 写法一 -->
  <!-- <section>
    <el-menu :default-active="$route.path" background-color="#324157" text-color="#bfcbd9" active-text-color="#20a0ff" router unique-opened>
      <template v-for="(item, index) in menu" :key="index">
        <el-sub-menu v-if="item.subMenus" :index="item.routePath">
          <template #title>
            <i :class="item.icon || defaultIcon"></i>
            <span>{{ item.name }}</span>
          </template>
          <template v-for="(subItem, index) in item.subMenus" :key="index">
            <el-sub-menu v-if="subItem.subMenus" :index="subItem.routePath">
              <template #title>
                <i :class="subItem.icon || defaultIcon"></i>
                <span>{{ subItem.name }}</span>
              </template>
              <el-menu-item v-for="(subThreeItem, index) in subItem.subMenus" :key="index" :index="`/${item.routePath}/${subItem.routePath}/${subThreeItem.routePath}`">
                <i :class="subThreeItem.icon || defaultIcon"></i>
                <span>{{ subThreeItem.name }}</span>
              </el-menu-item>
            </el-sub-menu>
            <el-menu-item v-else :index="`/${item.routePath}/${subItem.routePath}`">
              <i :class="subItem.icon || defaultIcon"></i>
              <span>{{ subItem.name }}</span>
            </el-menu-item>
          </template>
        </el-sub-menu>
        <el-menu-item v-else :index="`/${item.routePath}`">
          <i :class="item.icon || defaultIcon"></i>
          <span>{{ item.name }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </section> -->
</template>

<script lang="ts" setup>
import menu from '@/constant/sideBarMenuOptions';

const defaultIcon = 'el-icon-menu';
</script>

<style lang="scss">
// 本来不需要这个，估计是element自己的bug
.el-sub-menu__title:hover {
  background-color: rgb(40, 52, 70) !important;
}
</style>

