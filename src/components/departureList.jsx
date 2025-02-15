import React from 'react';
import { sortBy } from 'lodash';
import {
  makeStyles,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMoreOutlined';
import DepartureListSummary from './departureListItem';
import DepartureDetails from './departureDetails';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(() => ({
  root: {
    margin: 20,
  },
}));

const DepartureList = () => {
  const classes = useStyles();
  const departures = useSelector(state => state.departures.list);
  const sortedDepartures = sortBy(departures, 'departureSort');
  return (
    <div className={classes.root}>
      {sortedDepartures.map(departure => (
        <ExpansionPanel key={departure.id}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <DepartureListSummary departure={departure} />
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <DepartureDetails departure={departure} />
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </div>
  );
};

export default DepartureList;
