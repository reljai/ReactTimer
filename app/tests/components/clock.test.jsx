var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Clock = require('Clock');

describe('Clock', function() {
    it('Should exist', function() {
        expect(Clock).toExist();
    });
});

describe('Clock.formatSeconds', () => {
    it('Should format seconds', () => {
        var clock = TestUtils.renderIntoDocument(<Clock/>);
        var seconds = 615;
        var expected = '10:15';
        var actual = clock.formatSeconds(seconds);
        
        expect(actual).toBe(expected);
    });
    
    it('Should format seconds when minutes are less than 10', () => {
        var clock = TestUtils.renderIntoDocument(<Clock/>);
        var seconds = 61;
        var expected = '01:01';
        var actual = clock.formatSeconds(seconds);
        
        expect(actual).toBe(expected);
    });
});