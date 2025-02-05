/* eslint-disable react/prop-types */

function Name({ name = 'DEFAUT' }) {
	// Partie logique

	//Partie return
	return <p>Le nom de la personne est {name}.</p>;
}

export default Name;