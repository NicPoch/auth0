import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
const UserInfo=()=>{
    const {user} =useAuth0();
    return(
        <div>
            <h3>
                Hello {user.name}
            </h3>
            <h4>Mail: {user.email}</h4>
            <img src={user.picture} alt={user.name} />
        </div>
    );
};

export default UserInfo;