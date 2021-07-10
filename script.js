//picking up drag element
const dragArea = document.querySelector(".drag-area");
let file;
let text = document.querySelector("header");
const btn = document.querySelector(".btn");
const fileUpBtn = document.querySelector(".fileBtn");

btn.onclick = () => {
    fileUpBtn.click();


}

fileUpBtn.addEventListener("change", () => {
    file = this.files[0]; // if user choose multiple images so the browser gonna take only the first one
    dragArea.classList.add("active")
    openFile();

})


//its the part of drag over
dragArea.addEventListener("dragover", (e) => {
    e.preventDefault();
    dragArea.classList.add("active");
    text.textContent = "Drop to Upload File"

});


//its the part of Drag Leave
dragArea.addEventListener("dragleave", () => {
    dragArea.classList.remove("active");
    text.textContent = "Drag & Drop File Here"

});


//Its the part of drop
dragArea.addEventListener("drop", (e) => {
    e.preventDefault();
    dragArea.classList.add("active");
    file = e.dataTransfer.files[0]; // if user choose multiple images so the browser gonna take only the first one
    openFile();
})

function openFile() {
    const fileType = file.type;

    //file type validation to allow only images
    let validExtensions = ["image/jpeg", "image/jpg", "image/png"]

    //logic for allow only images

    if (validExtensions.includes(fileType)) { // creating File Render Object to render the file
        let fileReader = new FileReader();
        fileReader.onload = () => {
            let fileUrl = fileReader.result
            let imgTag = `  <img src="${fileUrl}" alt="Image Here">`
            dragArea.innerHTML = imgTag;
        }

        fileReader.readAsDataURL(file);



    } else {
        alert("Please enter a image file we dont accept any otherfile we only accept image file!!!")
        dragArea.classList.remove("active");

    }
}