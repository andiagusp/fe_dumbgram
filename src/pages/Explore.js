import Navigation from '../components/Navigation';
import Sidebar from '../components/Sidebar';
import ExploreContent from '../components/ExploreContent';
import './css/Explore.css';

export default function Feed() {
	return(
		<div className="explore">
			<Navigation titleNav="Explore" />
			<Sidebar />
			<ExploreContent />
		</div>
	);
}