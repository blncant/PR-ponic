import { Link, useNavigate } from 'react-router-dom'
import { animateScroll as scroll } from 'react-scroll';

import { useDispatch, useSelector } from 'react-redux';
import { toggleHiddenMenu } from '../../redux/user/userSlice';

import { 
    Logo, 
    NavItemStyled, 
    LinksContainerStyled, 
    NavbarContainerStyled, 
    UserNavStyled, 
    UserContainerStyled, 
    LinkContainerStyled, 
    CartNavStyled 
} from './NavbarStyles'

import {FaUserCircle } from 'react-icons/fa'

import CartIcon from './cart-icon/CartIcon'
import ModalCart from './modal-cart/ModalCart';
import ModalUser from './modal-user/ModalUser';

function Navbar() {

    const scrollToTop = () => {
        scroll.scrollToTop();
      };

    const navigate = useNavigate()
    const currentUser = useSelector(state => state.user.currentUser)
    const dispatch = useDispatch()


  return (
    <NavbarContainerStyled>
        
        {/* Logo */}
        
            <Link to="/" onClick={scrollToTop}>
                <Logo src="/assets/img/logo.png" alt="Logo" />
            </Link>
        
        
        <ModalCart />
        <ModalUser />
        

        <LinksContainerStyled>
            {/* Home */}
            <NavItemStyled>
                <Link to="/" onClick={scrollToTop}>
                    <LinkContainerStyled home>
                    </LinkContainerStyled> 
                    Home
                </Link>
            </NavItemStyled>

            {/* Cart */}
            <CartNavStyled>
                <CartIcon/>
            </CartNavStyled>

            {/* User */}
            <UserNavStyled>
                <UserContainerStyled 
                    onClick={() => 
                    currentUser ? dispatch(toggleHiddenMenu()) : navigate('/register')
                }>
                    <span>
                        {currentUser ? `${currentUser.nombre}` : 'Sign In'}
                    </span>
                    <FaUserCircle/>
                </UserContainerStyled>
            </UserNavStyled>
        
        </LinksContainerStyled>
    </NavbarContainerStyled>
  )
}

export default Navbar