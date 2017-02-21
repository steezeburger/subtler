// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import styles from './Welcome.css';

class HomePage extends Component {
  render() {
    return (
      <div>
        <div className={styles.container}>
          <h2>Welcome to Subtler</h2>
          <Link to="/home">home</Link>
        </div>
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
)(HomePage);
