import Article from './components/Article';
import Menu from './components/Menu';
import Name from './components/Name';

//nom du composant avec une MAJ
function App() {
	//Partie logique
	const myName = 'Julien';

	const menu1 = [
		{
			href: '#',
			content: 'Accueil',
		},
		{
			href: '#recherche',
			content: 'Recherche',
		},
		{
			href: '#a-propos',
			content: 'A propos',
		},
	];

	const menu2 = [
		{
			href: '#facebook',
			content: 'Facebook',
		},
		{
			href: '#insta',
			content: 'Instagram',
		},
		{
			href: '#linkedin',
			content: 'LinkedIn',
		},
		{
			href: '#bluesky',
			content: 'Bluesky',
		},
		{
			href: '#x',
			content: 'X',
		},
		{
			href: '#youtube',
			content: 'Youtube',
		},
	];

	// JSX qui sera transformé en HTML
	return (
		<>
			<Menu links={menu1} />

			<p>
				Je suis un lien vers <a href='#'>un super site</a>
			</p>

			<Article title='blabla'>
				<Name name={myName} />
				<Name name='Tom' />
				<Name name='John' />
				<Name name='Jane' />
				<Name name='truc' />
				<Name name='machin' />
			</Article>

			<Article title='Super titre'>
				<h3>Super partie</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Possimus, sequi!
				</p>

				<h3>Yeah !</h3>
				<p>Lorem ipsum dolor sit amet.</p>
			</Article>
			<Article title='Exemple 2'>
				<p>Youhou</p>
				<p>Autre p</p>
			</Article>
			<Menu links={menu2} />
		</>
	);
}

export default App;
