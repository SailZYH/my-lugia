import React, {Component} from 'react';
import styled from 'styled-components';
import logo from '../../../assets/images/logo.png'

const Wrap = styled.div`
    width:208px;
    height:100%;
    float:left;
    background-image: linear-gradient(#333A52, #1D2133)
`

const Logo = styled.div`
    width:100%;
    height:56px;
`

export default class LeftNav extends Component {
    render(){
        return (

                <Wrap>
                    <Logo>
                        <img src={"../../../assets/images/logo.png"}></img>
                        赢时胜></Logo>

                </Wrap>
                
           
          
           
        )
    }
}