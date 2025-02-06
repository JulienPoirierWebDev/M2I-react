import { useState } from 'react';

function AskName() {
	console.log('ASKNAME RENDER');
	const [message, setMessage] = useState('Coucou');

	return (
		<>
			<div>
				<label htmlFor='inputMessage'>Quel est votre nom</label>
				<input
					onChange={(event) => {
						console.log(event.target.value);
						setMessage(event.target.value);
					}}
					type='text'
					id='inputMessage'
					name='inpuMessage'
				/>
			</div>

			{message === '' ? (
				<h1>Vous êtes un étranger</h1>
			) : (
				<h1>Votre nom est {message}</h1>
			)}
		</>
	);
}

export default AskName;
