import React, { Component } from 'react';
import Ingredients from './Ingredients';
class Submit extends Component {

	constructor(props) {
	  super(props);
	
	  this.state = {};
	  this.submitRecipe = this.submitRecipe.bind(this);
	}

	submitRecipe() {
		console.log('button clicked');
		console.log(this.name.value);
		console.log(this.description.value);
		this.props.history.push('/');
	}

	render() {
		return (
			<div>
				
				<div className="row">
					<div className="col-xs-12 col-sm-12">
					<h2>Submit</h2>
					<form>
					  <div className="form-group">
					    <label htmlFor="name">Name</label>
					    <input type="text" ref={(input)=>{this.name=input;}} className="form-control" id="name" placeholder="Enter the name of the recipe" />
					    
					  </div>
					  <div className="form-group">
					    <label htmlFor="description">Description</label>
					    <textarea ref={(input)=>{this.description=input;}} className="form-control" id="description" placeholder="Enter a brief description"/>
					  </div>
					   <Ingredients/>
					 
					  
					<button onClick={this.submitRecipe} className="btn btn-primary">Submit a Recipe</button>
					</form>
					</div>
				</div>
				
			</div>
		);
	}
}

export default Submit;