import { Layout } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined, BarsOutlined, SearchOutlined, BellOutlined, UserAddOutlined, WarningOutlined, Loading3QuartersOutlined, CodepenOutlined, PlusOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Dropdown } from 'antd';
import "./index.css";
import Box from '../Booking';
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
const { Header, Footer, Sider, Content } = Layout;

const items = [
  {
    key: 'sub1',
    label: 'Navigation One',
    icon: <MailOutlined />,
    children: [
      {
        key: 'g1',
        label: 'Item 1',
        type: 'group',
        children: [
          { key: '1', label: 'Option 1' },
          { key: '2', label: 'Option 2' },
        ],
      },
      {
        key: 'g2',
        label: 'Item 2',
        type: 'group',
        children: [
          { key: '3', label: 'Option 3' },
          { key: '4', label: 'Option 4' },
        ],
      },
    ],
  },
  {
    key: 'sub2',
    label: 'Navigation Two',
    icon: <AppstoreOutlined />,
    children: [
      { key: '5', label: 'Option 5' },
      { key: '6', label: 'Option 6' },
      {
        key: 'sub3',
        label: 'Submenu',
        children: [
          { key: '7', label: 'Option 7' },
          { key: '8', label: 'Option 8' },
        ],
      },
    ],
  },
  {
    type: 'divider',
  },
  {
    key: 'sub4',
    label: 'Navigation Three',
    icon: <SettingOutlined />,
    children: [
      { key: '9', label: 'Option 9' },
      { key: '10', label: 'Option 10' },
      { key: '11', label: 'Option 11' },
      { key: '12', label: 'Option 12' },
    ],
  },
  {
    key: "sub5",
    label: <Link to={"/booking-room"}>Book Room</Link>,
    icon: <CodepenOutlined />
  },
  {
    key: "sub6",
    label: <Link to={"/creating-room"}>Create Room</Link>,
    icon: <PlusOutlined />
  }
];

const itemNotify = [
  {
    key: "5",
    label:
    <div className='box-notify header-notify'>
      <div className='inner-header'>
        <BellOutlined className='icon-notify'/>
        <div>Notification</div>
      </div>
      <div className='view-header'>View all</div>
    </div>
  },
  {
    key: "1",
    label: 
    <div className='box-notify mail-box'>
      <MailOutlined className='icon-notify icon-mail'/>
      <div className='content-header'>
        <div>You received a new message</div>
        <div className='timing'>8 hours ago</div>
      </div>
    </div>
  },
  {
    key: "2",
    label:
    <div className='box-notify user-box'>
      <UserAddOutlined className='icon-notify icon-user'/>
      <div className='content-header'>
        <div>New user registered</div>
        <div className='timing'>9 hours ago</div>
      </div>
    </div>
  },
  {
    key: "3",
    label:
    <div className='box-notify warning-box'>
      <WarningOutlined className='icon-notify icon-warning'/>
      <div className='content-header'>
        <div>System alert</div>
        <div className='timing'>12 hours ago</div>
      </div>
    </div>
  },
  {
    key: "4",
    label:
    <div className='box-notify loading-box'>
      <Loading3QuartersOutlined className='icon-notify icon-loading'/>
      <div className='content-header'>
        <div>You have a new update</div>
        <div className='timing'>1 days ago</div>
      </div>
    </div>
  }
]

function LayoutDefault(){
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [widthSider, setWidthSider] = useState(256);
  const [linkImage, setLinkImage] = useState("https://enlink.themenate.net/assets/images/logo/logo.png");
  function handleBar(){
    setIsCollapsed(!isCollapsed);
    if(widthSider === 256){
      setWidthSider(80);
      setLinkImage("https://enlink.themenate.net/assets/images/logo/logo-fold.png")
    }else{
      setWidthSider(256);
      setLinkImage("https://enlink.themenate.net/assets/images/logo/logo.png")
    }
  };  
  return (
    <Layout>
      <Header style={{background: "white", display: "flex", flex: "1"}} className={"img-"+widthSider}>
        <div className='box-header'>
          <img src={linkImage} className={"img-"+widthSider}/>
          <div className='item-header'>
            <div className={'item-header-1 '+"img-"+widthSider}>
              <BarsOutlined onClick={handleBar}/>
              <SearchOutlined style={{marginLeft: "20px"}}/>
            </div>
            <Dropdown menu={{ items: itemNotify }} placement="bottomRight" arrow>
              <BellOutlined className='item-header-2' style={{marginRight: 10}}/>
            </Dropdown>
          </div>
        </div>
      </Header>
      <Layout style={{display: "flex"}}>
        <Sider width={widthSider} collapsed={isCollapsed}>
          <Menu
            style={{ width: widthSider }}
            defaultSelectedKeys={['sub1','sub2']}
            defaultOpenKeys={['sub1','sub2']}
            mode="inline"
            items={items}
          />
        </Sider>
        <Content style={{ flex: 1, padding: 20}}>
          <Outlet/>
        </Content>
      </Layout>
      <Footer>
        <div>Copyright © 2018 Theme_Nate. All rights reserved.</div>
        <div>Term & Conditions</div>
        <div>Privacy & Policy</div>
      </Footer>
    </Layout>
  );
};

export default LayoutDefault;