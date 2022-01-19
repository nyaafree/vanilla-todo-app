import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化
  const inputText = document.getElementById("add-text").value;
  console.log(inputText);
  document.getElementById("add-text").value = "";

  // divタグ生成
  const todoDiv = document.createElement("div");
  console.log(todoDiv);
  todoDiv.className = "list-row";

  // liタグ生成
  const todoLi = document.createElement("li");
  todoLi.innerText = inputText;
  console.log(todoLi);

  // divの下にliを入れる
  todoDiv.appendChild(todoLi);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(todoDiv);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
