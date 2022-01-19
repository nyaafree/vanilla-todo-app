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
    // 未完了Todoリストから自分自身を削除
    deleteFromIncompleteList(completeButton.closest("li"));

    // 完了リストに追加する要素
    const addTarget = completeButton.closest("li");
    const todoDiv = addTarget.firstChild;
    // Todoのタイトルを抜き出す
    const todoText = todoDiv.firstChild.innerText;

    // li > divの下を初期化
    todoDiv.textContent = null;
    console.log(todoText);
    console.log(addTarget);

    // pタグを生成
    const todoParagraph = document.createElement("p");
    todoParagraph.innerText = todoText;

    const backButton = document.createElement("button");
    backButton.innerText = "戻る";

    // divの小要素に pタグとbuttonタグを追加
    todoDiv.appendChild(todoParagraph);
    todoDiv.appendChild(backButton);

    document.getElementById("complete-list").appendChild(addTarget);
  });
  console.log(completeButton);

  // 削除ボタン生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // alert("削除");
    deleteFromIncompleteList(deleteButton.closest("li"));
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

const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
