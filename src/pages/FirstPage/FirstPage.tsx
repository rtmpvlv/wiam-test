import {
  Button,
  Flex,
  Form,
  Input,
  InputNumber,
  Select,
  Typography,
} from "antd";
import { observer } from "mobx-react-lite";
import React from "react";
import { useNavigate } from "react-router-dom";

const { Text } = Typography;

const FirstPage = observer(() => {
  const navigate = useNavigate();
  const form = Form.useFormInstance();

  return (
    <>
      <Form.Item
        label={<Text>Введите номер телефона</Text>}
        rules={[
          { required: true, message: "Обязательноe поле" },
          {
            pattern: /^\d{9}$/,
            message: "Номер телефона должен содержать 9 цифр",
          },
        ]}
        name="phone"
      >
        <InputNumber
          controls={false}
          style={{ width: "100%" }}
          addonBefore="0"
          placeholder="XXX XXX XXX"
          maxLength={11}
          // Тут я не стал сильно заморачиваться с маской, но можно использовать react-input-mask
          // В перспективе я бы добавил ещё запрет на ввод букв и символов
          formatter={(value) =>
            value
              .replace(/\D/g, "")
              .replace(/(\d{3})(\d{0,3})(\d{0,3})/, (match, g1, g2, g3) =>
                [g1, g2, g3].filter(Boolean).join(" ")
              )
          }
          parser={(value) => value.replace(/\D/g, "")}
        />
      </Form.Item>
      <Form.Item
        label={<Text>Введите имя</Text>}
        rules={[{ required: true, message: "Обязательноe поле" }]}
        name="firstName"
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={<Text>Введите фамилию</Text>}
        rules={[{ required: true, message: "Обязательноe поле" }]}
        name="lastName"
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={<Text>Выберите пол</Text>}
        rules={[{ required: true, message: "Обязательноe поле" }]}
        name="gender"
      >
        <Select
          options={[
            { label: "Мужской", value: "male" },
            { label: "Женский", value: "female" },
          ]}
        />
      </Form.Item>
      <Flex>
        <Button
          type="primary"
          onClick={() => {
            form.validateFields().then(() => {
              navigate("/step2");
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

export default FirstPage;
