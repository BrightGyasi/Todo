import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export class FirstPage extends Component {
  render() {
    return (
      
      <div className='home-btns'>
        <Link to = "/todos"><button className='local-button'><span id='localText'>Local</span></button></Link>
        <button className='global-button'><span id='globalText'>Global</span></button>
        <Link to = "/server"><button className='server-button'><span id='serverText'>Server</span></button></Link>  
      </div>
      
    )
  }
}

export default FirstPage;