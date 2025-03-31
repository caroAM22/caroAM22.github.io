import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Nav = styled.nav`
  padding: 1rem 2rem;
  background-color: ${props => props.theme.colors.background};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: ${props => props.theme.colors.text};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const LanguageButton = styled(motion.button)`
  padding: 0.5rem 1rem;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${props => props.theme.colors.secondary};
  }
`;

const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();

  const translations = {
    es: {
      home: 'Inicio',
      profile: 'Perfil',
      education: 'Educación',
      achievements: 'Logros',
      projects: 'Proyectos',
      contact: 'Contacto',
    },
    en: {
      home: 'Home',
      profile: 'Profile',
      education: 'Education',
      achievements: 'Achievements',
      projects: 'Projects',
      contact: 'Contact',
    },
  };

  return (
    <Nav>
      <NavContainer>
        <Logo to="/">Carolina Alvarez</Logo>
        <NavLinks>
          <NavLink to="/">{translations[language].home}</NavLink>
          <NavLink to="/profile">{translations[language].profile}</NavLink>
          <NavLink to="/education">{translations[language].education}</NavLink>
          <NavLink to="/achievements">{translations[language].achievements}</NavLink>
          <NavLink to="/projects">{translations[language].projects}</NavLink>
          <NavLink to="/contact">{translations[language].contact}</NavLink>
          <LanguageButton
            onClick={toggleLanguage}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {language === 'es' ? 'EN' : 'ES'}
          </LanguageButton>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default Navbar; 