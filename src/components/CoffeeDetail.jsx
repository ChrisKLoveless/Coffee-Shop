import React from "react";
import PropTypes from "prop-types";

function CoffeeDetails(props){
  const { coffee } = props;

    return (
        <React.Fragment>
            <h1>Coffee Detail</h1>
            <h3>{coffee.origin} - {coffee.name}</h3>
            <p><em>{coffee.price} - {coffee.roast}</em></p>
            <button onClick={ props.onClickingEdit }>Update Coffee</button> 
            <button onClick={()=> props.onClickingDelete(coffee.id) }>Delete Coffee</button>
            <hr />
        </React.Fragment>
    );
}

CoffeeDetails.propTypes = {
    coffee: PropTypes.object,
    onClickingDelete: PropTypes.func,
    onClickingEdit: PropTypes.func
};

export default CoffeeDetails;
