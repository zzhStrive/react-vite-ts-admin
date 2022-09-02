import React from 'react';
import { lazy } from 'react';


// 基础页面
const View404 = lazy(() => import(/* webpackChunkName: 'Others' */ '../../views/Others/404/Index'))
const View500 = lazy(() => import(/* webpackChunkName: 'Others' */ '../../views/Others/500/Index'))
const Login = lazy(() => import(/* webpackChunkName: 'Login' */ '../../views/Login/Index'))
const Home = lazy(() => import(/* webpackChunkName: 'Workbench' */ '../../views/Workbench/Home/Index'))

const BasicRoutes = [
  {
    path: '/',
    element: <Home></Home>,
  },
  {
    path: '/Home',
    element: <Home></Home>,
  },
  {
    path: '*',
    element: <Home></Home>,
  },
  {
    path: '/Login',
    element: <Login></Login>,
  },
  {
    path: '/500',
    element: <View500></View500>,
  },
  {
    path: '/404',
    element: <View404></View404>,
  },
]

export default BasicRoutes