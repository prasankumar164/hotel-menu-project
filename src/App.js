import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';


const allButtons = [ 'all', ...new Set (items.map((item) => item.category))]
console.log(allButtons)

function App() {
  const [menuItems,setMenuItems] = useState(items)
  const [category, setCategory] = useState(allButtons)

    const filterItems = (category) => {

      if(category === 'all') {
        return setMenuItems(items)
        return;
      }

      let newItems = items.filter((item) => item.category == category)
      return setMenuItems(newItems)
    }

  


  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterItems={filterItems} categories={category} />
        <Menu items={menuItems} />
      </section>
    </main>
  )
}

export default App;
