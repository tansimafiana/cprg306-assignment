// page.js
import React, { useState } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import MealIdeas from './meal-ideas';

function Page() {
  const [selectedItemName, setSelectedItemName] = useState('');

  function handleItemSelect(item) {
    const cleanedItemName = item.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g, '');
    setSelectedItemName(cleanedItemName);
  }

  return (
    <div>
      <div className="left-panel">
        <NewItem />
        <ItemList onItemSelect={handleItemSelect} />
      </div>
      <div className="right-panel">
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </div>
  );
}

export default Page;
