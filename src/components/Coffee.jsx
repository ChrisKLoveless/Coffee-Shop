import React from "react";
import PropTypes from "prop-types";

function Coffee(props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenCoffeeClicked(props.id)}>
      <h3>{props.origin} - {props.name}</h3>
      <p><em>{props.price} - {props.roast}</em></p>
      <hr />
      </div>
    </React.Fragment>
  );
}

Coffee.propTypes = {
  name: PropTypes.string,
  origin: PropTypes.string,
  price: PropTypes.string,
  roast: PropTypes.string,
  id: PropTypes.string,
  whenCoffeeClicked: PropTypes.func
};

export default Coffee;