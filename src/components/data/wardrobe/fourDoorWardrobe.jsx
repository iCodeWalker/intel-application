import { useState } from "react";
import { Button, Checkbox } from "@mui/material";
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
import Divider from "@mui/material/Divider";
import FormControlLabel from "@mui/material/FormControlLabel";
import { MuiColorInput } from "mui-color-input";

// import "./tilePricing.scss";
// import TileTextureModal from "./tileTextureModal";

const FourDoorWardrobe = () => {
  const [isTextureModalVisible, setIsTextureModalVisible] = useState(false);

  const [value, setValue] = useState("#ffffff");

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  console.log(isTextureModalVisible, "isTextureModalVisible");

  const muiBoxCustomStyleCol = {
    display: "flex",
    justifyContent: "center",
    alignItems: "start",
    width: "100%",
    height: "100%",
    flexDirection: "column",
    gap: "10px",
  };

  const muiBoxCustomStyleRow = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "endPanle",
      headerName: "End Panel",
      width: 200,
      renderCell: (params) => (
        <Box sx={muiBoxCustomStyleCol}>
          <Button
            onClick={() => setIsTextureModalVisible(!isTextureModalVisible)}
          >
            Outer Texture
          </Button>
          <Button
            onClick={() => setIsTextureModalVisible(!isTextureModalVisible)}
          >
            Inner Texture
          </Button>
          <TextField
            variant="outlined"
            size="small"
            defaultValue={params.value}
            sx={{ width: "100%" }}
            label="Height"
          />
          <TextField
            variant="outlined"
            size="small"
            defaultValue={params.value}
            sx={{ width: "100%" }}
            label="Width"
          />
          <TextField
            variant="outlined"
            size="small"
            defaultValue={params.value}
            sx={{ width: "100%" }}
            label="Thickness"
          />
        </Box>
      ),
    },
    {
      field: "sidePanel",
      headerName: "Side Panel",
      width: 200,
      renderCell: (params) => (
        <Box sx={muiBoxCustomStyleCol}>
          <Button
            onClick={() => setIsTextureModalVisible(!isTextureModalVisible)}
          >
            Outer Texture
          </Button>
          <Button
            onClick={() => setIsTextureModalVisible(!isTextureModalVisible)}
          >
            Inner Texture
          </Button>
          <TextField
            variant="outlined"
            size="small"
            defaultValue={params.value}
            sx={{ width: "100%" }}
            label="Height"
          />
          <TextField
            variant="outlined"
            size="small"
            defaultValue={params.value}
            sx={{ width: "100%" }}
            label="Width"
          />
          <TextField
            variant="outlined"
            size="small"
            defaultValue={params.value}
            sx={{ width: "100%" }}
            label="Thickness"
          />
        </Box>
      ),
    },
    {
      field: "leftCenterPanel",
      headerName: "Left Center Panel",
      width: 200,
      renderCell: (params) => (
        <Box sx={muiBoxCustomStyleCol}>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Visible"
          />
          <Button
            onClick={() => setIsTextureModalVisible(!isTextureModalVisible)}
          >
            Inner Texture
          </Button>
          <TextField
            variant="outlined"
            size="small"
            defaultValue={params.value}
            sx={{ width: "100%" }}
            label="Height"
          />
          <TextField
            variant="outlined"
            size="small"
            defaultValue={params.value}
            sx={{ width: "100%" }}
            label="Width"
          />
          <TextField
            variant="outlined"
            size="small"
            defaultValue={params.value}
            sx={{ width: "100%" }}
            label="Thickness"
          />
        </Box>
      ),
    },
    {
      field: "middleCenterPanel",
      headerName: "Middle Center Panel",
      width: 200,
      renderCell: (params) => (
        <Box sx={muiBoxCustomStyleCol}>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Visible"
          />
          <Button
            onClick={() => setIsTextureModalVisible(!isTextureModalVisible)}
          >
            Inner Texture
          </Button>
          <TextField
            variant="outlined"
            size="small"
            defaultValue={params.value}
            sx={{ width: "100%" }}
            label="Height"
          />
          <TextField
            variant="outlined"
            size="small"
            defaultValue={params.value}
            sx={{ width: "100%" }}
            label="Width"
          />
          <TextField
            variant="outlined"
            size="small"
            defaultValue={params.value}
            sx={{ width: "100%" }}
            label="Thickness"
          />
        </Box>
      ),
    },
    {
      field: "rightCenterPanel",
      headerName: "Right Center Panel",
      width: 200,
      renderCell: (params) => (
        <Box sx={muiBoxCustomStyleCol}>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Visible"
          />
          <Button
            onClick={() => setIsTextureModalVisible(!isTextureModalVisible)}
          >
            Inner Texture
          </Button>
          <TextField
            variant="outlined"
            size="small"
            defaultValue={params.value}
            sx={{ width: "100%" }}
            label="Height"
          />
          <TextField
            variant="outlined"
            size="small"
            defaultValue={params.value}
            sx={{ width: "100%" }}
            label="Width"
          />
          <TextField
            variant="outlined"
            size="small"
            defaultValue={params.value}
            sx={{ width: "100%" }}
            label="Thickness"
          />
        </Box>
      ),
    },
    {
      field: "distanceFromBottom",
      headerName: "Dist. from bottom",
      width: 150,
      renderCell: (params) => (
        <Box sx={muiBoxCustomStyleRow}>
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
      field: "showLeg",
      headerName: "Show leg",
      width: 100,
      renderCell: (params) => (
        <Box sx={muiBoxCustomStyleRow}>
          <Checkbox
            checked={false}
            onChange={() => console.log(params, "checked")}
            inputProps={{ "aria-label": "controlled" }}
          />
        </Box>
      ),
    },
    {
      field: "panelSection",
      headerName: "Panel Section",
      width: 120,
      renderCell: (params) => (
        <Box sx={muiBoxCustomStyleRow}>
          <Checkbox
            checked={false}
            onChange={() => console.log(params, "checked")}
            inputProps={{ "aria-label": "controlled" }}
          />
          {/* <TextField
            variant="outlined"
            size="small"
            defaultValue={params.value}
            sx={{ width: "100%" }}
            label="Quantity"
          /> */}
        </Box>
      ),
    },
    {
      field: "boxSection",
      headerName: "Box Section",
      width: 250,
      renderCell: (params) => (
        <Box sx={muiBoxCustomStyleRow}>
          <Checkbox
            checked={false}
            onChange={() => console.log(params, "checked")}
            inputProps={{ "aria-label": "controlled" }}
          />
          <FormControl sx={{ m: 1, minWidth: "60%" }}>
            <Select
              size="small"
              value={"inside_the_frame"}
              onChange={() => console.log("aa")}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value={"inside_the_frame"}>Inside the frame</MenuItem>
              <MenuItem value={"outside_the_frame"}>Outside the frame</MenuItem>
            </Select>
            {/* <FormHelperText>Without label</FormHelperText> */}
          </FormControl>
        </Box>
      ),
    },
    {
      field: "hangerRod",
      headerName: "Hanger Rod",
      width: 200,
      renderCell: (params) => (
        <Box sx={muiBoxCustomStyleRow}>
          <Checkbox
            checked={false}
            onChange={() => console.log(params, "checked")}
            inputProps={{ "aria-label": "controlled" }}
          />
          <MuiColorInput format="hex" value={value} onChange={handleChange} />
        </Box>
      ),
    },
    {
      field: "mirror",
      headerName: "Mirror",
      width: 150,
      renderCell: (params) => (
        <Box sx={muiBoxCustomStyleRow}>
          <Checkbox
            checked={false}
            onChange={() => console.log(params, "checked")}
            inputProps={{ "aria-label": "controlled" }}
          />
          <TextField
            variant="outlined"
            size="small"
            defaultValue={params.value}
            sx={{ width: "100%" }}
            label="Size"
          />
        </Box>
      ),
    },
    {
      field: "bottomBoxSection",
      headerName: "Bottom Box Section",
      width: 150,
      renderCell: (params) => (
        <Box sx={muiBoxCustomStyleRow}>
          <Checkbox
            checked={false}
            onChange={() => console.log(params, "checked")}
            inputProps={{ "aria-label": "controlled" }}
          />
          <TextField
            variant="outlined"
            size="small"
            defaultValue={params.value}
            sx={{ width: "100%" }}
            label="Height"
          />
        </Box>
      ),
    },
    {
      field: "slidingDoor",
      headerName: "Sliding door",
      width: 100,
      renderCell: (params) => (
        <Box sx={muiBoxCustomStyleRow}>
          <Checkbox
            checked={false}
            onChange={() => console.log(params, "checked")}
            inputProps={{ "aria-label": "controlled" }}
          />
        </Box>
      ),
    },
    {
      field: "wardrobeCost",
      headerName: "Wardrobe Cost",
      width: 150,
      renderCell: (params) => (
        <Box sx={muiBoxCustomStyleRow}>
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
        <Box sx={muiBoxCustomStyleRow}>
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
      <h1 className="heading">Four Door Wardrobe</h1>
      <Divider sx={{ borderBottomWidth: 4 }} />

      <h1 className="heading">Dimension Range Data</h1>
      <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      <div
        className="data-table"
        style={{
          display: "flex",
          flexWrap: "wrap",
          //   justifyContent: "space-between",
          gap: "30px",
        }}
      >
        <div style={{ width: "20%" }}>
          <p style={{ textAlign: "left", fontSize: "18px", fontWeight: "600" }}>
            End Panel Range
          </p>
          <div>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <TextField
                variant="outlined"
                size="small"
                defaultValue={""}
                sx={{ width: "100%" }}
                label="Height range"
              />
              <TextField
                variant="outlined"
                size="small"
                defaultValue={""}
                sx={{ width: "100%" }}
                label="Width range"
              />
              <TextField
                variant="outlined"
                size="small"
                defaultValue={""}
                sx={{ width: "100%" }}
                label="Thickness range"
              />
            </Box>
          </div>
        </div>
        <Divider orientation="vertical" variant="middle" flexItem />
        <div style={{ width: "20%" }}>
          <p style={{ textAlign: "left", fontSize: "18px", fontWeight: "600" }}>
            Side Panel Range
          </p>
          <div>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <TextField
                variant="outlined"
                size="small"
                defaultValue={""}
                sx={{ width: "100%" }}
                label="Height range"
              />
              <TextField
                variant="outlined"
                size="small"
                defaultValue={""}
                sx={{ width: "100%" }}
                label="Width range"
              />
              <TextField
                variant="outlined"
                size="small"
                defaultValue={""}
                sx={{ width: "100%" }}
                label="Thickness range"
              />
            </Box>
          </div>
        </div>
        <Divider orientation="vertical" variant="middle" flexItem />

        <div style={{ width: "20%" }}>
          <p style={{ textAlign: "left", fontSize: "18px", fontWeight: "600" }}>
            Top Panel Range
          </p>
          <div>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <TextField
                variant="outlined"
                size="small"
                defaultValue={""}
                sx={{ width: "100%" }}
                label="Length range"
              />
              <TextField
                variant="outlined"
                size="small"
                defaultValue={""}
                sx={{ width: "100%" }}
                label="Width range"
              />
              <TextField
                variant="outlined"
                size="small"
                defaultValue={""}
                sx={{ width: "100%" }}
                label="Thickness range"
              />
            </Box>
          </div>
        </div>
        <Divider orientation="vertical" variant="middle" flexItem />

        <div style={{ width: "20%" }}>
          <p style={{ textAlign: "left", fontSize: "18px", fontWeight: "600" }}>
            Center Panel Range
          </p>
          <div>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <TextField
                variant="outlined"
                size="small"
                defaultValue={""}
                sx={{ width: "100%" }}
                label="Height range"
              />
              <TextField
                variant="outlined"
                size="small"
                defaultValue={""}
                sx={{ width: "100%" }}
                label="Width range"
              />
              <TextField
                variant="outlined"
                size="small"
                defaultValue={""}
                sx={{ width: "100%" }}
                label="Thickness range"
              />
            </Box>
          </div>
        </div>
        <Divider orientation="vertical" variant="middle" flexItem />

        <div style={{ width: "20%" }}>
          <p style={{ textAlign: "left", fontSize: "18px", fontWeight: "600" }}>
            Box Section Range
          </p>
          <div>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <TextField
                variant="outlined"
                size="small"
                defaultValue={""}
                sx={{ width: "100%" }}
                label="Height range"
              />
              <TextField
                variant="outlined"
                size="small"
                defaultValue={""}
                sx={{ width: "100%" }}
                label="Thickness range"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Allow outside the frame"
              />
            </Box>
          </div>
        </div>
        <Divider orientation="vertical" variant="middle" flexItem />

        {/* <DataTable columns={dimensionDataColumns} rows={rows} rowHeight={200} /> */}
      </div>

      <div className="button-section">
        <Stack direction="row" spacing={3}>
          <Button variant="contained" startIcon={<SaveIcon />} size="medium">
            Save
          </Button>
        </Stack>
      </div>
      <Divider sx={{ borderBottomWidth: 3 }} />
      <h1 className="heading">Pricing Data</h1>
      <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      <div className="data-table">
        <DataTable columns={columns} rows={rows} rowHeight={350} />
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
      {/* <TileTextureModal
        isOpen={isTextureModalVisible}
        data={tileData}
        handleModal={(flag) => setIsTextureModalVisible(flag)}
      /> */}
    </div>
  );
};

export default FourDoorWardrobe;

// #################### API Data Structure ####################

// const dimensionData = [
//   {
//     end_panel: {
//       height_range: "1-10",
//       width_range: "2-6",
//       thickness_range: "0.1-0.9",
//     },
//     side_panel: {
//       height_range: "1-10",
//       width_range: "2-6",
//       thickness_range: "0.1-0.9",
//     },
//     top_panel: {
//       length_range: "1-10",
//       width_range: "2-6",
//       thickness_range: "0.1-0.9",
//     },
//     center_panel: {
//       height_range: "1-10",
//       width_range: "2-6",
//       thickness_range: "0.1-0.9",
//     },
//     box_section: {
//       height_range: "1-10",
//       thickness_range: "0.1-0.9",
//       outside_frame: true,
//     },
//   },
// ];

// const pricingData = [
//   {
//     end_panel: {
//       height: "6",
//       width: "3",
//       thickness: "0.1",
//       outer_texture: "",
//       inner_texture: "",
//     },
//     side_panel: {
//       height: "6",
//       width: "3",
//       thickness: "0.1",
//       outer_texture: "",
//       inner_texture: "",
//     },
//     left_center_panel: {
//       height: "6",
//       width: "3",
//       thickness: "0.1",
//       inner_texture: "",
//       is_visible: true
//     },
//     middle_center_panel: {
//       height: "6",
//       width: "3",
//       thickness: "0.1",
//       inner_texture: "",
//       is_visible: true
//     },
//     right_center_panel: {
//       height: "6",
//       width: "3",
//       thickness: "0.1",
//       inner_texture: "",
//       is_visible: true
//     },
//     distance_from_bottom: 0.4,
//     show_leg: false,
//     allow_panel_section: true,
//     allow_box_section: true,
//     box_section_type: "inside_frame",
//     allow_hanger_rod: true,
//     hanger_rod_color: "#12343"
//     allow_mirror: true,
//     mirror_size: "4x2",
//     bottom_box_section: true,
//     bottom_box_section_size: 4,
//     allow_siding_door: true,
//     price: 5000,
//   },
// ];
