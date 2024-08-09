import {Phone, Place} from '@mui/icons-material';

const links = [
  {
    title: 'Funiro.',
    items: [
      {
        name: 'Worldwide furniture store since 2020. We sell over 1000+ branded products on our website',
        href: '#'
      },
      {
        name: 'Sawojajar Malang, Indonesia',
        href: 'https://maps.app.goo.gl/yvEMub9TnYzNmSbm7',
        icon: <Place sx={{ color: '#898989' }}/>
      },
      {
        name: '+6289 456 3455',
        href: 'tel:+62894563455',
        icon: <Phone sx={{ color: '#898989' }}/>
      },
      {
        name: 'www.funiro.com',
        href: '#',
      },
    ]
  },

  {
    title: 'Menu',
    items: [
      {
        name: 'Products',
        href: '#'
      },
      {
        name: 'Rooms',
        href: '#'
      },
      {
        name: 'Inspiration',
        href: '#'
      },
      {
        name: 'About Us',
        href: '#'
      },
      {
        name: 'Terms & Policy',
        href: '#'
      }
    ]
  },

  {
    title: 'Account',
    items: [
      {
        name: 'My Account',
        href: '#'
      },
      {
        name: 'Checkout',
        href: '#'
      },
      {
        name: 'My Cart',
        href: '#'
      },
      {
        name: 'My catalog',
        href: '#'
      }
    ]
  },

  {
    title: 'Stay Connected',
    items: [
      {
        name: 'Facebook',
        href: '#'
      },
      {
        name: 'Instagram',
        href: '#'
      },
      {
        name: 'Twitter',
        href: '#'
      }
    ]
  }
];

export default links;