import React from "react";
import { List, ListItem, Button } from "@material-ui/core";

const Client = ({ details, onDelete }) => (
      <List>
        <ListItem>
          {details.prenom} {details.nom}
          <Button
            variant="contained"
            color="secondary"
            onClick={() => onDelete(details.id)}
          >
            x
          </Button>
        </ListItem>
      </List>
    );

export default Client;
