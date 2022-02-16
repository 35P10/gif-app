import React, { useState } from 'react';
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {
    const [inputCategory, setInputCategory] = useState("");

    const handleCategoryChange = ({target}) =>{
        setInputCategory(target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault(); //evitar que la pagina se actualize al presionar Enter en el input
        if(inputCategory.trim().length>2){
            setCategories( categories =>
                [inputCategory,...categories] 
            )
            setInputCategory("");
        }
    } 

    return (        
        <form onSubmit={handleSubmit}>
            <input
                type = "text"
                value={inputCategory}
                onChange={handleCategoryChange}
            />
        </form>
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
};