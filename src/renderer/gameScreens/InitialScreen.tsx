import { Link } from 'react-router-dom';
import './InitialScreen.scss';
import kitchen from '../../../assets/images/kitchen.jpg';

const { innerWidth: width, innerHeight: height } = window;
export const countCoords = (coords: number[]) => {
  const res = [];
  res.push(Math.floor((coords[0] / 100) * width));
  res.push(Math.floor((coords[1] / 100) * height));
  res.push(Math.floor((coords[2] / 100) * width));
  res.push(Math.floor((coords[3] / 100) * height));

  console.log(res.toString());
  return res.toString();
};

export const InitialScreen = () => {
  return (
    <div className="hall">
      <img
        className="backgroundImg"
        useMap="#kitchen"
        src={kitchen}
        width={width}
        height={height}
      />
      <map name="kitchen">
        <area
          shape="rect"
          coords={countCoords([48, 52, 61, 80])}
          alt="Computer"
          href="/"
        />
        {/* <area
          shape="rect"
          coords={countCoords([1, 20, 1, 20])}
          alt="Computer"
          href="/"
        /> */}
      </map>
      {/* <Link className="startGame" to="/">
        BACK
      </Link> */}
    </div>
  );
};
