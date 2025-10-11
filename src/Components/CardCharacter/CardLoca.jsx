import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

const CardLoca = ({ data }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={`https://cdn.thesimpsonsapi.com/500${data.image_path}`}
          alt={"Imagen del personaje " + data.name}
          sx={{ objectFit: 'contain', bgcolor: '#f50c0c88' }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.name}
          </Typography>
          
           <Typography variant="body2" sx={{ color: 'text.secondary' }}>
             {data.town} - {data.use}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default CardLoca;