import React from "react";
import { BiWorld } from "react-icons/bi";
import { ImSearch } from "react-icons/im";
export default function Heading(){
    return(
        <nav>
            <div id="logo">
                w<span><BiWorld/></span>rld inf<span><BiWorld/></span>
            </div>
            <div className="searchbar">
                <input type="text" placeholder="search" autoFocus/>
                <span><ImSearch/></span>
            </div>
        </nav>
    )
}