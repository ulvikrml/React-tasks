import './App.css';
import menu from './data';
import Categories from './components/Categories';
import Menu from './components/Menu';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState(menu);
  const categorieNames = ['all', ...new Set(menu.map(item => item.category))]
  const filterItems = (categorie) => {
    if (categorie === 'all') { return setItems(menu) }
    setItems(menu.filter(item => item.category === categorie))
  }
  return (
    <div className='main'>
      <div className="title">
        <h2>Our Menu</h2>
      </div>
      <Categories categories={categorieNames} filterItems={filterItems} />
      <Menu items={items} />
    </div>
  );
}

export default App;