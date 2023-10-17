import React from "react";
import Sub from "./sub.js"
import "./main.css"
import { Link } from "react-router-dom";
export default function Main({ data }) {
   console.log(data)
   function displaycontent(class_name){
    let content=document.querySelector(`#${class_name}`);
    content.style.cssText="height:100%;visibility:visible;top:0;bottom:0"
   }
   function hidecontent(class_name){
    let hidecontent=document.querySelector(`#${class_name}`);
    hidecontent.style.cssText="visibility:hidden;"
   }
    return (
        <div className="container">
            {data.map((item,index) =>(
                 <div className="cover" onMouseEnter={()=>{displaycontent("class"+item.population+index)}} onMouseLeave={()=>{hidecontent("class"+item.population+index)}} style={{backgroundImage:`url(${item.flags.png})`}} key={item.name.common}>
                    <ul className="content" id={"class"+item.population+index}>
                    <ol><span>{item.name.common}</span></ol>
                    <ol><span>capital:</span> <span>{item.capital}</span></ol>
                    <ol><span>continent:</span> <span>{item.continents}</span></ol>
                    <br/>
                    <Link to="/sub">more</Link>
                    </ul>
                 </div>
            ))}
        </div>
    )
}