var React = require('react');

var Clock = React.createClass({
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
        return (
            <div>
            </div>
        );
    }
});

module.exports = Clock;