import { useParams } from 'react-router-dom';
import MessageComing from '../img/notifmessage1.png';
import MessageSend from '../img/notifmessage1.png';
import './css/MessageContent.css';

export default function MessageContent(){
	const { uid } = useParams();
	const handleFormSend = (event) => event.preventDefault();
	
	return uid ? (
		<div className="messagecontent">
			<section className="mc-chatting-body">
				<div className="mc-message-incomming">
					<img src={ MessageComing } alt="incoming"/>
					<span className="mc-text-incomming">Hello Lisa Lorem ipsum dolor, sit amet consectetur adipisicing, elit. Fuga animi itaque accusantium esse, pariatur voluptas commodi, tenetur unde neque ea minima iure rerum quisquam fugiat velit molestiae repellat ipsum quia!</span>
				</div>
				<div className="mc-message-outgoing">
					<img src={ MessageComing } className="mc-img-outgoing" alt="outgoing"/>
					<span className="mc-text-outgoing">Hello Egi Lorem ipsum dolor, sit amet consectetur adipisicing, elit. Fuga animi itaque accusantium esse, pariatur voluptas commodi, tenetur unde neque ea minima iure rerum quisquam fugiat velit molestiae repellat ipsum quia!</span>
				</div>
				<div className="mc-message-incomming">
					<img src={ MessageComing } alt="incoming"/>
					<span className="mc-text-incomming">Hello Lisa Lorem ipsum dolor, sit amet consectetur adipisicing, elit. Fuga animi itaque accusantium esse, pariatur voluptas commodi, tenetur unde neque ea minima iure rerum quisquam fugiat velit molestiae repellat ipsum quia!</span>
				</div>
				<div className="mc-message-outgoing">
					<img src={ MessageComing } className="mc-img-outgoing" alt="outgoing"/>
					<span className="mc-text-outgoing">Hello Egi Lorem ipsum dolor, sit amet consectetur adipisicing, elit. Fuga animi itaque accusantium esse, pariatur voluptas commodi, tenetur unde neque ea minima iure rerum quisquam fugiat velit molestiae repellat ipsum quia!</span>
				</div>
			</section>
			<section className="mc-form-send">
				<form onSubmit={ handleFormSend }>
					<input type="text" className="mc-input-send" />
				</form>
			</section>
		</div>
	) : (
		<div className="messagecontent">
			<h1 className="mc-no-msg">No Message</h1>
		</div>
	);
}
