import { Footer } from './Footer';
import { NavBar } from './header/NavBar';
import styled from 'styled-components';

const Container = styled.div`
  height: auto;
  margin: 0 auto;
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  color: #333;
`;
const Children = styled.div`
  max-width: 100%;
  margin: 0 auto;
  margin-top: 170px;
`;
export const Layout = (props) => {
  return (
    <Container>
      <NavBar />
      <Children>{props.children}</Children>
      <Footer />
    </Container>
  );
};
