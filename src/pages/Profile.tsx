import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const ProfileSection = styled.section`
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
  margin-bottom: 2rem;
  text-align: center;
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${props => props.theme.colors.text};
  margin-bottom: 3rem;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const SkillCard = styled(motion.div)`
  background-color: #f3f4f6;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const SkillTitle = styled.h3`
  font-size: 1.5rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1.5rem;
  text-align: center;
`;

const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
`;

const SkillItem = styled.li`
  background-color: white;
  padding: 0.75rem;
  border-radius: 8px;
  text-align: center;
  font-weight: 500;
  color: ${props => props.theme.colors.text};
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const Profile = () => {
  const { language } = useLanguage();

  const translations = {
    es: {
      title: 'Sobre Mí',
      description: 'Desarrolladora versátil con una sólida base en desarrollo frontend y backend, capaz de adaptarse rápidamente a nuevas tecnologías gracias a fundamentos sólidos en programación. Cuento con experiencia en el desarrollo de proyectos en inteligencia artificial, análisis de datos y aprendizaje automático, aplicando técnicas avanzadas para resolver problemas complejos. He trabajado en entornos de alta presión, colaborando eficazmente en equipos multidisciplinarios, demostrando liderazgo y comunicación asertiva. Mi experiencia abarca tanto el desarrollo frontend como backend, asegurando soluciones eficientes y escalables.',
      hardSkills: 'Habilidades Técnicas',
      softSkills: 'Habilidades Blandas',
      languages: 'Idiomas',
      spanish: 'Español: Nativo',
      english: 'Inglés: B2',
    },
    en: {
      title: 'About Me',
      description: 'Adaptable developer with a strong foundation in frontend and backend development, capable of seamlessly transitioning between technologies due to solid programming fundamentals. Experienced in AI, data analysis, and machine learning, having developed projects in these fields. Skilled in working under pressure, collaborating in multidisciplinary teams, and demonstrating leadership with effective communication. Proficient in both frontend and backend development, ensuring efficient and scalable solutions.',
      hardSkills: 'Technical Skills',
      softSkills: 'Soft Skills',
      languages: 'Languages',
      spanish: 'Spanish: Native',
      english: 'English: B2',
    },
  };

  const hardSkills = [
    'Python', 'C++', 'C#', 'Java', 'SQL', 'Git',
    'TypeScript', 'JavaScript', 'Django', 'Flask',
    'FastAPI', 'Next.js', 'React', 'Tailwind CSS',
    'Vite', 'MUI', 'Bootstrap'
  ];

  const softSkills = [
    'Critical Thinking', 'Responsibility', 'Teamwork',
    'Creativity', 'Resilience', 'Emotional Intelligence'
  ];

  return (
    <ProfileSection>
      <Container>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {translations[language].title}
        </Title>
        <Description
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {translations[language].description}
        </Description>

        <SkillsGrid>
          <SkillCard
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <SkillTitle>{translations[language].hardSkills}</SkillTitle>
            <SkillsList>
              {hardSkills.map((skill) => (
                <SkillItem key={skill}>{skill}</SkillItem>
              ))}
            </SkillsList>
          </SkillCard>
          <SkillCard
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <SkillTitle>{translations[language].softSkills}</SkillTitle>
            <SkillsList>
              {softSkills.map((skill) => (
                <SkillItem key={skill}>{skill}</SkillItem>
              ))}
            </SkillsList>
          </SkillCard>
          <SkillCard
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <SkillTitle>{translations[language].languages}</SkillTitle>
            <SkillsList>
              <SkillItem>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                  <span>{translations[language].spanish}</span>
                  <span style={{ fontSize: '0.8rem', color: props => props.theme.colors.primary }}>Nativo</span>
                </div>
              </SkillItem>
              <SkillItem>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                  <a 
                    href="https://app.voxy.com/certificates/proficiency-test/67e2a9f7f1209c29e9e13e98" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ color: 'inherit', textDecoration: 'none' }}
                  >
                    {translations[language].english}
                  </a>
                  <span style={{ fontSize: '0.8rem', color: props => props.theme.colors.primary }}>B2 - Certificado</span>
                </div>
              </SkillItem>
            </SkillsList>
          </SkillCard>
        </SkillsGrid>
      </Container>
    </ProfileSection>
  );
};

export default Profile; 