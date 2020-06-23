import React, { useReducer } from 'react';

import eventsContext from './eventsContext';
import eventsReducer from './eventsReducer';
import { 
    GET_EVENTS,
    EVENTS_ERROR,
    EVENT_ACTUAL,
} from '../../types';

import clienteAxios from '../../config/axios';

const EventsState = (props: any) => {

    const initialState = {
        events : [],
        event: null, 
        message: null
    }

    // Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(eventsReducer, initialState)

    // Serie de funciones para el CRUD

    // Obtener los eventos
    const obtenerEvents = async () => {
        try {
            const resultado = await clienteAxios.get('/eventos');

            dispatch({
                type: GET_EVENTS,
                payload: resultado
            })
        } catch (error) {
            const alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
            }
            
            dispatch({
                type: EVENTS_ERROR,
                payload: alerta
            })
        }
    } 

    // Selecciona el evento que el usuario dio click
    const eventsActual = (proyectoId: any) => {
        dispatch({
            type: EVENT_ACTUAL,
            payload: proyectoId
        })
    }


    return (
        <eventsContext.Provider
            value={{
                events : state.events,
                event: state.event, 
                message: state.message,
                obtenerEvents,
                eventsActual
            }}
        >
            {props.children}
        </eventsContext.Provider>
        
    )
}

export default EventsState;