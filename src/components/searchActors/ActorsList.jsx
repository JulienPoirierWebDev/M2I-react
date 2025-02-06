import { useState } from 'react';
import ActorCard from './ActorCard';

function ActorsList() {
	// Créer un input et un label "Rechercher une personne"
	// Stocker cette donnée dans un useState
	// Afficher dans un paragraphe : "Vous recherchez actuellement Keanu Reeves"
	const [personne, setPersonne] = useState('');
	const [result, setResult] = useState([]);

	const rechercherDesPersonnes = async () => {
		const response = await fetch(
			`https://movies-api.julienpoirier-webdev.com/search/actors/${personne}`
		);

		const data = await response.json();

		console.log(data);
		setResult(data.results);
	};

	return (
		<div>
			<div>
				<label htmlFor='personne'>Recherche une personne</label>
				<input
					type='text'
					id='personne'
					name='personne'
					onChange={(event) => {
						setPersonne(event.target.value);
					}}
				/>
				<button onClick={rechercherDesPersonnes}>Rechercher</button>
			</div>

			<p>Vous recherchez : {personne}</p>
			{result.map((oneActor) => {
				return <ActorCard key={oneActor.id} actor={oneActor} />;
			})}
		</div>
	);
}

export default ActorsList;
