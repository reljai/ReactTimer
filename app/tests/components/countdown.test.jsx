var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Countdown = require('Countdown');

describe('Countdown', () => {
    it('Should exist', () => {
        expect(Countdown).toExist();
    });
});

describe('handleSetCountdown', () => {
    it('Should set state to started and count down', (done) => {
        var countdown = TestUtils.renderIntoDocument(<Countdown/>);
        countdown.handleSetCountdown(10);
        expect(countdown.state.seconds).toBe(10);
        expect(countdown.state.countdownStatus).toBe('started');
        
        setTimeout(() => {
            expect(countdown.state.seconds).toBe(9);
            done();
        }, 1001);
    });
    
    it('Should not set count down below 0', (done) => {
        var countdown = TestUtils.renderIntoDocument(<Countdown/>);
        countdown.handleSetCountdown(1);
        
        setTimeout(() => {
            expect(countdown.state.seconds).toBe(0);
            done();
        }, 3001);
    });
    
    it('Should pause countdown on Paused status', (done) => {
        var countdown = TestUtils.renderIntoDocument(<Countdown/>);
        countdown.handleSetCountdown(3);
        countdown.handleStatusChange('paused');
        
        setTimeout(() => {
            expect(countdown.state.seconds).toBe(3);
            expect(countdown.state.countdownStatus).toBe('paused');
            done();
        }, 1001);
    });
    
    it('Should stop countdown on Stopped status', (done) => {
        var countdown = TestUtils.renderIntoDocument(<Countdown/>);
        countdown.handleSetCountdown(3);
        countdown.handleStatusChange('stopped');
        
        setTimeout(() => {
            expect(countdown.state.seconds).toBe(0);
            expect(countdown.state.countdownStatus).toBe('stopped');
            done();
        }, 1001);
    });
});