import React from 'react';

import './card.style.css'

export  const Card =(props)=>(
    <div className = "card-container">
        <img 
        src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} 
        alt={"MonsterImage_No"+props.monster.id}/>
        {/* src take string value and here we want dynamic string*/}
    <h2>{props.monster.name}</h2>
    <p>{props.monster.email}</p>
    </div>
)
    