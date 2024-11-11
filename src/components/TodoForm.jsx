import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { databases } from "../appwrite/appwriteConfig";

function TodoForm() {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const promise = databases.createDocument(
      "6730c022000fe0dcca18",
      "6730c02e0016440515ad",
      uuidv4(),
      {
        Todo: todo,
      }
    );
    console.log(promise);
    promise.then(
      function (response) {
        console.log(response);
        window.location.reload();
      },
      function (error) {
        console.error(error);
      }
    );
    //window.location.reload() // handle it in different way
    // e.target.reset();
    //window.location.reload()
  };

  return (
    <div className="max-w-7xl mx-auto mt-10">
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex justify-center mb-10"
      >
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter Todo"
          className="border p-2 w-2/3 rounded-md"
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <button
          className="bg-purple-500 p-2 text-white ml-2 rounded-md"
          type="submit"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default TodoForm;