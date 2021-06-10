import Navigation from '../components/Navigation';
import SidebarMessage from '../components/SidebarMessage';
import MessageContent from '../components/MessageContent';

import './css/Message.css';

export default function Message() {
	return (
		<div className="message">
			<Navigation titleNav="message"/>
			<SidebarMessage />
			<MessageContent/>
		</div>
	);
}