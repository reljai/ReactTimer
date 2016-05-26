var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

var Countdown = React.createClass({
    getInitialState: function() {
        return {
            seconds: 0,
            countdownStatus: 'stopped',
        };
    },
    
    componentDidUpdate: function(prevProps, prevState) {
        if (this.state.countdownStatus !== prevState.countdownStatus) {
            switch (this.state.countdownStatus) {
                case 'started':
                    this.startTimer();
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
        clearInterval(this.timer);
        this.timer = undefined;
    },
    
    startTimer: function() {
        this.timer = setInterval(() => {
            var newCount = this.state.seconds > 0 ? this.state.seconds - 1 : 0;
            this.setState({
                seconds: newCount,
            });
            if (newCount === 0) {
                this.setState({
                    countdownStatus: 'stopped',
                })
            }
        }, 1000);
    },
    
    handleSetCountdown: function(seconds) {
        this.setState({
            seconds: seconds,
            countdownStatus: 'started',
        });
    },
    
    handleStatusChange: function(newStatus) {
        this.setState({countdownStatus : newStatus});
    },
    
    render: function() {
        var {countdownStatus} = this.state;
        var renderControlArea = () => {
            if (countdownStatus !== 'stopped') {
                return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>;
            } else {
                return <CountdownForm onSetCountdown={this.handleSetCountdown}/>;
            }
        };
        
        return (
            <div>
                <h1 className="page-title">Countdown App</h1>
                <Clock totalSeconds={this.state.seconds}/>
                {renderControlArea()}
            </div>
        );
    }
});

module.exports = Countdown;