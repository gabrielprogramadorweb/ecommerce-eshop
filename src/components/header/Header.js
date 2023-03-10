import { useState } from 'react';
import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import styles from './Header.module.scss';
import { FaShoppingCart, FaTimes } from 'react-icons/fa';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/config';
import { toast } from 'react-toastify';

const logo = (
  <div className={styles.logo}>
    <Link to="/">
      <h2>
        e<span>Shop</span>.
      </h2>
    </Link>
  </div>
);

const cart = (
  <span className={styles.cart}>
    <Link to="/cart">
      Cart
      <FaShoppingCart size={20} />
      <p>0</p>
    </Link>
  </span>
);
//Função para ativar link e trazer barrinha inferior sublinhado selecionando link//
const activeLink = ({ isActive }) => (isActive ? `${styles.active}` : '');

const Header = () => {
  //Função do hamburguer menu//
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  //Alterar o cardapio menu hamburguer//
  const toggleMenu = () => {
    //função de alterar true p/ false e vice versa//
    setShowMenu(!showMenu);
  };
  // função de ocultar o menu-hamburguer//
  const hideMenu = () => {
    setShowMenu(false);
  };

  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        toast.success('Logout com sucesso!');
        navigate('/');
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <header>
      <div className={styles.header}>
        {logo}
        <nav
          className={
            showMenu ? `${styles['show-nav']}` : `${styles['hide-nav']}`
          }
        >
          <div
            className={
              //Função para criar menu móvel que abre e fecha com um click//
              showMenu
                ? `${styles['nav-wrapper']} ${styles['show-nav-wrapper']}`
                : `${styles['nav-wrapper']}`
            }
            onClick={hideMenu} // <- Aqui está o botão para fechar o menu-hamburguer//
          ></div>
          <ul onClick={hideMenu}>
            <li className={styles['logo-mobile']}>
              {logo}
              <FaTimes size={22} color="#fff" onClick={hideMenu} />
            </li>
            <li>
              <NavLink to="/" className={activeLink}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={activeLink}>
                Contato
              </NavLink>
            </li>
          </ul>
          <div className={styles['header-right']} onClick={hideMenu}>
            <span className={styles.links}>
              <NavLink to="/login" className={activeLink}>
                Login
              </NavLink>
              <NavLink to="/register" className={activeLink}>
                Registro
              </NavLink>
              <NavLink to="/order-history" className={activeLink}>
                Meus pedidos
              </NavLink>
              <NavLink to="/" onClick={logoutUser}>
                Logout
              </NavLink>
            </span>
            {cart}
          </div>
        </nav>
        <div className={styles['menu-icon']}>
          {cart}
          <HiOutlineMenuAlt3 size={28} onClick={toggleMenu} />
        </div>
      </div>
    </header>
  );
};

export default Header;
