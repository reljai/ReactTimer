var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', () => {
    it('Should exist', () => {
        expect(Timer).toExist();
    });
    
    it('Should init to Stopped and 0 seconds', () => {
        var timer = TestUtils.renderIntoDocument(<Timer/>);
        expect(timer.state.timerStatus).toBe('stopped');
        expect(timer.state.seconds).toBe(0);
    });
    
    it('Should start counting', (done) => {
        var timer = TestUtils.renderIntoDocument(<Timer/>);
        timer.handleStatusChange('started');
        expect(timer.state.timerStatus).toBe('started');
        expect(timer.state.seconds).toBe(0);
        
        setTimeout(() => {
            expect(timer.state.timerStatus).toBe('started');
            expect(timer.state.seconds).toBe(1);
            done();
        }, 1001);
    });
    
    it('Should pause counting and clear state on stopped', (done) => {
        var timer = TestUtils.renderIntoDocument(<Timer/>);
        timer.handleStatusChange('started');
        expect(timer.state.timerStatus).toBe('started');
        expect(timer.state.seconds).toBe(0);
        
        setTimeout(() => {
            expect(timer.state.timerStatus).toBe('started');
            expect(timer.state.seconds).toBe(1);
            timer.handleStatusChange('paused');
            expect(timer.state.timerStatus).toBe('paused');
        }, 1001);
        
        setTimeout(() => {
            expect(timer.state.timerStatus).toBe('paused');
            expect(timer.state.seconds).toBe(1);
            timer.handleStatusChange('stopped');
            expect(timer.state.timerStatus).toBe('stopped');
            expect(timer.state.seconds).toBe(0);
            done();
        }, 3001);
    });
});
