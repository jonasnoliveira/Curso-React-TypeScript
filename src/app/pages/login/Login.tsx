import { useCallback, useEffect, useMemo, useState } from "react";

export const PageLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

        <label>
          <span>Email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label>
          <span>Senha</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button type="button" onClick={handleEntrar}>
          Entrar
        </button>
      </form>
    </div>
  );
};
