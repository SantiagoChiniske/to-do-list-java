import React, { useEffect, useState } from "react";
import { Trash2, CheckCircle2, Circle } from "lucide-react";
import axios from "axios";

export default function app() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleAddTask(e) {
    e.preventDefault();

    axios.post("http://localhost:8080/task",{
      "titulo":task,
      "descricao":"Tarefa nova",
      "responsavel":"santiago"
    }).then(e=>{
      console.log("Deu certo" + e)
      getTask()
      setTask("")
    }).catch(e=>{
      console.error(e)
    })



    
  }


  function getTask(){
    axios.get("http://localhost:8080/task").then(e=>{
      console.log(e)
      setTasks(e.data)
    })
    .catch(e =>{
      console.error(e)
    })
  }

  useEffect(()=>{
    getTask()
  },[])

   function removeTask(id){
    console.log(id)
      axios.delete(`http://localhost:8080/task/${id}`).then(res=>{
        console.log("Removido" + res) 
        getTask();
      }).catch(e=>console.error(e))

      
   }

  return (
    <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-gray-900 rounded-2xl shadow-2xl p-8">
        <h1 className="text-4xl font-bold mb-2">To-Do List</h1>
        <p className="text-gray-400 mb-8">
          Organize suas tarefas de forma simples.
        </p>

        {/* Formulário */}
        <form onSubmit={handleAddTask} className="flex gap-3 mb-8">
          <input
            type="text"
            placeholder="Digite uma tarefa..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="flex-1 bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-xl font-semibold"
          >
            Adicionar
          </button>
        </form>

        {/* Lista */}
        <div className="space-y-4">
          {tasks.length === 0 ? (
            <div className="text-center text-gray-500 py-10 border border-dashed border-gray-700 rounded-xl">
              Nenhuma tarefa adicionada.
            </div>
          ) : (
            tasks.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-gray-800 p-4 rounded-xl"
              >
                <div
                  className="flex items-center gap-3 cursor-pointer"
                  onClick={() => toggleTask(item.id)}
                >
                  {item.completed ? (
                    <CheckCircle2 className="text-green-500" />
                  ) : (
                    <Circle className="text-gray-400" />
                  )}

                  <span
                    className={`text-lg ${
                      item.completed
                        ? "line-through text-gray-500"
                        : "text-white"
                    }`}
                  >
                    {item.titulo}
                  </span>
                  |  
                   <span
                    className={`text-lg ${
                      item.completed
                        ? "line-through text-gray-500"
                        : "text-white"
                    }`}
                  >
                    {item.responsavel}
                  </span>
                </div>

                <button
                  onClick={() => removeTask(item.id)}
                  className="text-red-400 hover:text-red-500 transition"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Rodapé */}
        {tasks.length > 0 && (
          <div className="mt-8 text-sm text-gray-400">
            Total de tarefas:{" "}
            <span className="font-semibold text-white">
              {tasks.length}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}