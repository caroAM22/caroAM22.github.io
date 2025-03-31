import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const EducationSection = styled.section`
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

const EducationCard = styled(motion.div)`
  background-color: #f3f4f6;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;

const EducationTitle = styled.h3`
  font-size: 1.5rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1.5rem;
  text-align: center;
`;

const EducationItem = styled.div`
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 1rem;
  align-items: center;
`;

const EducationInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const EducationDegree = styled.h4`
  font-size: 1.2rem;
  color: ${props => props.theme.colors.text};
  margin: 0;
  font-weight: 600;
`;

const EducationInstitution = styled.p`
  color: ${props => props.theme.colors.text};
  margin: 0;
  font-size: 1rem;
`;

const EducationDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
`;

const EducationDate = styled.span`
  color: ${props => props.theme.colors.primary};
  font-weight: 500;
  font-size: 0.9rem;
`;

const EducationGPA = styled.span`
  color: ${props => props.theme.colors.text};
  font-size: 0.9rem;
`;

const EducationLink = styled.a`
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  transition: color 0.2s ease;

  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
`;

const CoursesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
`;

const CourseItem = styled.div`
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const CourseHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const CourseName = styled.h4`
  font-size: 1.2rem;
  color: ${props => props.theme.colors.text};
  margin: 0;
`;

const CoursePlatform = styled.p`
  color: ${props => props.theme.colors.text};
  margin: 0.5rem 0;
`;

const CourseLink = styled.a`
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
  transition: color 0.2s ease;

  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
`;

const CourseCategoryTitle = styled.h4`
  font-size: 1.5rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;
  text-align: center;
`;

const Education = () => {
  const { language } = useLanguage();

  const translations = {
    es: {
      title: 'Educación y Formación',
      education: 'Educación',
      formation: 'Formación',
      degree: 'Ingeniería de Sistemas',
      institution: 'Universidad Nacional de Colombia',
      gpa: 'GPA: 4.5/5.0',
      viewGrades: 'Ver Calificaciones',
      courses: 'Cursos',
      dataScience: 'Ciencia de Datos',
      webDev: 'Desarrollo Web',
      databases: 'Bases de Datos',
      tools: 'Herramientas',
      algorithms: 'Algoritmos y Matemáticas',
      viewCertificate: 'Ver Certificado'
    },
    en: {
      title: 'Education and Training',
      education: 'Education',
      formation: 'Formation',
      degree: 'Systems Engineering',
      institution: 'National University of Colombia',
      gpa: 'GPA: 4.5/5.0',
      viewGrades: 'View Grades',
      courses: 'Courses',
      dataScience: 'Data Science',
      webDev: 'Web Development',
      databases: 'Databases',
      tools: 'Tools',
      algorithms: 'Algorithms and Mathematics',
      viewCertificate: 'View Certificate'
    }
  };

  const coursesList = {
    dataScience: [
      {
        name: 'Applied Machine Learning in Python',
        platform: 'Coursera - University of Michigan',
        link: 'https://www.coursera.org/account/accomplishments/verify/ZVCD9XDZ3569'
      },
      {
        name: 'Álgebra Lineal Aplicada para Machine Learning',
        platform: 'Platzi',
        link: 'https://platzi.com/p/CarolinaAM/curso/1728-algebra-ml/diploma/detalle/'
      },
      {
        name: 'Pensamiento Lógico: Algoritmos y Diagramas de Flujo',
        platform: 'Platzi',
        link: 'https://platzi.com/p/CarolinaAM/curso/3221-pensamiento-logico/diploma/detalle/'
      },
      {
        name: 'Curso de Fundamentos de Matemáticas',
        platform: 'Platzi',
        link: 'https://platzi.com/p/CarolinaAM/curso/3131-fundamentos-matematicas/diploma/detalle/'
      },
      {
        name: 'Curso de Fundamentos de Ingeniería de Software',
        platform: 'Platzi',
        link: 'https://platzi.com/p/CarolinaAM/curso/1098-ingenieria/diploma/detalle/'
      }
    ],
    webDev: [
      {
        name: 'Curso Definitivo de HTML y CSS',
        platform: 'Platzi',
        link: 'https://platzi.com/p/CarolinaAM/curso/2008-html-css/diploma/detalle/'
      },
      {
        name: 'Curso Básico de Django',
        platform: 'Platzi',
        link: 'https://platzi.com/p/CarolinaAM/curso/2694-django-basico/diploma/detalle/'
      },
      {
        name: 'Curso de Introducción a la Web: Historia y Funcionamiento de Internet',
        platform: 'Platzi',
        link: 'https://platzi.com/p/CarolinaAM/curso/2000-intro-web/diploma/detalle/'
      },
      {
        name: 'Curso de Prework: Configuración de Entorno de Desarrollo en Windows',
        platform: 'Platzi',
        link: 'https://platzi.com/p/CarolinaAM/curso/2550-prework-windows/diploma/detalle/'
      }
    ],
    databases: [
      {
        name: 'Ruta de Datos SQL',
        platform: 'Platzi',
        link: 'https://platzi.com/p/CarolinaAM/ruta/13458-datos-sql/diploma/detalle/'
      },
      {
        name: 'PostgreSQL',
        platform: 'Platzi',
        link: 'https://platzi.com/p/CarolinaAM/curso/1480-postgresql/diploma/detalle/'
      },
      {
        name: 'Curso de Introducción a Bases de Datos',
        platform: 'Platzi',
        link: 'https://platzi.com/p/CarolinaAM/curso/1566-bd/diploma/detalle/'
      }
    ],
    tools: [
      {
        name: 'Git y GitHub',
        platform: 'Platzi',
        link: 'https://platzi.com/p/CarolinaAM/curso/1557-git-github/diploma/detalle/'
      },
      {
        name: 'Curso de Introducción a la Terminal y Línea de Comandos',
        platform: 'Platzi',
        link: 'https://platzi.com/p/CarolinaAM/curso/1749-terminal/diploma/detalle/'
      }
    ]
  };

  return (
    <EducationSection>
      <Container>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {translations[language].title}
        </Title>

        <EducationCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <EducationTitle>{translations[language].education}</EducationTitle>
          <EducationItem>
            <EducationInfo>
              <EducationDegree>{translations[language].degree}</EducationDegree>
              <EducationInstitution>{translations[language].institution}</EducationInstitution>
            </EducationInfo>
            <EducationDetails>
              <EducationDate>Marzo 2021 - Presente</EducationDate>
              <EducationGPA>{translations[language].gpa}</EducationGPA>
              <EducationLink
                href="https://drive.google.com/file/d/17MdX4hMI2keHlw-zs8bWTK5Aexx9ISaV/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                📄 {translations[language].viewGrades}
              </EducationLink>
            </EducationDetails>
          </EducationItem>
        </EducationCard>

        <EducationCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <EducationTitle>{translations[language].courses}</EducationTitle>
          
          <CoursesGrid>
            <CourseCategoryTitle>{translations[language].dataScience}</CourseCategoryTitle>
            {coursesList.dataScience.map((course) => (
              <CourseItem key={course.name}>
                <CourseHeader>
                  <CourseName>{course.name}</CourseName>
                  <CoursePlatform>{course.platform}</CoursePlatform>
                </CourseHeader>
                <CourseLink href={course.link} target="_blank" rel="noopener noreferrer">
                  {translations[language].viewCertificate}
                </CourseLink>
              </CourseItem>
            ))}

            <CourseCategoryTitle>{translations[language].webDev}</CourseCategoryTitle>
            {coursesList.webDev.map((course) => (
              <CourseItem key={course.name}>
                <CourseHeader>
                  <CourseName>{course.name}</CourseName>
                  <CoursePlatform>{course.platform}</CoursePlatform>
                </CourseHeader>
                <CourseLink href={course.link} target="_blank" rel="noopener noreferrer">
                  {translations[language].viewCertificate}
                </CourseLink>
              </CourseItem>
            ))}

            <CourseCategoryTitle>{translations[language].databases}</CourseCategoryTitle>
            {coursesList.databases.map((course) => (
              <CourseItem key={course.name}>
                <CourseHeader>
                  <CourseName>{course.name}</CourseName>
                  <CoursePlatform>{course.platform}</CoursePlatform>
                </CourseHeader>
                <CourseLink href={course.link} target="_blank" rel="noopener noreferrer">
                  {translations[language].viewCertificate}
                </CourseLink>
              </CourseItem>
            ))}

            <CourseCategoryTitle>{translations[language].tools}</CourseCategoryTitle>
            {coursesList.tools.map((course) => (
              <CourseItem key={course.name}>
                <CourseHeader>
                  <CourseName>{course.name}</CourseName>
                  <CoursePlatform>{course.platform}</CoursePlatform>
                </CourseHeader>
                <CourseLink href={course.link} target="_blank" rel="noopener noreferrer">
                  {translations[language].viewCertificate}
                </CourseLink>
              </CourseItem>
            ))}
          </CoursesGrid>
        </EducationCard>
      </Container>
    </EducationSection>
  );
};

export default Education; 