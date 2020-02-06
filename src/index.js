import React, { useState } from "react";
import ReactDOM from "react-dom";
import Client from "./Client";
import Form from "./Form";
import { Typography, Card } from "@material-ui/core";

const App = () => {
  const [clients, setClients] = useState([
    { id: 1, nom: "Guerout", prenom: "Violette" },
    { id: 2, nom: "Faour", prenom: "Anas" },
    { id: 3, nom: "Du Chars", prenom: "Natacha" }
  ]);

  const handleDelete = id => {
    const updatedClients = [...clients];
    const index = updatedClients.findIndex(client => client.id === id);
    updatedClients.splice(index, 1);

    setClients(updatedClients);
  };

  const handleAdd = client => {
    const addedClients = [...clients];
    addedClients.push(client);
    setClients(addedClients);
  };

  const title = "Liste des Clients";

  return (
    <Card>
      <Typography variant="h3" align="center">
        {title}
      </Typography>

      {clients.map(client => (
        <Client details={client} onDelete={handleDelete} />
      ))}
      <Form onAdd={handleAdd} />
    </Card>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
