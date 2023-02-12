import React from "react";
import PropTypes from "prop-types";

function CoffeeDetails(props) {
    const { coffee } = props;

    return (
        <React.Fragment>
            <h1>Coffee Detail</h1>
            <h4>Name: {coffee.name}</h4>
            <h3>Origin: {coffee.origin}</h3>
            <p><em>Price: {coffee.price}</em></p> 
            <p><em> Roast: {coffee.roast}</em></p>
						
            <button onClick={props.onClickingEdit}>Update Coffee</button>
            <button onClick={() => props.onClickingDelete(coffee.id)}>Delete Coffee</button>
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
