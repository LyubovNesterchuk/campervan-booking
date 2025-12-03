import Link from 'next/link';

import css from './Header.module.css';


export default function Header() {
  return (
    <header className={css.header}>
      <div className={css.headerContainer}>
        <Link href="/" aria-label="Home" className={css.logo}>
            <svg
              className={css.iconlogo}
              width={84}
              height={36}
            >
              <use href="/logo.svg"></use>
            </svg>
        </Link>
        
        <nav>
          <ul className={css.navigation}>
            <li className={css.navigationItem}>
              <Link className={css.navigationLink} href="/">
                Home
              </Link>
            </li>
            <li className={css.navigationItem}>
              <Link className={css.navigationLink} href={`/catalog`}>
                Catalog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}