import { FaHome, FaHeart } from 'react-icons/fa';
import { RiSearchLine } from 'react-icons/ri';
export const navItems = [
    {
        type: 'link',
        href: '/home',
        icon: FaHome,
        label: 'Home',
      },
      {
        type: 'link',
        href: '/search',
        icon: RiSearchLine,
        label: 'Search',
      },
      {
        type: 'header',
        label: 'User',
      },
      {
        type: 'link',
        href: '/favourites',
        icon: FaHeart,
        label: 'Favourites',
      },
    ];