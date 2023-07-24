import React from "react";

class Card extends React.Component{
constructor(props){
    super(props);

    this.state={
        count:0
    }
    

}

    render(){
        const {count}= this.state;
        const {name,location}= this.props
        return(
            <div className="user-info">
            <h1> Count : {count}</h1>
            <button className="card-btn" onClick={()=>{
                this.setState({
                    count:this.state.count+1
                })
            }}>Update Count</button>
            <h2>{name}</h2>
            <h2>{location}</h2>
            </div>
        )
    }
}

export default Card;