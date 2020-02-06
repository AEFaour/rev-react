import React from "react";
import ReactDOM from "react-dom";
import {
    List,
    ListItem,
    Button
  } from "@material-ui/core";

class Client extends React.Component{

    render() {
        //const details = this.props.details; 
        //const onDelete = this.props.onDelete;

        const {details, onDelete} = this.props;
        
        return(
            <List>
            <ListItem>
              {details.prenom} {this.props.details.nom}
              <Button variant="contained" color="secondary" onClick={() => onDelete(details.id)}>
                x
              </Button>
            </ListItem>
          </List>
            );
    };
}

export default Client;