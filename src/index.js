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

  // 完了ボタン生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    alert("完了");
  });
  console.log(completeButton);

  // 削除ボタン生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    alert("削除");
  });
  console.log(deleteButton);

  // divの下にliを入れる
  todoDiv.appendChild(todoLi);
  todoDiv.appendChild(completeButton);
  todoDiv.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(todoDiv);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
