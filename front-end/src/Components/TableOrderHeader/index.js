function TableOrderHeader(prop) {
  const { isEditable } = prop;

  return (
    <thead>
      <tr>
        <th>Item</th>
        <th>Descrição</th>
        <th>Quantidade</th>
        <th>Valor Unitário</th>
        <th>Sub-total</th>
        {isEditable
        && (<th>Remover Item</th>)}
      </tr>
    </thead>
  );
}

export default TableOrderHeader;
