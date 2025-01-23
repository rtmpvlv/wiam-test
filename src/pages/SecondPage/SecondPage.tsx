import { Button, Flex, Form, Input, Select, Typography } from "antd";
import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../store/storeContext";

const { Text } = Typography;

const SecondPage = observer(() => {
  const { formStore } = useContext(StoreContext);
  const { categories } = formStore;
  const form = Form.useFormInstance();
  const navigate = useNavigate();

  return (
    <>
      <Form.Item
        label={<Text>Выберите место работы</Text>}
        name="job"
        rules={[{ required: true, message: "Обязательноe поле" }]}
      >
        <Select
          options={categories.map((category) => ({
            label: category, // Тут можно сделать названия по ключу из массива
            value: category,
          }))}
        />
      </Form.Item>
      <Form.Item
        label={<Text>Введите адрес</Text>}
        name="address"
        rules={[{ required: true, message: "Обязательноe поле" }]}
      >
        <Input />
      </Form.Item>
      <Flex gap={16} flex={1}>
        <Button onClick={() => navigate("/step1")} style={{ width: "100%" }}>
          Назад
        </Button>
        <Button
          type="primary"
          onClick={() => {
            form.validateFields().then(() => {
              navigate("/step3");
            });
          }}
          style={{ width: "100%" }}
        >
          Далее
        </Button>
      </Flex>
    </>
  );
});

export default SecondPage;
