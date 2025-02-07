/* eslint-disable react/prop-types */
function Details({ details, setDetails }) {
	console.log('RENDER DETAILS');

	return (
		<div className='details'>
			<button
				onClick={() => {
					setDetails(null);
				}}
			>
				X
			</button>
			Voici les infos sur le film en question :
			<div>
				<h3>{details.title}</h3>
				<p>{details.overview}</p>
				<p>{details.budget}</p>
				<p>{details.revenue}</p>
			</div>
		</div>
	);
}

export default Details;
