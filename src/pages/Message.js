import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../components/Navigation';
import SidebarMessage from '../components/SidebarMessage';
import MessageContent from '../components/MessageContent';

import './css/Message.css';

export default function Message() {
	const { uid } = useParams();
	const [name, setName] = useState('');
	const [uuid, setUuid] = useState(uid);
	
	return (
		<div className="message">
			<Navigation name={ name } setUid={ setUuid } />
			<SidebarMessage uid={ uuid } setUid={ setUuid } setName={ setName } />
			<MessageContent uid={ uuid } />
		</div>
	);
}