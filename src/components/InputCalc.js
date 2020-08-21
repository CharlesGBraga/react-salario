import React, { Component } from 'react';

export default class InputCalc extends Component {
  render() {
    const { label, value } = this.props;

    const { labelStyles, inputStyles } = styles;

    return (
      <div class="col s4 ">
        <label style={labelStyles}>
          <span>{label}</span>
          <input type="text" disabled value={value} placeholder="0" />
        </label>
      </div>
    );
  }
}

// Estilo do Componente
const styles = {
  labelStyles: {
    // backgroundColor: 'yellow',
    color: 'whiteGrey',
    fontWeight: 'bold',
  },
};
