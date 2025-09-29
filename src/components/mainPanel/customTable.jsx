import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import DataTable from "./dataTable";
import SaveIcon from "@mui/icons-material/Save";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const CustomTable = () => {
  return (
    <div
      style={{
        color: "black",
        minHeight: "100vh",
        paddingBottom: "250px",
      }}
    >
      <div style={{ margin: "5px", textAlign: "left" }}>
        <h2>Tile pricing</h2>
      </div>
      <div style={{ padding: "5px" }} className="data_table">
        <DataTable />
      </div>

      <div style={{ margin: "40px 10px", display: "flex", alignItems: "left" }}>
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

export default CustomTable;
