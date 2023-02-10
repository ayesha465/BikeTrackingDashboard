import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
// import DataTable from "examples/Tables/DataTable";

// import authorsTableData from "layouts/tables/data/authorsTableData";

function Tracking() {
  // const { columns, rows } = authorsTableData();
  // const { columns: pColumns, rows: pRows } = projectsTableData();

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={8} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={2}>
            <Card>
              <MDBox
                mx={1}
                mt={-3}
                py={4}
                px={1}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Track Exact location
                </MDTypography>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <MDBox pt={12} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={2}>
            <Card>
              <MDBox
                mx={1}
                mt={-3}
                py={4}
                px={1}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Speed information
                </MDTypography>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <MDBox pt={12} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={2}>
            <Card>
              <MDBox
                mx={1}
                mt={-3}
                py={4}
                px={1}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Fuel Consumption
                </MDTypography>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <MDBox pt={12} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={2}>
            <Card>
              <MDBox
                mx={1}
                mt={-3}
                py={4}
                px={1}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Map
                </MDTypography>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <MDBox pt={12} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={2}>
            <Card>
              <MDBox
                mx={1}
                mt={-3}
                py={4}
                px={1}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Health
                </MDTypography>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <MDBox pt={14} pb={1}>
        <Grid container spacing={6}>
          <Grid item xs={2}>
            <Card>
              <MDBox
                mx={1}
                mt={-3}
                py={4}
                px={1}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Notification
                </MDTypography>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tracking;
