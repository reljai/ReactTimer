var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var Countdown = React.createClass({
    getInitialState: function() {
        return {
            seconds: 0,
        };
    },
    
    handleSetCountdown: function(seconds) {
        console.log("setting " + seconds + " seconds");
        this.setState({
            seconds: seconds,
        });
    },
    
    render: function() {
        return (
            <div>
                <Clock totalSeconds={this.state.seconds}/>
                <CountdownForm onSetCountdown={this.handleSetCountdown}/>
            </div>
        );
    }
});

module.exports = Countdown;