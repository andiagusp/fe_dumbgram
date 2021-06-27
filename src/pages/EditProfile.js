import { useState } from 'react';
import Navigation from '../components/Navigation';
import Sidebar from '../components/Sidebar';
import EditProfileContent from '../components/EditProfileContent';
import './css/EditProfile.css';

export default function EditProfile() {
	const [change, setChange] = useState();

	return(
		<div className="editprofile">
			<Navigation titleNav="Edit Profile" />
			<Sidebar change={ change } />
			<EditProfileContent setChange={ setChange } />
		</div>
	);
}