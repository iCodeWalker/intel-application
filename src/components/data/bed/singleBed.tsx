import { useState } from "react";
import { Button, Checkbox, InputLabel } from "@mui/material";
import Stack from "@mui/material/Stack";
import SaveIcon from "@mui/icons-material/Save";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Box, TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import IconButton from "@mui/material/IconButton";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditSquareIcon from "@mui/icons-material/EditSquare";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Divider from "@mui/material/Divider";
import FormControlLabel from "@mui/material/FormControlLabel";
import { MuiColorInput } from "mui-color-input";

import DataTable from "../../mainPanel/dataTable";

const SingleBed = () => {
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
      field: "dimension_texture",
      headerName: "Dimesion & texture",
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
            label="Length"
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
            label="Height"
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
      field: "panelType",
      headerName: "Panel type",
      width: 250,
      renderCell: (params) => (
        <Box sx={muiBoxCustomStyleRow}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <FormControl sx={{ m: 1, minWidth: "60%" }}>
              <InputLabel id="panel-type-label">Panel type</InputLabel>
              <Select
                size="small"
                value={"inside_the_frame"}
                onChange={() => console.log("aa")}
                label="Panel type"
              >
                <MenuItem value={"inside_the_frame"}>Inside the frame</MenuItem>
                <MenuItem value={"outside_the_frame"}>
                  Outside the frame
                </MenuItem>
              </Select>
            </FormControl>
          </div>
        </Box>
      ),
    },
    {
      field: "extendedPanel",
      headerName: "Extended Panel",
      width: 250,
      renderCell: (params) => (
        <Box sx={muiBoxCustomStyleRow}>
          <Checkbox
            checked={false}
            onChange={() => console.log(params, "checked")}
            inputProps={{ "aria-label": "controlled" }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <FormControl sx={{ m: 1, minWidth: "60%" }}>
              <InputLabel id="panel-type-label">Panel type</InputLabel>
              <Select
                size="small"
                value={"inside_the_frame"}
                onChange={() => console.log("aa")}
                label="Panel type"
              >
                <MenuItem value={"inside_the_frame"}>Inside the frame</MenuItem>
                <MenuItem value={"outside_the_frame"}>
                  Outside the frame
                </MenuItem>
              </Select>
            </FormControl>
            <Box sx={muiBoxCustomStyleRow}>
              <TextField
                variant="outlined"
                size="small"
                defaultValue={params.value}
                sx={{ width: "92%" }}
                label="Panel height"
              />
            </Box>
            <Button
              onClick={() => setIsTextureModalVisible(!isTextureModalVisible)}
            >
              Texture
            </Button>
          </div>
        </Box>
      ),
    },

    {
      field: "storage",
      headerName: "Storage",
      width: 200,
      renderCell: (params) => (
        <Box sx={muiBoxCustomStyleCol}>
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
            label="Length"
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
            label="Height"
          />
        </Box>
      ),
    },
    {
      field: "bedCost",
      headerName: "Bed Cost",
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

  const rows = [{ id: 1, lastName: "Snow", firstName: "Jon", age: 35 }];

  const bedPanelColumn = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "bedPanel",
      headerName: "Bed Panel",
      width: 250,
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
      field: "panelImage",
      headerName: "Panel Image",
      width: 200,
      renderCell: (params) => (
        <Box sx={muiBoxCustomStyleCol}>
          <Button
            onClick={() => setIsTextureModalVisible(!isTextureModalVisible)}
          >
            Panel Image
          </Button>
        </Box>
      ),
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
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

  const extendedPanelColumn = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "extendedPanel",
      headerName: "Extended Panel",
      width: 250,
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
      field: "extendedPanelImage",
      headerName: "Extended Panel Image",
      width: 200,
      renderCell: (params) => (
        <Box sx={muiBoxCustomStyleCol}>
          <Button
            onClick={() => setIsTextureModalVisible(!isTextureModalVisible)}
          >
            Panel Image
          </Button>
        </Box>
      ),
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
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

  return (
    <div className="tile-pricing-container">
      <h1 className="heading">Single Bed</h1>
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
        <div style={{ width: "15%" }}>
          <p style={{ textAlign: "left", fontSize: "18px", fontWeight: "600" }}>
            Length Range
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
            </Box>
          </div>
        </div>
        <Divider orientation="vertical" variant="middle" flexItem />
        <div style={{ width: "15%" }}>
          <p style={{ textAlign: "left", fontSize: "18px", fontWeight: "600" }}>
            Width Range
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
                label="Width range"
              />
            </Box>
          </div>
        </div>
        <Divider orientation="vertical" variant="middle" flexItem />

        <div style={{ width: "15%" }}>
          <p style={{ textAlign: "left", fontSize: "18px", fontWeight: "600" }}>
            Height Range
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
            </Box>
          </div>
        </div>
        <div style={{ width: "15%" }}>
          <p style={{ textAlign: "left", fontSize: "18px", fontWeight: "600" }}>
            Thickness Range
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
                label="Thickness range"
              />
            </Box>
          </div>
        </div>
        <Divider orientation="vertical" variant="middle" flexItem />

        <div style={{ width: "20%" }}>
          <p style={{ textAlign: "left", fontSize: "18px", fontWeight: "600" }}>
            Storage
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
                label="Width range"
              />
              <TextField
                variant="outlined"
                size="small"
                defaultValue={""}
                sx={{ width: "100%" }}
                label="Length range"
              />
            </Box>
          </div>
        </div>
        <Divider orientation="vertical" variant="middle" flexItem />
      </div>
      <div className="button-section">
        <Stack direction="row" spacing={3}>
          <Button variant="contained" startIcon={<SaveIcon />} size="medium">
            Save
          </Button>
        </Stack>
      </div>
      <Divider sx={{ borderBottomWidth: 4 }} />
      {/* ################# Panel Data ################# */}
      <h1 className="heading">Panel Data</h1>
      <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </p>

      <h1 className="heading">Bed panel</h1>
      <div className="data-table" style={{ width: "750px" }}>
        <DataTable columns={bedPanelColumn} rows={rows} rowHeight={100} />
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

      <Divider sx={{ borderBottomWidth: 3 }} />

      <h1 className="heading">Extended panel</h1>
      <div className="data-table" style={{ width: "750px" }}>
        <DataTable columns={extendedPanelColumn} rows={rows} rowHeight={100} />
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
    </div>
  );
};

export default SingleBed;

// #################### API Data Structure ####################

const dimensionData = [
  {
    length_range: "1-10",
    width_range: "2-6",
    thickness_range: "0.1-0.9",
    height_range: "0.1-0.9",
    storage: {
      length_range: "1-10",
      width_range: "1-5",
    },
    panel: [
      {
        name: "test",
        texture: "test.jpg",
      },
      {
        name: "test",
        texture: "test.jpg",
      },
    ],
    extended_panel: [
      {
        name: "test",
        texture: "test.jpg",
      },
      {
        name: "test",
        texture: "test.jpg",
      },
    ],
  },
];

const pricingData = [
  {
    height: "2",
    width: "3",
    length: "7",
    thickness: "0.1",
    outer_texture: "",
    inner_texture: "",
    distance_from_bottom: 0.4,
    show_leg: false,
    panel_type: "indented",
    show_extended_panel: true,
    extended_panel_type: "vertical",
    extended_panel_height: 2,
    extended_panel_texture: "test.jpg",
    show_storage: false,
    storage_length: 1,
    storage_width: 1,
    storage_height: 1,
    price: 5000,
  },
];
