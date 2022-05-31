import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";

export default function DataGridDemo({ posts, handleOpen, handleOpen2 }) {
  const columns = [
    { field: "id", hide: true, headerName: "ID", width: 20 },
    {
      field: "firstName",
      headerName: "First name",
      width: 130,
      editable: false,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 130,
      editable: false,
    },
    {
      field: "class",
      headerName: "Class",
      type: "number",
      width: 120,
      editable: false,
    },

    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 180,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
    {
      field: "phoneNumber",
      headerName: "Phone Number",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
    },
    {
        field: "edit",
        headerName: "Edit",
        sortable: false,
        width: 100,
        renderCell: (params) => (
          <Button
            variant="outlined"
            onClick={() => {
              handleOpen(params.row);
            }}
          >
            Edit
          </Button>
        ),
      },

    {
      field: "delete",
      headerName: "Delete",
      sortable: false,
      width: 100,
      renderCell: (params) => (
        <Button
        onClick={() => {
            handleOpen2(params.row.id);
          }}
        >
          Delete
        </Button>
      ),
    },
  ];
  return (
    <div
      style={{
        height: 600,
        width: "80%",
        marginTop: "10px",
        margin: " 10px auto",
      }}
    >
      <DataGrid
        rows={posts}
        columns={columns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
