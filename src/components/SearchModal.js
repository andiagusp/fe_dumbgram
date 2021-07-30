import { Link, useHistory } from 'react-router-dom';
import './css/SearchModal.css';

export default function SearchModal(props) {
	const route = useHistory();
	const path = 'http://localhost:5000/uploads/';
	const currentPath = '/profile-people/';
	const { show, handleClose, data, input, setUid } = props;

	return show && (
		<div className="searchmodal">
			<div className="sm-overlay" onClick={ () => handleClose(!show) }></div>
			<div className="sm-body">
			<p className="sm-title">Search Result</p>
				{
					(data.length > 0) && data?.map((user) => {
						return (
							<div className="sm-wrapper" key={ user.id }>
								<div className="sm-rainbow">
									<Link to={ `/profile-people/${user.id}` }><img src={ path + user.image } alt="" /></Link>
								</div>
								<Link to={ `/profile-people/${user.id}` }><span className="sm-text">{ user.username }</span></Link>
							</div>
						)
					})
				}
				{ (data.length === 0) && <h4 style={{ textAlign: 'center' }}>No Result</h4> }
			</div>
		</div>
	);
}

