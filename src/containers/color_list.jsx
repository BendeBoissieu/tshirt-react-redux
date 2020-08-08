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
            return <ColorTshirt key={color.name} color={color}/>
          })}
        </ul>
      </div>);
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setColors: setColors }, dispatch );
};


//The reduxState can go directly to the react props then we can have access to this.props.colors
function mapStateToProps(state) {
  return {
    colors: state.colors
  };
}

export default connect(mapStateToProps, mapDispatchToProps) (ColorList);
