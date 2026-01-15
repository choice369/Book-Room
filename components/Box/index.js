import { Col, Row } from 'antd';
import "./index.css";

function Box(){
  return (
    <>
      <Row gutter={[10,10]}>
        <Col xl={6} lg={12} md={24} sm={24} xs={24}>
          <div className='tg'>Box1</div>
        </Col>
        <Col xl={6} lg={12} md={24} sm={24} xs={24}>
          <div className='tg'>Box2</div>
        </Col>
        <Col xl={6} lg={12} md={24} sm={24} xs={24}>
          <div className='tg'>Box3</div>
        </Col>
        <Col xl={6} lg={12} md={24} sm={24} xs={24}>
          <div className='tg'>Box4</div>
        </Col>
        <Col xl={12} lg={12} md={24} sm={24} xs={24}>
          <div className='tg'>Box5</div>
        </Col>
        <Col xl={12} lg={12} md={24} sm={24} xs={24}>
          <div className='tg'>Box6</div>
        </Col>
        <Col xl={12} lg={12} md={24} sm={24} xs={24}>
          <div className='tg'>Box7</div>
        </Col>
        <Col xl={12} lg={12} md={24} sm={24} xs={24}>
          <div className='tg'>Box8</div>
        </Col>
      </Row>
    </>
  );
};

export default Box;