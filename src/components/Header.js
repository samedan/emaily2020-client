import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return 'Loading...';
      case false:
        return (
          <li>
            <a href="/auth/google">Login with Google</a>
          </li>
        );
      default:
        return (
          <Fragment>
            <li>
              <Payments />
            </li>
            <li
              style={{
                marginLeft: '10px',
                marginRight: '10px',
                lineHeight: '15px',
                textAlign: 'center',
                paddingTop: '14px'
              }}
            >
              <span
                style={{ lineHeight: '14px', height: 64, textAlign: 'center' }}
              >
                <div style={{ margin: '0 auto', textAlign: 'left' }}>
                  Credits: <br />
                  <span
                    className="new badge"
                    data-badge-caption="$"
                    style={{
                      margin: '0 auto',
                      textAlign: 'center',
                      backgroundColor: '#ee6e73',
                      fontWeight: 'bold'
                    }}
                  >
                    {this.props.auth.credits}
                  </span>
                </div>
              </span>
            </li>
            <li>
              <a href="/api/logout">Log Out</a>
            </li>
          </Fragment>
        );
    }
  }

  render() {
    return (
      <nav style={{ backgroundColor: this.props.auth ? 'green' : '#ee6e73' }}>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? '/surveys' : '/'}
            className="left brand-logo"
          >
            Emaily
          </Link>
          <ul
            id="nav-mobile"
            className="right"
            //   hide-on-med-and-down
          >
            {/* <li>
              <a href="">Login with Google</a>
            </li> */}
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Header);
