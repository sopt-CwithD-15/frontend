import styled from 'styled-components';
function MainPage() {
  return (
    <Container>
      <h1>Hello, 👋</h1>
      <p>우리는 15조야</p>
    </Container>
  );
}

const Container = styled.main`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: skyblue;
  color: white;

  & > h1 {
    font-size: 5rem;
  }

  & > p {
    font-size: 2rem;
  }
`;

export default MainPage;
