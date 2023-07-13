import React, { useState } from "react";

function AddProductForm({ addNewProduct }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("");

  const handleAddProduct = () => {
    addNewProduct({
      id: Math.floor(Math.random() * 100),
      name: name,
      price: price,
      content: content,
      status: status,
    });
    setName("");
    setPrice("");
    setContent("");
    setStatus("");
  };

  return (
    <form>
      <table>
        <tr>
          <td>Name: </td>
          <td>
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td>Price: </td>
          <td>
            <input
              type="number"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td>Content: </td>
          <td>
            <input
              type="text"
              value={content}
              onChange={(event) => setContent(event.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td>Status: </td>
          <td>
            <input
              type="text"
              value={status}
              onChange={(event) => setStatus(event.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <button type="button" onClick={() => handleAddProduct()}>
              Add
            </button>
          </td>
        </tr>
      </table>
    </form>
  );
}

export default AddProductForm;
