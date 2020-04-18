import React from 'react';

import './App.css'

import CardLsit from './components/card-list/card-list.component'
import { SaerchBox } from './components/searchBox/searchBox.components';
class App extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            monsters:[],
            filterMonsters:[]
        }
    }
componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users").then(
        response=>response.json()).then(
        (users)=>{
            console.log('User fetched \n',users);
            this.setState({monsters:users,filterMonsters:users})
        })
}
// ...imp
// initially i didnt not make this an arror function 
// And this function is working fine whenever we are calling this
// function in parrent class.But when this fn is been called from child class
// it gives an error that "this" is undefined.
// it is classical example of this.


onSearchFeildChange=(event)=>{
    let searchValue = event.target.value;
    console.log("On chnage Event of APP component fires",searchValue);
    // this.setState({searchFeild: searchValue},()=>{
    //     console.log("State value after onChange", this.state)      
    // });
    this.setState({filterMonsters: this.state.monsters.filter(
        (monster)=>{
            return monster.name.toLowerCase().startsWith(searchValue.toLowerCase())
        })})
    
}
    render(){
        console.log('App renders');
        console.log('App state is', this.state)
        return(
            <div className="center">
                <SaerchBox
                    placeholder="Enter Search test here"
                     handleCahnge={this.onSearchFeildChange}           
                />
            <CardLsit monsters ={this.state.filterMonsters}/>
            </div>
        )
    }
}
export default App;