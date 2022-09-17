import React from 'react'

const Categories = ({ categories, filterItems }) => {
    return (
        <div>
            {categories.map((item, index) => {
                return <button type="button" key={index} onClick={() => filterItems(item)}>{item}</button>
            })}
        </div>
    )
}

export default Categories;