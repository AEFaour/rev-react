import React from "react";
import ReactDOM from "react-dom";

class Form extends React.Component {
  state = {
    nouveauClient: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    const id = new Date().getTime();
    const nom = this.state.nouveauClient;
    this.props.onAdd({id, nom});
  };

  handleChange = event => {
    const value = event.currentTarget.value;
    this.setState({ nouveauClient: value });
    console.log(event.currentTarget.value);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Ajouter un client"
          value={this.state.nouveauClient}
          onChange={this.handleChange}
        />
        <button>Confirmer</button>
      </form>
    );
  }
}

export default Form;
