import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Modal,
  Box,
} from "@mui/material";
import "./style.scss";

const CharacterItem = (props) => {
  const { name, image, status, species, gender, origin } = props.data;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card>
        <CardActionArea onClick={handleOpen}>
          <CardMedia component="img" height="140" image={image} alt={name} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Status: {status}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box className="modal-box">
          <img src={image} alt={name} />
          <h2>{name}</h2>
          <p>Status: {status}</p>
          <p>Species: {species}</p>
          <p>Gender: {gender}</p>
          <p>Origin: {origin.name}</p>
        </Box>
      </Modal>
    </>
    // <div className="character-item">
    //     <div
    //         className={`character-item__thumb ${
    //             gender.toUpperCase() === "MALE"
    //                 ? "thumb-male"
    //                 : "thumb-female"
    //         }`}
    //     >
    //         <figure className="item-thumb-wrap">
    //             <img
    //                 src={image}
    //                 alt={name}
    //                 className="item-thumb-image"
    //             />
    //         </figure>
    //     </div>
    //     <h2 className="character-item__title">{name}</h2>
    // </div>
  );
};

export default CharacterItem;
