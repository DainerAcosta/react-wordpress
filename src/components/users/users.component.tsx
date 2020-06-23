import React, {useEffect, Fragment} from 'react';
import User from './user.component';

const UsersComponent = () => {

    useEffect(() => {

    }, []);

    return (
        <Fragment>
            <h1>Hola desde users component</h1>
            <User/>
        </Fragment>
     );
}
 
export default UsersComponent;