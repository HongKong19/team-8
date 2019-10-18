import React from 'react';
import ReactTable from 'react-table';
import donorData from './donorData';
import 'react-table/react-table.css';
import {Chip} from "@material-ui/core";

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
      props.value.map((tag) => (
        <Chip label={tag}/>
      ))
    )
  },
  {
    Header: "Organization",
    accessor: 'org'
  }
];

export default function DonorTable(props){
  return (
    <ReactTable
      columns={Cols}
      data={donorData}
      defaultPageSize={10}
    />
  )
}