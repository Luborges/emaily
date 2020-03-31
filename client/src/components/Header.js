import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
    renderContent () {
        const { auth } = this.props;

        if (auth==null) {
            return '';
        }
        else if (auth===false) {
            return (
                <li><a href='/auth/google'>Login With Google</a></li>
            );
        }
        else {
            return [
                <li key='payment'><Payments /></li>,
                <li key='credits' style={{ margin: '0px 10px' }}>
                    Credits: {auth.credits}
                </li>,
                <li key='logout'><a href='/api/logout'>Logout</a></li>
            ];
        }
    }

    render () {
        const { auth } = this.props;
        return (
            <nav>
                <div className='nav-wrapper'>
                    <Link to={auth ? '/surveys' : '/'} className='left brand-logo'>
                        Emaily
                    </Link>
                    <ul className='right'>
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        )
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Header);