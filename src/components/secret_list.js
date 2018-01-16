import React from 'react';
import auth from '../hoc/auth';

const SecretList =  props => (
    <div>
        <h2 className="align-center">Secret Operatives</h2>
        <ol>
            <li>Heather</li>
            <li>Mike</li>
            <li>Tammy</li>
            <li>Bob</li>
            <li>Barbara</li>
            <li>Billy</li>
        </ol>
    </div>
);

export default auth(SecretList);

