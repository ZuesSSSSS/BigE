import React from "react";

class AppContainer extends React.Component {

  render() {
    return (
      <div className="container">
        { this.props.children }
      </div>
    )
  }
}

export default AppContainer
