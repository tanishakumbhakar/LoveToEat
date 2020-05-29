import React, { Component } from 'react';

class Submit extends Component {

	constructor(props) {
	  super(props);
	
	  this.state = {};
	  this.submitRecipe = this.submitRecipe.bind(this);
	}

	submitRecipe() {
		console.log('button clicked');
		this.props.history.push('/');
	}

	render() {
		return (
			<div>
				
				<div  classNameName="row">
					<div classNameName="col-xs-12 col-sm-12">
					<h2>Submit</h2>
					<form>
					  <div className="form-group">
					    <label for="name">Name</label>
					    <input type="text" className="form-control" id="name" placeholder="Enter the name of the recipe" />
					    
					  </div>
					  <div className="form-group">
					    <label for="description">Description</label>
					    <textarea className="form-control" id="description" placeholder="Enter a brief description"/>
					  </div>
					   <div className="form-inline form-group">
					    <label for="description">Quantity</label>
					    <input type="text"  className="form-control" id="quantity" placeholder="Quantity"/>
					  
					  
					    <label for="description">Ingredients</label>
					    <input type="text"  className="form-control" id="ingredient" placeholder="Ingredients"/>
					    <button onClick={this.submitRecipe} className="btn btn-info">Add</button>
					  </div>
					 
					  
					<button onClick={this.submitRecipe} className="btn btn-default">Submit a Recipe</button>
					</form>
					</div>
				</div>
				
			</div>
		);
	}
}

export default Submit;