import Dashboard from "layouts/dashboard";
import Account from "layouts/Account";
import Device from "layouts/Device";
import Theft from "layouts/Theft";
import Tracking from "layouts/GPS tracking";
// import Notification from "layouts/notifications";
// @mui icons
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Account management",
    key: "Account management",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/Account",
    component: <Account />,
  },
  {
    type: "collapse",
    name: "Device Mnagement",
    key: "Device",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/Device",
    component: <Device />,
  },
  {
    type: "collapse",
    name: "Theft Management",
    key: "Theft",
    icon: <Icon fontSize="small">format_textdirection_r_to_l</Icon>,
    route: "/Theft",
    component: <Theft />,
  },
  {
    type: "collapse",
    name: "GPS Tracking Management",
    key: "tracking",
    icon: <Icon fontSize="small">format_textdirection_r_to_l</Icon>,
    route: "/Tracking",
    component: <Tracking />,
  },
  {
    type: "collapse",
    name: "Notifications",
    key: "notifications",
    icon: <Icon fontSize="small">notifications</Icon>,
    route: "/dashboard",
    component: <dashboard />,
  },
];

export default routes;
