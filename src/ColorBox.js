import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
             {this.props.opacity >= 0.2 ? <ColorBox opacity={this.props.opacity - 0.1} /> : null}
           </div>
      // <div className="color-box" style={this.props.opacity}>
      //     const
      //     if (this.props.opacity >= 0.2) {
      //       <ColorBox opacity={this.props.opacity - 0.1} />
      //     } else {
      //       null
      //     }
      // </div>
    )
  }
}
