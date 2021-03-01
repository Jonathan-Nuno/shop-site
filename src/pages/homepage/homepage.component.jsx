import React from 'react';

// Components
import Directory from '../../components/directory/directory.component';

import './homepage.styles.scss';

// arrow function because we don't need lifecycle method or store state
const Homepage = () => (
    <div className='homepage'>
        <Directory />
    </div>
);

export default Homepage;