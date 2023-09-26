import React from 'react';
import ItemList from './item-list';

const Page = () => {
  return (
    <main>
      <h1 className="text-2xl font-bold">Shopping List</h1>
      <ItemList />
    </main>
  );
};

export default Page;
