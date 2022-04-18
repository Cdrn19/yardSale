import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './routes/App';

const containers = document.getElementById('app');
const root = createRoot(containers);
root.render(<App />);