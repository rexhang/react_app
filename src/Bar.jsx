import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import Header from './components/Header.jsx';

class Bar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fruit: 'Pear4'
        }
    }
    render() {
        const styles = {
            backgroundColor: '#ff7300',
            color: '#fff'
        }
        return (
            <div>
                <Header {...styles}/>
                <ul>
                    <li><Link to="/login">login</Link></li>
                    <li><Link to="/index/">Index - Home</Link></li>
                    <li><Link to="/index/CheckboxGroups2">CheckboxGroups2</Link></li>
                    <li><Link to="/index/CheckboxGroups3">CheckboxGroups3</Link></li>
                    <li><Link to="/index/CheckboxGroups4/av16185125">CheckboxGroups4</Link></li>
                </ul>
            </div>
        )
    }
}

export default Bar;