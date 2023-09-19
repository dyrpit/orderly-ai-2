import { useLocation } from "react-router-dom";
import {
  BreadcrumbsContainer,
  CrumbContainer,
  StyledLink,
} from "./Breadcrumbs.styles";

export default function Breadcrumbs() {
  const location = useLocation();
  const crumbs = location.pathname.split("/").filter((crumb) => crumb !== "");

  const breadcrumbElements = crumbs.map((crumb, index) => {
    const path = `/${crumbs.slice(0, index + 1).join("/")}`;
    const isLastCrumb = index === crumbs.length - 1;

    return (
      <CrumbContainer key={crumb}>
        {isLastCrumb ? (
          <span>{crumb}</span>
        ) : (
          <StyledLink to={path}>{crumb} {" > "}</StyledLink>
        )}
      </CrumbContainer>
    );
  });

  return (
    <BreadcrumbsContainer>
      <CrumbContainer>
        <StyledLink to="/">Home {" > "}</StyledLink>
      </CrumbContainer>
      {breadcrumbElements}
    </BreadcrumbsContainer>
  );
}
