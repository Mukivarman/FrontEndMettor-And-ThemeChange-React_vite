import React from "react";
import SummaryPage from "./summary-page";
import { useState } from "react";
import './App.css';


export default function Theme(){

    const [color,setcolor]=useState(true)
    
const changetheme=()=>{
    if(color) setcolor(false) 
    else setcolor(true) 
}

const Button=(props)=>(
    <button onClick={changetheme}   
    style={{textAlign:'center', margin:'2px'}}>
    {props.text}
  </button>)

return(<div className={color?'lighttheme':'darktheme'}> 

    <Button  text={color?"Dark Theme" :"Light Theme"}/>
    <SummaryPage/>

</div>)
}