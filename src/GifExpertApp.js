import React, { useState } from 'react';
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';

export const GifExpertApp = () => {
    
    const [categories, setCategories]  = useState(['One punch'])



    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr></hr>

            <ol>
                {
                    categories.map( category => 
                         <GifGrid 
                            key = {category}
                            category={category}
                        />
                    )
                }
            </ol>

        </>
    );
    
}

export default GifExpertApp;