import { Form } from "antd";
import React, { useContext, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import SuccessModal from "../../components/SuccessModal/SuccessModal";
import { StoreContext } from "../../store/storeContext";
import FirstPage from "../FirstPage/FirstPage";
import SecondPage from "../SecondPage/SecondPage";
import ThirdPage from "../ThirdPage/ThirdPage";

// В качестве UI-либы я использовал Ant Design, так как там есть всё что нужно
// Стили сделал инлайн для скорости

const AppContainer = () => {
  const { formStore } = useContext(StoreContext);
  const { formData, setFormData, createOrder } = formStore;
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Form
          name="basic"
          style={{ width: 450 }}
          autoComplete="off"
          layout="vertical"
          // Хэндлеры можно вынести в отдельные функции и использовать useCallback
          onFieldsChange={(changedFields, allFields) => {
            const newData = allFields.reduce((acc, field) => {
              acc[field.name[0]] = field.value;
              return acc;
            }, {});

            setFormData(newData);
          }}
          form={form}
          initialValues={formData}
          onFinish={() => {
            createOrder(() => {
              setIsModalVisible(true);
            });
          }}
        >
          <Routes>
            <Route path="/step1" element={<FirstPage form={form} />} />
            <Route path="/step2" element={<SecondPage />} />
            <Route path="/step3" element={<ThirdPage />} />
            <Route path="/" element={<Navigate to="/step1" />} />
          </Routes>
        </Form>
      </div>
      <SuccessModal
        isOpen={isModalVisible}
        onClose={() => {
          setIsModalVisible(false);
        }}
      />
    </>
  );
};

export default AppContainer;
