import {Children, cloneElement, useState, useEffect } from 'react'

const ScreenSizeLayout = ({ children }) => {

    const [size, setSize] = useState(null)
    const [screen, setScreen] = useState(null)

    const handleSize = () => setSize(window.innerWidth)

    const handleScreen = width => {
        switch(width){
            case (width < 420): 
                return 'Mobile'
            case (420 <= width && width < 820):
                return 'landMobile'
            default: return '...'
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
            {childrenWithProps}
        </>
    )
}

export default ScreenSizeLayout