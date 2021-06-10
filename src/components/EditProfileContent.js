import './css/EditProfileContent.css';
export default function EditProfileContent() {
	const handleFormEdit = (event) => event.preventDefault();

	return (
		<div className="editprofilecontent">
			<form onSubmit={ handleFormEdit }>
				<div className="epc-form-group">
					<button className="epc-btn-upv">Upload Photos</button>
				</div>
				<div className="epc-form-group">
					<input type="text" className="epc-form-input" placeholder="name"/>
				</div>
				<div className="epc-form-group">
					<input type="text" className="epc-form-input" placeholder="username"/>
				</div>
				<div className="epc-form-group">
					<textarea name="" id="" cols="30" rows="5" className="epc-textarea" placeholder="bio"></textarea>
				</div>
				<div className="epc-form-group">
					<button className="epc-btn-upload">Save</button>
				</div>
			</form>
		</div>
	);
}