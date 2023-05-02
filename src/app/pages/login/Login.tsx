import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { InputLogin } from "./components/InputLogin";
import { Button, Title } from "app/shared/components";
import { useUsuarioLogado } from "app/shared/hooks";

export const PageLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const { nomeUsuario, logout } = useUsuarioLogado();

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
    console.log("useCallback", name);
  }, [email, password, name]);

  useEffect(() => {
    console.log("useEffect", email);
    console.log("useEffect", password);
    console.log("useEffect", name);
  }, [email, password, name]);

  return (
    <div>
      <Title text="Login" />
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
          ref={inputPasswordRef}
          onChange={(newValue) => setPassword(newValue)}
        />

        <Button type="button" onClick={handleEntrar}>
          Entrar
        </Button>

        <Button type="button" onClick={logout}>
          Name
        </Button>

        <InputLogin
          label="Nome"
          type="text"
          value={name}
          onChange={(newValue) => setName(newValue)}
        />

        <Button type="button" onClick={handlePaginaInicial}>
          Página inicial
        </Button>
      </form>
    </div>
  );
};
