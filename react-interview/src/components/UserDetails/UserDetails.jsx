import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext} from '../Home/Home';

const UserDetails = () => {
    const {id} = useParams();
    const users = useContext(UserContext);
    console.log('hello',users);

    return (
        <div>
            <h2>Hello dynamic url</h2>
        </div>
    );
};

export default UserDetails;