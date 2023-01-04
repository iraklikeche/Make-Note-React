import React, { useState } from "react";

function CreateArea(props) {
  const [text, setText] = useState({
    title: "",
    content: ""
  });

  function handleChange(e) {
    const { value, name } = e.target;
    setText((prevValue) => {
      if (name === "title") {
        return {
          title: value,
          content: prevValue.content
        };
      } else if (name === "content") {
        return {
          title: prevValue.title,
          content: value
        };
      }
    });
  }

  function handleClick(e) {
    e.preventDefault();
    props.onAdd(text);
    setText({ title: "", content: "" });
  }

  return (
    <div>
      <form>
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={text.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handleChange}
          value={text.content}
        />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
