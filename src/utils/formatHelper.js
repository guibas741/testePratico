const formatValue = value => {
  if (value === undefined || value === null) {
    return '--';
  }

  return value.toLocaleString('pt-BR');
};

const convertMonthNumberToStr = month => {
  console.log({month});
  const numberToMonth = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];
  return numberToMonth[month];
};

export {formatValue, convertMonthNumberToStr};
