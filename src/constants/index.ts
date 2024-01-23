//icon components
import {
  Instagram,
  Youtube,
  Facebook,
  Twitter,
  BookReader,
  Book,
  ArrowGrowth,
  Hooli,
  Lyft,
  PiperHat,
  Stripe,
  Aws,
  Reddit,
} from '@/components/icons'

//mui icons
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'

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
    main: [
      {
        label: 'Company Info',
        href: '/',
        isHeading: true,
      },

      {
        label: 'About Us',
        href: '/',
        isHeading: false,
      },
      {
        label: 'Carrier',
        href: '/',
        isHeading: false,
      },
      {
        label: 'We are hiring',
        href: '/',
        isHeading: false,
      },
      {
        label: 'Blog',
        href: '/',
        isHeading: false,
      },
    ],
  },

  {
    main: [
      {
        label: 'Features',
        href: '/',
        isHeading: true,
      },

      {
        label: 'Business Marketing',
        href: '/',
        isHeading: false,
      },
      {
        label: 'User Analytic',
        href: '/',
        isHeading: false,
      },
      {
        label: 'Live Chat',
        href: '/',
        isHeading: false,
      },
      {
        label: 'Unlimited Support',
        href: '/',
        isHeading: false,
      },
    ],
  },
  {
    main: [
      {
        label: 'Legal',
        href: '/',
        isHeading: true,
      },

      {
        label: 'About Us',
        href: '/',
        isHeading: false,
      },
      {
        label: 'Carrier',
        href: '/',
        isHeading: false,
      },
      {
        label: 'We are hiring',
        href: '/',
        isHeading: false,
      },
      {
        label: 'Blog',
        href: '/',
        isHeading: false,
      },
    ],
  },
  {
    main: [
      {
        label: 'Get In Touch',
        href: '/',
        isHeading: true,
      },
    ],
  },
]

export const SERVICES_SECTION = [
  {
    title: 'Easy Wins',
    content: 'Get your best looking smile now!',
    icon: BookReader,
  },
  {
    title: 'Concrete',
    content: 'Defalcate is most focused in helping you discover your most beautiful smile',
    icon: Book,
  },
  {
    title: 'Hack Growth ',
    content: 'Overcame any hurdle or any other problem.',
    icon: ArrowGrowth,
  },
]

const FEATURED_SECTION_DEFAULT_CONTENT = {
  title: "Loudest à la Madison #1 (L'integral)",
  content: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.'",
  time: '22 April 2021',
  comments: 10,
  category: [
    { title: 'Google', isActive: true },
    { title: 'Trending', isActive: false },
    { title: 'New', isActive: false },
  ],
}

export const FEATURED_SECTION = [
  {
    ...FEATURED_SECTION_DEFAULT_CONTENT,
    cardImage: 1,
  },
  {
    ...FEATURED_SECTION_DEFAULT_CONTENT,
    cardImage: 2,
  },
  {
    ...FEATURED_SECTION_DEFAULT_CONTENT,
    cardImage: 3,
  },
]

export const CLIENT_LOGO_SECTION = [Hooli, Lyft, PiperHat, Stripe, Aws, Reddit]

export const ADDITIONAL_INFO_NAVIGATION_HEADER = [
  {
    title: 'Description',
    link: '#description',
    isActive: true,
  },
  {
    title: 'Additional Information',
    link: '#additional-information',
    isActive: false,
  },
  {
    title: 'Reviews',
    link: '#reviews',
    isActive: false,
  },
]
