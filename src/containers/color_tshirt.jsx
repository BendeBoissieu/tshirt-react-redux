import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectColor } from '../actions';

class ColorTshirt extends Component {
  handleClick = () => {
    if(this.props.selectColor){this.props.selectColor(this.props.color);}
  }

  render(){
    let classesColors = "color-preview";
    if (this.props.color.id == this.props.selectedColor) {
      classesColors += " color-selected"
    }
    return(
      <div>
        <li className={classesColors}  style={{backgroundColor: this.props.color.id }} onClick={this.handleClick}></li>
      </div>);
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectColor }, dispatch );
};


//The reduxState can go directly to the react props then we can have access to this.props.colors
function mapStateToProps(store) {
  return {
    selectedColor: store.selectedColorReducer
  };
}

export default connect(mapStateToProps, mapDispatchToProps) (ColorTshirt);
