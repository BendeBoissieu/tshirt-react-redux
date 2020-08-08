import React, { Component } from 'react';
import { GoX } from 'react-icons/go';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { displayMenu } from '../actions';

class UploadImage extends Component {
  handleClick = (e) => {
    this.props.displayMenu(e);
  }

  render(){
    return(
      <h3>Upload Image
        <span>
          <GoX style= {{float: "right"}} onClick={(e) => {this.handleClick('')}} />
        </span>
      </h3>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { displayMenu: displayMenu }, dispatch );
};


export default connect(null, mapDispatchToProps) (UploadImage);
