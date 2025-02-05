import styles from './MenuItem.module.css';

// eslint-disable-next-line react/prop-types
function MenuItem({ href, content }) {
	return (
		<li>
			<a className={styles.link} href={href}>
				{content}
			</a>
		</li>
	);
}

export default MenuItem;
