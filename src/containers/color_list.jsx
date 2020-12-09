import React, { Component } from 'react';
import App from '../components/app';
import ColorTshirt from './color_tshirt';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setColors } from '../actions';
import { selectColor } from '../actions';

class ColorList extends Component {
  componentWillMount() {
    this.props.setColors(); //it trigger an action
  }

  render(){
    return(
      <div className="colors">
        <p>Choose Color</p>
        <ul className="nav" onClick={this.props.changeTshirtColor}>
          {this.props.colors.map((color) => {
            return <ColorTshirt key={color.id} color={color}/>
          })}
        </ul>
      </div>);
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setColors: setColors }, dispatch );
};


function mapStateToProps(store) {
  return {
    colors: store.colorsReducer.colors
  };
}

export default connect(mapStateToProps, mapDispatchToProps) (ColorList);
