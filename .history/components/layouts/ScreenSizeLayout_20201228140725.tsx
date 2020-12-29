import { cloneElement } from 'react'

const ScreenSizeLayout = ({ children }) => {

    let element = cloneElement(children, {value:'ejemplo'})

    return (
        <>
            {element}
        </>
    )
}

export default ScreenSizeLayout