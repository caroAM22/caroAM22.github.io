import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const AchievementsSection = styled.section`
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

const AchievementCard = styled(motion.div)`
  background-color: #f3f4f6;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;

const AchievementTitle = styled.h3`
  font-size: 1.5rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1.5rem;
  text-align: center;
`;

const AchievementItem = styled.div`
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const AchievementHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const AchievementName = styled.h3`
  font-size: 1.25rem;
  color: ${props => props.theme.colors.primary};
  margin: 0;
`;

const AchievementDetails = styled.p`
  color: ${props => props.theme.colors.text};
  margin: 0;
  line-height: 1.6;
`;

const AchievementLink = styled.a`
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
  transition: color 0.2s ease;

  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
`;

const Achievements = () => {
  const { language } = useLanguage();

  const translations = {
    es: {
      title: 'Logros y Reconocimientos',
      icpcTitle: 'ICPC - International Collegiate Programming Contest',
      icpcDescription: 'La ICPC (International Collegiate Programming Contest) es la competición universitaria de programación más prestigiosa a nivel mundial. Se enfoca en el trabajo en equipo, análisis de problemas y desarrollo eficiente de software. Los equipos resuelven problemas algorítmicos bajo presión de tiempo, evaluando su capacidad para aplicar estructuras de datos, teoría de grafos, programación dinámica y otras técnicas avanzadas.\n\nMi participación en la ICPC me permitió mejorar mis habilidades en pensamiento lógico, optimización de código y trabajo en equipo, resolviendo problemas desafiantes en un entorno competitivo.',
      icpcNational: 'XXXVIII Maratón Nacional de Programación ACIS REDIS',
      icpcRegional: 'ICPC South America-North Finals',
      team: 'Equipo: UNlimited',
      rank: 'Posición',
      viewCredential: 'Ver Credencial',
      achievements2024: 'Logros 2024',
    },
    en: {
      title: 'Achievements and Recognition',
      icpcTitle: 'ICPC - International Collegiate Programming Contest',
      icpcDescription: 'The ICPC (International Collegiate Programming Contest) is the most prestigious university programming competition worldwide. It focuses on teamwork, problem analysis, and efficient software development. Teams solve algorithmic problems under time pressure, evaluating their ability to apply data structures, graph theory, dynamic programming, and other advanced techniques.\n\nMy participation in ICPC allowed me to improve my skills in logical thinking, code optimization, and teamwork, solving challenging problems in a competitive environment.',
      icpcNational: 'XXXVIII National Programming Marathon ACIS REDIS',
      icpcRegional: 'ICPC South America-North Finals',
      team: 'Team: UNlimited',
      rank: 'Rank',
      viewCredential: 'View Credential',
      achievements2024: '2024 Achievements',
    },
  };

  return (
    <AchievementsSection>
      <Container>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {translations[language].title}
        </Title>

        <AchievementCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <AchievementTitle>{translations[language].icpcTitle}</AchievementTitle>
          <AchievementItem>
            <AchievementHeader>
              <AchievementName>{translations[language].icpcTitle}</AchievementName>
            </AchievementHeader>
            <AchievementDetails>
              {translations[language].icpcDescription}
            </AchievementDetails>
          </AchievementItem>
          <AchievementItem>
            <AchievementHeader>
              <AchievementName>{translations[language].achievements2024}</AchievementName>
            </AchievementHeader>
            <AchievementDetails>
              <strong>{translations[language].icpcNational}</strong>
              <br />
              {translations[language].team}, {translations[language].rank}: 24
              <br />
              <strong>{translations[language].icpcRegional}</strong>
              <br />
              {translations[language].team}, {translations[language].rank}: 23
            </AchievementDetails>
            <AchievementLink
              href="https://icpc.global/ICPCID/Y099NRO97F5R"
              target="_blank"
              rel="noopener noreferrer"
            >
              🏆 {translations[language].viewCredential}
            </AchievementLink>
          </AchievementItem>
        </AchievementCard>
      </Container>
    </AchievementsSection>
  );
};

export default Achievements; 