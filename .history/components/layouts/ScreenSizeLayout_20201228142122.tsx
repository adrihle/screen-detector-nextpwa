import {Children} from 'react'

const ScreenSizeLayout = ({ children }) => {
    
    return (
        <>
            {children({value:'zero'})}
        </>
    )
}

export default ScreenSizeLayout