import styled, { keyframes } from "styled-components"
import { MdClose } from "react-icons/md"

export const slideIn = keyframes`
  0% {
    transform: translateX(1000px);
  }
  100% {
    transform: translateX(0);
  }
`

export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
`

export const ModalWrapper = styled.div`
  position: relative;
  width: 50rem;
  height: 30rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  color: #ffffff;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  z-index: 5;
  animation: 0.3s ${slideIn} ease-out;
`

export const ModalImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0.625rem 0 0 0.625rem;
`

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 1rem;
  border-radius: 0 0.625rem 0.625rem 0;
  color: #ffffff;
  background-image: linear-gradient(to right, #1b1c55, #2f2888);

  h1 {
    margin-bottom: 1rem;
  }

  h3 {
    margin-bottom: 2rem;
  }
`

export const CloseModalButton = styled(MdClose)`
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  width: 2rem;
  height: 2rem;
  padding: 0;
  z-index: 5;
  cursor: pointer;
`
