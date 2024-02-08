
import React, {Component} from "react";
import Cardslist from './Cardslist';
import Searchbox from './Searchbox'
import Scroll from './Scroll'
import './alluser.css'
import { robots } from './user.js';
import MainNavbar from '../../Assets/MainNavbar.js'

class AllUsers extends Component{
  constructor(){
    super();
    this.state={
      robots: robots, 
      searchfield: ''
    }
  }
  onsearchChange=(event)=>{
    this.setState({searchfield: event.target.value})
  }
  render(){
    const filteredrobots=this.state.robots.filter(robots=>{
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    return (
      <div className='AllusersFinalcss'>
        <MainNavbar/>
        <Searchbox searchChange={this.onsearchChange}/>
        <Scroll>
        <Cardslist robots = {filteredrobots}/>
        </Scroll>
      </div>
    );
    }
}

export default AllUsers;
