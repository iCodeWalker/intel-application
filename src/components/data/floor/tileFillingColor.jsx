import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import SaveIcon from "@mui/icons-material/Save";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Box, TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";

import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditSquareIcon from "@mui/icons-material/EditSquare";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { MuiColorInput } from "mui-color-input";
import DataTable from "../../mainPanel/dataTable";

import "./tilePricing.scss";
import { useState } from "react";

const TileFillingColor = () => {
  const [value, setValue] = useState("#ffffff");

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "tileFillingColor",
      headerName: "Tile Filling Color",
      width: 200,
      renderCell: () => (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <MuiColorInput format="hex" value={value} onChange={handleChange} />
        </Box>
      ),
    },
    {
      field: "tileFillingColorName",
      headerName: "Filling Color Name",
      width: 200,
      renderCell: (params) => (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <TextField
            variant="outlined"
            size="small"
            defaultValue={params.value}
            sx={{ width: "100%" }}
          />
        </Box>
      ),
    },
    {
      field: "tileFillingColorCost",
      headerName: "Filling Color Cost",
      width: 150,
      renderCell: (params) => (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <TextField
            variant="outlined"
            size="small"
            defaultValue={params.value}
            sx={{ width: "100%" }}
          />
        </Box>
      ),
    },
    {
      field: "action",
      headerName: "Action",
      width: 250,
      renderCell: () => (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <Stack direction="row" spacing={1}>
            <IconButton aria-label="delete" color="error">
              <DeleteForeverIcon />
            </IconButton>
            <IconButton aria-label="edit" disabled={false} color="primary">
              <EditSquareIcon />
            </IconButton>
            <IconButton aria-label="edit" disabled={false} color="primary">
              <VisibilityIcon />
            </IconButton>
          </Stack>
        </Box>
      ),
    },
  ];

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];

  return (
    <div className="tile-pricing-container">
      <h1 className="heading">Tile filling color</h1>
      <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      <div className="data-table">
        <DataTable columns={columns} rows={rows} rowHeight={100} />
      </div>

      <div className="button-section">
        <Stack direction="row" spacing={3}>
          <Button
            variant="contained"
            startIcon={<AddCircleIcon />}
            size="medium"
          >
            Add New
          </Button>
          <Button variant="contained" startIcon={<SaveIcon />} size="medium">
            Save
          </Button>
        </Stack>
      </div>
    </div>
  );
};

export default TileFillingColor;

// #################### API Data Structure ####################

// const tileFillingColor = [
//   {
//     color_code: "#ffff",
//     color_name: "test",
//     cost: 500,
//   },
//   {
//     color_code: "#ffff",
//     color_name: "test",
//     cost: 500,
//   },
// ];
