var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = () => {
    return (
        <div className="top-bar">
            <div className="top-bar-left">
                <ul className="menu">
                    <li className="menu-text">React Timer</li>
                    <li>
                        <IndexLink to="foo" activeClassName="active-link">Timer</IndexLink>
                    </li>
                    <li>
                        <Link to="foo" activeClassName="active-link">Countdown</Link>
                    </li>
                </ul>
            </div>
            <div className="top-bar-right">
                <ul className="menu">
                    <li className="menu-text">Created by reljai</li>
                </ul>
            </div>
        </div>
    );
};

module.exports = Nav;

/*
                    <li>
                        <IndexLink to="foo" activeClassName="active-link">Timer</IndexLink>
                    </li>
                    <li>
                        <Link to="foo" activeClassName="active-link">Countdown</Link>
                    </li>
*/