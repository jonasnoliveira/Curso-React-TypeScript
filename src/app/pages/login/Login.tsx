import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { InputLogin } from "./components/InputLogin";
import { ButtonLogin } from "app/pages/login/components/ButtonLogin";

export const PageLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const inputPasswordRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const handlePaginaInicial = useCallback(() => {
    navigate("/pagina-inicial");
  }, []);

  // useMemo => Guarda cáculos complexos em memória
  const emailLength = useMemo(() => {
    return email.length * 1000;
  }, [email.length]);

  // useCallback => Guarda funções em memória
  const handleEntrar = useCallback(() => {
    console.log("useCallback", email);
    console.log("useCallback", password);
  }, [email, password]);

  useEffect(() => {
    console.log("useEffect", email);
    console.log("useEffect", password);
  }, [email, password]);

  return (
    <div>
      Login
      <form>
        <p>Quantidade de caracteres no email: {emailLength}</p>

        <InputLogin
          label="email"
          type="email"
          value={email}
          onChange={(newValue) => setEmail(newValue)}
          onPressEnter={() => inputPasswordRef.current?.focus()}
        />

        <InputLogin
          label="Senha"
          type="password"
          value={password}
          onChange={(newValue) => setPassword(newValue)}
        />

        <ButtonLogin text="Entrar" type="button" onClick={handleEntrar} />

        <ButtonLogin
          text="Página inicial"
          type="button"
          onClick={handlePaginaInicial}
        />
        
      </form>
    </div>
  );
};
