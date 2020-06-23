import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 300,
    maxWidth: 300,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const EventComponent: React.FC<any> = ({event, ...props}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {event.post_title}
        </Typography>
        <br/>
        <Typography color="textSecondary">
          Fecha inicio: {event.startdate }
        </Typography>
        <Typography color="textSecondary">
          Fecha final: {event.enddate}
        </Typography>
        <Typography color="textSecondary">
          Hora: {event.starttime}
        </Typography>
        <Typography color="textSecondary">
          Lugar: {event.location}
        </Typography>
        <br/>
        <Typography variant="body2" component="p">
          Descripción: {event.post_content}
          <br />
          {/* {event.post_author} */}
        </Typography>
      </CardContent>
      <CardActions>
      <Button variant="outlined" color="primary">
        Detalles
      </Button>
      </CardActions>
    </Card>
  );
}

export default EventComponent;
