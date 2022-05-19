import { Link } from 'react-router-dom';

export const InitialScreen = () => {
  return (
    <>
      <div className="Title">Initial screen</div>
      <Link className="startGame" to="/">
        BACK
      </Link>
    </>
  );
};
