import { useState } from "react";
import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import SaveIcon from "@mui/icons-material/Save";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Box, TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Select from "@mui/material/Select";
import IconButton from "@mui/material/IconButton";

import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditSquareIcon from "@mui/icons-material/EditSquare";
import DataTable from "../../mainPanel/dataTable";
import VisibilityIcon from "@mui/icons-material/Visibility";

import "./tilePricing.scss";
import TileTextureModal from "./tileTextureModal";

const TilePricing = () => {
  const [isTextureModalVisible, setIsTextureModalVisible] = useState(false);
  const [age, setAge] = useState(20);

  const tileData = [
    {
      image: "/floor1.jpg",
      dimensions: "",
      thickness: "",
    },
    {
      image: "/floor2.jpg",
      dimensions: "",
      thickness: "",
    },
    {
      image: "/floor3.jpg",
      dimensions: "",
      thickness: "",
    },
    {
      image: "/floor4.jpg",
      dimensions: "",
      thickness: "",
    },
    {
      image: "/floor5.jpg",
      dimensions: "",
      thickness: "",
    },
    {
      image: "/floor6.jpg",
      dimensions: "",
      thickness: "",
    },
    {
      image: "/floor7.jpg",
      dimensions: "",
      thickness: "",
    },
    {
      image: "/floor8.jpg",
      dimensions: "",
      thickness: "",
    },
    {
      image: "/floor1.jpg",
      dimensions: "",
      thickness: "",
    },
    {
      image: "/floor2.jpg",
      dimensions: "",
      thickness: "",
    },
    {
      image: "/floor3.jpg",
      dimensions: "",
      thickness: "",
    },
    {
      image: "/floor4.jpg",
      dimensions: "",
      thickness: "",
    },
    {
      image: "/floor5.jpg",
      dimensions: "",
      thickness: "",
    },
    {
      image: "/floor6.jpg",
      dimensions: "",
      thickness: "",
    },
    {
      image: "/floor7.jpg",
      dimensions: "",
      thickness: "",
    },
    {
      image: "/floor8.jpg",
      dimensions: "",
      thickness: "",
    },
    {
      image: "/floor1.jpg",
      dimensions: "",
      thickness: "",
    },
    {
      image: "/floor2.jpg",
      dimensions: "",
      thickness: "",
    },
    {
      image: "/floor3.jpg",
      dimensions: "",
      thickness: "",
    },
    {
      image: "/floor4.jpg",
      dimensions: "",
      thickness: "",
    },
    {
      image: "/floor5.jpg",
      dimensions: "",
      thickness: "",
    },
    {
      image: "/floor6.jpg",
      dimensions: "",
      thickness: "",
    },
    {
      image: "/floor7.jpg",
      dimensions: "",
      thickness: "",
    },
    {
      image: "/floor8.jpg",
      dimensions: "",
      thickness: "",
    },
  ];

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  console.log(isTextureModalVisible, "isTextureModalVisible");

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "tileTexture",
      headerName: "Tile Texture",
      width: 200,
      renderCell: () => (
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            width: "100%",
            height: "100%",
            cursor: "pointer",
          }}
        >
          <div>
            <Button
              onClick={() => setIsTextureModalVisible(!isTextureModalVisible)}
            >
              Select Texture
            </Button>
          </div>
        </Box>
      ),
    },
    {
      field: "tileLength",
      headerName: "Tile Size",
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
          <FormControl sx={{ m: 1, minWidth: "100%" }}>
            <Select
              size="small"
              value={age}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            {/* <FormHelperText>Without label</FormHelperText> */}
          </FormControl>
        </Box>
      ),
    },
    {
      field: "tileThickness",
      headerName: "Tile Thickness",
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
          <FormControl sx={{ m: 1, minWidth: "100%" }}>
            <Select
              size="small"
              value={age}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            {/* <FormHelperText>Without label</FormHelperText> */}
          </FormControl>
        </Box>
      ),
    },
    {
      field: "tileCost",
      headerName: "Tile Cost",
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
      <h1 className="heading">Tile pricing</h1>
      <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      <div className="data-table">
        <DataTable columns={columns} rows={rows} rowHeight={80} />
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
      <TileTextureModal
        isOpen={isTextureModalVisible}
        data={tileData}
        handleModal={(flag) => setIsTextureModalVisible(flag)}
      />
    </div>
  );
};

export default TilePricing;

// #################### API Data Structure ####################

// const tilePricing = [
//   {
//     texture: "",
//     size: "2x2",
//     thickness: "0.1"
//     cost: 500,
//   },
//   {
//     texture: "",
//     size: "2x2",
//     thickness: "0.1"
//     cost: 500,
//   },
// ];
