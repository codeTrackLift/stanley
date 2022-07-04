import Link from 'next/link'
import { useRouter } from "next/router";
import Image from 'next/image'
import logo from '../images/stanleyLogo.png'
import styles from '../styles/Navbar.module.scss'

export default function Navbar() {
  const router = useRouter();

  return (
    <>
    <nav className={`${styles.nav} navbar navbar-expand-sm navbar-light bg-transparent fixed-top`}>
      <div className="container-fluid">
        <a className={`${styles.logo} navbar-brand`} href="#"><Image src={logo} alt='logo' /></a>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mx-3 mt-5 mb-2 gap-5">
            <li className={
              router.pathname == '/'
               ? `${styles.navLink} nav-item active` 
               : `${styles.navLink} nav-item
            `}>
              <Link href="/">HOME</Link>
            </li>
            <li className={
              router.pathname == '/services'
               ? `${styles.navLink} nav-item active` 
               : `${styles.navLink} nav-item
            `}>
              <Link href="/services">SERVICES</Link>
            </li>
            <li className={
              router.pathname == '/contact'
               ? `${styles.navLink} nav-item active` 
               : `${styles.navLink} nav-item
            `}>
              <Link href="/contact">CONTACT</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  )
}