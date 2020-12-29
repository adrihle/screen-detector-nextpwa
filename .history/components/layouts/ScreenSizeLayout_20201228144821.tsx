import {Children, cloneElement, useState, useEffect } from 'react'

const ScreenSizeLayout = ({ children }) => {

    const [size, setSize] = useState(null)
    const [screen, setScreen] = useState(null)

    const handleSize = () => {
        setSize(window.innerWidth)
        switch (size) {
            case (size < 420): setScreen('Mobile')
            case (size > 420 && size < 820): setScreen('Land Mobile') 
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