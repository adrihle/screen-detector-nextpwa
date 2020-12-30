import { bubble as Menu } from 'react-burger-menu'
import White from '../../static/icons/dotqwhiteusage'
import sasstyles from '../../styles/navigation/menu_content.module.sass'
import Link from 'next/link'
import { useState, useCallback } from 'react'
import Close from '../../static/icons/cancel'

var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '24px',
    height: '18px',
    right: '1.5em',
    top: '1.5em'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '36px',
    width: '36px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: '#373a47',
    padding: '1em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47',
    width: '100%'
  },
  bmItemList: {
    color: '#b8b7ad',
  },
  bmItem: {
    display: 'inline-block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

const menuItems = [
  {
    title: 'Home',
    url: '/'
  },
  {
    title: 'Experience',
    url: '/test'
  },
  {
    title: 'Quality',
    url: '/'
  },
  {
    title: 'Contact us',
    url: '/'
  }
]



const Mobile = ({ outerContainer, pageWrap }) => {
  const [open, setOpen] = useState(false)

  const onClick = () => {
    setOpen(false)
  }

  const onOpen = () => {
    setOpen(true)
  }

  const onClose = () => {
    setOpen(false)
  }

  return (
    <Menu styles={styles} width={'100%'} isOpen={open} onOpen={onOpen} onClose={onClose} customCrossIcon={false}>
      {/* header del menu */}
      <div className={sasstyles.menunav}  >
        <div className="d-flex justify-content-between align-items-end">
          <White className={sasstyles.whitelogo} />
          <h5 className={sasstyles.menutext} unselectable="on">Menu</h5>
        </div>
        <hr className={sasstyles.line} />
      </div>
      <div className={sasstyles.menuitemscontainer}>
        {menuItems.map(item => (
          <Link href={item.url} key={item.title}>
            <a key={item.title} className={sasstyles.menuitems} onClick={onClick}>{item.title}</a>
          </Link>
        ))}
      </div>
      <div className={sasstyles.containercancelicon} onClick={onClose}>
      <Close className={sasstyles.cancelicon}/>
      </div>
    </Menu>
  )
}

export default Mobile
