import React from 'react';
import './Form.css';


class AddItem extends React.Component{

  constructor(props){
    super(props);
    this.state = {}
  }

  onSubmit = (e) =>{
    e.preventDefault();
    if(this.state.product && !isNaN(this.state.quantity)){
      this.props.onSubmitPressed(this.state);
    }
  } 

  //TODO ADD ON CHANGE TO THE FORM
  render(){
    return (
      <form onSubmit={this.onSubmit}>
        <label>Quantity</label>
        <input type="textfield" onChange={e => this.setState({quantity: Number(e.target.value)})}></input>
        <label>Products</label>
        <select id="cars" name="cars" onChange={e => this.setState({product: this.props.products.filter(p => p.id === Number(e.target.value))[0]})}>
          <option value="default">Please select an Option...</option>
          {this.props.products.map( product => <option key={product.id} value={product.id}>{product.name}</option>)}
        </select>
        <button type="submit">Submit</button>
      </form>
    )
  }

}




export default AddItem;

