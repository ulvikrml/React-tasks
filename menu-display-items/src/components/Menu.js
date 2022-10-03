import React from 'react'
import './Menu.css'

const Menu = ({ items }) => {
    return (
        <div className='menu-container'>
            {items.map(item => {
                return <div key={item.id} className='menu-item'>
                    <img src={item.img} alt={item.title} className='photo' />
                    <div className='item-info'>
                        <header>
                            <h4 className='item-title'>{item.title}</h4>
                            <h4 className='price'>${item.price}</h4>
                        </header>
                        <p className='item-text'>{item.desc}</p>
                    </div>
                </div>
            })}
        </div>
    )
}

export default Menu;