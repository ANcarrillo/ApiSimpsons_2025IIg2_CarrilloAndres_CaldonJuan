import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import "./CardCharacterCss.css";
import { Link } from "react-router-dom";

const CardCharacter = ({ data }) => {
  return (
    <Card className="carta">
      <Link to={`/personaje/${data.id}`} className="linkTarjeta">
        <CardActionArea>
          <CardMedia
            className="imagen"
            component="img"
            height="200"
            image={`https://cdn.thesimpsonsapi.com/500${data.portrait_path}`}
            alt={"Imagen del personaje " + data.name}
            sx={{ objectFit: "contain"}}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" id="Text">
              {data.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
};
export default CardCharacter;
