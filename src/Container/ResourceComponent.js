import { Component } from "react";

export class ResourceComponent extends Component {
  state = {
    loading: false,
    payload: []
  };

  async componentDidMount() {
    this.setState({ loading: true });
    try {
      let response = await fetch(this.props.URL, {
        headers: {
          Accept: "application/json"
        },
        timeout: 2000
      });
      let json = await response.json();
      this.setState({
        loading: false,
        payload: json
      });
    } catch (e) {
      console.log("Err:  ", e);
    }
  }

  render() {
    return this.props.bottle(this.state);
  }
}
