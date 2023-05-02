import { Link } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";

import { Title, Input } from "app/shared/components";
import { Button } from "../../shared/components/Button/Button";
import { ITasks } from "app/shared/interfaces";
import { TasksService } from "app/shared/services/api/tasks/TasksService";
import { ErrorExcption } from "app/shared/services/api/ErrorExcption";

export const PageDashboard = () => {
  const [list, setList] = useState<ITasks[]>([]);
  const [text, setText] = useState("");

  useEffect(() => {
    TasksService.getAll()
      .then((result) => {
        if (result instanceof ErrorExcption) {
          return alert(result.message);
        }
        setList(result);
      });
  }, []);

  const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> =
    useCallback((e) => {
      if (e.key === "Enter") {
        if (e.currentTarget.value.trim().length === 0) return;

        const value = e.currentTarget.value;

        e.currentTarget.value = "";

        if (list.some((ITasks) => ITasks.title.toLowerCase() === value.toLowerCase())) {
          alert("Este item já existe!");
          return;
        }

        TasksService.create({
          title: value,
          isComplete: false
        }).then((result) => {
          if (result instanceof ErrorExcption) {
            return alert(result.message);
          }
          setList((oldList) => {
            alert("Item cadastrado com sucesso!");
            return [
              ...oldList,
              {
                id: oldList.length,
                title: value,
                isComplete: false
              },
            ];
          });
        })
      }
    }, [list]);

  const handleClearList = useCallback(() => {
    setList([]);
  }, []);

  const handleToggleComplete = useCallback((id: number) => {
    const taskToUpdate = list.find((task) => task.id === id);

    if (!taskToUpdate) return;

    TasksService.updateById(id, { ...taskToUpdate, isComplete: !taskToUpdate.isComplete })
      .then((result) => {
        if (result instanceof ErrorExcption) {
          return alert(result.message);
        }
        setList((oldList) => {
          return oldList.map((oldITasks) => {
            if (oldITasks.id === id) return result

            return oldITasks;
          });
        });
      });

  }, [list]);

  const handleDelete = useCallback((id: number) => {

    TasksService.deleteById(id)
      .then((result) => {
        if (result instanceof ErrorExcption) {
          return alert(result.message);
        }
        setList((oldList) => {
          return oldList.filter((oldITasks) => oldITasks.id !== id);
        });
      });

  }, [list]);

  const handleToUpperCase = useCallback(() => {
    const newText = text.toUpperCase();
    setText(newText);
  }, [text]);

  const handleToLowerCase = useCallback(() => {
    const newText = text.toLowerCase();
    setText(newText);
  }, [text]);

  return (
    <div>
      <Title text="Dashboard" />

      <input onKeyDown={handleInputKeyDown} />

      <Button onClick={handleClearList}>Limpar</Button>

      <p>{list.filter((ITasks) => ITasks.isComplete).length}</p>

      <ul>
        {list.map((ITasks) => {
          return (
            <li key={ITasks.id}>
              <input
                type="checkbox"
                checked={ITasks.isComplete}
                onChange={() => handleToggleComplete(ITasks.id)}
              />
              {ITasks.title}
              <Button onClick={() => handleDelete(ITasks.id)}>
                Apagar
              </Button>
            </li>
          );
        })}
      </ul>


      <Input
        label="Digite o texto"
        type="text"
        value={text}
        onChange={(newValue) => setText(newValue)}
      />

      <Button onClick={handleToUpperCase}>To Upper Case</Button>

      <Button onClick={handleToLowerCase}>To Lower Case</Button>

      <div>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};
