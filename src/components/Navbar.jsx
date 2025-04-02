import logo from '../assets/raviKumarLogo.webp'
import { FaLinkedin, FaInstagram, FaGithub, FaTwitterSquare } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center'>
        <a href='/' aria-label='Home'>
          <img src={logo} className='mx-2 bg-black' width={50} height={33} alt='logo' />
        </a>
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href='/https://www.linkedin.com/in/robel-shitahun-93038a1b0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
          target='_blank'
          rel='noopener noreferer'
          aria-label='LinkedIn'
        >
          <FaLinkedin />
        </a>
        <a href='/https://github.com/robelambachew9'
          target='_blank'
          rel='noopener noreferer'
          aria-label='GitHub'
        >
          <FaGithub />
        </a>
        <a href='/'
          target='_blank'
          rel='noopener noreferer'
          aria-label='Instagram'
        >
          <FaInstagram />
        </a>
        <a href='/https://x.com/Robellion23?t=69Y7oZeMl6AHy22v4U-YPA&s=09'
          target='_blank'
          rel='noopener noreferer'
          aria-label='Twitter'
        >
          <FaTwitterSquare />
        </a>
      </div>
    </nav>
  )
}

export default Navbar