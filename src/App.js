import React from 'react';
import InputCalc from './components/InputCalc';
import { calculoInss } from './helpers/calculosHelpers';
import Bar from '../src/components/Bar';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      calculos: {
        salarioBruto: 0,
        baseInss: 0,
        descontoInss: 0,
        baseIrpf: 0,
        descontoIrpf: 0,
        salarioLiquido: 0,
        bar1: 0,
        bar2: 0,
        bar3: 0,
      },
    };
  }

  handleInputChange = (event) => {
    const salarioInput = event.target.value;
    const calc = calculoInss(salarioInput);

    const {
      baseInss,
      descontoInss,
      salarioliquido,
      baseIrpf,
      descontoIrpf,
      bar1,
      bar2,
      bar3,
    } = calc;

    this.setState({
      salarioBruto: Number(salarioInput),
      baseInss: Number(baseInss),
      descontoInss: Number(descontoInss),
      baseIrpf: Number(baseIrpf),
      descontoIrpf: Number(descontoIrpf),
      salarioLiquido: Number(salarioliquido),
      bar1: Number(bar1),
      bar2: Number(bar2),
      bar3: Number(bar3),
    });
  };

  render() {
    const {
      baseInss,
      descontoInss,
      baseIrpf,
      descontoIrpf,
      salarioLiquido,
      bar1,
      bar2,
      bar3,
    } = this.state;

    return (
      <div class="container">
        <h1>React Salário</h1>
        <label>
          <span style={{ color: 'green' }}>Salário (R$)</span>
          <input
            type="number"
            placeholder="Salário Bruto"
            onChange={this.handleInputChange}
            step="100"
          />
        </label>

        <div class="row">
          {/* prettier-ignore */}
          <InputCalc label="Base INSS (R$)" value={baseInss} color="black"/>
          <InputCalc
            label="Desconto INSS (R$)"
            value={descontoInss}
            color="orange"
          />
          <InputCalc label="Base IRPF (R$)" value={baseIrpf} color="black" />
          <InputCalc
            label="Desconto IRPF (R$)"
            value={descontoIrpf}
            color="red"
          />
          <InputCalc
            label="Salário Líquido (R$)"
            value={salarioLiquido}
            color="green"
          />
        </div>
        {/* //prettier-ignore */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Bar value={bar1} color="orange" />
          <Bar value={bar2} color="red" />
          <Bar value={bar3} color="green" />
        </div>
      </div>
    );
  }
}
