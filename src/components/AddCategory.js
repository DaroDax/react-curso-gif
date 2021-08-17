import React, {useState} from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ( {setCategories} ) => {
    
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = ( e ) =>{
        setInputValue(e.target.value);
    }

    const handleSubmit = ( e ) => {
        e.preventDefault(); //Evita que se realice el recargo en un submit
        
        if(inputValue.trim().length > 2){
            setCategories(cats => [inputValue, ...cats ]);
            setInputValue('');
        }

        
    }
    
    return (
        /*Al tener un form no es necesario ningun agrupador*/
        <form onSubmit={ handleSubmit }> 
           <input //Cuando se trabajan varios atributos se separan por linea
            type="text"
            value={ inputValue }
            onChange={ handleInputChange }
           /> 
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
