import React, { Component } from "react";
import { clearMessage } from "../message/messageActions";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import NavBar from "../navBar/components/NavBar.jsx";
import Message from "../message/components/Message.jsx";

class App extends Component {

  static get propTypes() {
    return {
      // Message Component props
      message: PropTypes.string,
      messageType: PropTypes.string,
      icon: PropTypes.string,
      visible: PropTypes.bool,
      clearMessage: PropTypes.func,

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
          <Message message={this.props.message}
                   messageType={this.props.messageType}
                   icon={this.props.icon}
                   visible={this.props.visible}
                   clearMessage={this.props.clearMessage}/>
          {this._createSwitches()}
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    message: state.messageReducer.message,
    messageType: state.messageReducer.messageType,
    icon: state.messageReducer.icon,
    visible: state.messageReducer.visible,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearMessage: () => {
      dispatch(clearMessage())
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
