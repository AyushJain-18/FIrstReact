import React from 'react';

import './searchBox.style.css'
// imp ...
// here we are using destrucute property  
// way we are using props

export const SaerchBox =({placeholder , handleCahnge})=>(
    <div>
        <h1>Monster Rolodox</h1>
    <input className = "searchBox" type ="search" placeholder={placeholder}
    onChange ={(event)=>handleCahnge(event)}
    />
    </div>
);
