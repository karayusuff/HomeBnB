import { NavLink } from 'react-router-dom';
import './CreateSpotButton.css';

const CreateSpotButton = () => {
  return (
    <NavLink to="/spots/new" id="create-spot-button">
      Create a New Spot
    </NavLink>
  );
};

export default CreateSpotButton;
