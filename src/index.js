import React from "react";
import ReactDOM from "react-dom";
import {
  Typography,
  Card,
  List,
  ListItem,
  Button,
  FormGroup,
  Input,
  InputLabel
} from "@material-ui/core";

class App extends React.Component {
  state = {
    clients: [
      { id: 1, nom: "Guerout", prenom: "Violette" },
      { id: 2, nom: "Faour", prenom: "Anas" },
      { id: 3, nom: "Du Chars", prenom: "Natacha" }
    ]
  };

  handleClick() {
    alert("Hi my Friend");
  }

  render() {
    const title = "Liste des Clients";

    return (
      <Card>
        <Typography variant="h3" align="center">
          {title}
        </Typography>
        <Button variant="contained" color="secondary" onClick={this.handleClick}>
          Click me
        </Button>
        {this.state.clients.map(client => (
          <List>
            <ListItem>
              {client.prenom} {client.nom}
              <Button variant="contained" color="secondary">
                x
              </Button>
            </ListItem>
          </List>
        ))}
        <FormGroup>
          <InputLabel htmlFor="my-input">Ajouter un client</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" type="text" />
          <Button variant="contained" color="secondary">
            Confirmer
          </Button>
        </FormGroup>
      </Card>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
