const menu_buttons = Array.from(document.getElementsByClassName("menu_button")) as HTMLElement[];
const menu_pdfs = Array.from(document.getElementsByClassName("menu_pdf")) as HTMLElement[];

menu_buttons.forEach((item, index) => {
    item.addEventListener("click", () => {
        menu_pdfs.forEach(item => item.style.display = "none");
        menu_pdfs[index].style.display = "block";
    });
})
