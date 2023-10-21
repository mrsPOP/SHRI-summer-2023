'use client';

import "./styles/header.scss";
import Link from "next/link";

import { useSelector } from "react-redux";
import { selectCartModule } from '@/redux/features/cart/selector';

const Header = () => {
  const ticketsNum = useSelector((state) => selectCartModule(state));

  return (
      <header className="header">
        <Link href={'/'} className="header__logo">Билетопоиск</Link>
        <div className="header__cart-info-wrapper">
          {Boolean(ticketsNum) && (
            <div className="header__ticket-number-background">
              <p className="header__ticket-number">{ticketsNum.amount}</p>
            </div>
          )}
          <Link href={'/cart'} className="header__cart-button"></Link>
        </div>
      </header>
  );
};

export default Header;
