import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
// import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

import "./userlist.css";
import pic from "../../img/pic.jpg";
import ClearIcon from "@mui/icons-material/Clear";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useRrows } from "../../data";
import { Link } from "react-router-dom";
const Userlist = () => {
  const [userdata, setuserdata] = useState(useRrows);
  const handledelete = (id) => {
    setuserdata(userdata.filter((item) => item.id !== id));
  };
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "Username",
      headerName: "Username",
      width: 180,

      renderCell: (params) => {
        return (
          <div className="userlistUser">
            <img className="userlistImg" src={params.row.Avatar} alt="" />
            {params.row.Username}
          </div>
        );
      },
    },
    { field: "status", headerName: " Status", width: 130 },
    {
      field: "email",
      headerName: "Email",

      width: 200,
    },
    {
      field: "Transaction",
      headerName: "Transactions",

      width: 100,
    },

    {
      field: "action",
      headerName: "Actions",
      width: 120,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userlistedit">Edit</button>
            </Link>

            <ClearIcon
              className="userlistdelete"
              onClick={() => handledelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userlist">
      {" "}
      <DataGrid
        rows={userdata}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default Userlist;
