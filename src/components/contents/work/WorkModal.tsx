import React, { FormEventHandler, memo, useRef, useState, ChangeEvent, Dispatch, SetStateAction, useEffect } from 'react'
import Modal from '../../../features/Modal'

type Props = {
  isOpenModal: boolean;
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
}

const WorkModal = ({ isOpenModal, setIsOpenModal }: Props) => {

  const handleClose = () => {
    setIsOpenModal(false);
  }

  return (
    <>
      <Modal show={isOpenModal} onClose={handleClose}>
        <div>aaa</div>
      </Modal >
    </>
  )
}

export default memo(WorkModal);