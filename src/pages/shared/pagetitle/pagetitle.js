import React, { Component } from 'react';
import './pagetitle.css';

class PageTitle extends Component {
  render() {
    return (
        <div className="page-title">
            <h3>{this.props.title}</h3>
        </div>
    );
  }
}

export default PageTitle;
