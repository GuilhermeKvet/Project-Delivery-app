const color = (status) => {
  if (status === 'Pendente') {
    return 'orange';
  }
  if (status === 'Em Trânsito') {
    return 'green';
  }
  if (status === 'Preparando') {
    return 'greenyellow';
  }
  if (status === 'Entregue') {
    return 'turquoise';
  }
};

export default color;
