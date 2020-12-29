import { cloneElement } from 'react'

const ScreenSizeLayout = ({ children }) => {

    let Elemento = cloneElement(children, {ss:'testing'})

    return (
        <>
            <Elemento/>
        </>
    )
}

export default ScreenSizeLayout