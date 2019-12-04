import React, {Component} from 'react';
import styled from 'styled-components';


const HeardDiv = styled.div`
    width:100%;
    height:56px;
    background:#FFFFFF;
    box-shadow:0 1px 4px 0 rgba(0,21,41,0.12);
`

export default class Heard extends Component {
    render(){
        return (
           <HeardDiv></HeardDiv>
        )
    }
}