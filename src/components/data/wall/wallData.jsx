import { Button, Checkbox } from "@mui/material";
import Stack from "@mui/material/Stack";
import SaveIcon from "@mui/icons-material/Save";
import { Box, TextField } from "@mui/material";
import Divider from "@mui/material/Divider";

const WallData = () => {
  return (
    <div className="tile-pricing-container">
      <h1 className="heading">Wall data</h1>
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
            Wall Range
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
      <Divider sx={{ borderBottomWidth: 3 }} />
    </div>
  );
};

export default WallData;

// #################### API Data Structure ####################

// const dimensionData = [
// {
//      height_range: "4-12",
//      thickness_range: "0.1-0.5"
// }
// ];
