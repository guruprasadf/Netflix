import React from "react";
import './Style.css';
import List from './List';
import data from './Assets/data.json'

export default class Netflix extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            initialItems: data.shows,
            items: data.shows
        }
    }
    componentDidMount(){
        console.log(this.state.initialItems)
    }

    filterList = (event) =>{
        var updatedList = this.state.initialItems;
        updatedList = updatedList.filter(function(item){
          return item.title.toLowerCase().search(
            event.target.value.toLowerCase()) !== -1;
        });
        this.setState({items: updatedList},()=>{
            console.log("updated");
            console.log(this.state.items);
        });
    }
    render(){
        return (
            <React.Fragment>
            <div className="topnav">
            <a className="active" href="#home">Svideo</a>
  
            <input type="text" placeholder="Search.." onChange={this.filterList}/>
            </div>

            <List items={this.state.items}/>
            </React.Fragment>
        )
    }
}