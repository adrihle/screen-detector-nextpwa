import { bubble as Menu } from 'react-burger-menu'
import White from '../../static/icons/dotqwhiteusage'
import sasstyles from '../../styles/navigation/menu_content.module.sass'

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
      height: '24px',
      width: '24px'
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
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em'
    },
    bmMorphShape: {
      fill: '#373a47',
      width: '100%'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em'
    },
    bmItem: {
      display: 'inline-block'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }

const Mobile = ({ outerContainer, pageWrap }) => {
    return (
        <Menu styles={styles} width={'100%'}>
            <div>
              <White className={sasstyles.whitelogo}/>
              <hr className={sasstyles.line}/>
            </div>
            <div>
              <a id="home"  href="/">Home</a>
              <a id="about" href="/about">About</a>
              <a id="contact"  href="/contact">Contact</a>
            </div>
        </Menu>
    )
}

export default Mobile
