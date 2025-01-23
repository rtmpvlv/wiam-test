import { Button, Flex, Form, Slider, Typography } from "antd";
import { observer } from "mobx-react-lite";
import React from "react";
import { useNavigate } from "react-router-dom";

const { Text } = Typography;

const ThirdPage = observer(() => {
  const navigate = useNavigate();

  return (
    <>
      <Form.Item
        label={<Text>Выберите сумму займа</Text>}
        name="loanAmount"
        rules={[{ required: true, message: "Обязательноe поле" }]}
      >
        <Slider
          min={200}
          max={1000}
          step={100}
          marks={{
            200: "$200",
            600: "$600",
            1000: "$1000",
          }}
        />
      </Form.Item>
      <Form.Item
        label={<Text>Выберите срок займа</Text>}
        name="loanTerm"
        rules={[{ required: true, message: "Обязательноe поле" }]}
      >
        <Slider
          min={10}
          max={30}
          step={1}
          marks={{
            10: "10 дней",
            20: "20 дней",
            30: "30 дней",
          }}
        />
      </Form.Item>
      <Flex gap={16} flex={1}>
        <Button
          onClick={() => {
            navigate("/step2");
          }}
          style={{ width: "100%" }}
        >
          Назад
        </Button>
        <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
          Подать заявку
        </Button>
      </Flex>
    </>
  );
});

export default ThirdPage;
