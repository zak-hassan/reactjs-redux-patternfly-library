import React, { Component } from "react";
import { clearMessage } from "../message/messageActions";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import NavBar from "../navBar/components/NavBar.jsx";
import Message from "../message/container/Message.jsx";

class App extends Component {

  static get propTypes() {
    return {
      // Config Props, inherited from parent
      viewsConfig: PropTypes.array.isRequired,
      navbarConfig: PropTypes.object.isRequired,
    }
  }

  _createSwitches(){
    return (
      this.props.viewsConfig.map((view, i) => {
          return (
            <Switch key={i}>
              <Route exact path={view.path} component={view.component}/>
            </Switch>
          )
        }
      )
    )
  }

  render() {
    return (
      <Router>
        <div className="app">
          <NavBar config={this.props.navbarConfig}/>
          <Message/>
          {this._createSwitches()}
        </div>
      </Router>
    );
  }
}

export default App;
