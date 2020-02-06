import React from "react";
import ReactDOM from "react-dom";
import Client from "./Client";
import {
  Typography,
  Card,
} from "@material-ui/core";

class App extends React.Component {
  state = {
    clients: [
      { id: 1, nom: "Guerout", prenom: "Violette" },
      { id: 2, nom: "Faour", prenom: "Anas" },
      { id: 3, nom: "Du Chars", prenom: "Natacha" }
    ],
    nouveauClient: ""
  };

  handleDelete = id => {
  
    const clients = this.state.clients.slice();
    const index = clients.findIndex(client =>  client.id === id

    );
    clients.splice(index, 1);

    this.setState({...clients, clients});

  };

  handleSubmit = (event) => {
    event.preventDefault();
    const id = new Date().getTime();
    const nom = this.state.nouveauClient;
    const clients = [...this.state.clients];
    clients.push({id, nom});
    this.setState({clients, nouveauClient: ''});
  }

  handleChange = (event) => {
    const value = event.currentTarget.value; 
    this.setState({nouveauClient: value});
    console.log(event.currentTarget.value);

  }

  render() {
    const title = "Liste des Clients";

    return (
      <Card>
        <Typography variant="h3" align="center">
          {title}
        </Typography>

        {this.state.clients.map(client => (
          <Client details={client} onDelete={this.handleDelete}/>
        ))}
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Ajouter un client" value={this.state.nouveauClient} onChange={this.handleChange} />
          <button>Confirmer</button>
        </form>

      </Card>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
