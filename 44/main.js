function deno() {
    if (event.type == "click") {
        btn.hidden = true;
    }
}

btn.addEventListener("click", deno);