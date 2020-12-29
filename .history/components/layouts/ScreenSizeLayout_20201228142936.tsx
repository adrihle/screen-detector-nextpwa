import {Children, cloneElement, useState, useEffect } from 'react'

const ScreenSizeLayout = ({ children }) => {

    const [size, setSize] = useState(null)


    useEffect(() => {
        const handleSize = () => setSize(window.innerWidth)
        handleSize()
        window.addEventListener('resize', handleSize)
        return () => {window.removeEventListener('resize', handleSize)}
    },[])

    const childrenWithProps = Children.map(children, (child, index) => {
        return cloneElement(child, {
          size: size
        });
      });
    
    return (
        <>
            {childrenWithProps}
        </>
    )
}

export default ScreenSizeLayout