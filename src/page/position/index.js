import React, {Component} from 'react';
import LeftNav from './components/left-nav';
import Heard from './components/heard';
import Tab from './components/tab';
import Search from './components/search';
import StationTable from './components/station-table';
import styled from 'styled-components';




export default class Position extends Component {
    render(){
        return (
            <div className={"contianer"} style={{width:'100%',height:'100%',display:'flex',flexDirection:'row'}}>
                <div className={"left"} style={{height:"100%"}}>
                    <LeftNav />
                
                </div>
                <div className={"content"} style={{float:'right',width:"100%"}}>
                    <Heard>
                    </Heard>
                    <Tab></Tab>
                    <Search></Search>
                    <StationTable></StationTable>
                </div>
            </div>
        )
    }
}