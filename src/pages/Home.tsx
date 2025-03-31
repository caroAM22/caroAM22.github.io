import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const HomeSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: ${props => props.theme.colors.background};
`;

const Container = styled.div`
  max-width: 800px;
  text-align: center;
`;

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  color: ${props => props.theme.colors.text};
  margin-bottom: 1rem;
`;

const Subtitle = styled(motion.h2)`
  font-size: 1.8rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 2rem;
`;

const Description = styled(motion.p)`
  font-size: 1.2rem;
  color: ${props => props.theme.colors.text};
  margin-bottom: 3rem;
  line-height: 1.6;
`;

const Button = styled(motion(Link))`
  display: inline-block;
  padding: 1rem 2rem;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: 500;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${props => props.theme.colors.secondary};
  }
`;

const Home = () => {
  const { language } = useLanguage();

  const translations = {
    es: {
      greeting: '¡Hola! Soy',
      name: 'Carolina Alvarez Murillo',
      role: 'Desarrolladora Full Stack',
      description: 'Apasionada por crear soluciones innovadoras y experiencias digitales excepcionales.',
      projects: 'Ver Proyectos',
    },
    en: {
      greeting: 'Hi! I am',
      name: 'Carolina Alvarez Murillo',
      role: 'Full Stack Developer',
      description: 'Passionate about creating innovative solutions and exceptional digital experiences.',
      projects: 'View Projects',
    },
  };

  return (
    <HomeSection>
      <Container>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {translations[language].greeting}
          <br />
          {translations[language].name}
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {translations[language].role}
        </Subtitle>
        <Description
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {translations[language].description}
        </Description>
        <Button
          to="/projects"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {translations[language].projects}
        </Button>
      </Container>
    </HomeSection>
  );
};

export default Home; 