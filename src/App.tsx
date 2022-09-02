import React, { useState, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from
  'react-router-dom'
//  路由 browser / history 模式使用 BrowserRouter hash 模式使用HashRouter
import './style/Index.less'
import DefaultLayout from './layout/Index'

// 公共模块
// const DefaultLayout = lazy(() => import(/* webpackChunkName: 'default' */ './layout/Index'))


// 基础页面
const View404 = lazy(() => import(/* webpackChunkName: 'Others' */ './views/Others/404/Index'))
const View500 = lazy(() => import(/* webpackChunkName: 'Others' */ './views/Others/500/Index'))
const Login = lazy(() => import(/* webpackChunkName: 'Login' */ './views/Login/Index'))
const Home = lazy(() => import(/* webpackChunkName: 'Workbench' */ './views/Workbench/Home/Index'))

const App = () => {
  return (
    // <Router>
    //   <Suspense fallback={<div>Loading...</div>}>
    //     {/* Route 组件必须使用 Routes 嵌套 */}
    //     <Routes >
    //       {/* index索引路由 等于 path="/" */}
    //       {/* <Route index element={<Home></Home>}></Route> */}
    //       <Route path="/" element={<Login></Login>}></Route>
    //       {/* <Route path="/Login" element={<Login></Login>}></Route> */}
    //       <Route path="/500" element={<View500></View500>}></Route>
    //       <Route path="/404" element={<View404></View404>}></Route>
    //       {/* <Route element={<DefaultLayout></DefaultLayout>}></Route> */}

    //       {/* 匹配未定义的路由 重定向到首页 */}
    //       <Route path="*" element={<Navigate to="/" />} />
    //     </Routes>

    //     {/* <DefaultLayout></DefaultLayout> */}
    //   </Suspense>
    // </Router>
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <DefaultLayout></DefaultLayout>
      </Suspense>
    </Router>
  )
}

export default App
