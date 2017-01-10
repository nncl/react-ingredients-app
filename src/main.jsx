let React = require('react')
    , ReactDOM = require('react-dom')
    , ListManager = require('./components/ListManager.jsx');

// render into screen
ReactDOM.render(<ListManager title="Ingredients"/>, document.getElementById('l-ingredients'));