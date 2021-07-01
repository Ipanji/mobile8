import React from "react";
import "react-alert-confirm/dist/index.css";
import "./styles.css";
import confirm, { Button, alert } from "react-alert-confirm";

export default function App() {
  async function handleClickAsync() {
    try {
      const instance = await confirm({
        content: "Apakah anda ingin memproses data ini",
        okText: "Yes",
        cancelText: "No"
      }).async();
      console.log(instance.action);
    } catch (e) {
      console.log(e.action);
    }
  }

  return (
    <div className="App">
      <Button
        type="primary"
        style={{ margin: "0 10px" }}
        onClick={handleClickAsync}
      >
        Tombol OK
      </Button>
    </div>
  );
}