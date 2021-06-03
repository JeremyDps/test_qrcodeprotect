import React from 'react';

const Personnes = (props) => {
    return (
        <>
            <div>
                <p>{props.nom} {props.prenom}</p>
                <button onClick={props.detailsPersonne}>Details</button>
                <button onClick={props.supprimerPersonne}>Supprimer</button>
            </div>
        </>
    )
}

export default Personnes;