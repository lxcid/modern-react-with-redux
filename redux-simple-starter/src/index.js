import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

import config from './config';

const API_KEY = config.youtube.API_KEY;

// Create a new component. This component should produce some HTML
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
