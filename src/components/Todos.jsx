import React, { useState, useEffect } from "react";
import { databases } from "../appwrite/appwriteConfig";
import { Query } from "appwrite";

function Todos() {
  const [todos, setTodos] = useState();
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    const getTodos = databases.listDocuments(
      "6730c022000fe0dcca18",
      "6730c02e0016440515ad"
    );

    getTodos.then(
      function (response) {
        setTodos(response.documents);
      },
      function (error) {
        console.error(error);
      }
    );
    setLoader(false);
  }, []);

  const deleteTodo = (id) => {
    console.log(id);
    const promise = databases.deleteDocument(
      "6730c022000fe0dcca18",
      "6730c02e0016440515ad",
      id
    );
    promise.then(
      function (response) {
        console.log(response);
        window.location.reload();
      },
      function (error) {
        console.error(error);
      }
    );
    // window.location.reload();
  };

  return (
    <div className="max-w-7xl mx-auto">
      <p className="text-xl font-bold mb-2">Todo List</p>
      {loader ? (
        <p>Loading ...</p>
      ) : (
        <div>
          {todos &&
            todos.map((item) => (
              <div key={item.$id}>
                <div className="p-4 flex items-center justify-between border-b-2 bg-gray-100 rounded-lg mb-1">
                  <div>
                    {/* <p>{item.$id}</p> */}
                    <p>{item.Todo}</p>
                  </div>
                  <div>
                    <span
                      className="text-red-400 cursor-pointer"
                      onClick={() => {
                        deleteTodo(item.$id);
                      }}
                    >
                      Delete
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default Todos;
