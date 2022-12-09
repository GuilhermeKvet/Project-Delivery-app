import React, { useEffect, useState } from 'react';

function Address() {
  const [vendedora, setVendedora] = useState('');
  const [endereco, setEndereco] = useState('');
  const [numero, setNumero] = useState('');

  useEffect(() => {
    const address = {
      vendedora,
      endereco,
      numero,
    };
    localStorage.setItem('address', JSON.stringify(address));
  }, [vendedora, endereco, numero]);

  return (
    <div>
      P.vendedora
      <select
        data-testid="customer_checkout__select-seller"
        onChange={ (e) => setVendedora(e.value) }
      >
        <option value="fulana pereira">Volvo</option>
      </select>
      <br />
      <br />
      Endereco
      <input
        data-testid="customer_checkout__input-address"
        type="text"
        onChange={ (e) => setEndereco(e.value) }
      />
      <br />
      <br />
      numero
      <input
        data-testid="customer_checkout__input-address-number"
        type="number"
        onChange={ (e) => setNumero(e.value) }
      />
    </div>
  );
}

export default Address;
