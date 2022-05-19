import { Link } from 'react-router-dom';
import './InitialScreen.scss';
import kitchen from '../../../assets/images/kitchen.jpg';

export const InitialScreen = () => {
  return (
    <div className="hall">
      <img className="backgroundImg" src={kitchen} width="100%" height="100%" />
      {/* <Link className="startGame" to="/">
        BACK
      </Link> */}
    </div>
  );
};
