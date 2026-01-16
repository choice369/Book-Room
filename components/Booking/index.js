import "./index.css";
import { Button, Col, Row } from 'antd';
import { Input } from 'antd';
import { Checkbox } from 'antd';
import { Radio } from 'antd';
import { Flex } from 'antd';
import { useState } from 'react';
import { QqOutlined, ChromeOutlined, LinuxOutlined } from '@ant-design/icons';
import { DatePicker, Space, TimePicker } from 'antd';
const { RangePicker } = DatePicker;

const plainOptions = ['Thuê xe máy', 'Thuê ô tô 4 chỗ', 'Thuê ô tô 7 chỗ','Thuê ô tô 16 chỗ'];
const radioOptions = [
  {
    value: 1,
    label: (
      <Flex gap="small" justify="center" align="center" vertical>
        <QqOutlined />
        <div>Áo cộc</div>
      </Flex>
    )
  },
  {
    value: 2,
    label: (
      <Flex gap="small" justify="center" align="center" vertical>
        <ChromeOutlined />
        <div>Mũ</div>
      </Flex>
    )
  },
  {
    value: 3,
    label: (
      <Flex gap="small" justify="center" align="center" vertical>
        <LinuxOutlined />
        <div>Kem chống nắng</div>
      </Flex>
    )
  }
]

const convertDateVn = (date) => {
  const vnDate = new Date(date).toLocaleString("vi-VN", {
    timeZone: "Asia/Ho_Chi_Minh",
  });
  return vnDate;
};

function Booking(){
  const [data, setData] = useState([]);
  const [inputName, setInputName] = useState();
  const [inputPhoneNumber, setInputPhoneNumber] = useState();
  const [inputMail, setInputMail] = useState();
  const [checkbox, setCheckbox] = useState();
  const [radio, setRadio] = useState();
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const onData = () => {  
    let newData = {
      name: inputName,
      phoneNumber: inputPhoneNumber,
      mail: inputMail,
      service: checkbox,
      dateStartAndEnd: date,
      timeReceive: time 
    };
    setData(newData);
  };
  const onInputName = (e) => {
    setInputName(e.currentTarget.value);
  };
  const onInputPhoneNumber = (e) => {
    setInputPhoneNumber(e.currentTarget.value);
  };
  const onInputEmail = (e) => {
    setInputMail(e.currentTarget.value)
  };
  const onCheckbox = (value) => {
    setCheckbox(value);
  };
  const onRadio = (e) => {
    setRadio(e.target.value);
  };
  const onDate = (value) => {
    const dateStart = convertDateVn(value[0].$d);
    const dateEnd = convertDateVn(value[0].$d);
    setDate([dateStart, dateEnd]);
  };
  const onTime = (value) => {
    setTime(convertDateVn(value.$d));
  };
  return (
    <main className='box-main'>
      <Row gutter={[10,10]}>
        <Col span={24}>
          <h1>Book Room</h1>
        </Col>
        <Col span={8}> 
          <div>Họ tên</div>
          <Input placeholder="Ví dụ: Lê Văn A" style={{marginTop: 10}} onChange={onInputName}/>
        </Col>
        <Col span={8}> 
          <div>Số điện thoại</div>
          <Input placeholder="Ví dụ: 0123456789" style={{marginTop: 10}} onChange={onInputPhoneNumber}/>
        </Col>
        <Col span={8}> 
          <div>Email</div>
          <Input placeholder="Ví dụ: levana@gmail.com" style={{marginTop: 10}} onChange={onInputEmail}/>
        </Col>
        <Col span={8}>
          <div>Dịch vụ thêm</div>
          <Checkbox.Group options={plainOptions} style={{display: "flex", flexDirection: "column", marginTop: 10}} onChange={onCheckbox}/>
        </Col>
        <Col span={8}>
          <div>Qùa tặng</div>
          <Radio.Group value={radio} onChange={onRadio} options={radioOptions} style={{marginTop: 10}}/>
        </Col>
        <Col span={8}>
          <div>Chọn ngày khởi hành và kết thúc</div>
          <Space vertical size={12} style={{marginTop: 10}}>
            <RangePicker onChange={onDate} format="DD/MM/YYYY" />
          </Space>
        </Col>
        <Col span={8}>
          <div>Thời gian nhận phòng</div>
          <TimePicker style={{marginTop: 10}} onChange={onTime}/>
        </Col>
        <Col span={24}>
          <Button onClick={onData}>Submit</Button>
        </Col>
      </Row>
    </main>
  );
};

export default Booking;