/**
 * @description
 * Unique identifiers to list items.
 */

let React = require("react")
    , ListItem = require("./ListItem.jsx")
    , List = React.createClass({
    render: function () {

        // Is called for every item in array
        let createItem = function (text, index) {
            return <ListItem key={index + text} text={text}/>
        };

        // Lets retrieve all items to create them here
        // Items wasn't created yet, it'll come from list manager component as well
        return (
            <ul>
                {this.props.items.map(createItem)}
            </ul>
        );

    }
});

module.exports = List;