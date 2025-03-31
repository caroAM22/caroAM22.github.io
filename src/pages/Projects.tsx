import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectsSection = styled.section`
  padding: 4rem 2rem;
  background-color: ${props => props.theme.colors.background};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  color: ${props => props.theme.colors.text};
  margin-bottom: 3rem;
  text-align: center;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled(motion.div)`
  background-color: #f3f4f6;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  color: ${props => props.theme.colors.text};
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  background-color: ${props => props.theme.colors.primary};
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.875rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.2s ease;

  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
`;

const Projects = () => {
  const { language } = useLanguage();

  const translations = {
    es: {
      title: 'Proyectos',
      creditRisk: {
        title: 'Modelos de Riesgo Crediticio con ANN',
        description: 'Sistema de predicción de riesgo crediticio utilizando redes neuronales artificiales. El proyecto utiliza un modelo de deep learning para predecir la probabilidad de que un individuo incumpla sus pagos crediticios.',
        tech: ['Python', 'TensorFlow', 'Pandas', 'Scikit-learn', 'React', 'TypeScript', 'Tailwind CSS'],
        demo: 'Ver Demo',
        frontend: 'Frontend',
        backend: 'Backend',
      },
      ann: {
        title: 'Aplicación de Redes Neuronales Artificiales',
        description: 'Sistema de predicción de riesgo crediticio utilizando redes neuronales artificiales. El proyecto utiliza un modelo de deep learning para predecir la probabilidad de que un individuo incumpla sus pagos crediticios.',
        tech: ['Python', 'TensorFlow', 'Pandas', 'Scikit-learn', 'React', 'TypeScript', 'Tailwind CSS'],
        demo: 'https://ecom-ai-frontend.vercel.app',
        frontend: 'Frontend',
        backend: 'Backend',
      },
    },
    en: {
      title: 'Projects',
      creditRisk: {
        title: 'Credit Risk Models with ANN',
        description: 'Credit risk prediction system using artificial neural networks. The project employs a deep learning model to predict the likelihood of an individual defaulting on their credit payments.',
        tech: ['Python', 'TensorFlow', 'Pandas', 'Scikit-learn', 'React', 'TypeScript', 'Tailwind CSS'],
        demo: 'View Demo',
        frontend: 'Frontend',
        backend: 'Backend',
      },
      ann: {
        title: 'Application of Artificial Neural Networks',
        description: 'Credit risk prediction system using artificial neural networks. The project employs a deep learning model to predict the likelihood of an individual defaulting on their credit payments.',
        tech: ['Python', 'TensorFlow', 'Pandas', 'Scikit-learn', 'React', 'TypeScript', 'Tailwind CSS'],
        demo: 'https://ecom-ai-frontend.vercel.app',
        frontend: 'Frontend',
        backend: 'Backend',
      },
    },
  };

  return (
    <ProjectsSection>
      <Container>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {translations[language].title}
        </Title>
        <ProjectGrid>
          <ProjectCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ProjectTitle>{translations[language].creditRisk.title}</ProjectTitle>
            <ProjectDescription>
              {translations[language].creditRisk.description}
            </ProjectDescription>
            <TechStack>
              {translations[language].creditRisk.tech.map((tech) => (
                <TechTag key={tech}>{tech}</TechTag>
              ))}
            </TechStack>
            <ProjectLinks>
              <ProjectLink
                href="https://credit-risk-iota.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                🌐 {translations[language].creditRisk.demo}
              </ProjectLink>
              <ProjectLink
                href="https://github.com/caroAM22/credit-risk-project"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>📂 {translations[language].creditRisk.frontend}</span>
              </ProjectLink>
            </ProjectLinks>
          </ProjectCard>
          <ProjectCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ProjectTitle>{translations[language].ann.title}</ProjectTitle>
            <ProjectDescription>
              {translations[language].ann.description}
            </ProjectDescription>
            <TechStack>
              {translations[language].ann.tech.map((tech) => (
                <TechTag key={tech}>{tech}</TechTag>
              ))}
            </TechStack>
            <ProjectLinks>
              <ProjectLink href="https://github.com/caroAM22/Portfolio" target="_blank" rel="noopener noreferrer">
                <FaGithub /> Ver Código
              </ProjectLink>
              <ProjectLink href="https://caroam22.github.io/" target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt /> Ver Demo
              </ProjectLink>
            </ProjectLinks>
          </ProjectCard>
        </ProjectGrid>
      </Container>
    </ProjectsSection>
  );
};

export default Projects; 