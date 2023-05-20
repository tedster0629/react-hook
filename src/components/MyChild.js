import React, { useEffect } from 'react';

const MyChild = () => {

    useEffect( () => {
        console.log( 'Child Component: Mounted' );

        return () => {
            console.log( 'Child Component: Unmounted' );
        }
    } )

    return(
        <div>child component</div>
    )
}

export default MyChild;