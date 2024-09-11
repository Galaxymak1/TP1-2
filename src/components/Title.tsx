import { Container } from "react-bootstrap";

const Title: React.FC<{ title: string; undertitle: string }> = ({ title, undertitle }) => {
  return (
    <Container className="test">
      <h1 className="text-info  pb-2">{title}</h1>
      <h5 className="text-info border-bottom pb-3">{undertitle}</h5>
    </Container>
  );
};

export default Title;
