import {Children, cloneElement, useState, useEffect } from 'react'

const ScreenSizeLayout = ({ children }) => {

    const [screen, setScreen] = useState(null)
    const [measures, setMeasures] = useState(null)

    const handleSize = () => {
        let width = window.innerWidth
        let heigh = window.innerHeight
        setMeasures([width, heigh])

        let landscape = width > heigh

        if (width < 420){setScreen('Mobile')}
        else if (width > 420 && width < 850 && landscape){setScreen('Land Mobile')}
        else if (width > 420 && width < 1300){setScreen('Tablet')}
        else if (width > 820 && width < 1400 && landscape){setScreen('Land Tablet')}
        else {setScreen('Desktop')}
    }

    useEffect(() => {
        handleSize()
        window.addEventListener('resize', handleSize)
        return () => {window.removeEventListener('resize', handleSize)}
    },[])

    const childrenWithProps = Children.map(children, child => {
        return cloneElement(child, {
            measures, 
            screen
        });
      });
    
    return (
        <>
            {childrenWithProps}
        </>
    )
}

export default ScreenSizeLayout