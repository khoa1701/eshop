import React from 'react';
import Topbar from '../containers/Header/topbar';
import Middleinner from '../containers/Header/middle-inner';
import HeaderInner from '../containers/Header/header-inner';

function Header() {
  return (
    <>
      <header className="header shop">
        <Topbar />
        <Middleinner />
        <HeaderInner />
      </header>
    </>
  );
}
export default Header;
