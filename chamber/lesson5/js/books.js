
const input = document.querySelector("#favoriteChapter");
const button = document.querySelector(".send");
const list = document.querySelector(".book_list");

button.addEventListener("click", function () {
    if (input && input.value) {
            const item = list.appendChild(Object.assign(document.createElement("lo"), {
                class: "list-item",
                innerHTML: input.value
            }))

            item.appendChild(Object.assign(document.createElement("button"), {
                class: "button2",
                type: "submit",
                innerHTML: "❌"
            })).addEventListener("click", function () {
                list.removeChild(item);
            })
            input.focus();
            input.value = "";

    }
})