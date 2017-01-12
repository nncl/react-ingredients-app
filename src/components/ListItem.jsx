/**
 * @description
 * Just a list item, as much reusable as we can.
 *
 * Javascript comes here: {<HERE>}, inside HTML tag.
 * It is called JSX.
 */

let React = require('react')
    , ListItem = React.createClass({
    render: function () {
        return (
            <li className="dd-m-list__item">
                <h4>{this.props.text}</h4>
            </li>
        );
    }
});

module.exports = ListItem;