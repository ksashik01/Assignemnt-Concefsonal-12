import React from 'react';

const CategoryBox = ({label, icon:Icon}) => {
    return (
        <div className='flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 border-transparent text-neutral-500'>


            <Icon size={26}></Icon>

            <div>{label}</div>
            
        </div>
    )
    
};

export default CategoryBox;