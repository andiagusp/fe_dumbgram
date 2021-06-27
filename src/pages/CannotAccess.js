import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default function CannotAccess(){
	const route = useHistory();
	const style= {
		position: 'fixed',
		backgroundColor: 'black',
		color: 'white',
		fontSize: '50px',
		textAlign: 'center',
		top: 0,
		right: 0,
		bottom: 0,
		left: 0
	}

	useEffect(() => {
		setTimeout(() => {
			route.push('/');
		}, 1000);
	}, []);

	return (
		<div style={ style }>
			<h1>Cannot Access This Page</h1>
		</div>
	);
}