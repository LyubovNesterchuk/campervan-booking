'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import css from './Header.module.css';

export default function Header() {
  const pathname = usePathname();
  
   const isCatalogActive = pathname === '/catalog' || pathname.startsWith('/catalog/');

  return (
    <header className={css.header}>
      <Link href="/" aria-label="Home" className={css.logoLink}>
        <Image 
          src="/logo.svg" 
          alt="TravelTrucks logo"
          width={136}
          height={16}
          priority
          className={css.logo}
        />
      </Link>
      
      <nav aria-label="Main Navigation">
        <ul className={css.list}>
          <li className={css.item}>
            <Link 
              className={`${css.link} ${pathname === '/' ? css.active : ''}`}
              href="/"
            >
              Home
            </Link>
          </li>
          <li className={css.item}>
            <Link 
              className={`${css.link} ${isCatalogActive ? css.active : ''}`}
              href="/catalog"
            >
              Catalog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}


