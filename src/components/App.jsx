import React, { useState } from "react"
import styled from "styled-components"

import Modal from "./Modal"
import GlobalStyle from "../globalStyle"

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

  &:hover {
    opacity: 0.8;
  }
`

const App = () => {
  const [isModalShown, setIsModalShown] = useState(false)

  const openModal = () => {
    setIsModalShown(!isModalShown)
  }

  return (
    <Container>
      <Button onClick={openModal}>Open the Modal</Button>
      <Modal isModalShown={isModalShown} setIsModalShown={setIsModalShown} />
      <GlobalStyle />
    </Container>
  )
}

export default App
