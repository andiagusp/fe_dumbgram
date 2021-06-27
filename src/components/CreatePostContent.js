import { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { API } from '../config/api';
import './css/CreatePostContent.css';

export default function ExploreContent() {
	const [input, setInput] = useState({ caption: '', imageFile: '' });
	const [isSuccess, setSuccess] = useState(false);
	const [preview, setPreview] = useState();
	

	const handleFormUpload = async (event) => {
		try {
			event.preventDefault();
			const form = new FormData();
			form.append('imageFile', input.imageFile, input.imageFile.name);
			form.append('caption', input.caption);
			const response = await API.post('/feed', form);
			console.log(response?.data);
			if (response?.data?.status === 'success') {
				setSuccess(true);
				setTimeout(() => setSuccess(false), 5000);
			}
			setInput({ caption: '', imageFile: '' });
			setPreview();
		} catch (error) {
			console.log(error?.response);
		}
	}

	const handleInputForm = (event) => {
		setInput({
			...input,
			[event.target.name]: (event.target.type === 'file') ? event.target.files[0] : event.target.value
		});
		if (event.target.type === 'file') {
			const url = URL.createObjectURL(event.target.files[0]);
			console.log(event.target.files[0])
			setPreview(url);
		}
	}

	return(
		<div className="createpostcontent">
			{ (isSuccess) &&
				<Alert variant="success" style={{ width: '97%' }}>
	    		Success Upload Foto
	  		</Alert>
			}
			<form onSubmit={ handleFormUpload }>
				<div className="cpc-form-group">
					<label className="cpc-btn-upv pointer">
						Upload Photo or Video
						<input type="file" name="imageFile" onChange={ handleInputForm } />
					</label>
				</div>
				{ (preview) && <img src={ preview } className="cp-preview" alt="" /> }
				<div className="cpc-form-group">
					<textarea name="caption" cols="30" rows="5" onChange={ handleInputForm } value={ input.caption } placeholder="Caption" className="cpc-textarea"></textarea>
				</div>
				<div className="cpc-form-group">
					<button className="cpc-btn-upload">Upload</button>
				</div>
			</form>
		</div>
	);
}