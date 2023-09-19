import { CategoryBoxContainer, CategoryBoxContent } from "./CategoryBox.style";
import { Link } from "react-router-dom";

export function Category(){
    return(
            
            <Link to="/Products"> 
                <CategoryBoxContainer>
                    <CategoryBoxContent>
                        <div className="Tittle"></div>
                        <div className="Desc"></div>
                    </CategoryBoxContent>
                </CategoryBoxContainer>
            </Link>
    )
}

