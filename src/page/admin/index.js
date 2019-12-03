import React, {Component} from 'react';
import LeftNav from './components/left-nav'
import styled from 'styled-components';


export default class Admin extends Component {
    render(){
        return (
            
            <div style={{height:"100%"}}>
                <LeftNav />
                Admin
                
            </div>
        )
    }
}