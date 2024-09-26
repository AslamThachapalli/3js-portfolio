import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { styles } from '../style'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'

const Navbar = () => {
  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState(false)
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolltop = window.scrollY;

      setScrolled(scrolltop > 100)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? 'bg-primary/80 backdrop-opacity-50' : 'bg-transparent'}`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to="/"
          className='flex items-center gap-2'
          onClick={() => {
            setActive("")
            window.scrollTo(0, 0)
          }}
        >
          <img src={logo} alt="logo" className='h-9 w-9 object-contain rounded-full border-2' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>
            Aslam &nbsp;
            <span className='sm:block hidden'>Thachapalli</span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {
            navLinks.map(nav => (
              <li
                key={nav.id}
                className={`${active === nav.id ? 'text-white' : 'text-secondary'
                  } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(nav.id)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))
          }
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => {
              setToggle(!toggle)
            }}
          />

          <div
            className={`${toggle ? 'flex' : 'hidden'
              } p-6 black-gradient absolute top-20 right-0 mx-4 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex flex-1 flex-col justify-end items-start gap-4'>
              {
                navLinks.map(nav => (
                  <li
                    key={nav.id}
                    className={`${active === nav.id ? 'text-white' : 'text-secondary'
                      } font-poppins font-medium cursor-pointer text-[16px]`}
                    onClick={() => {
                      setToggle(!toggle)
                      setActive(nav.id)
                    }}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar