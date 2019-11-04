const formatValue = value => {
  if (value === undefined || value === null) {
    return '--';
  }

  return value.toLocaleString('pt-BR');
};

export {formatValue};
