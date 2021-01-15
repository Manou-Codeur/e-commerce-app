export const generateReviewInputs = (values, errors, touched) => [
  {
    type: "select",
    label: "Rating",
    value: values.rating,
    name: "rating",
    error: errors.rating,
    touched: touched.rating,
    selectList: [1, 2, 3, 4, 5],
  },
  {
    type: "text",
    label: "Title",
    value: values.title,
    name: "title",
    error: errors.title,
    touched: touched.title,
  },
  {
    type: "textArea",
    label: "Description",
    value: values.description,
    name: "description",
    error: errors.description,
    touched: touched.description,
  },
];
