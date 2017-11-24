import React, { Component } from 'react';

import { Row, Col } from 'antd';

class Header extends Component{
    componentDidMount(){
        console.log('header', this.props)
    }
    render(){
        return (
            <div style={this.props.styles}>
                <Row>
                    <Col span={24} >Header</Col>
                </Row>
            </div>
        )
    }
}

Header.defaultProps = {
    styles: {
        backgroundColor: '#f00',
        color: '#fff',
        fontSize: '16px',
        textAlign: 'center'
    }
};

export default Header;