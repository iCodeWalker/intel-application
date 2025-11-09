import { Button, Divider, Stack, TextField } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const BedTexture = () => {
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
    <div className="wardrobe-texture-container">
      <h1 className="heading">Bed textures</h1>
      <Divider sx={{ borderBottomWidth: 4 }} />

      <h1 className="heading">Outer textures</h1>
      <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </p>

      <div className="wardrobe-texture-card-container">
        {tileData?.map((item) => {
          return (
            <div className="wardrobe-texture-card">
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

      <h1 className="heading">Inner textures</h1>
      <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </p>

      <div className="wardrobe-texture-card-container">
        {tileData?.map((item) => {
          return (
            <div className="wardrobe-texture-card">
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
    </div>
  );
};

export default BedTexture;

// #################### API Data Structure ####################

// const BedTexture = {
//   outer_textures: [
//     {
//       name: "test",
//       image: "",
//     },
//   ],
//   inner_textures: [
//     {
//       name: "test",
//       image: "",
//     },
//   ],
// };
