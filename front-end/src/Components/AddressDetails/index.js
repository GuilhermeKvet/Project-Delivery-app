import React, { useEffect, useState } from 'react';

function Address() {
  const selectValues = [
    {
      id: 1,
      name: 'Fulana Pereira',
      email: 'fulana@deliveryapp.com',
    }];

  const [buyInfo, setBuyInfo] = useState({
    sellerId: selectValues[0].id,
    address: '',
    number: '',
  });

  useEffect(() => {
    localStorage.setItem('buyInfo', JSON.stringify(buyInfo));
  }, [buyInfo]);

  const updateSeller = (id) => {
    setBuyInfo((prevState) => ({ ...prevState, sellerId: id }));
    localStorage.setItem('buyInfo', JSON.stringify(buyInfo));
  };

  const updateAddress = (ad) => {
    setBuyInfo((prevState) => ({ ...prevState, address: ad }));
    localStorage.setItem('buyInfo', JSON.stringify(buyInfo));
  };

  const updateNumber = (num) => {
    setBuyInfo((prevState) => ({ ...prevState, number: num }));
    localStorage.setItem('buyInfo', JSON.stringify(buyInfo));
  };

  return (
    <div className="AdressDetails">
      <label htmlFor="customerSelect">
        P.vendedora
        <select
          id="customerSelect"
          data-testid="customer_checkout__select-seller"
        >
          {selectValues.map((valor, index) => (
            <option
              value={ valor.id }
              key={ `${index}` }
              onClick={ (e) => updateSeller(e.value) }
            >
              { valor.name }
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="inputEndereco">
        Endereco
        <input
          id="inputEndereco"
          data-testid="customer_checkout__input-address"
          type="text"
          onChange={ (e) => updateAddress(e.target.value) }
        />
      </label>
      <label htmlFor="inputNumero">
        Numero
        <input
          id="inputNumero"
          data-testid="customer_checkout__input-address-number"
          type="number"
          onChange={ (e) => updateNumber(e.target.value) }
        />
      </label>
    </div>
  );
}

export default Address;
