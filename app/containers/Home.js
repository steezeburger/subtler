import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { TextInput } from 'react-desktop/macOs';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val: '',
    };
  }

  handleChange = (e) => {
    this.setState({ val: e.value });
  }

  render() {
    const { val } = this.state;
    return (
      <div>
        Home page
        <TextInput
          label="Type in this"
          placeholder="Type in this"
          value={val}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
