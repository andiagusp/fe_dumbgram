import { useState, useEffect } from 'react';
import { API } from '../config/api'; 
import './css/ExploreContent.css';

export default function ExploreContent() {
	const path = 'http://localhost:5000/uploads/';
	const [explores, setExplores] = useState();

	const getAllFeeds = async () => {
		try {
			const response = await API.get('/feeds');
			console.log(response?.data?.data?.feeds);
			setExplores(response?.data?.data?.feeds);
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		getAllFeeds();
	}, []);

	return (
		<main className="explorecontent">
			<div className="e-image-explore">
				{
					explores?.map((explore) => (
						<div className="e-card-image" key={ explore?.id }>
							<img src={ `${path}${explore.fileName}` } className="e-img" alt="" />
						</div>
					))
				}
			</div>
		</main>
	)
}