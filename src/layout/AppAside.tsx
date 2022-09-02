import React from 'react'
import { Layout } from 'antd'
import CustomMenu from '../components/CustomMenu/Index'
import {
  GithubOutlined
} from '@ant-design/icons';

const { Sider } = Layout

const AppAside: React.FC<any> = (props: { menuToggle: any; menu: any; }) => {
  let { menuToggle, menu } = props
  return (
    <Sider className='aside' collapsed={menuToggle}>
      <div className='logo'>
        <a rel='noopener noreferrer' href='https://github.com/Mr-zzzh' target='_blank'>
          <GithubOutlined style={{ fontSize: '3.8rem', color: '#fff' }} />
        </a>
      </div>

      <CustomMenu menu={menu}></CustomMenu>
    </Sider>
  )
}

export default AppAside
