import { useContext, useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { API } from '../config/api';
import { UserContext } from '../context/UserContext';
import './css/EditProfileContent.css';

export default function EditProfileContent(props) {
	const history = useHistory();
	const { setChange } = props;
	const [state, dispatch] = useContext(UserContext);
	const [isError, setError] = useState(false);
	const [message, setMessage] = useState();
	const [preview, setPreview] = useState();
	const [profile, setProfile] = useState({
		fullName: state.user.fullName,
		username: state.user.username,
		bio: state.user.bio,
		imageFile: ''
	});
	
	const handleFormEdit = async (event) => {
		try {
			event.preventDefault();
			let form = new FormData();
			if (profile.imageFile) {
				form.append('imageFile', profile.imageFile, profile.imageFile.name);
			}
			form.append('fullName', profile.fullName);
			form.append('username', profile.username);
			form.append('bio', profile.bio);
			const response = await API.patch(`/user/${state.user.id}`, form);
			setPreview('');
			setProfile({
				fullName: '',
				username: '',
				bio: '',
				imageFile: ''
			});
			getProfile();
		} catch (error) {
			setError(true);
			setMessage(error?.response.data.message);
			console.log(error?.response);
		}
	}

	const handleInputEdit = (event) => {
		setProfile({
			...profile,
			[event.target.name]: (event.target.type === 'file')? event.target.files[0] : event.target.value
		});
		console.log(profile)

		if (event.target.type === 'file') {
			const url = URL.createObjectURL(event.target.files[0]);
			console.log(event.target.files[0])
			setPreview(url);
		}
	}

	const getProfile = async () => {
		try {
			const token = localStorage.token;
			const response = await API.get('/cek-login');
			dispatch({
				type: 'login',
				payload: { ...response?.data?.data?.user, token }
			});
			setChange(response?.data?.data?.user);
			history.push('/feed');
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<div className="editprofilecontent">
			<form onSubmit={ handleFormEdit }>
				<div className="epc-form-group">
					{ (isError) && <Alert variant="success">{ message }</Alert> }
					<label className="epc-btn-upv">
						<input type="file" name="imageFile" onChange={ handleInputEdit } />
						Upload Photos
					</label>
					{ (preview) && <img src={ preview } alt="" /> }
				</div>
				<div className="epc-form-group">
					<input type="text" className="epc-form-input" name="fullName" onChange={ handleInputEdit } value={ profile.fullName } placeholder="name"/>
				</div>
				<div className="epc-form-group">
					<input type="text" className="epc-form-input" name="username" onChange={ handleInputEdit } value={ profile.username } placeholder="username"/>
				</div>
				<div className="epc-form-group">
					<textarea name="" id="" cols="30" rows="5" name="bio" onChange={ handleInputEdit } className="epc-textarea" value={ profile.bio } placeholder="bio"></textarea>
				</div>
				<div className="epc-form-group">
					<button className="epc-btn-upload">Save</button>
				</div>
			</form>
		</div>
	);
}