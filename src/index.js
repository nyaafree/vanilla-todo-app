import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化
  const inputText = document.getElementById("add-text").value;
  console.log(inputText);
  document.getElementById("add-text").value = "";

  // liタグ生成
  const todoLi = document.createElement("li");

  // divタグ生成
  const todoDiv = document.createElement("div");
  console.log(todoDiv);
  todoDiv.className = "list-row";

  // pタグ生成
  const todoParagraph = document.createElement("p");
  todoParagraph.innerText = inputText;
  console.log(todoParagraph);

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
    // alert("削除");
    const deleteTarget = deleteButton.closest("li");
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });
  console.log(deleteButton);

  // liの下にdivを入れる
  todoLi.appendChild(todoDiv);

  // divの下にpタグを入れる
  todoDiv.appendChild(todoParagraph);
  todoDiv.appendChild(completeButton);
  todoDiv.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(todoLi);
  console.log(todoLi);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
