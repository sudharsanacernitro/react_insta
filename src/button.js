import './button.css';
import React,{useState} from 'react';
import {FaHome,FaSearch} from 'react-icons/fa';
import { MdOutlineExplore } from "react-icons/md";
import { FaClapperboard } from "react-icons/fa6";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";

function App() {
var l=['Home','Search','Explore','Reels','Messages','Notification','Create','Profile'];
var buttons=[];
var icon=[FaHome,FaSearch,MdOutlineExplore, FaClapperboard,BiMessageRoundedDetail,FaRegHeart,MdOutlineLibraryAdd,FaRegUserCircle];

function createnav()
{
   for(let i=0;i<l.length;i++)
   {
buttons.push(
  <div id="home" onClick={()=> window.location.href=l[i]}>
        {icons(i)}
      {l[i]}</div>
)
   }
   return buttons;
}

function icons(i)
{
return React.createElement(icon[i],{className:'home-icon'});
}

  return (
    <div id="nav">
      <h2 id="name">Instagram</h2>
       <br></br>
       
      {createnav()}
    </div>
  );
}

export default App;

