import { useLocation } from "react-router-dom";
import { BreadcrumbsContainer, CrumbContainer, StyledLink } from "./Breadcrumbs.styles";

export function Breadcrumbs() {
  const location = useLocation();
  const crumbs = decodeURIComponent(location.pathname)
    .split("/")
    .filter((crumb) => crumb !== "");

  const breadcrumbElements = crumbs.map((crumb, index) => {
    const path = `/${crumbs.slice(0, index + 1).join("/")}`;
    const isLastCrumb = index === crumbs.length - 1;

    return (
      <CrumbContainer key={crumb}>
        {isLastCrumb ? (
          <span>{crumb}</span>
        ) : (
          <StyledLink to={path}>
            {crumb} {" > "}&nbsp;
          </StyledLink>
        )}
      </CrumbContainer>
    );
  });

  return (
    <BreadcrumbsContainer>
      <CrumbContainer>
        <StyledLink to="/">Home &nbsp;{" > "}&nbsp;</StyledLink>
      </CrumbContainer>
      {breadcrumbElements}
    </BreadcrumbsContainer>
  );
}
