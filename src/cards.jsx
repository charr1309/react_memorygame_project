import React, { Component } from "react";

;

class cards extends Component {
    constructor(props){
        super(props)
        this.state = {
            cards: [],
            cardCount: 10,
        }
        for(i=1; i<=10; i++){
            cards.push(`images${i}.jpg`) 
        }
    }

    displayCard(){

    }
    question(){

    }

    render(){
        return (
            <div>
                
                < >
    
            </div>
        )
    }
}


export default cards