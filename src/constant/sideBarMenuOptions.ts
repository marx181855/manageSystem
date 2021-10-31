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

export default menus;
