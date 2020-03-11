import React from 'react';
import './App.css';
import CartHeader from './CartHeader.js';
import CartFooter from './CartFooter.js';
import CartItems from './CartItems.js';
import AddItem from './AddItem.js';
import CartTotalPrice from './CartTotalPrice.js';

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
  
  increaseItemQuantity = (prevState, newItem) => {
    return ({
      cartItemsList: prevState.cartItemsList.map(item => {
        if(item.product.id === newItem.product.id){
          item.quantity += newItem.quantity;
        }
        return item;
      })
    })
  }

  addNewItem = (prevState, newItem) => {
    const newId = prevState.cartItemsList.length + 1;
    newItem.id = newId;
    return ({
      cartItemsList: prevState.cartItemsList.concat(newItem)
    })
  }
  
  addItem = (newItem) => {
    this.setState(prevState => {
      const itemExists = prevState.cartItemsList.filter(item => item.product.id === newItem.product.id).length > 0;
      return itemExists ? this.increaseItemQuantity(prevState, newItem) : this.addNewItem(prevState,newItem);
    });
  }

  render(){
    return (
      <div>
        <CartHeader />
        <CartItems items={this.state.cartItemsList}/>
        <CartTotalPrice totalPriceInCents={this.state.cartItemsList.reduce((price,item) => price + (item.quantity * item.product.priceInCents),0)}/>
        <AddItem onSubmitPressed={this.addItem} products={this.state.products}/>
        <CartFooter copyright="2020"/>
      </div>
    )
  }

}




export default App;

