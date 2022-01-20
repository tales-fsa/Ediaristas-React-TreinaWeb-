import { useState } from 'react';
import {
  AccordionStyled,
  SectionContainer,
  SectionSubTitle,
  SectionTitle,
  Wave,
} from './_frequent-questions.styled';
import {
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
} from '@mui/material';

const questionList = [
  {
    question: 'Dúvida 1',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, nesciunt. Itaque nobis qui voluptate impedit dolor aliquid nesciunt quaerat quod eos maiores. Laudantium, asperiores. Repellat esse quod debitis id deserunt.',
  },
  {
    question: 'Dúvida 2',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, nesciunt. Itaque nobis qui voluptate impedit dolor aliquid nesciunt quaerat quod eos maiores. Laudantium, asperiores. Repellat esse quod debitis id deserunt.',
  },
  {
    question: 'Dúvida 3',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, nesciunt. Itaque nobis qui voluptate impedit dolor aliquid nesciunt quaerat quod eos maiores. Laudantium, asperiores. Repellat esse quod debitis id deserunt.',
  },
  {
    question: 'Dúvida 4',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, nesciunt. Itaque nobis qui voluptate impedit dolor aliquid nesciunt quaerat quod eos maiores. Laudantium, asperiores. Repellat esse quod debitis id deserunt.',
  },
];

const FrequentQuestions = () => {
  const [activeAccordion, setActiveAccordion] = useState(0);
  function isOpen(accordionNumber: number): boolean {
    return activeAccordion === accordionNumber;
  }
  function changeOpenAccordion(accordionNumber: number) {
    if(isOpen(accordionNumber)){
      setActiveAccordion(0);
    } else {
      setActiveAccordion(accordionNumber);
    }
  }
  function getIcon(accordionNumber: number){
    return isOpen(accordionNumber) ? 'twf-minus' : 'twf-plus';
  }
  return (
    <SectionContainer>
      <Wave src={'/img/home/waves.svg'} />
      <Container>
        <SectionTitle>Ainda está com dúvidas?</SectionTitle>
        <SectionSubTitle>Veja abaixos as perguntas frequentes</SectionSubTitle>
        {questionList.map((item, index) => (
          <AccordionStyled
            key={index}
            expanded={isOpen(index + 1)}
            onChange={() => changeOpenAccordion(index + 1)}
          >
            <AccordionSummary expandIcon={<i className={getIcon(index + 1)} />}>
              <Typography color={'primary'}>{item.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>{item.answer}</AccordionDetails>
          </AccordionStyled>
        ))}
      </Container>
    </SectionContainer>
  );
};

export default FrequentQuestions;
