import { useState } from "react";
import Container from "./components/Container/Container";
import FormInput from "./components/FormInput/FormInput";
import Header from "./components/Header/Header";
import "./global.css";
import Button from "./components/Button/Button";

function App() {

  const [name, setName] = useState<string>('');

  const handleChangeName = (value: string) => {
    const cleanedValue = value.replace(/[^a-zA-Z\s]/g, "");
    setName(cleanedValue);
  }

  const desactiveButton = (): boolean => {
    return name.trim() === "" || name.length <= 3;
  };

  const handleClick = (): void => {
    alert('CLICOU');
  }

  return (
    <>
      <Header usuario="Tamires" />
      <Container>
        <FormInput
          placeholder={"Digite seu nome"} 
          value={name} 
          label={"Nome"} 
          type={"string"}
          onChange={handleChangeName}
        />
        <Button
        type="submit"
        text="Salvar"
        onClick={handleClick}
        disabled={desactiveButton()}>
        </Button>
      </Container>
    </>
  );
}

export default App;
