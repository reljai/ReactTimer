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
});