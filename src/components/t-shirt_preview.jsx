import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class TshirtPreview extends Component {
  render(){
    var url_tshirt = '../public/images/shirt2.png';
    const tshirt_card_style = {
      backgroundImage: `url(${url_tshirt})`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      height: '300px',
      width: '252px',
      margin: 'auto',
      backgroundColor: `${this.props.selectedColor}`
    }
    const src = `.././public/images/art_word/${this.props.selectedImgArt}.svg`;
    return (
      <div className="tshirt_card" style={tshirt_card_style}>
        <h1>{this.props.selectedImgArt}</h1>
         <img src={src} dataimage={this.props.name} alt={this.props.name} width="100px" />
      </div>
    );
  }
};

//The reduxState can go directly to the react props then we can have access to this.props.colors
function mapStateToProps(state) {
  return {
    selectedColor: state.selectedColor,
    selectedImgArt: state.imgArt
  };
}

export default connect(mapStateToProps) (TshirtPreview);
