import React, { Component } from "react";
import axios from "axios";
class App extends Component {
  state = {
    beer: []
  };
  componentDidMount() {
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`)
      .then((res) => {
        console.log(res.data);

        this.setState({ beer: res.data.drinks });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  handleChange = (event) => {
    console.log(this.state);
    this.setState({ value: event.target.value });
  };
  render() {
    // console.log(this.state);
    return (
      <>
        <label>
          Pick your favorite drink:
          <select value={this.state.value} onChange={this.handleChange}>
            {this.state.beer.map((drink) => (
              <option key={drink.idDrink}> {drink.strDrink} </option>
            ))}
          </select>
        </label>
        <button
          onClick={() =>
            
     
            alert(
              "Your favorite flavor is: " +
              JSON.stringify(
                this.state.beer.find(
                  (drink) => drink.strDrink === this.state.value
                )

                )
                
              )

            
            
          }
        >
          Click Here
        </button>
      </>
    );
  }
}

export default App;