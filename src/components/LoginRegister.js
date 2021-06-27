import LoginForm from './LoginRegister/LoginForm';
import RegisterForm from './LoginRegister/RegisterForm';
import './css/RegisterLogin.css';

export default function LoginRegister(props) {
  const { show, nameModal, handleClose, handleChangeModal } = props;
  let modal = null;

  if (nameModal === 'register') {
   modal = (
    <RegisterForm
      handleClose={ handleClose }
      handleChangeModal={ handleChangeModal }
    />
   );
  }

  if (nameModal === 'login') {
    modal = (
      <LoginForm
        handleClose={ handleClose }
        handleChangeModal={ handleChangeModal }
      />
    );
  }
  return show && modal;
}
