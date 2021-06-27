import { Link } from 'react-router-dom';
import './css/SearchModal.css';

export default function SearchModal(props) {
	const path = 'http://localhost:5000/uploads/';
	const { show, handleClose, data, input, setUid } = props;
	console.log(setUid)
	return show && (
		<div className="searchmodal">
			<div className="sm-overlay" onClick={ () => handleClose(!show) }></div>
			<div className="sm-body">
			<p className="sm-title">Search Result</p>
				{
					(data.length > 0) && data?.map((user) => (
						<div className="sm-wrapper" key={ user.id }>
								<div className="sm-rainbow">
									<Link to={ `/profile-people/${user.id}` } onClick={ () => setUid(user?.id) }><img src={ path + user.image } alt="" /></Link>
								</div>
								<Link to={ `/profile-people/${user.id}` } onClick={ () => setUid(user?.id) }><span className="sm-text">{ user.username }</span></Link>
						</div>
					))
				}
				{ (data.length === 0) && <h4 style={{ textAlign: 'center' }}>No Result</h4> }
			</div>
		</div>
	);
}

