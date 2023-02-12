import React from "react";
import Coffee from "./Coffee.jsx";
import PropTypes from "prop-types";


function CoffeeList(props){

  return (
    <React.Fragment>
      <hr/>
      {props.coffeeList.map((coffee) =>
        <Coffee
          whenCoffeeClicked = { props.onCoffeeSelection }
          whenSellPoundClicked = { props.onSellPound }
          name={coffee.name}
          origin={coffee.origin}
          price={coffee.price}
          roast={coffee.roast}
          pounds={coffee.pounds}
          id={coffee.id}
          key={coffee.id}/>
      )}
    </React.Fragment>
  );
}

CoffeeList.propTypes = {
  coffeeList: PropTypes.array,
  onCoffeeSelection: PropTypes.func,
  onSellPound: PropTypes.func
};

export default CoffeeList;