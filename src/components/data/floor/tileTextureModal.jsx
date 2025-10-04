import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function TileTextureModal({ isOpen, handleModal, data }) {
  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [isOpen]);

  const handleCallBack = () => {
    handleModal(!isOpen);
  };

  return (
    <React.Fragment>
      <Dialog
        open={isOpen}
        onClose={handleCallBack}
        scroll={"paper"}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        PaperProps={{
          sx: {
            width: "90%", // custom width
            maxWidth: "90%", // prevent overflow
          },
        }}
      >
        <DialogTitle id="scroll-dialog-title">Textures</DialogTitle>
        <DialogContent>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {data.map((item) => {
                return (
                  <div
                    className="image-container"
                    style={{
                      width: "200px",
                      height: "150px",
                      borderRadius: "5px",
                      borderBottom: "1px solid #c8c8c8",
                      boxShadow:
                        "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
                      margin: "25px",
                    }}
                    onClick={() => {
                      console.log(item, "isTextureModalVisible");
                    }}
                  >
                    <img
                      className="image"
                      style={{
                        width: "200px",
                        height: "150px",
                        borderRadius: "5px",
                      }}
                      src={item.image}
                      alt={"Floor"}
                    />
                  </div>
                );
              })}
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCallBack}>Close</Button>
          <Button onClick={handleCallBack}>Save</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
