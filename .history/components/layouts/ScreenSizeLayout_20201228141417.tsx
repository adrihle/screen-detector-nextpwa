import { cloneElement } from 'react'

const ScreenSizeLayout = ({ children }) => {

    let Elemento = cloneElement(children)

    return (
        <>
            <Elemento/>
        </>
    )
}

export default ScreenSizeLayout