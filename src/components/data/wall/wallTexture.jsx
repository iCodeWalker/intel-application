import {
  Button,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import AddCircleIcon from "@mui/icons-material/AddCircle";

// import "./wardrobeTexture.scss";

const WallTexture = () => {
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
  ];
  return (
    <div className="tile-texture-container">
      <h1 className="heading">Wall textures</h1>
      <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </p>

      <div className="tile-texture-card-container">
        {tileData?.map((item) => {
          return (
            <div className="tile-texture-card">
              <div className="image-container">
                <img className="image" src={item.image} alt={"Floor"} />
              </div>
              <div className="name-container">
                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  fullWidth
                />
              </div>
              <div className="name-container">
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Cost type
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={"amt"}
                    label=" Cost type"
                    onChange={() => console.log("clicked")}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"amt"}>Amount</MenuItem>
                    <MenuItem value={"ft"}>Feet</MenuItem>
                    <MenuItem value={"sqft"}>Square feet</MenuItem>
                    <MenuItem value={"per"}>Percent</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="name-container">
                <TextField
                  id="outlined-basic"
                  label="Cost"
                  variant="outlined"
                  fullWidth
                />
              </div>
            </div>
          );
        })}
      </div>
      <div
        style={{
          margin: "40px",
          paddingBottom: "40px",
          display: "flex",
          alignItems: "left",
        }}
      >
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
    </div>
  );
};

export default WallTexture;

// #################### API Data Structure ####################

// const wardrobeTextture = {
//   outer_textures: [
//     {
//       name: "test 1",
//       image: "",
//       cost_type: "amt",
//       cost: 400,
//     },
//     {
//       name: "test 2",
//       image: "",
//       cost_type: "amt",
//       cost: 400,
//     },
//   ],
// };
