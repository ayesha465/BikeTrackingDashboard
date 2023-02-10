import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import MDBox from "components/MDBox";
function PageLayout({ background, children }) {
  const { pathname } = useLocation();
  useEffect(() => {
  }, [pathname]);

  return (
    <MDBox
      width="100vw"
      height="100%"
      minHeight="100vh"
      bgColor={background}
      sx={{ overflowX: "hidden" }}
    >
      {children}
    </MDBox>
  );
}

// Setting default values for the props for PageLayout
PageLayout.defaultProps = {
  background: "dark",
};

// Typechecking props for the PageLayout
PageLayout.propTypes = {
  background: PropTypes.oneOf(["dark", "default"]),
  children: PropTypes.node.isRequired,
};

export default PageLayout;
