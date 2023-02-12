import React from "react";
import PropTypes from "prop-types";

function Coffee(props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenCoffeeClicked(props.id)}>
      <h3>Name: {props.name}</h3> 
      <h3>Origin: {props.origin}</h3>
      <p><em>Roast: {props.roast}</em></p>
      <p><em>Price: $ {props.price} / lb</em></p>
      <p><em>Inventory: {props.pounds}lbs</em></p>
      <hr />
      </div>
      <button onClick={ () => props.whenSellPoundClicked(props.id) } id={props.id}> Sell Pound </button>
    </React.Fragment>
  );
}

Coffee.propTypes = {
  name: PropTypes.string,
  origin: PropTypes.string,
  price: PropTypes.string,
  roast: PropTypes.string,
  pounds: PropTypes.number,
  id: PropTypes.string,
  whenCoffeeClicked: PropTypes.func,
  whenSellPoundClicked: PropTypes.func
};

export default Coffee;