import axios from 'axios';
import React from 'react';

class FormulaireAjout extends React.Component {

    state = {
        nom: null,
        prenom: null,
        age: null,
        telephone: null,
        poste: null,
        sexe: null        
    }

    createClient(newClient) {
        return axios.post('https://testapi.io/api/qrcodeprotect/resource/clients',newClient);
    }

    ajouter() {
        console.log("ajouté");
        this.createClient(this.state);
    }

    render() {
        return (
            <>
                <div>Ajouter un nouveau client</div>
                <form>
                    <div>
                        <label htmlFor="nom">nom</label>
                        <input 
                            type="text" 
                            required 
                            placeholder="Duchmol" 
                            id="nom" 
                            onChange={(e) => {this.setState({nom: e.target.value})}}
                            />
                    </div>
                    <div>
                        <label htmlFor="prenom">Prénom</label>
                        <input 
                            type="text" 
                            required 
                            placeholder="Xavier" 
                            id="prenom"
                            onChange={(e) => {this.setState({prenom: e.target.value})}}
                            />
                    </div>
                    <div>
                        <label htmlFor="age">Age</label>
                        <input 
                            type="number" 
                            required 
                            id="age"
                            onChange={(e) => {this.setState({age: parseInt(e.target.value)})}}
                            />
                    </div>
                    <div>
                        <label htmlFor="telephone">Téléphone</label>
                        <input 
                            type="text" 
                            required 
                            placeholder="07XXXXXXXX" 
                            id="telephone"
                            onChange={(e) => {this.setState({telephone: e.target.value})}}
                            />
                    </div>
                    <div>
                        <label htmlFor="poste">poste</label>
                        <input 
                            type="text" 
                            required 
                            id="poste"
                            onChange={(e) => {this.setState({poste: e.target.value})}}
                            />
                    </div>
                    <div>
                        <label htmlFor="genre">Genre</label>
                        <input 
                            type="text" 
                            required 
                            id="genre"
                            onChange={(e) => {this.setState({sexe: e.target.value})}}
                            />
                    </div>
                    <div>
                        <button onClick={(e) => {e.preventDefault(); this.ajouter()}}>Créer</button>
                    </div>
                
                </form>
            </>
        )
    }
}

export default FormulaireAjout;