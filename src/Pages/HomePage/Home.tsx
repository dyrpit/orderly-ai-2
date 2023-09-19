import { Category } from "../../Components";
import "./Home.css";

function Home() {
  const numberOfCategories = 6;

  const categoryComponents = [];
  for (let i = 0; i < numberOfCategories; i++) {
    categoryComponents.push(<Category key={i} />);
  }

  return <div className="categories">{categoryComponents}</div>;
}

export default Home;