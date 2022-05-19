import { Link } from 'react-router-dom';
import './InitialScreen.scss';

export const InitialScreen = () => {
  return (
    <div className="hall">
      <div className="Title">Initial screen</div>
      <Link className="startGame" to="/">
        BACK
      </Link>
    </div>
  );
};
