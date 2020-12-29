import {Children, cloneElement, useState, useEffect } from 'react'

const ScreenSizeLayout = ({ children }) => {

    const [size, setSize] = useState(null)
    const [screen, setScreen] = useState(null)

    const handleSize = () => {
        let width = window.innerWidth
        let heigh = window.innerHeight
        setSize(width)

        if (width < 420){setScreen('Mobile')}
        else if (width > 420 && width < 820 && heigh < 420){setScreen('Land Mobile')}
        else if (width > 420 && width < 820 && heigh > 420){setScreen('Tablet')}
    }

    useEffect(() => {
        handleSize()
        window.addEventListener('resize', handleSize)
        return () => {window.removeEventListener('resize', handleSize)}
    },[])

    const childrenWithProps = Children.map(children, child => {
        return cloneElement(child, {
            size, screen
        });
      });
    
    return (
        <>
            {childrenWithProps}
        </>
    )
}

export default ScreenSizeLayout