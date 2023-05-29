import Cookie from 'js-cookie'
export default {
    state: {
        isCollapse: false, // 用于控制侧边栏的展开/折叠
        tabsList: [
            {
                path: "/",
                name: "home",
                label: "首页",
                icon: "s-home",
                url: "Home/Home",
            },
        ], // 面包屑数据
        menu: [],
    },
    mutations: {
        // 修改侧边栏状态的方法
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse
        },
        // 更新面包屑数据
        selectMenu(state, val) {
            // console.log(val, 'val');
            // 判断添加的数据是否为首页，如果是则不改变，不是则修改
            if (val.name !== 'home') {
                const index = state.tabsList.findIndex(item => item.name === val.name)
                // 判断tabList中是否已有该路由名称，若无则添加
                if (index === -1) {
                    state.tabsList.push(val)
                }

            }
        },
        // 删除tag触发的操作
        closeTag(state, item) {
            const index = state.tabsList.findIndex(val => val.name === item.name)
            state.tabsList.splice(index, 1)
        },
        // 设置menu数据
        setMenu(state, val) {
            state.menu = val;
            // 对象 val 序列化存为menu的cookie(字符串大小比原始字符串小)
            Cookie.set('menu', JSON.stringify(val))
        },
        // 动态注册路由
        addMenu(state, router) {
            if (!Cookie.get('menu')) return
            const menu = JSON.parse(Cookie.get('menu'))
            state.menu = menu
            // 组装动态路由的数据
            const menuArray = []
            menu.forEach(item => {
                // 有子菜单
                if (item.children) {
                    item.children = item.children.map(item => {
                        item.component = () => import(`../views/${item.url}`)
                        return item
                    })
                    menuArray.push(...item.children)
                } else {
                    item.component = () => import(`../views/${item.url}`)
                    menuArray.push(item)
                }
            })
            console.log(menuArray, 'menuArray');
            // 动态添加子路由
            menuArray.forEach(item => {
                router.addRoute('Main', item)
            })
        }
    }
}