import React from "react";
import './Box.scss';

const Box = ({ results }) => {

    const { name, email, body } = results

    return <div className="boxMain">
        <div>
            <p className="name">Name: {name}</p>
            <p className="email">Email: {email}</p>
        </div>
        <div>
            <p className="description">Description: {body?.substring(1, 64)}</p>
        </div>
    </div>
};

export default Box;