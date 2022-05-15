import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


interface CharacterCardProps {
  name?: string,
  race?: string,
  hitPoints?: number,
}

export const CharacterCard: React.FC<CharacterCardProps> = ({
                                                              name,
                                                              race,
                                                              hitPoints
                                                            }) => {
  return (
    <Card variant="outlined" sx={{maxWidth: 800}}>
      <CardContent>
        <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
          CHARACTER CARD
        </Typography>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography sx={{mb: 1.5}} color="text.secondary">
          {race}
        </Typography>
        <Typography variant="body2">
          HP:{hitPoints}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">STATS</Button>
      </CardActions>
    </Card>
  );
}
