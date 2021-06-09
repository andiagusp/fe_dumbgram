import Navigation from '../components/Navigation';
import Sidebar from '../components/Sidebar';
import FeedContent from '../components/FeedContent';
import './css/Feed.css';

export default function Feed() {
	return(
		<div className="feed">
			<Navigation titleNav="Feed" />
			<Sidebar />
			<FeedContent />
		</div>
	);
}