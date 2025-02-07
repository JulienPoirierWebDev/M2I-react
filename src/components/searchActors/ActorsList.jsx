import { useState } from 'react';
import ActorCard from './ActorCard';
import Details from './Details';

function ActorsList() {
	// Créer un input et un label "Rechercher une personne"
	// Stocker cette donnée dans un useState
	// Afficher dans un paragraphe : "Vous recherchez actuellement Keanu Reeves"
	const [personne, setPersonne] = useState('');
	const [result, setResult] = useState([]);
	const [details, setDetails] = useState(null);

	console.log('RENDER ACTORLIST');

	const rechercherDesPersonnes = async () => {
		const response = await fetch(
			`https://movies-api.julienpoirier-webdev.com/search/actors/${personne}`
		);

		const data = await response.json();

		console.log(data);
		setResult(data.results);
	};

	const handleGetMoreDetails = async (movie) => {
		try {
			const url =
				movie.media_type === 'movie'
					? `https://movies-api.julienpoirier-webdev.com/infos/movies/${movie.id}`
					: `https://movies-api.julienpoirier-webdev.com/infos/series/${movie.id}`;

			const response = await fetch(url);

			const data = await response.json();

			setDetails(data);
		} catch (error) {
			console.log(error);
		}
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

			{details ? (
				<Details details={details} setDetails={setDetails} />
			) : (
				<div className='actors-container'>
					{result.map((oneActor) => {
						return (
							<ActorCard
								key={oneActor.id}
								actor={oneActor}
								handleGetMoreDetails={handleGetMoreDetails}
							/>
						);
					})}
				</div>
			)}
		</div>
	);
}

export default ActorsList;
