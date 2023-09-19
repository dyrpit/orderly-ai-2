import { Category } from "../../Components";
import "./Home.css";
import categoriesData from "./categories.json";

function Home() {

  const categoryComponents = categoriesData.map((category, index) => (
    <Category key={index} title={category.title} description={category.description} />
  ));

  return <div className="categories">{categoryComponents}</div>;
}

export default Home;
