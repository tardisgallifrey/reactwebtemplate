import React from 'react';
import {Link} from 'react-router-dom';
import pageData from '../shared/pageData';
//all above needed to make this container/component work
//Found that by importing pageData JSON on each page where
//parsing is needed cuts down on "objects can't be children errors"

//This works the same as it does in index.jsx
//The only difference is we're building menu links instead
var menuLinkList = [];
for( const prop in pageData){
   menuLinkList.push(<li key={menuLinkList.length - 1 } ><Link to={pageData[prop].linkto}>{pageData[prop].menutitle}</Link></li>);
}

//menuLinkList displays the menu links for all main items in JSON

export function home() {

   return (
      <div>
         <h1>Home...</h1>
         <p>Here will be an overall app menu, plus greeting, plus current stuff</p>
         <p>possible Twitter feed, Insta feed, Wordpress feed, Dev feed??</p>
         <ul>{menuLinkList}</ul>
      </div>
   );
}
