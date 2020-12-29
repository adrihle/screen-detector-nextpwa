import {Children, cloneElement, useState, useEffect } from 'react'

const ScreenSizeLayout = ({ children }) => {

    const [size, setSize] = useState(null)
    const [screen, setScreen] = useState(null)

    const handleSize = () => {
        let width = window.innerWidth
        setSize(width)
        switch (width) {
            case (width < 420): setScreen('Mobile')
            case (width > 420 && width < 820): setScreen('Land Mobile') 
            default: return null
        }
    }

    useEffect(() => {
        handleSize()
        window.addEventListener('resize', handleSize)
        return () => {window.removeEventListener('resize', handleSize)}
    },[])

    const childrenWithProps = Children.map(children, child => {
        return cloneElement(child, {
            size
        });
      });
    
    return (
        <>
            <h2>{screen}</h2>
            {childrenWithProps}
        </>
    )
}

export default ScreenSizeLayout