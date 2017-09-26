import React, { Component } from "react";
import { NavItem, Navbar, Nav } from "react-bootstrap";
import { IndexLinkContainer, LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export class NavBar extends Component {

  static get propTypes(){
    return {
      config: PropTypes.object.isRequired,
    }
  }

  createLinkContainer(c, i){
    return (
      <LinkContainer key={i} to={c.link} activeHref="active">
        <NavItem>{c.title}</NavItem>
      </LinkContainer>
    )
  }
  createIndexContainer(c, i){
    return (
      <IndexLinkContainer key={i} to={c.link} activeHref="active">
        <NavItem>{c.title}</NavItem>
      </IndexLinkContainer>
    )
  }

  render() {
    let titleSrc = this.props.config.titleSrc;
    let categories = this.props.config.categories;

    let categoryComponents = categories.map((c, i) => {
      return (i === 0) ? this.createIndexContainer(c ,i) : this.createLinkContainer(c, i);
    });

    return (
      <Navbar className="navbar navbar-default navbar-pf">
        <Navbar.Header>
          <Navbar.Toggle/>
          <Link className="navbar-brand" to="/">
            <img src={titleSrc.path} alt={titleSrc.alt}/>
          </Link>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav className="navbar-nav navbar-primary" >
            {categoryComponents}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
