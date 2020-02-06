import React from "react";
import ReactDOM from "react-dom";
import Client from "./Client";
import Form from "./Form";
import { Typography, Card } from "@material-ui/core";

class App extends React.Component {
  state = {
    clients: [
      { id: 1, nom: "Guerout", prenom: "Violette" },
      { id: 2, nom: "Faour", prenom: "Anas" },
      { id: 3, nom: "Du Chars", prenom: "Natacha" }
    ]
  };

  handleDelete = id => {
    const clients = this.state.clients.slice();
    const index = clients.findIndex(client => client.id === id);
    clients.splice(index, 1);

    this.setState({ ...clients, clients });
  };

  handleAdd = client=> {
    const clients = [...this.state.clients];
    clients.push(client);
    this.setState({ clients});
  }

  render() {
    const title = "Liste des Clients";

    return (
      <Card>
        <Typography variant="h3" align="center">
          {title}
        </Typography>

        {this.state.clients.map(client => (
          <Client details={client} onDelete={this.handleDelete} />
        ))}
        <Form onAdd={this.handleAdd}/>
      </Card>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
