import React from 'react';

//This is the basics of how each component will work

//If it's primary item passed in props exists,
//then we'll render it wherever it goes on the page
//If it doesn't exist, we'll return nothing

//The width and height will be on each item compoonent,
//but are optional and defaulted, according to the 
//conditional statements

export function WPost(props) {

    if(!props.url){

        return null;
    }

    return (
        <article className="Wpress">
            <embed src={props.url}
                width={props.width ? props.width : 100} 
                height={ props.height ? props.height : 100 }>
            </embed>
        </article>
    );

}

