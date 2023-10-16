// src/app/week5/item-list.js
// Assuming this is a JavaScript file
// Add the "use client" directive to the top of the file
"use client";

import React, { useState } from 'react';
import Item from './item';
import itemsData from './items.json'; // Import the sample data

function ItemList() {
  const [sortBy, setSortBy] = useState('name');
  const [sortedItems, setSortedItems] = useState([...itemsData]);

  const handleSort = (sortingType) => {
    setSortBy(sortingType);
    let sorted = [...sortedItems];
    if (sortingType === 'name') {
      sorted = [...itemsData].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortingType === 'category') {
      sorted = [...itemsData].sort((a, b) => a.category.localeCompare(b.category));
    }
    setSortedItems(sorted);
  };

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between mb-4">
        <button
          onClick={() => handleSort('name')}
          className={`px-4 py-2 rounded-lg ${sortBy === 'name' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => handleSort('category')}
          className={`px-4 py-2 rounded-lg ${sortBy === 'category' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
        >
          Sort by Category
        </button>
      </div>
      {Object.entries(sortedItems.reduce((acc, item) => {
        const category = item.category;
        if (!acc[category]) {
          acc[category] = [];
        }
        acc[category].push(item);
        return acc;
      }, {})).map(([category, itemsInCategory]) => (
        <div key={category} className="mb-4">
          <h2 className="text-2xl font-bold mb-2 text-blue-500">{capitalize(category)}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {itemsInCategory.map((item) => (
              <Item
                key={item.id}
                name={item.name}
                quantity={item.quantity}
                category={item.category}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
