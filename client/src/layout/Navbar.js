import React from 'react';
import styled from 'styled-components';
import Button from '../components/UI/Button';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

const Navbar = styled.nav`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
  height: 100px;

  h1 {
    font-size: 3.5rem;
    font-weight: 600;
    background: -webkit-linear-gradient(30deg, #4600ff, #ff0000);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
// `;

// const NavBar = () => (
//   <Navbar>
//     <h1 children="QUILT" />
//     <Button>
//       Login 
//     </Button>
//   </Navbar>
// );


class NavBar extends React.Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <Button><a href="/auth/google">Login With Google</a></Button>
      default:
        return [
          <li key="1"><Payments /></li>,
          <li key="3" style={{ margin: '0 10px' }}>
            Credits: {this.props.auth.credits}
          </li>,
          <li key="2"> <Button><a href="/api/logout">Logout</a></Button></li>
        ];
    }
  }

  render() {
    return (
      // <h1 children="QUILT" />
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? '/' : '/'}
            className="left brand-logo">
            <h1 children="QUILT" />
          </Link>
          <ul className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}


export default connect(mapStateToProps)(NavBar)
