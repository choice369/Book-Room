import "./index.css"
import { Card, Row } from "antd";
import { Typography } from 'antd';
import { Badge, Space, Col, Flex, Table, Tag } from 'antd';
import { useState } from "react";
import { UnorderedListOutlined, BorderInnerOutlined } from '@ant-design/icons';
const { Title } = Typography;

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <Flex gap="small" align="center" wrap>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </Flex>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

function Dashboard (){
  const [isGrid, setGrid] = useState(true);
  const convertGrid = () => {
    setGrid(true);
  };
  const convertList = () => {
    setGrid(false);
  };
  return (
    <>
      <div style={{marginBottom: 20}}>
        <UnorderedListOutlined style={{fontSize: 30}} onClick={convertList}/>
        <BorderInnerOutlined style={{fontSize: 30, marginLeft: 20}} onClick={convertGrid}/>
      </div>
      {
        isGrid ? 
        <Row gutter={20}>
          <Col span={12} className="grid-define">
            <Badge.Ribbon text="Thường">    
              <Card>
                <Title level={2} style={{margin: 0}}>Phòng 123</Title>
                <div style={{marginTop: 10}}>Số giường: 2</div>
                <div style={{marginTop: 10}}>Số người: 4</div>
                <Space style={{marginTop: 10}}>
                  <Badge status="success" text={"Còn phòng"}/>
                </Space>
              </Card>
            </Badge.Ribbon>
          </Col>
          <Col span={12} className="grid-define">
            <Badge.Ribbon text="Vip" color={"purple"}>    
              <Card>
                <Title level={2} style={{margin: 0}}>Phòng 321</Title>
                <div style={{marginTop: 10}}>Số giường: 8</div>
                <div style={{marginTop: 10}}>Số người: 16</div>
                <Space style={{marginTop: 10}}>
                  <Badge status="success" text={"Còn phòng"}/>
                </Space>
              </Card>
            </Badge.Ribbon>
          </Col>
        </Row> 
        : <Table columns={columns} dataSource={data} />
      }
    </>
  );
};

export default Dashboard;