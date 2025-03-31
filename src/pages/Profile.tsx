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
  margin-bottom: 3rem;
  text-align: center;
`;

const Description = styled(motion.p)`
  font-size: 1.2rem;
  color: ${props => props.theme.colors.text};
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem;
  line-height: 1.8;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const SkillCard = styled(motion.div)<{ color: string }>`
  background-color: ${props => props.color};
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: white;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SkillTitle = styled.h3`
  font-size: 1.25rem;
  margin: 0;
  font-weight: 600;
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const SkillItem = styled.li`
  background-color: rgba(255, 255, 255, 0.2);
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.875rem;
`;

const Profile = () => {
  const { language } = useLanguage();

  const translations = {
    es: {
      title: 'Perfil',
      description: 'Soy una desarrolladora Full Stack apasionada por la tecnología y la innovación. Me especializo en crear aplicaciones web modernas y eficientes, combinando diseño atractivo con funcionalidad robusta.',
      hardSkills: 'Habilidades Técnicas',
      softSkills: 'Habilidades Blandas',
      languages: 'Idiomas',
      proficiency: 'Nivel de Proficiencia',
      english: 'Inglés',
      spanish: 'Español',
      viewCertificate: 'Ver Certificado'
    },
    en: {
      title: 'Profile',
      description: 'I am a Full Stack developer passionate about technology and innovation. I specialize in creating modern and efficient web applications, combining attractive design with robust functionality.',
      hardSkills: 'Technical Skills',
      softSkills: 'Soft Skills',
      languages: 'Languages',
      proficiency: 'Proficiency Level',
      english: 'English',
      spanish: 'Spanish',
      viewCertificate: 'View Certificate'
    }
  };

  const hardSkills = [
    'Python',
    'JavaScript',
    'React',
    'Node.js',
    'SQL',
    'Git',
    'Docker',
    'AWS',
    'Machine Learning',
    'Data Analysis'
  ];

  const softSkills = [
    'Trabajo en Equipo',
    'Comunicación Efectiva',
    'Resolución de Problemas',
    'Gestión de Tiempo',
    'Adaptabilidad',
    'Creatividad',
    'Liderazgo',
    'Pensamiento Analítico'
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
            color="#007bff"
          >
            <SkillTitle>{translations[language].hardSkills}</SkillTitle>
            <SkillList>
              {hardSkills.map((skill) => (
                <SkillItem key={skill}>{skill}</SkillItem>
              ))}
            </SkillList>
          </SkillCard>
          <SkillCard
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            color="#ff5733"
          >
            <SkillTitle>{translations[language].softSkills}</SkillTitle>
            <SkillList>
              {softSkills.map((skill) => (
                <SkillItem key={skill}>{skill}</SkillItem>
              ))}
            </SkillList>
          </SkillCard>
          <SkillCard
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            color="#33ff57"
          >
            <SkillTitle>{translations[language].languages}</SkillTitle>
            <SkillList>
              <SkillItem>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                  <span>{translations[language].english}</span>
                  <span style={{ fontSize: '0.8rem', opacity: 0.8 }}>{translations[language].proficiency}: B2</span>
                  <a
                    href="https://www.efset.org/cert/2b4c8c"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'white', textDecoration: 'underline', fontSize: '0.8rem' }}
                  >
                    {translations[language].viewCertificate}
                  </a>
                </div>
              </SkillItem>
              <SkillItem>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                  <span>{translations[language].spanish}</span>
                  <span style={{ fontSize: '0.8rem', opacity: 0.8 }}>{translations[language].proficiency}: Nativo</span>
                </div>
              </SkillItem>
            </SkillList>
          </SkillCard>
        </SkillsGrid>
      </Container>
    </ProfileSection>
  );
};

export default Profile; 