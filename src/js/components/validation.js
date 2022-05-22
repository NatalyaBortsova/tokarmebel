import { validateForms } from "../functions/validate-forms";

const inputTel = document.querySelector(".input-tel");

if (inputTel) {
  const rules = [
    {
      ruleSelector: ".input-tel",
      tel: true,
      telError: "Введите корректный телефон",
      rules: [
        {
          rule: "required",
          value: true,
          errorMessage: "Заполните телефон!",
        },
      ],
    },
  ];

  const afterForm = () => {
    console.log("Произошла отправка, тут можно писать любые действия");
  };

  validateForms(".order-consultation__form", rules, afterForm);
}
