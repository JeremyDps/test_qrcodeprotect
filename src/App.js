import React from 'react';
import Personnes from './Personnes/Personnes';
import FormulaireAjout from './Formulaires/FormulaireAjout';
import axios from 'axios';
import PersonneSingle from './Personnes/PersonneSingle';

class App extends React.Component {

  // const axios = require('axios');
  state = {
    personnes: [],
    isAccueil: true
  }

  componentDidMount() {
    this.getClients(0);
  }

  getClients = (id = 0) =>{

    if(id === 0) {
        axios.get('https://testapi.io/api/qrcodeprotect/resource/clients')
        .then(reponse => {
            const personnesResponse = reponse.data.data.map(personne => {
              return {
                  id: personne.id,
                  nom: personne.nom,
                  prenom: personne.prenom,
                  age: personne.age,
                  telephone: personne.telephone,
                  sexe: personne.sexe
              }
            })
            this.setState({
              personnes: personnesResponse,
              isAccueil: true
            })
        })
        .catch(error => {
            console.log(error);
      })
  
    } else {
      axios.get(`https://testapi.io/api/qrcodeprotect/resource/clients/${id}`)
        .then(reponse => {
            const personnesResponse = Object.values(reponse.data)
            
            this.setState({
              personnes: personnesResponse,
              isAccueil: false
            })
        })
        .catch(error => {
            console.log(error);
      })
    }
  }

  deleteClient(id) {
    axios.delete(`https://testapi.io/api/qrcodeprotect/resource/clients/${id}`);
  }

  details(id){
    console.log("details de l'id " + id);
    this.getClients(id);
  }

  delete(id) {
    console.log("suppression de l'id " + id);
    this.deleteClient(id);
  }

  render() {
    return (
      <>

      {this.state.isAccueil
        && <FormulaireAjout />
      }
        
        {this.state.isAccueil
        &&
          this.state.personnes.map((pers) => {
            return <Personnes
              key={pers.id}
              nom={pers.nom}
              prenom={pers.prenom}
              detailsPersonne={() => {this.details(pers.id)}}
              supprimerPersonne={() => {this.delete(pers.id)}}
            />
          })
        }

        {!this.state.isAccueil
        && 
         <PersonneSingle
          id={this.state.personnes[6]}
          nom={this.state.personnes[0]}
          prenom={this.state.personnes[1]}
          age={this.state.personnes[2]}
          telephone={this.state.personnes[5]}
          sexe={this.state.personnes[3]}
          retour={() => {this.setState({isAccueil: true})}}
         />}
        
      </> 
    );
  }
  }

export default App;