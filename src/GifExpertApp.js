import React, { useState } from "react";
import { AddCategory } from "./components/addCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

       //hook
    const [categories, setcategories] = useState([
        'One Punch',
    ]);

    return (
        <>
            <h2>GitExpertApp</h2>
            < AddCategory setCategories={setcategories}/>
            <hr/>
          
            <ol>
                {
                   categories.map(category => 
                        <GifGrid 
                            key={category}
                            category={category}/>
                   )
                }
            </ol>
        </>
    );
}
