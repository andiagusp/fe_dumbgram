import { Link } from 'react-router-dom';
import DumbGramIcon from '../img/DumbGramIcon.png';
import NM1 from '../img/notifmessage1.png';
import NM2 from '../img/notifmessage2.png';
import './css/SidebarMessage.css';

export default function SidebarMessage(){
	return (
		<div className="sidebarmessage">
			<header className="sm-header">
				<Link to="/feed"><img src={ DumbGramIcon } alt="dumbgram-ico"/></Link>
			</header>
			<div className="sm-list-message">
				<section className="sm-message">
					<img src={ NM1 } alt="notifmessage1"/>
					<span className="sm-name">egi_lol</span>
					<p className="sm-text-message">Hello Lisa</p>
				</section>
				<section className="sm-message">
					<img src={ NM2 } alt="notifmessage2"/>
					<span className="sm-name">beach_lover</span>
					<p className="sm-text-message">Hello Lisa, when do you go to the beach</p>
				</section>
			</div>
		</div>
	);
}