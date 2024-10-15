import { FiHome, FiGlobe, FiClipboard, FiMail, FiUser, FiBookOpen } from 'react-icons/fi'

export const HOST = process.env.NEXT_PUBLIC_HOST || 'http://localhost:3000'

export const NAV_ITEMS = [
  { path: '/', label: 'Home', Icon: FiHome },
  { path: '/about', label: 'About', Icon: FiUser },
  { path: '/blog', label: 'Blog', Icon: FiGlobe },
  { path: '/projects', label: 'Projects', Icon: FiClipboard },
  { path: '/contact', label: 'Contact', Icon: FiMail },
  // { path: '/guestbook', label: 'Guestbook', Icon: FiBookOpen },
]

export const PAGE_TITLES = {
  '/': '._',
  '/about': 'About',
  '/blog': 'Blog',
  '/projects': 'Projects',
  '/contact': 'Contact',
  // '/guestbook': 'G-book',
}

export const SOCIALS = {
  GH: 'https://github.com/muhammedamirt',
  IG: 'https://www.instagram.com/_.aamirr__/',
  IN: 'https://www.linkedin.com/in/muhammed-amir-t-5a6933251/',
  WA: 'https://api.whatsapp.com/send?phone=9746784892&text=%3CChatMe%20%2F%3E',
}

export const RESUME_URL = 'https://drive.google.com/file/d/1yBs_uX7HIO63Rm_Hd8DxSh3KjSSrNF97/view?usp=sharing'

export const FORMSPREE_KEY = 'xnnqqzve'

export const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyD7tFfNy80inRLKaWzaqkofQrJfZevu_',
  authDomain: 'test-72be5.firebaseapp.com',
  databaseURL: 'https://test-72be5-default-rtdb.firebaseio.com',
  projectId: 'test-72be5',
  storageBucket: 'test-72be5.appspot.com',
  messagingSenderId: '178230236481',
  appId: '1:178230236481:web:839eaadd16dee6e1cf7dc0',
  measurementId: 'G-PZP5LESMPD',
}
