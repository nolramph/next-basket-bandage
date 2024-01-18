import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import { Instagram, Youtube, Facebook, Twitter } from '@/components'

export const BRAND_NAME = 'Bandage'

export const HEADER_LINKS = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Shop',
    href: '/shop',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Blog',
    href: '/blog',
  },
  {
    label: 'Contact',
    href: '/about',
  },
  {
    label: 'Pages',
    href: '/pages',
  },
]

export const ACTION_LINKS = [
  {
    label: 'Login / Register',
    href: '/login',
    icon: PermIdentityIcon,
  },
  {
    label: '',
    href: '/',
    icon: SearchIcon,
  },
  {
    label: '',
    href: '/cart',
    icon: ShoppingCartOutlinedIcon,
  },
  {
    label: '',
    href: '/wishlist',
    icon: FavoriteBorderOutlinedIcon,
  },
]

export const HEADER_CONTACT_LINKS = [
  {
    label: '(225) 555-0118',
    href: 'tel:+2255550118',
    icon: LocalPhoneIcon,
  },
  {
    label: 'michelle.rivera@example.com',
    href: 'mailto:michelle.rivera@example.com',
    icon: EmailOutlinedIcon,
  },
]

export const HEADER_CONTACT_TEXT = 'Follow Us  and get a chance to win 80% off'

export const HEADER_SOCIAL_LINKS_ICONS = [
  {
    label: 'Instagram',
    href: '/',
    icon: Instagram,
  },
  {
    label: 'Youtube',
    href: '/',
    icon: Youtube,
  },
  {
    label: 'Facebook',
    href: '/',
    icon: Facebook,
  },
  {
    label: 'Twitter',
    href: '/',
    icon: Twitter,
  },
]

export const FOOTER_LINKS = [
  {
    main: {
      label: 'Company Info',
      href: '/',
    },
    sub: [
      {
        label: 'About Us',
        href: '/',
      },
      {
        label: 'Carrier',
        href: '/',
      },
      {
        label: 'We are hiring',
        href: '/',
      },
      {
        label: 'Blog',
        href: '/',
      },
    ],
  },
  {
    main: {
      label: 'Legal',
      href: '/',
    },
    sub: [
      {
        label: 'About Us',
        href: '/',
      },
      {
        label: 'Carrier',
        href: '/',
      },
      {
        label: 'We are hiring',
        href: '/',
      },
      {
        label: 'Blog',
        href: '/',
      },
    ],
  },
  {
    main: {
      label: 'Features',
      href: '/',
    },
    sub: [
      {
        label: 'Business Marketing',
        href: '/',
      },
      {
        label: 'User Analytic',
        href: '/',
      },
      {
        label: 'Live Chat',
        href: '/',
      },
      {
        label: 'Unlimited Support',
        href: '/',
      },
    ],
  },
  {
    main: {
      label: 'Resources',
      href: '/',
    },
    sub: [
      {
        label: 'IOS & Android',
        href: '/',
      },
      {
        label: 'Watch a Demo',
        href: '/',
      },
      {
        label: 'Customers',
        href: '/',
      },
      {
        label: 'API',
        href: '/',
      },
    ],
  },
  {
    main: {
      label: 'Get In Touch',
      href: '/',
    },
    custom: 'getInTouch',
  },
]

