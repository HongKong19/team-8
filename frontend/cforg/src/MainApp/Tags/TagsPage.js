import React, {useState} from 'react';
import Fuse from 'fuse.js';
import {Input, Typography, Grid} from '@material-ui/core';
import donorData from "../donorData";
import DonorTable from "../DonorTable";

export default function TagsPage(props) {
  const [query, setQuery] = useState('');
  const SearchOptions = {
    keys: ["tags"],
    threshold: 0.1
  };
  const fuse = new Fuse(donorData, SearchOptions);

  return (
    <>
      <Typography component='span' style={{marginRight: 10}}>
        Search Tag
      </Typography>
    <Input
      autoFocus
      style={{marginBottom: 20}}
      onChange={(e) => setQuery(e.target.value)}
      />
      <DonorTable data={fuse.search(query)}/>
  </>
  )
}
