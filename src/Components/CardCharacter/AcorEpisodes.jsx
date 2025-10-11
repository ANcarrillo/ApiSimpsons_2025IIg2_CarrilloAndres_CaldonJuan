import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';

const AcorEpisodes = ({ data }) => {
    
    return (
        <div>
            <Accordion defaultExpanded>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    
                    
                >
                    <Typography component="span"> 🎞️Episode: {data.episode_number}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div >


                        <Card sx={{ maxWidth: 500, maxHeight: 500 }}>
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
                                        name: {data.name}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                       📺 season: {data.season} - 📅 airdate: {data.airdate} - #️⃣ episode number: {data.episode_number} 
                                    </Typography>
                                    <Typography variant="body2" sx={{ height: '90px', overflowY: 'auto', color: 'text.secondary' }}>
                                        synopsis: {data.synopsis} 
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>


                    </div>
                </AccordionDetails>
            </Accordion>
        
        </div>
    );
}
export default AcorEpisodes;
