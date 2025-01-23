import { Button, Modal, Typography } from "antd";
import React, { useContext } from "react";
import { StoreContext } from "../../store/storeContext";

interface ISuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SuccessModal = ({ isOpen, onClose }: ISuccessModalProps) => {
  const { formStore } = useContext(StoreContext);
  const { formData } = formStore;
  const { firstName, lastName, loanAmount, loanTerm } = formData;

  return (
    <Modal
      open={isOpen}
      closable={false}
      footer={<Button onClick={onClose}>Закрыть</Button>}
    >
      <Typography.Text>{`Поздравляем, ${lastName} ${firstName}. Вам одобрено $${loanAmount} на ${loanTerm} дней.`}</Typography.Text>
    </Modal>
  );
};

export default SuccessModal;
