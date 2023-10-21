import React from 'react'
import "./Module.css";
 
function Module ({image, title, description}) {
  return (
    <div className='module'>
      <h2 className='titleCustom'>{title}</h2>
      <img src = {image} alt = ""/>
      <a>{description}</a>
    </div>
  );
}
export default Module;