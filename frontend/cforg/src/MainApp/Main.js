import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {AppBar, Tab, Tabs} from "@material-ui/core";
import TabPanel from './TabPanel';
import DonorTable from "./DonorTable";
import donorData from "./donorData";
import TagsPage from "./Tags/TagsPage";
import EventPage from "../components/EventPage";
import EventDetailPage from "../components/EventDetailPage";
import GraphPage from "../components/GraphPage";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function SimpleTabs() {

  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Donors" {...a11yProps(0)} />
          <Tab label="Events" {...a11yProps(1)} />
          <Tab label="Tags" {...a11yProps(2)} />
          <Tab label="Graph" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <DonorTable data={donorData}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <EventPage />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <TagsPage/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <GraphPage/>
      </TabPanel>
    </div>
  );
}
