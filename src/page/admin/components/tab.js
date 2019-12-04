import React, {Component} from 'react';
import styled from 'styled-components';


const TabDiv = styled.div`
    width:100%;
    height:40px;
    background:#FFFFFF;
    box-shadow: 0 1px 4px 0 rgba(0,10,35,0.06);
`

export default class Tab extends Component {
    render(){
        return (
           <TabDiv></TabDiv>
        )
    }
}