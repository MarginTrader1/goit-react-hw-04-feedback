import { Section, Title } from "./SectionTitle.styled";

export const SectionTitle = ({ title, children }) => {
  return (
    <Section>
      <Title>{title}</Title>
      {children}
    </Section>
  );
};
