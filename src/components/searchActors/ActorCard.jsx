import { act } from 'react';

/* eslint-disable react/prop-types */
function ActorCard({ actor }) {
	return (
		<div className='card'>
			<h2>{actor.name}</h2>
			<p>{actor.known_for_department}</p>

			{actor.profile_path ? (
				<img
					src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
					alt={actor.name}
				/>
			) : null}

			<div>
				{actor.known_for.map((oneMovie) => {
					return (
						<div className='movie' key={oneMovie.id}>
							<p>{oneMovie.title}</p>
							<img
								src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`}
								alt={oneMovie.title}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default ActorCard;
