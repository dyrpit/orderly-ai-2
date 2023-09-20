import './NotFound.css';
import error from './error.png'

export const NotFound = () => {
  return (
    <div className='error'>
      <h1>What are you looking for?</h1>
      <img src={error} alt="error"/>
    </div>
  );
};
