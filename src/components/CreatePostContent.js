import './css/CreatePostContent.css';
export default function ExploreContent() {
	const handleFormUpload = (event) => event.preventDefault();
	return(
		<div className="createpostcontent">
			<form onSubmit={ handleFormUpload }>
				<div className="cpc-form-group">
					<button className="cpc-btn-upv">Upload Photos or Video</button>
				</div>
				<div className="cpc-form-group">
					<textarea name="" id="" cols="30" rows="10" className="cpc-textarea"></textarea>
				</div>
				<div className="cpc-form-group">
					<button className="cpc-btn-upload">Upload</button>
				</div>
			</form>
		</div>
	);
}