import Reac, {useContext} from 'react';
import goblin from '../img/goblin.jpg';
import selfie from "../img/selfie.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode,
  faHiking,
  faMountainSun,
  faPalette,
  faSeedling,
} from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../context/UserProvider';

export default function Home() {
  const { toggle } = useContext(UserContext);
  return (
    <div className='home-wrapper'>
      {!selfie ? 
        <h2>loading...</h2> :
        <>
        <img className={`pfp ${toggle ? 'minimize' : ""}`} src={selfie} alt='photo of me' />
      <span className='home-welcome'>
        <h2>
          hey there, i'm aloe <FontAwesomeIcon icon={faSeedling} />
        </h2>
        <h3>(they/them)</h3>
        <h4>software developer</h4>
        <p>artist • climber • backpacker</p>
        <h2 className='home-icons'>
          <FontAwesomeIcon className='icon' icon={faCode} />{' '}
          <FontAwesomeIcon className='icon' icon={faPalette} />{' '}
          <FontAwesomeIcon className='icon' icon={faMountainSun} />{' '}
          <FontAwesomeIcon className='icon' icon={faHiking} />
        </h2>
      </span></>
      }
    </div>
  );
}
