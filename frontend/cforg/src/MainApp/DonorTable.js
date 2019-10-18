import React, {useState} from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import {Chip, Container, Grid, Avatar, Typography, Paper} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import Fuse from 'fuse.js';

const Cols = [
  {
    Header: "Name",
    accessor: 'name'
  },
  {
    Header: "Age",
    accessor: 'age'
  },
  {
    Header: "Tags",
    accessor: 'tags',
    Cell: (props) => (
      props.value.map((tag, idx) => (
        <Chip key={idx} label={tag}/>
      ))
    )
  },
  {
    Header: "Organization",
    accessor: 'org'
  }
];

const searchOptions = {
  keys: ['id'],
  threshold: 0
};

const useStyles = makeStyles({
  avatar: {
    marginRight: 0,
    padding: 'auto'
  },
  bigAvatar: {
    margin: 10,
    width: 100,
    height: 100,
  },
  topDiv: {
    marginBottom: 50
  }
});

export default function DonorTable(props){
  const classes = useStyles();
  console.log(props.data);
  const [selected, setSelected] = useState('');
  const fuse = new Fuse(props.data, searchOptions);
  let currentPerson = fuse.search(selected)[0];
  if (selected === '') {
    return (
      <ReactTable
        getTrProps={(state, rowInfo, column) => {
          return {
            onClick: () => {
              setSelected(rowInfo.original.id)
            }
          }
        }}
        columns={Cols}
        className='-highlight'
        data={props.data}
        defaultPageSize={10}
      />
    )
  } else {
    return (
      <Container>
        <Paper>
        <Grid container justify='space-around' alignItems='center' className={classes.topDiv}>
          <Avatar className={classes.bigAvatar}><Typography variant='h2'>{currentPerson.name[0].toUpperCase()}</Typography></Avatar>
          <Typography variant='h5'>{currentPerson.name}</Typography>
          <Typography gutterBottom>
            {currentPerson.org}
          </Typography>
        </Grid>
        </Paper>

        <Typography variant='h5'>Circle</Typography>
        <Paper style={{padding: 20}}>
          <Container>
          <Grid container justify='space-around' alignItems='center'>
            {currentPerson.circle.map((person, idx) =>
              <Grid direction='column' key={idx} alignItems='center' onClick={() => {
                const fuse2 = new Fuse(props.data, {keys: ['name']})
                setSelected(fuse2.search(person) === [] ? selected : fuse2.search(person)[0].id)
              }}>
                <Avatar className={classes.avatar}>{person[0].toUpperCase()}</Avatar>
                {person}
              </Grid>
            )}
          </Grid>
          </Container>
        </Paper>
      </Container>
    )
  }
}