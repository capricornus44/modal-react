import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: linear-gradient(225deg, #454545, #212121);
`

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  padding: 0 1.5rem;
  border-radius: 0.625rem;
  border: none;
  outline: none;
  font-size: 1.5rem;
  color: #ffffff;
  background-image: linear-gradient(to right, #3f51b5, #e2229c, #fd0cb2);
  cursor: pointer;
`

const App = () => {
  return (
    <Container>
      <Button>Open the Modal</Button>
    </Container>
  )
}

export default App
