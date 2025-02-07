/* eslint-disable react/prop-types */
function ActorCard({ actor, handleGetMoreDetails }) {
	return (
		<div className='actor-card'>
			<h2>{actor.name}</h2>
			<p>Popularité: {actor.popularity}</p>
			{actor.profile_path ? (
				<img
					src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
					alt={actor.name}
				/>
			) : null}
			<h3>Films connus:</h3>
			<ul className='actor-knowfor'>
				{actor.known_for.map((movie) => (
					<li key={movie.id}>
						<h4>{movie.title}</h4>
						{movie.poster_path ? (
							<img
								onClick={async () => {
									handleGetMoreDetails(movie);
								}}
								src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
								alt={movie.title}
							/>
						) : null}
						<p>Date de sortie: {movie.release_date}</p>
					</li>
				))}
			</ul>
		</div>
	);
}

export default ActorCard;
