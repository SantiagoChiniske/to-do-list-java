import React, { useEffect, useState } from "react";
import { Trash2, CheckCircle2, Circle } from "lucide-react";
import axios from "axios";

export default function app() {
  const [formData, setFormData] = useState({
  titulo: "",
  descricao: "",
  responsavel: "",
});

  const [tasks, setTasks] = useState([]);

  function handleAddTask(e) {
    e.preventDefault();

    axios.post("http://localhost:8080/task",{
      "titulo":formData.titulo,
      "descricao":formData.descricao,
      "responsavel":formData.responsavel
    }).then(e=>{
      console.log("Deu certo" + e)
      setFormData({
          titulo: "",
  descricao: "",
  responsavel: "",
      })
      getTask();
    }).catch(e=>{
      console.error(e)
    })
    
  }

  function handleChange(e) {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
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

<form onSubmit={handleAddTask} className="space-y-4 mb-8">
  <input
    type="text"
    name="titulo"
    placeholder="Digite o título da tarefa..."
    value={formData.titulo}
    onChange={handleChange}
    className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />

  <textarea
    name="descricao"
    placeholder="Digite a descrição da tarefa..."
    value={formData.descricao}
    onChange={handleChange}
    rows={4}
    className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
  />

  <input
    type="text"
    name="responsavel"
    placeholder="Responsável pela tarefa..."
    value={formData.responsavel}
    onChange={handleChange}
    className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />

  <button
    type="submit"
    className="w-full bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-xl font-semibold"
  >
    Adicionar Tarefa
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
        className="bg-gray-800 p-5 rounded-xl flex justify-between items-start"
      >
        <div
          className="flex gap-4 cursor-pointer flex-1"
          onClick={() => toggleTask(item.id)}
        >
          <div className="mt-1">
            {item.completed ? (
              <CheckCircle2 className="text-green-500" />
            ) : (
              <Circle className="text-gray-400" />
            )}
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span
                className={`text-xl font-semibold ${
                  item.completed
                    ? "line-through text-gray-500"
                    : "text-white"
                }`}
              >
                {item.titulo}
              </span>

              <span className="text-gray-500">•</span>

              <span
                className={`text-sm ${
                  item.completed
                    ? "line-through text-gray-500"
                    : "text-blue-400"
                }`}
              >
                {item.responsavel}
              </span>
            </div>

            <p
              className={`text-sm ${
                item.completed
                  ? "line-through text-gray-500"
                  : "text-gray-300"
              }`}
            >
              {item.descricao}
            </p>
          </div>
        </div>

        <button
          onClick={() => removeTask(item.id)}
          className="text-red-400 hover:text-red-500 transition ml-4"
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