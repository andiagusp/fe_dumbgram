import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../components/Navigation';
import SidebarPeople from '../components/SidebarPeople';
import FeedContentPeople from '../components/FeedContentPeople';

import '../components/css/FeedContentPeople.css';

export default function ProfilePeople() {
	const { uid } = useParams();
	const [name, setName] = useState('');
	const [uuid, setUuid] = useState(uid);
	console.log(setUuid)
	return (
		<div>
			<Navigation name={ name } setUid={ setUuid } />
			<SidebarPeople uid={ uid } setName={ setName } />
			<FeedContentPeople uid={ uid } />
		</div>
	);
}
