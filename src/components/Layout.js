import React from "react";
import Header from "./Header";
import Products from "./Products";
import "./Layout.css";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";


const Layout = () => {

  let total = 100;
  const itemList = useSelector(state => state.cart.itemList);

  itemList.forEach(element => {
    total += element.totalPrice;
  });



  const showCart = useSelector(state=> state.cart.showCart);

  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        {showCart && <CartItems />}
        <Products />
        <div className="total-price">
          <h3>Total: ${total}</h3>
          <button className="orderBtn">Place Order</button>
        </div>{" "}
      </div>
    </React.Fragment>
  );
};

export default Layout;
