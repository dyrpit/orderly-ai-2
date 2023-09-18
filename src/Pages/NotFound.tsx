import notFoundImage from './404.jpg';

const NotFound = () => {
  return (
    <div>
      <img src={notFoundImage}/>
    </div>
  );
};

export default NotFound;