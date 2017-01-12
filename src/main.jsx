let React = require('react')
    , ReactDOM = require('react-dom')
    , ListManager = require('./components/ListManager.jsx');

// render into screen
ReactDOM.render(<ListManager title="Ingredients"/>, document.getElementById('l-ingredients'));
ReactDOM.render(<ListManager title="ToDo"/>, document.getElementById('l-todo'));
ReactDOM.render(<ListManager title="XMAS" headingColor="#a00"/>, document.getElementById('l-xmas'));