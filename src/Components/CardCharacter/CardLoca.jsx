import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import './CardLocation.css'

const CardLoca = ({ data }) => {
  return (
    <Card className='card'>
      <CardActionArea>
        <CardMedia
        className='imagenLugar'
          component="img"
          image={`https://cdn.thesimpsonsapi.com/500${data.image_path}`}
          alt={"Imagen del personaje " + data.name}
          sx={{ objectFit: 'contain' }}
        />
        <CardContent>
          <Typography className='name' gutterBottom variant="h5" component="div" id="Text">
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