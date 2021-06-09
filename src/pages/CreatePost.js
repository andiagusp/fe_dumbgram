import Navigation from '../components/Navigation';
import Sidebar from '../components/Sidebar';
import CreatePostContent from '../components/CreatePostContent';

export default function CreatePost() {
	return (
		<div className="createpost">
			<Navigation titleNav="Create Post" />
			<Sidebar/>
			<CreatePostContent />
		</div>
	);
}