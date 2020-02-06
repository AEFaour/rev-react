import React, {useState} from "react";


const Form = ({onAdd}) => {
  const [nouveauClient, setNouveauClient] = useState("");  

  const handleChange = event => {

    setNouveauClient(event.currentTarget.value);
    
  };

  const handleSubmit = event => {
    event.preventDefault();
    const id = new Date().getTime();
    const nom = nouveauClient;
    onAdd({id, nom});
    setNouveauClient("");
  };

    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ajouter un client"
          value={nouveauClient}
          onChange={handleChange}
        />
        <button>Confirmer</button>
      </form>
    );
  
}

export default Form;
