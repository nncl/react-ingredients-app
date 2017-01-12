/**
 * @description
 * Magic is gonna happen here.
 */

let React = require('react')
    , List = require("./List.jsx")
    // This class can receive user input, so thats why this one will be kind of different
    , ListManager = React.createClass({
        getInitialState: function () {
            // Every component call this property when it first loads, it looks like
            // run in AngularJS, but just for this component, not for the hole app

            return {
                items: [],
                newItemText: ''
            }
        },

        onChange: function (e) {
            this.setState({newItemText: e.target.value});
        },

        // call when button is pressed
        // @param e Element
        handleSubmit: function (e) {
            e.preventDefault();

            /*
             * Remember about this.props? Those are used just read only
             * this.state you use when the data can change, mutate data
             */
            let currentItems = this.state.items;

            currentItems.push(this.state.newItemText);

            // Reset view
            this.setState({items: currentItems, newItemText: ''});
        },
        render: function () {

            // var defining styles
            var divStyle = {
                marginTop: 10
            };

            var headingStyle = {};

            if (this.props.headingColor) {
                headingStyle.background = this.props.headingColor;
            }

            return (
                <div style={divStyle} className="col-sm-4">
                    {/*reusable stuff here, so do not hardcode the title here*/}
                    <div className="panel panel-primary">
                        <div style={headingStyle} className="panel-heading">
                            <h3>{this.props.title}</h3>
                        </div>
                        <div className="row panel-body">
                            <form onSubmit={this.handleSubmit}>
                                <div className="col-sm-9">
                                    <input className="form-control" onChange={this.onChange}
                                           value={this.state.newItemText}/>
                                </div>
                                <div className="col-sm-2">
                                    <button className="btn btn-primary">Add</button>
                                </div>
                            </form>
                        </div>

                        <List items={this.state.items}/>

                    </div>
                </div>
            )
        }
    });

module.exports = ListManager;