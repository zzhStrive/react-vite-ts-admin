import React, { Component } from 'react'
import { Layout, Row, Col, Divider } from 'antd'
import screenfull from 'screenfull'
import reactLogo from '@/assets/react.svg'
import './Index.less'

// import '@/style/view-style/index.scss'
// import {
//   WechatOutlined,
//   QqOutlined,
//   DingdingOutlined,
//   WeiboCircleOutlined,
//   FullscreenOutlined
// } from '@ant-design/icons';

// import BarEcharts from './bar'
// import PieEcharts from './pie'
// import LineEcharts from './line'
// import ScatterEcharts from './scatter'
// import PictorialBarEcharts from './pictorialBar'

// class Index extends Component {
//   fullToggle = () => {
//     if (screenfull.isEnabled) {
//       screenfull.request(document.getElementById('bar'))
//     }
//   }
//   render() {
//     return (
//       <Layout className='index animated fadeIn'>
//         <Row gutter={24} className='index-header'>
//           <Col span={6}>
//             <div className='base-style wechat'>
//               <WechatOutlined className='icon-style' />
//               <div>
//                 <span>999</span>
//                 <div>微信</div>
//               </div>
//             </div>
//           </Col>
//           <Col span={6}>
//             <div className='base-style qq'>
//               <QqOutlined className='icon-style' />
//               <div>
//                 <span>366</span>
//                 <div>QQ</div>
//               </div>
//             </div>
//           </Col>
//           <Col span={6}>
//             <div className='base-style dingding'>
//               <DingdingOutlined className='icon-style' />
//               <div>
//                 <span>666</span>
//                 <div>钉钉</div>
//               </div>
//             </div>
//           </Col>
//           <Col span={6}>
//             <div className='base-style weibo'>
//               <WeiboCircleOutlined className='icon-style' />
//               <div>
//                 <span>689</span>
//                 <div>微博</div>
//               </div>
//             </div>
//           </Col>
//         </Row>
//         <Row>
//           <Col span={24}>
//             <div className='base-style'>
//               <div className='bar-header'>
//                 <div>图形全屏展示</div>
//                 <FullscreenOutlined style={{ cursor: 'pointer' }} onClick={this.fullToggle} />
//               </div>
//               <Divider />
//               <BarEcharts />
//             </div>
//           </Col>
//         </Row>
//         <Row gutter={8}>
//           <Col span={12}>
//             <div className='base-style'>
//               <LineEcharts />
//             </div>
//           </Col>
//           <Col span={12}>
//             <div className='base-style'>
//               <PieEcharts />
//             </div>
//           </Col>
//           <Col span={12}>
//             <div className='base-style'>
//               <ScatterEcharts />
//             </div>
//           </Col>
//           <Col span={12}>
//             <div className='base-style'>
//               <PictorialBarEcharts />
//             </div>
//           </Col>
//         </Row>
//       </Layout>
//     )
//   }
// }

class Index extends Component<any, any> {
  constructor (props: any) {
    super(props);
    this.state = {
      count: 0
    }
  }

  setCount = () => {
    this.setState({
      count: this.state.count + 1
    })
    console.log('state', this.state.count);

  }

  render() {
    return (
      <div className="App">
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          {/* <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button> */}
          <button onClick={this.setCount}>
            count is {this.state.count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    )
  }
}

export default Index
