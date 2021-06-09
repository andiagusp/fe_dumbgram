import Navigation from '../components/Navigation';
import Sidebar from '../components/Sidebar';
import FeedContent from '../components/FeedContent';

export default function ProfilePeople() {
	return (
		<div>
			<Navigation titleNav="Zayn, Feed" />
			<Sidebar/>
			<FeedContent />
		</div>
	);
}
