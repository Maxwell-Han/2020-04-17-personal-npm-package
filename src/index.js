import React from "react";
function withLogging(WrappedComponent) {
  console.log('React Logger: ', WrappedComponent.displayName)
  return class extends React.Component {
    componentDidUpdate(prevProps) {
      console.log("Current props: ", this.props);
      console.log("Previous props: ", prevProps);
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}
export default withLogging;
