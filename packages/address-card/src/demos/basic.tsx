import React from 'react';
import AddressCard from '@miner-mobile/address-card';
import './index.less';

export default () => {
  return (
    <div className="demo_addr_card">
      <AddressCard.Card
        name="福小豆"
        phone="13856782828"
        address=""
        onClick={() => {
          console.warn('onClick');
        }}
      />
    </div>
  );
};
