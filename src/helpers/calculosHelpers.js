const faixasalario01 = 1045;
const faixasalario02 = 2089.6;
const faixasalario03 = 3134.4;

let porcentInss = 0;
let porcentIrpf = 0;
let porcentSalarioLiquido = 0;

//Arredondando valor
function round(descontoInss) {
  return +descontoInss.toFixed(2);
}

//Calculando INSS
function calculoInss(salario) {
  console.log(salario);

  if (salario > 0 && salario <= 1045 && salario != 'undefined') {
    let descontoInss = 0;
    let irpf = 0;
    let salarioliquido = 0;

    descontoInss = round(salario * 0.075);

    irpf = calculoIrpf(salario - descontoInss);
    const { baseIrpf, descontoIrpf } = irpf;

    salarioliquido = round(salario - descontoInss - descontoIrpf);

    porcentInss = (descontoInss / salario) * 100;
    porcentIrpf = (descontoIrpf / salario) * 100;
    porcentSalarioLiquido = (salarioliquido / salario) * 100;

    return {
      baseInss: salario,
      descontoInss: descontoInss,
      salarioliquido: salarioliquido,
      baseIrpf: baseIrpf,
      descontoIrpf: descontoIrpf,
      bar1: porcentInss,
      bar2: porcentIrpf,
      bar3: porcentSalarioLiquido,
    };
  } else if (salario <= 2089.6 && salario > 1045.01) {
    let descontoInss = 0;
    let irpf = 0;
    let salarioliquido = 0;
    //prettier-ignore
    let descTemp = faixasalario01 * 0.075;
    descTemp += (salario - faixasalario01) * 0.09;
    descontoInss = round(descTemp);

    irpf = calculoIrpf(salario - descontoInss);
    const { baseIrpf, descontoIrpf } = irpf;

    salarioliquido = round(salario - descontoInss - descontoIrpf);

    porcentInss = round((descontoInss / salario) * 100);
    porcentIrpf = round((descontoIrpf / salario) * 100);
    porcentSalarioLiquido = round((salarioliquido / salario) * 100);

    return {
      baseInss: salario,
      descontoInss: descontoInss,
      salarioliquido: salarioliquido,
      baseIrpf: baseIrpf,
      descontoIrpf: descontoIrpf,
      bar1: porcentInss,
      bar2: porcentIrpf,
      bar3: porcentSalarioLiquido,
    };
  } else if (salario <= 3134.4 && salario > 2089.61) {
    let descontoInss = 0;
    let irpf = 0;
    let salarioliquido = 0;
    //prettier-ignore
    let descTemp = faixasalario01 * 0.075;
    descTemp += (faixasalario02 - faixasalario01) * 0.09;
    descTemp += (salario - faixasalario02) * 0.12;
    descontoInss = round(descTemp);

    irpf = calculoIrpf(salario - descontoInss);
    const { baseIrpf, descontoIrpf } = irpf;

    salarioliquido = round(salario - descontoInss - descontoIrpf);

    porcentInss = round((descontoInss / salario) * 100);
    porcentIrpf = round((descontoIrpf / salario) * 100);
    porcentSalarioLiquido = round((salarioliquido / salario) * 100);

    return {
      baseInss: salario,
      descontoInss: descontoInss,
      salarioliquido: salarioliquido,
      baseIrpf: baseIrpf,
      descontoIrpf: descontoIrpf,
      bar1: porcentInss,
      bar2: porcentIrpf,
      bar3: porcentSalarioLiquido,
    };
  } else if (salario > 3134.41) {
    let descontoInss = 0;
    let irpf = 0;
    let salarioliquido = 0;
    //prettier-ignore
    let descTemp = faixasalario01 * 0.075;
    descTemp += (faixasalario02 - faixasalario01) * 0.09;
    descTemp += (faixasalario03 - faixasalario02) * 0.12;
    descTemp += (salario - faixasalario03) * 0.14;

    if (descTemp >= 713.1) {
      descontoInss = 713.1;
    } else {
      descontoInss = round(descTemp);
    }

    irpf = calculoIrpf(salario - descontoInss);
    const { baseIrpf, descontoIrpf } = irpf;

    salarioliquido = round(salario - descontoInss - descontoIrpf);

    porcentInss = round((descontoInss / salario) * 100);
    porcentIrpf = round((descontoIrpf / salario) * 100);
    porcentSalarioLiquido = round((salarioliquido / salario) * 100);

    return {
      baseInss: salario,
      descontoInss: descontoInss,
      salarioliquido: salarioliquido,
      baseIrpf: baseIrpf,
      descontoIrpf: descontoIrpf,
      bar1: porcentInss,
      bar2: porcentIrpf,
      bar3: porcentSalarioLiquido,
    };
  } else {
    return {
      baseInss: 0,
      descontoInss: 0,
      salarioliquido: 0,
      baseIrpf: 0,
      descontoIrpf: 0,
      bar1: 0,
      bar2: 0,
      bar3: 0,
    };
  }
}

//Calculo IRPF
function calculoIrpf(salarioInss) {
  let descontoIrpf = 0;

  if (salarioInss <= 1903.98 && salarioInss > 0) {
    return {
      baseIrpf: 1903.98,
      descontoIrpf: 0,
    };
  } else if (salarioInss <= 2826.65 && salarioInss > 1903.99) {
    let descTemp = salarioInss * 0.075 - 142.8;
    descontoIrpf = round(descTemp);

    return {
      baseIrpf: 2826.65,
      descontoIrpf: descontoIrpf,
    };
  } else if (salarioInss <= 3751.05 && salarioInss > 2826.65) {
    let descTemp = salarioInss * 0.15 - 354.8;
    descontoIrpf = round(descTemp);

    return {
      baseIrpf: 3751.05,
      descontoIrpf: descontoIrpf,
    };
  } else if (salarioInss <= 4664.68 && salarioInss > 3751.05) {
    let descTemp = salarioInss * 0.225 - 636.13;
    descontoIrpf = round(descTemp);

    return {
      baseIrpf: 4664.68,
      descontoIrpf: descontoIrpf,
    };
  } else if (salarioInss > 4664.69) {
    let descTemp = salarioInss * 0.275 - 869.36;
    descontoIrpf = round(descTemp);

    return {
      baseIrpf: 4664.69,
      descontoIrpf: descontoIrpf,
    };
  } else {
    return {
      baseIrpf: 0,
      descontoIrpf: 0,
    };
  }
}

export { calculoInss, calculoIrpf };
