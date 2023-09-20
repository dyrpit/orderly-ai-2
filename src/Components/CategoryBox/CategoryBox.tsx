import { CategoryBoxContainer, CategoryBoxContent } from "./CategoryBox.style";
import { Link } from "react-router-dom";

export function Category(){
    return(
            
            <Link to="/Products"> 
                <CategoryBoxContainer>
                    <CategoryBoxContent>
                        <div>123</div>
                    </CategoryBoxContent>
                </CategoryBoxContainer>
            </Link>
    )
}

