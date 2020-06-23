import { 
    GET_EVENTS,
} from '../../types';

export default (state: any, action: any) => {
    switch(action.type) {
        case GET_EVENTS:
            return {
                ...state,
                events: action.payload
            }
        default:
            return state;
    }
}