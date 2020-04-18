import React from 'react';

import './card-list.styles.css'
import {Card} from '../card/card.component'


class CardLsit extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log('card-list component renders')
        return(
        <div className ='cardlist'>
            {this.props.monsters.sort((a,b)=>{
                if (a.name<b.name) {
                    return -1;
                }else{
                    return 1;
                }
            }).filter((monster)=>monster.id<9).
            map(monster=>
                               // (<h1>{monster.name}</h1>)
                               (<Card key={monster.id} monster={monster}/>)
                )}
    {/* 
        {this.props.children} 
            this children property is used when we want to access 
            an node use within this component name when passed from parrent component    
    */}
            </div>
        )
    }
}

export default CardLsit;