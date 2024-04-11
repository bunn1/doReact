import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = (props) => {
  const { loggedIn, email, setLoggedIn } = props;

  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (loggedIn) {
      setLoggedIn(false);
    } else {
      // if user not logged in
      navigate('/login');
    }
  };

  return (
    <div className="mainContainer">
      <div className={'titleContainer'}>
        <h1>Welcome to the To Do App!</h1>
      </div>

      <div className={'buttonContainer'}>
        <input
          className={'inputButton'}
          type="button"
          onClick={handleButtonClick}
          value={'To Do App Log In'}
        />
        {loggedIn ? <div>Your email address is {email}</div> : <div />}
      </div>
    </div>
  );
};

export default Home;
