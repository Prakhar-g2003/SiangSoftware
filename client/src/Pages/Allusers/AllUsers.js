import React, { useState } from "react";
import Cardslist from './Cardslist';
import Searchbox from './Searchbox'
import Scroll from './Scroll'
import './alluser.css'
// import { robots } from './User.js';
import MainNavbar from '../../Assets/MainNavbar.js'

const AllUsers = ({users}) => {
  const [searchfield, setSearchfield] = useState('');

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  }

  const filteredRobots = users.filter(robot => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  return (
    <div className='AllusersFinalcss'>
      <MainNavbar/>
      <Searchbox searchChange={onSearchChange}/>
      <Scroll>
        <Cardslist robots={filteredRobots}/>
      </Scroll>
    </div>
  );
}

export default AllUsers;
