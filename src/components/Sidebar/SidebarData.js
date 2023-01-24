import arrowup from "../../assets/arrowup.svg";
import dashboard from "../../assets/sidebar/dashboard.svg";
import profile from "../../assets/sidebar/profile.svg";
import setting from "../../assets/sidebar/setting.svg";
import floors from "../../assets/sidebar/floors.svg";
export const SidebarData = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: dashboard,
    iconOpened: arrowup,

    subNav: [
      {
        title: "Building Summary",
        path: "/dashboard",
      },
      {
        title: "Space Summary",
        path: "/dashboard",
      },
      {
        title: "Energy",
        path: "/dashboard",
      },
      {
        title: "Floor Plan",
        path: "/dashboard",
      },
      {
        title: "Assets",
        path: "/dashboard",
      },
      {
        title: "Fault",
        path: "/dashboard",
      },
      {
        title: "Tickets",
        path: "/dashboard",
      },
      {
        title: "Reports",
        path: "/dashboard",
      },
    ],
  },

  // {
  //   title: "Profile",
  //   path: "/profile",
  //   icon: profile,
  // },
  {
    title: "Settings",
    path: "/dashboard",
    icon: setting,
  },

  {
    title: "Floors",
    path: "/dashboard",
    icon: floors,
    iconOpened: arrowup,

    subNav: [
      {
        title: "Ground Floor",
        path: "/dashboard",
      },
      {
        title: "First Floor",
        path: "/dashboard",
      },
      {
        title: "Second Floor",
        path: "/dashboard",
      },
      {
        title: "Third Floor",
        path: "/dashboard",
      },
      {
        title: "Fourth Floor",
        path: "/dashboard",
      },
      {
        title: "Fifth Floor",
        path: "/dashboard",
      },
      {
        title: "Sixth Floor",
        path: "/dashboard",
      },
    ],
  },
];
