import React from "react";

export const Header = () => {
  return (
    <div>
      <button onClick={()=>{
        document.querySelector('.jsButton').innerHTML = "Clicked";
      }} className="jsButton">Click me</button>
    </div>
  )
}