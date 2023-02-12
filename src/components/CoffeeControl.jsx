import React from 'react';
import NewCoffeeForm from './NewCoffeeForm';
import CoffeeList from './CoffeeList';
import CoffeeDetail from './CoffeeDetail';
import EditCoffeeForm from './EditCoffeeForm';

class CoffeeControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainCoffeeList: [],
      selectedCoffee: null,
      editing: false,
      poundsSold: 0,
      outOfStock: ''
    };
  }

  handleSellPound = (id) => {
    const selectedCoffee = this.state.mainCoffeeList.filter(coffee => coffee.id === id)[0];
    if (selectedCoffee.pounds === 0) {
      this.setState({ outOfStock: `${selectedCoffee.name} is out of stock!`})
    }
    else {
      selectedCoffee.pounds -= 1;

      const newMainCoffeeList = this.state.mainCoffeeList
        .filter(coffee => coffee.id !== id)
        .concat(selectedCoffee);
  
      let currPoundsSold = this.state.poundsSold;
      currPoundsSold++;
  
      this.setState({
        mainInventoryList: newMainCoffeeList,
        poundsSold: currPoundsSold,
        outOfStock: ''
      });
    }
  }

  handleEditingCoffeeInList = (coffeeToEdit) => {
    const editedMainCoffeeList = this.state.mainCoffeeList
      .filter(coffee => coffee.id !== this.state.selectedCoffee.id)
      .concat(coffeeToEdit);
    this.setState({
      mainCoffeeList: editedMainCoffeeList,
      editing: false,
      selectedCoffee: null,
      outOfStock: ''
    });
  }

  handleEditClick = () => {
    this.setState({
      editing: true,
      outOfStock: ''
    });
  }

  handleDeletingCoffee = (id) => {
    const newMainCoffeeList = this.state.mainCoffeeList.filter(coffee => coffee.id !== id);
    this.setState({
      mainCoffeeList: newMainCoffeeList,
      selectedCoffee: null,
      outOfStock: ''
    });
  }

  handleChangingSelectedCoffee = (id) => {
    const selectedCoffee = this.state.mainCoffeeList.filter(coffee => coffee.id === id)[0];
    this.setState({
      selectedCoffee: selectedCoffee,
      outOfStock: ''
    });
  }

  handleAddingNewCoffeeToList = (newCoffee) => {
    const newMainCoffeeList = this.state.mainCoffeeList.concat(newCoffee);
    this.setState({
      mainCoffeeList: newMainCoffeeList,
      formVisibleOnPage: false,
      outOfStock: ''
    });
  }

  formHandleClick = () => {
    if (this.state.selectedCoffee != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedCoffee: null,
        editing: false,
        outOfStock: ''
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
        outOfStock: ''
      }));
    }
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    let outOfStock = this.state.outOfStock;

    if (this.state.editing) {
      currentlyVisibleState = <EditCoffeeForm
        coffee={this.state.selectedCoffee}
        onEditCoffee={this.handleEditingCoffeeInList} />
      buttonText = "Return to Coffee List";
    }
    else if (this.state.selectedCoffee != null) {
      currentlyVisibleState = <CoffeeDetail
        coffee={this.state.selectedCoffee}
        onClickingDelete={this.handleDeletingCoffee}
        onClickingEdit={this.handleEditClick}
      />
      buttonText = "Return to Coffee List";
    }
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewCoffeeForm
        onNewCoffeeCreation={this.handleAddingNewCoffeeToList} />
      buttonText = "Return to Coffee List";
    }
    else {
      currentlyVisibleState = <CoffeeList
        coffeeList={this.state.mainCoffeeList}
        onCoffeeSelection={this.handleChangingSelectedCoffee}
        onSellPound={this.handleSellPound} />
      buttonText = "Add Coffee";
    }
    return (
      <React.Fragment>
        <h3>{outOfStock}</h3>
        <h4>{this.state.poundsSold} lbs sold!</h4>
        {currentlyVisibleState}
        <button onClick={this.formHandleClick}> {buttonText} </button>
      </React.Fragment>
    );
  }
}

export default CoffeeControl;