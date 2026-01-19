import { Row, Col } from "antd";
import { Form, Button, Checkbox, Input, Select, Space, Switch } from 'antd';
const { TextArea } = Input;

const optionSelect = [
  {
    label: 'Wifi',
    value: 'Wifi',
    emoji: '😄',
    desc: 'Feeling Good',
  },
  {
    label: 'Nóng lạnh',
    value: 'Nóng lạnh',
    emoji: '😢',
    desc: 'Feeling Blue',
  },
  {
    label: 'Xoa bóp',
    value: 'Xoa bóp',
    emoji: '😡',
    desc: 'Furious',
  },
  {
    label: 'View child and feel',
    value: 'View child and feel',
    emoji: '😎',
    desc: 'Chilling',
  },
  {
    label: 'Robot',
    value: 'Robot',
    emoji: '😴',
    desc: 'Need Sleep',
  }
];

function Creating(){
  const handleSubmit = (e) => {
    console.log(e);
  };

  return (
    <Row gutter={[20,20]}>
      <Form
        name="basic"
        onFinish={handleSubmit}
      >
        <Form.Item
          label="Tên phòng"
          name="roomname"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Số lượng giường"
          name="numberbed"
          rules={[{ required: true}]}
        >
          <Input type={"number"} />
        </Form.Item>

        <Form.Item
          label="Số người tối đa"
          name="numberhuman"
          rules={[{ required: true}]}
        >
          <Input type={"number"} />
        </Form.Item>

        <Form.Item label={null} name={"description"}>
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item label={"Tiện ích"} name={"util"}>
          <Select
            mode="multiple"
            style={{ width: '100%' }}
            placeholder="Vui lòng chọn tiện ích"
            options={optionSelect}
            optionRender={option => (
              <Space>
                <span role="img" aria-label={option.data.label}>
                  {option.data.emoji}
                </span>
                {`${option.data.label} (${option.data.desc})`}
              </Space>
            )}
          />
        </Form.Item>

        <Form.Item label={"Trạng thái"} name={"status"}>
          <Switch/>
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
        
      </Form>
    </Row>
  );
};

export default Creating;