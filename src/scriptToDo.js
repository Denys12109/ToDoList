const button = document.querySelector(".input-container button");
const input = document.querySelector(".input-container input");
const list = document.querySelector(".todo-list");
const deletedList = document.querySelector(".deleted-list");

button.addEventListener("click", () => {
    if (input.value.trim() !== "") {
        const li = document.createElement("li");
        li.className = "todo-list-item";
        li.innerText = input.value;

        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        li.appendChild(deleteBtn);
        list.appendChild(li);
        input.value = "";

        deleteBtn.addEventListener("click", () => {
            deletedList.appendChild(li);
            li.removeChild(deleteBtn);
        });
    } else {
        alert("Поле введення порожнє. Введіть будь-ласка текст перед додаванням.");
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const clearBtn = document.querySelector(".clear-btn");

    clearBtn.addEventListener("click", () => {
        const deletedList = document.querySelector(".deleted-list");
        deletedList.innerHTML = ""; 
    });
});







