import React from 'react'
import './Categories.css'

const Categories = ({ categories, filterItems }) => {
    return (
        <div className='categories-box'>
            {categories.map((item, index) => {
                return <button className='categorie-btn' type="button" key={index} onClick={() => filterItems(item)}>{item}</button>
            })}
        </div>
    )
}

export default Categories;