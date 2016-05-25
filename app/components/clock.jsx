var React = require('react');

var Clock = React.createClass({
    getDefaultProps: function() {
        return {
            totalSeconds: 0
        };
    },
    
    propTypes: {
        totalSeconds: React.PropTypes.number
    },
    
    componentWillReceiveProps: function(newProps) {
        console.log('getting ' + newProps.totalSeconds + ' seconds');
    },
    
    formatSeconds: function(seconds) {
        var secs = seconds % 60;
        var mins = Math.floor(seconds / 60);
        
        if (secs < 10) {
            secs = '0' + secs;
        }
        
        if (mins < 10) {
            mins = '0' + mins;
        }
        return mins + ":" + secs;
    },
    
    render: function() {
        var { totalSeconds } = this.props;
        return (
            <div className="clock">
                <span className="clock-text">
                    {this.formatSeconds(totalSeconds)}
                </span>
            </div>
        );
    }
});

module.exports = Clock;