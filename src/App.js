import React from 'react';
import './App.css';
import CartHeader from './CartHeader.js';
import CartFooter from './CartFooter.js';
import CartItems from './CartItems.js';
import AddItem from './AddItem.js';


class App extends React.Component{

  constructor(props){
    super(props);
    this.state =  {
      cartItemsList : [
        { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
        { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
        { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
      ],
      products : [
        { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
        { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
        { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
        { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
        { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
        { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
        { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
        { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
        { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
      ]
    }
  }

  addItem = (item) => {
    this.setState(prevState => {
      cartItemsList: prevState.cartItemsList.concat(item);
    });
  }

  render(){
    return (
      <div>
        <CartHeader />
        <CartItems items={this.state.cartItemsList}/>
        <AddItem onSubmitPressed={this.addItem} products={this.state.products}/>
        <CartFooter copyright="2020"/>
        
      </div>
    )
  }

}




export default App;

