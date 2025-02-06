import result from '../../result';
import ActorCard from './ActorCard';

function ActorsList() {
	return (
		<div>
			{result.map((oneActor) => {
				return <ActorCard key={oneActor.id} actor={oneActor} />;
			})}
		</div>
	);
}

export default ActorsList;
