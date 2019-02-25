import React from 'react';
import './styles.css';

class ColorDisplay extends React.PureComponent {
  render(){
    const { color } = this.props;
    return (
      <div className="rectangle">
        <img
          src={`${color}`}
          alt={`hex color: ${color.substring(color.length - 6)}`}
        />
      </div>
    );
  }
}

export default ColorDisplay;