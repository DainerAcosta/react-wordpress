import React, {useContext, useEffect, Fragment} from 'react';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import EventsContext from './../../context/events/eventsContext';

// components
import Event from './event.component';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
    mt: {
      marginTop: theme.spacing(2),
      flexGrow: 1,
      width: '100%',
    },
  }),
);

export default function EventsComponent() {

    const [spacing] = React.useState<GridSpacing>(2);
    const classes = useStyles();

    // Extraer eventos del state inicial
    const eventsContext = useContext(EventsContext);
    const { events, obtenerEvents } = eventsContext;

    // Obtener eventos cuando carga el componente
    useEffect(() => {
        obtenerEvents();
    }, []);

    // revisar si proyectos tiene contenido
    if(events.length === 0 ) return <p>No hay eventos disponibles</p>;

    return (
        <Fragment>
          <Grid container className={classes.mt} style={{width: '100%'}}>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={spacing}>
                    {events.data.map((event: any) => (
                      <Grid key={event.ID} item>
                        <Event
                          event={event}
                        />
                      </Grid>
                    ))}
                </Grid>
            </Grid>
          </Grid>
        </Fragment>
     );
}
