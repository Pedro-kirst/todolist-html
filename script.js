function adicionaTarefa() {
    let valor = document.querySelector("input").value;
    console.log(valor);

    let li = document.createElement("li");
    li.textContent = valor;
    li.classList.add("flex", "items-center", "justify-between");

    let span = document.createElement("span");
    span.innerHTML = "❌";
    span.classList.add("cursor-pointer");

    span.addEventListener("click", function() {
        li.remove();
    });

    li.appendChild(span);
    document.querySelector("ul").appendChild(li);
    document.querySelector("input").value = "";
}
