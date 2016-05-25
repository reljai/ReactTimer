var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

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
            }
        }
    },
    
    startTimer: function() {
        this.timer = setInterval(() => {
            var newCount = this.state.seconds > 0 ? this.state.seconds - 1 : 0;
            this.setState({
                seconds: newCount,
            });
            if (newCount === 0) {
                clearInterval(this.timer);
                this.timer = undefined;
                this.setState({
                    countdownStatus: 'stopped',
                })
            }
        }, 1000);
    },
    
    handleSetCountdown: function(seconds) {
        console.log("setting " + seconds + " seconds");
        this.setState({
            seconds: seconds,
            countdownStatus: 'started',
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