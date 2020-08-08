import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { displayMenu, selectImgArt } from '../actions';

class ImgDesign extends Component {
  shouldComponentUpdate(nextProps, nextState){
    return nextProps.name != this.props.name; //don t call render is props not changed
  }
  selectImg = () => {
    this.props.selectImgArt(this.props.name);
  }

  render(){
    if (!this.props.name) {
      return null;
    }
    const src = `.././public/images/art_word/${this.props.name}.svg`;
    return(
      <div className="col-md-3 col-xs-6">
        <img src={src} dataimage={this.props.name} alt={this.props.name} width="100px" onClick={this.selectImg}/>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectImgArt: selectImgArt }, dispatch );
};

export default connect(null, mapDispatchToProps) (ImgDesign);
