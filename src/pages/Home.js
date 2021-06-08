import LeftHome from '../components/LeftHome';
import RightHome from '../components/RightHome';
import { Container, Row } from 'react-bootstrap';
import './css/Home.css'

export default function Home() {
  return (
    <div className="home-background">
      <Container>
        <Row>
          <LeftHome />
          <RightHome />
        </Row>
      </Container>
    </div>
  );
}
