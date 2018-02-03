import React from 'react';
import { render } from 'react-dom';

// STYLING
import './index.css';

// COMPONENTS
import App from './components/App';
import Title from './components/Title';
import Form from './components/Form';
import Weather from './components/Weather';

render(<App />, document.getElementById('root'));
