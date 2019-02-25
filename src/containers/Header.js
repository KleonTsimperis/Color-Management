import React from 'react';
import Input from 'antd/lib/input';
import Layout from 'antd/lib/layout';
import { Row, Col } from 'antd';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import '../actions';
import { fetchColor } from '../actions';
import './styles.css';

const Search = Input.Search;

const Header = (props) => {
  const { fetchColor } = props;
  return (
    <nav>
      <Layout>
        <Row type="flex" justify="space-around" align="middle" className="row">
          <Col span={12} className="col">
            <h3>Hex Color Finder</h3>
          </Col>
          <Col span={12}>
            <Search
              enterButton="Search"
              size="large"
              onSearch={value => fetchColor(value)}
              className="search"
            />
          </Col>
        </Row>
      </Layout>
    </nav>
  );
};



export default connect(null, { fetchColor })(Header);