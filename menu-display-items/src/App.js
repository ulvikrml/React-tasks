import './App.css';
import menu from './data';
import Categories from './Categories';
import Menu from './Menu';
import { useState } from 'react'

function App() {
  const [items, setItems] = useState(menu);
  const categorieNames = ['all', ...new Set(menu.map(item => item.category))]
  const filterItems = (categorie) => {
    if (categorie === 'all') { return setItems(menu) }
    setItems(menu.filter(item => item.category === categorie))
  }
  return (
    <div>
      <div className="title">
        <h2>Our Menu</h2>
      </div>
      <Categories categories={categorieNames} filterItems={filterItems} />
      <Menu items={items} />
    </div>
  );
}

export default App;