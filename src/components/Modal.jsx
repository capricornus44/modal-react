import React from "react"
import styled from "styled-components"
import { MdClose } from "react-icons/md"

const Modal = ({ isModalShown, setIsModalShown }) => {
  return <>{isModalShown && <div>MODAL</div>}</>
}

export default Modal
