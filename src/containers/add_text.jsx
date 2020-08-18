import React, { Component } from 'react';
import { GoX } from 'react-icons/go';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { displayMenu } from '../actions';

class AddText extends Component {
  handleClick = (e) => {
    this.props.displayMenu(e);
  }

  render(){
    return(
      <div>
        <h3>Add Text
          <span>
            <GoX style= {{float: "right"}} onClick={(e) => {this.handleClick('')}} />
          </span>
        </h3>
        <div className="container-add-text">
          <textarea className="text-input apply-font" style={{width: '100%'}} placeholder='Your text'></textarea>
          <div className="font-input">
            Font family
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { displayMenu: displayMenu }, dispatch );
};


export default connect(null, mapDispatchToProps) (AddText);
