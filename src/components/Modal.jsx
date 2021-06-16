import React, { useRef, useCallback, useEffect } from "react"
import styled, { keyframes } from "styled-components"
import { MdClose } from "react-icons/md"
import image from "../assets/modal-image.jpg"

const slideIn = keyframes`
  0% {
    transform: translateX(1000px);
  }
  100% {
    transform: translateX(0);
  }
`

const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
`

const ModalWrapper = styled.div`
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

const ModalImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0.625rem 0 0 0.625rem;
`

const ModalContent = styled.div`
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

const CloseModalButton = styled(MdClose)`
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  width: 2rem;
  height: 2rem;
  padding: 0;
  z-index: 5;
  cursor: pointer;
`

const Modal = ({ isModalShown, setIsModalShown }) => {
  const modalRef = useRef()

  const closeModal = (e) => {
    if (modalRef.current === e.target) setIsModalShown(!isModalShown)
  }

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && isModalShown) setIsModalShown(!isModalShown)
    },
    [isModalShown, setIsModalShown]
  )

  useEffect(() => {
    document.addEventListener("keydown", keyPress)
    return () => document.removeEventListener("keydown", keyPress)
  }, [keyPress])

  return (
    <>
      {isModalShown && (
        <Backdrop ref={modalRef} onClick={closeModal}>
          <ModalWrapper isModalShown={isModalShown}>
            <ModalImage src={image} alt="laptop" />
            <ModalContent>
              <h1>Anton Zavalniuk</h1>
              <h3>Front-end developer</h3>
              <p>
                Looking for new challenges as React developer. Previously Electrical Technical Officer with 12+ years
                experience on the merchant fleet with good communication skills, high level of responsibility and
                passionate about job in the IT-industry. Good team player and a leader.
              </p>
            </ModalContent>
            <CloseModalButton arial-label="close modal" onClick={() => setIsModalShown(!isModalShown)} />
          </ModalWrapper>
        </Backdrop>
      )}
    </>
  )
}

export default Modal
