import fs from 'fs/promises';

export interface MenuOptions {
  name: string;
  routePath: string;
  icon?: string;
  subMenus?: MenuOptions[];
  routeMeta?: {
    title: string;
    roles: string[];
  };
}
const menus: MenuOptions[] = [
  {
    name: "服务管理", // 父菜单名字
    icon: "el-icon-setting", // 父菜单图标
    routePath: 'service',
    subMenus: [{ 
      name: "服务信息", 
      icon: 'el-icon-s-tools', 
      routePath: 'serviceInformation',
      routeMeta: {
        title: '服务信息',
        roles: [''],
      }, 
      subMenus: [{
        name: '测试三级子菜单',
        icon: 'el-icon-menu',
        routePath: 'test',
        subMenus: [{ name: '四级子菜单', icon: '', routePath: 'mmp' }],
      }]
    }], 
  },
  {
    name: "产品管理",
    icon: "el-icon-avatar",
    routePath: 'product',
    subMenus: [
      { name: "产品信息", routePath: 'productList', routeMeta: { title: '产品信息', roles: [''] } },
      { name: "新增", routePath: 'productEdit', routeMeta: { title: '产品信息', roles: [''] } }
    ],
  },
  {
    name: '日志管理',
    icon: '',
    routePath: 'log',
    routeMeta: {
      title: '日志管理',
      roles: [''],
    },
  },
];

/** 动态生成侧边栏菜单路由 */
// function createMenuRouteRecord(): [RouteRecordRaw, RouteRecordRaw[]] {
//   const redirectRoute = { path: '/', redirect: `/${menus[0].routePath}` };

//   let menu: MenuOptions = menus[0];

//   while(menu.subMenus) {
//     menu = menu.subMenus[0];
//     redirectRoute.redirect += `/${menu.routePath}`;
//   }

//   const menuRouteList: RouteRecordRaw[] = [];

//   for(const item of menus) {
//     const route = {} as RouteRecordRaw;
//     route.path = item.routePath;
//     route.name = item.routePath;
//     route.component = () => import(`@/pages/index/${item.routePath}/${item.routePath}.vue`);
//     route.meta = item.routeMeta;

//     if (item.subMenus) {
//       route.children = [];
//       for(const subItem of item.subMenus) {
//         const subRoute = {} as RouteRecordRaw;
//         subRoute.path = subItem.routePath;
//         subRoute.name = subItem.routePath;
//         subRoute.meta = subItem.routeMeta;
//         subRoute.component = () => import(`@/pages/index/${item.routePath}/${subItem.routePath}/${subItem.routePath}.vue`);
//         route.children.push(subRoute);

//         if(subItem.subMenus) {
//           subRoute.children = [];
//           for(const subThreeItem of subItem.subMenus) {
//             const subThreeRoute = {} as RouteRecordRaw;
//             subThreeRoute.path = subThreeItem.routePath;
//             subThreeRoute.name = subThreeItem.routePath;
//             subThreeRoute.meta = subThreeItem.routeMeta;
//             subThreeRoute.component = () => import(`@/pages/index/${item.routePath}/${subItem.routePath}/${subThreeItem.routePath}/${subThreeItem.routePath}.vue`);
//             subRoute.children.push(subThreeRoute);
//           }
//         }
//       }
//     }
//     menuRouteList.push(route);
//   }
//   console.debug('const menu = '+JSON.stringify([redirectRoute, menuRouteList], null, 2));
//   return [redirectRoute, menuRouteList];
// } 
