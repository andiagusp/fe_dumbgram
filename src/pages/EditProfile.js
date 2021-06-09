import Navigation from '../components/Navigation';
import Sidebar from '../components/Sidebar';
import EditProfileContent from '../components/EditProfileContent';
import './css/EditProfile.css';

export default function EditProfile() {
	return(
		<div className="editprofile">
			<Navigation titleNav="Edit Profile" />
			<Sidebar />
			<EditProfileContent />
		</div>
	);
}