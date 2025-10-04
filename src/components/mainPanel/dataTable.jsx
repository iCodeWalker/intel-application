import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";

export default function DataTable({ rows, columns, rowHeight }) {
  const paginationModel = { page: 0, pageSize: 10 };

  return (
    <Paper sx={{ height: "630px", width: "100%", overflowY: "auto" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[10, 25, 50]}
        checkboxSelection={false}
        sx={{
          border: 0,
          "& .MuiDataGrid-cell": {
            alignItems: "flex-start", // force top alignment
          },
        }}
        pageSize={10}
        rowsPerPageOptions={[10]}
        rowHeight={rowHeight}
      />
    </Paper>
  );
}
