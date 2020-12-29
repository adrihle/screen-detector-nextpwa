import {Children, cloneElement} from 'react'

const ScreenSizeLayout = ({ children }) => {

    const childrenWithProps = Children.map(children, (child, index) => {
        return cloneElement(child, {
          value: 'hola'
        });
      });
    
    return (
        <>
            {childrenWithProps}
        </>
    )
}

export default ScreenSizeLayout