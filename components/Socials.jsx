import Link from 'next/link'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'

const socials = [
  { icon: <FaGithub />, path: 'https://github.com/OLUMZYXX' },
  {
    icon: <FaLinkedin />,
    path: 'https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile',
  },
  {
    icon: <FaTwitter />,
    path: 'https://x.com/olumzyrb?t=r0zb0ANUQtvCM7M0z3RVbw&s=08',
  },
  { icon: <FaInstagram />, path: 'https://instagram.com/olumzyxx' },
]

const Socials = ({ containerStyle, iconStyles }) => {
  return (
    <div className={containerStyle}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        )
      })}
    </div>
  )
}

export default Socials
