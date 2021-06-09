import Navigation from '../components/Navigation';
import Sidebar from '../components/Sidebar';
import FeedContent from '../components/FeedContent';

export default function Feed() {
	return(
		<div className="feed">
			<Navigation/>
			<Sidebar />
			<FeedContent />
		</div>
	);
}