import React from 'react';
import './Header.css';

function Header(props) {
  return (
    <div className="header">
      {props.titleVisible && <h1>{props.title}</h1>}
      {!props.titleVisible && `There's nothing to show`}
      <div>
        {props.age < 10 && 'Junior'}
        {props.age > 10 && props.age < 20 && 'Teenage'}
        {props.age > 20 && 'Adult'}
      </div>
    </div>
  );
}

export default Header;
