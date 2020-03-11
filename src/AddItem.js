import React from 'react';
import './Form.css';


class AddItem extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      products : props.products
    }

  }

  onSubmit = (e) =>{
    console.log(e, e.target, e.target.value);
    e.preventDefault();
    this.props.onSubmitPressed(e.target.value);
  } 

  //TODO ADD ON CHANGE TO THE FORM
  render(){
    return (
      <form onSubmit={this.onSubmit}>
        <label>Quantity</label>
        
        <input type="textfield"></input>
        <label>Products</label>
        <select id="cars" name="cars">
          <option value="default" selected>Please select an Option...</option>
          {this.state.products.map( product => <option value={product.name}>{product.name}</option>)}
        </select>
        <button type="submit">Submit</button>
      </form>
    )
  }

}




export default AddItem;

