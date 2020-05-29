import React, { Component } from 'react';

class Ingredients extends Component {
	constructor(props){
		super(props);
		this.state={};
		this.addIngredients=this.addIngredients.bind(this);
	}
	addIngredients(){
		console.log('Ingredients added');
		console.log(this.quantity.value,this.ingredients.value);
	}
	render() {
		return (
			
				<div className="form-inline form-group">
					    <label htmlFor="description">Quantity</label>
					    <input type="text" ref={(input)=>{this.quantity=input;}} className="form-control" id="quantity" placeholder="Quantity"/>
					  
					  
					    <label htmlFor="description">Ingredients</label>
					    <input type="text" ref={(input)=>{this.ingredients=input;}} className="form-control" id="ingredient" placeholder="Ingredients"/>
					    <button onClick={this.addIngredients} className="btn btn-info">Add</button>
				</div>
			
		);
	}
}

export default Ingredients;