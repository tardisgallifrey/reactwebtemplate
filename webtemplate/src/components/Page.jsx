import React from 'react';
import { Link } from 'react-router-dom';
import { WPost } from './WPItem';
import pageData from '../shared/pageData';
//all above needed for making the Page component work

//This is where the real work is done
//This component will render each pages items
//conditionally based on what is in the JSON

//for example: pages without WordPress articles won't display them

//There is lots to do for this component to be finished



export function Page(props){
    

    return(
        <div>
            <div>
                <h1>{pageData[props.pageinfo].title}</h1>
                <p>{pageData[props.pageinfo].description}</p>
            </div>
            <div>
                <Link to={pageData[props.pageinfo].linkback} >Back Home</Link>
            </div>
            <WPost url={pageData[props.pageinfo].WPurl} width={pageData[props.pageinfo].WPwidth} height={pageData[props.pageinfo].WPheight} />
            
        </div>
    );
}