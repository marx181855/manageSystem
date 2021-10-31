import { RouteRecordRaw } from 'vue-router';

import menus, { MenuOptions } from '@/constant/sideBarMenuOptions';

/** 动态生成侧边栏菜单路由 */
function createMenuRouteRecord(): [RouteRecordRaw, RouteRecordRaw[]] {
  const redirectRoute = { path: '/', redirect: `/${menus[0].routePath}` };

  let menu: MenuOptions = menus[0];

  while(menu.subMenus) {
    menu = menu.subMenus[0];
    redirectRoute.redirect += `/${menu.routePath}`;
  }

  const menuRouteList: RouteRecordRaw[] = [];

  for(const item of menus) {
    const route = {} as RouteRecordRaw;
    route.path = item.routePath;
    route.name = item.routePath;
    route.component = () => import(`@/pages/index/${item.routePath}/${item.routePath}.vue`);
    route.meta = item.routeMeta;

    if (item.subMenus) {
      route.children = [];
      for(const subItem of item.subMenus) {
        const subRoute = {} as RouteRecordRaw;
        subRoute.path = subItem.routePath;
        subRoute.name = subItem.routePath;
        subRoute.meta = subItem.routeMeta;
        subRoute.component = () => import(`@/pages/index/${item.routePath}/${subItem.routePath}/${subItem.routePath}.vue`);
        route.children.push(subRoute);

        if(subItem.subMenus) {
          subRoute.children = [];
          for(const subThreeItem of subItem.subMenus) {
            const subThreeRoute = {} as RouteRecordRaw;
            subThreeRoute.path = subThreeItem.routePath;
            subThreeRoute.name = subThreeItem.routePath;
            subThreeRoute.meta = subThreeItem.routeMeta;
            subThreeRoute.component = () => import(`@/pages/index/${item.routePath}/${subItem.routePath}/${subThreeItem.routePath}/${subThreeItem.routePath}.vue`);
            subRoute.children.push(subThreeRoute);
          }
        }
      }
    }
    menuRouteList.push(route);
  }
  console.debug('const menu = '+JSON.stringify([redirectRoute, menuRouteList], null, 2));
  return [redirectRoute, menuRouteList];
}

export default createMenuRouteRecord;
