import styled from "styled-components";
import "./App.css";
import Form from "./components/form";

const PageWrapper = styled.div`
  font-family: sans-serif;
  line-height: 1.5;
  color: #333;
  background: #ddd;
  padding: 2em;
  height: 100vh;

  h1,
  h3 {
    color: #576774;
  }

  h1:first-child {
    margin-top: 0;
  }
`;

const colorOptions = [
  {
    value: "",
    label: "Choose colour",
  },
  {
    value: "blue",
    label: "Blue",
  },
  {
    value: "green",
    label: "Green",
  },
  {
    value: "red",
    label: "Red",
  },
  {
    value: "black",
    label: "Black",
  },
  {
    value: "brown",
    label: "Brown",
  },
];

const animalOptions = [
  {
    value: "bear",
    label: "Bear",
  },
  {
    value: "tiger",
    label: "Tiger",
  },
  {
    value: "snake",
    label: "Snake",
  },
  {
    value: "donkey",
    label: "Donkey",
  },
];

function App() {
  return (
    <PageWrapper>
      <Form colorOptions={colorOptions} animalOptions={animalOptions} />
    </PageWrapper>
  );
}

export default App;
