import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


const CardCharacter = ({ data }) => {
  
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={`https://cdn.thesimpsonsapi.com/500${data.portrait_path}`}
          alt={"Imagen del personaje " + data.name}
          sx={{ objectFit: 'contain', bgcolor: '#f50c0c88' }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          component={Link}
          to={`/personaje/${data.id}`}
        >
          More Info
        </Button>
      </CardActions>

    </Card>
  );
}
export default CardCharacter;