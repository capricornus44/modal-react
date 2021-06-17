import React, { useRef, useCallback, useEffect } from "react"

import { Backdrop, ModalWrapper, ModalImage, ModalContent, CloseModalButton } from "./ModalElements"
import image from "../../assets/modal-image.jpg"

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
