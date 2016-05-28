var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({
    getInitialState: function() {
        return {
            seconds: 0,
            timerStatus: 'stopped',         
        };
    },
    
    handleStatusChange: function(newStatus) {
        this.setState({timerStatus: newStatus});
    },
    
    componentDidUpdate: function(prevProps, prevState) {
        if (this.state.timerStatus !== prevState.timerStatus) {
            switch (this.state.timerStatus) {
                case 'started':
                    this.timer = setInterval(() => {
                        this.setState({seconds: this.state.seconds + 1});
                    }, 1000);
                    break;
                case 'stopped':
                    this.setState({seconds: 0});
                case 'paused':
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
            }
        }
    },
    
    componentWillUnmount: function() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = undefined;
        }
    },
    
    render: function() {
        var {timerStatus} = this.state;
        return (
            <div>
                <h1 className="page-title">Timer App</h1>
                <Clock totalSeconds={this.state.seconds}/>
                <Controls timerStatus={timerStatus} onStatusChange={this.handleStatusChange}/>
            </div>
        );
    },
});

module.exports = Timer;