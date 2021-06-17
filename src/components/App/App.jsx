import React, { useState } from "react"

import { Container, Button } from "./AppElements"
import GlobalStyle from "../../globalStyle"
import Modal from "../Modal/Modal"

const App = () => {
  const [isModalShown, setIsModalShown] = useState(false)

  const openModal = () => {
    setIsModalShown(!isModalShown)
  }

  return (
    <Container>
      <Button onClick={openModal}>Open Modal</Button>
      <Modal isModalShown={isModalShown} setIsModalShown={setIsModalShown} />
      <GlobalStyle />
    </Container>
  )
}

export default App
