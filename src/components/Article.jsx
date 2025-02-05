/* eslint-disable react/prop-types */
function Article({ title, children }) {
	return (
		<div>
			<h2>{title}</h2>

			<div>{children}</div>
		</div>
	);
}

export default Article;
