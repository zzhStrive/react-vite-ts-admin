import React, { Component, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Routes, useRoutes } from 'react-router-dom'
// // import { connect } from 'react-redux'
import { Layout, BackTop, message } from 'antd'
import routes from '../routers/Index'
// // import { menuToggleAction } from '@/store/actionCreators'
// // import echarts from 'echarts/lib/echarts'
// import avatar from '@/assets/images/user.jpg'
import menu from './menu'
import './style/Index.less'

// // import AppHeader from './AppHeader.jsx'
import AppAside from './AppAside'
// // import AppFooter from './AppFooter.jsx'

const { Content } = Layout
// const Home = lazy(() => import(/* webpackChunkName: 'Workbench' */ '../views/Workbench/Home/Index'))


// class DefaultLayout extends Component {
//   state = {
//     avatar,
//     show: true,
//     menu: []
//   }

//   isLogin = () => {
//     // if (!localStorage.getItem('user')) {
//     //   this.props.history.push('/login')
//     // } else {
//     //   this.setState({
//     //     menu: this.getMenu(menu)
//     //   })
//     // }
//   }

//   loginOut = () => {
//     // localStorage.clear()
//     // this.props.history.push('/login')
//     // message.success('登出成功!')
//   }

//   getMenu = (menu: any[]) => {
//     // let newMenu,
//     //   auth = JSON.parse(localStorage.getItem('user')).auth
//     // if (!auth) {
//     //   return menu
//     // } else {
//     //   newMenu = menu.filter((res: { auth: string | any[] }) => res.auth && res.auth.indexOf(auth) !== -1)
//     //   return newMenu
//     // }
//   }

//   componentDidMount() {
//     console.log('xxx');

//     this.isLogin()
//   }

//   componentDidUpdate() {
//     // let { pathname } = this.props.location

//     // // 菜单收缩展开时 echarts 图表的自适应
//     // if (pathname === '/' || pathname === '/index') {
//     //   this.timer = setTimeout(() => {
//     //     echarts.init(document.getElementById('bar')).resize()
//     //     echarts.init(document.getElementById('line')).resize()
//     //     echarts.init(document.getElementById('pie')).resize()
//     //     echarts.init(document.getElementById('pictorialBar')).resize()
//     //     echarts.init(document.getElementById('scatter')).resize()
//     //   }, 500)
//     // } else {
//     //   this.timer = null
//     // }
//   }

//   componentWillUnmount() {
//     // this.timer && clearTimeout(this.timer)
//   }

//   render() {
//     // let { menuClick, menuToggle } = this.props
//     // let { auth } = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : ''
//     return (
//       <Layout className='app'>
//         <BackTop />
//         123321
//         {/* 侧边栏 */}
//         {/* <AppAside menuToggle={menuToggle} menu={this.state.menu} /> */}
//         {/* <Layout style={{ marginLeft: menuToggle ? '80px' : '200px', minHeight: '100vh' }}> */}

//         {/* 页头 */}
//         {/* <AppHeader
//             menuToggle={menuToggle}
//             menuClick={menuClick}
//             avatar={this.state.avatar}
//             show={this.state.show}
//             loginOut={this.loginOut}
//           /> */}

//         <Content className='content'>
//           <Router>
//             <Suspense fallback={<div>Loading...</div>}>
//               <Routes>
//                 {/* {routes.map((item: any) => {
//                   console.log('item', item);
//                   return (

//                     <Route
//                       key={item.path}
//                       path={item.path}
//                       element={<item.component />}></Route>
//                   )
//                 })}
//                 <Redirect to='/404' /> */}
//                 <Route path="/Home" element={<Home></Home>}></Route>
//               </Routes>
//             </Suspense>
//           </Router>
//         </Content>

//         {/* <AppFooter /> */}
//       </Layout>
//     )
//   }
// }

// const stateToProp = (state: { menuToggle: any }) => ({
//   menuToggle: state.menuToggle
// })

// const dispatchToProp = (dispatch: (arg0: any) => void) => ({
//   // menuClick() {
//   //   dispatch(menuToggleAction())
//   // }
// })

// // export default withRouter(
// //   connect(
// //     stateToProp,
// //     dispatchToProp
// //   )(DefaultLayout)
// // )
// export default DefaultLayout


// // props => !auth ?
// // (<item.component {...props} />) :
// // (item.auth && item.auth.indexOf(auth) !== -1 ?
// //   (<item.component {...props} />) :
// //   (
// //     // 这里也可以跳转到 403 页面
// //     <Redirect to='/404' {...props} />
// //   ))

function AllRoutes() {
  //这里必须用函数然后内部使用组件方法调用
  const Views = () => useRoutes(routes)
  return (
    <Views />
  );
}

const menuToggle = false

const DefaultLayout: React.FC<{}> = (props) => {
  // console.log('props', props)
  return (
    <Layout className='app'>
      <BackTop />

      {/* 侧边栏 */}
      <AppAside menuToggle={menuToggle} menu={menu} />
      {/* <AppAside menuToggle={menuToggle} menu={this.state.menu} /> */}
      <Layout style={{ marginLeft: menuToggle ? '80px' : '200px', minHeight: '100vh' }}>

        {/* 页头 */}
        {/* <AppHeader
        menuToggle={menuToggle}
        menuClick={menuClick}
        avatar={this.state.avatar}
        show={this.state.show}
        loginOut={this.loginOut}
      /> */}

        <Content className='content'>
          <AllRoutes></AllRoutes>
        </Content>

        {/* <AppFooter /> */}
      </Layout>
    </Layout>
  )
}

export default DefaultLayout;
