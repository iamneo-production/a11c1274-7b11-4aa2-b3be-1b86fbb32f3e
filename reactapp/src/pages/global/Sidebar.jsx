import React from 'react';
import { useState } from 'react';
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import FlagIcon from '@mui/icons-material/Flag';
import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy';
import HistoryIcon from '@mui/icons-material/History';
import AddIcon from '@mui/icons-material/Add';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PeopleIcon from '@mui/icons-material/People';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import PieChartIcon from '@mui/icons-material/PieChart';
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';
import { Button } from "reactstrap";
import { useEffect } from "react";
import { doLogout, isLoggedIn } from "../../auth";
import { useNavigate } from "react-router-dom";
import AddTaskIcon from '@mui/icons-material/AddTask';

const Item = ({ title, to, icon, selected, setSelected }) => {
  const handleUrlClick = (e, to) => {
    const currentUrl = window.location.href;
    console.log("redirecting url --> ", to);
    const targetUrl = to;

    if (currentUrl !== targetUrl) {
      // Redirect to the target URL
      window.location.href = targetUrl;
    }
  }
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} onClick={(e) => handleUrlClick(e, to)} />
    </MenuItem>
  );
};

const Sidebar = () => {
  let navigate = useNavigate()
  const dataString = localStorage.getItem('data');
  const data = JSON.parse(dataString);
  const userdto = data && data.userdto;
  const [login, setLogin] = useState(false)

  useEffect(() => {
    setLogin(isLoggedIn())
  }, [login])


  const logout = () => {
    doLogout(() => {
      //logged out
      setLogin(false)
      navigate("/")
    })
  }


  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("");


  return (
    <>
      {
        login && userdto.roles[0].id === 502 && (
          <Box
            sx={{
              "& .pro-sidebar-inner": {
                background: `${colors.redAccent[800]} !important`,
              },
              "& .pro-icon-wrapper": {
                backgroundColor: "transparent !important",
              },
              "& .pro-inner-item": {
                padding: "5px 35px 5px 20px !important",
              },
              "& .pro-inner-item:hover": {
                color: "#868dfb !important",
              },
              "& .pro-menu-item.active": {
                color: "#6870fa !important",
              },
            }}
          >

            <ProSidebar collapsed={isCollapsed}>
              <Menu iconShape="square">
                {/* LOGO AND MENU ICON */}
                <MenuItem
                  onClick={() => setIsCollapsed(!isCollapsed)}
                  icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                  style={{
                    margin: "10px 0 20px 0",
                    color: colors.grey[100],
                  }}
                >
                  {!isCollapsed && (
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      ml="15px"
                    >

                      <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                        <MenuOutlinedIcon />
                      </IconButton>
                    </Box>
                  )}
                </MenuItem>
                <Box paddingLeft={isCollapsed ? undefined : "10%"}>

                  <Item
                    title="Profile"
                    to="profile"
                    icon={<AccountCircleIcon />}
                    selected={selected}
                    setSelected={setSelected}
                  />


                  <Item
                    title="Dashboard"
                    to="dashboard"
                    icon={<HomeOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                  />

                  <Item
                    title="Workouts plan creator "
                    to="workoutsplan"
                    icon={<AddIcon />}
                    selected={selected}
                    setSelected={setSelected}
                  />

                  <Item
                    title="View workouts"
                    to="viewworkouts"
                    icon={<TimelineOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                  />
                  <Item
                    title="View Exercise "
                    to="viewexercises"
                    icon={<HistoryIcon />}
                    selected={selected}
                    setSelected={setSelected}
                  />
                  <Item
                    title="Track Exercises"
                    to="trackexercises"
                    icon={<FitnessCenterIcon />}
                    selected={selected}
                    setSelected={setSelected}
                  />

                  <Item
                    title="Workouts history"
                    to="workoutshistory"
                    icon={<WorkHistoryIcon />}
                    selected={selected}
                    setSelected={setSelected}
                  />
                  <Item
                    title="Goal setting"
                    to="goalsetting"
                    icon={<FlagIcon />}
                    selected={selected}
                    setSelected={setSelected}
                  />

                  <Item
                    title="Nutrition"
                    to="nutritionrecommendation"
                    icon={<LocalPharmacyIcon />}
                    selected={selected}
                    setSelected={setSelected}
                  />

                  
                  <Item
                    title="Pie Chart"
                    to="piechart"
                    icon={<PieChartIcon />}
                    selected={selected}
                    setSelected={setSelected}
                  />
                  <Item
                    title="Line graph"
                    to="linegraph"
                    icon={<StackedLineChartIcon />}
                    selected={selected}
                    setSelected={setSelected}
                  />

                  <Item
                    title="Workout Tutorials"
                    to="tutorial"
                    icon={<FitnessCenterIcon />}
                    selected={selected}
                    setSelected={setSelected}
                  />
                  <Item
                    title="Calculator"
                    to="calculators"
                    icon={<CalculateOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                  />
                   <Item
                    title="Challenges"
                    to="take-challenge"
                    icon={<AddTaskIcon />}
                    selected={selected}
                    setSelected={setSelected}
                  />



                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    mt="20px"
                  >
                    <Button
                      color="dark"
                      outline
                      onClick={logout}
                    >
                      Log Out
                    </Button>
                  </Box>
                </Box>
              </Menu>
            </ProSidebar>

          </Box>
        )
      }
      {
        login && userdto.roles[0].id === 501 && (
          <Box
            sx={{
              "& .pro-sidebar-inner": {
                background: `${colors.primary[400]} !important`,
              },
              "& .pro-icon-wrapper": {
                backgroundColor: "transparent !important",
              },
              "& .pro-inner-item": {
                padding: "5px 35px 5px 20px !important",
              },
              "& .pro-inner-item:hover": {
                color: "#868dfb !important",
              },
              "& .pro-menu-item.active": {
                color: "#6870fa !important",
              },
            }}
          >

            <ProSidebar collapsed={isCollapsed}>
              <Menu iconShape="square">
                {/* LOGO AND MENU ICON */}
                <MenuItem
                  onClick={() => setIsCollapsed(!isCollapsed)}
                  icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                  style={{
                    margin: "10px 0 20px 0",
                    color: colors.grey[100],
                  }}
                >
                  {!isCollapsed && (
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      ml="15px"
                    >

                      <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                        <MenuOutlinedIcon />
                      </IconButton>
                    </Box>
                  )}
                </MenuItem>
                

                <Box paddingLeft={isCollapsed ? undefined : "10%"}>



                  <Item
                    title="Admin Dashboard"
                    to="admindashboard"
                    icon={<HomeOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                  />


                  <Item
                    title="Operations"
                    to="ops"
                    icon={<PeopleIcon />}
                    selected={selected}
                    setSelected={setSelected}
                  />

                  <Item
                    title="Profile"
                    to="profile"
                    icon={<AccountCircleIcon />}
                    selected={selected}
                    setSelected={setSelected}
                  />
                  
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    mt="20px"
                  >
                    <Button
                      color="dark"
                      outline
                      onClick={logout}
                    >
                      Log Out
                    </Button>
                  </Box>
                </Box>
              </Menu>
            </ProSidebar>

          </Box>
        )
      }



    </>
  );
}







export default Sidebar
