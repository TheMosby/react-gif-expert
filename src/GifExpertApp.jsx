
import { useState } from "react"; //importacion manual
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories ] = useState([ 'One Punch']) //useState:snnipet
    
    const onAddCategory= (newCategory) => {
        //categories.push(NewCategory);
        const upperNewCategory = newCategory.toUpperCase()
        //const found = categories.find(palabra  => palabra.toUpperCase() === upperNewCategory )
        if( (categories.includes(newCategory)) || (categories.find(palabra  => palabra.toUpperCase() === upperNewCategory ))  ) {
            return;
        } // condicion para que no se repitan by Alex Mosby
        
        setCategories( [ newCategory, ...categories ] ) //"..." hace copia de lo que ya tengo
        
        
        //setCategories( cat => [...cat, 'Valorant'] )
        //if (found) return console.log('Ya se repitio ' + found);
        
    }
    console.log(categories)
    

 

  return (
    <>
        {/* titulo */}

        <h1>GifExpertApp</h1>

        {/* input */}

        <AddCategory 
            //setCategories={ setCategories } 
            onNewCategory= { (event) => onAddCategory(event)} 
            //onNewCategory= { onAddCategory} 
        />

        {/* Listado de Gif */}
    
            { 
                categories.map( (category) => (
                    <GifGrid 
                        key={ category } 
                        category={ category }
                    />
                )) 
            }
        
        {/* Gif Item */}
    </>
  )
}
