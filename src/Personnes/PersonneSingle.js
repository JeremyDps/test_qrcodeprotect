import React from 'react';

const PersonneSingle = (props) => {
    return (
        <div>
            <p>Nom: {props.nom}</p>
            <p>Prénom: {props.prenom}</p>
            <p>Age: {props.age}</p>
            <p>Genre: {props.sexe}</p>
            <button onClick={props.retour}>Revenir à la liste</button>
        </div>
    )
}

export default PersonneSingle;