// let dots=document.querySelectorAll("#three-dot");
// let body=document.querySelector("body");
// let imgList=document.querySelectorAll("img");
// let options=document.querySelectorAll(".optionsForU");
// let cancel=document.querySelectorAll("#cancel");
// let selecteddotIndex=-1;
// document.addEventListener("DOMContentLoaded",()=>{
//     options.forEach(option=>{
//         option.classList.add("invisible");
//     })
// });
// dots.forEach((dot, index) => {
//     dot.addEventListener("click", () => {
//         options[index].classList.remove("invisible");
//         body.classList.add("gradient");
//         imgList[index].classList.add("brightness");
//         // imgList.forEach(img => {
//             //     img.classList.add("brightness");
//         // });
//     });
    
//     cancel[index].addEventListener("click",(event)=>{
//         event.preventDefault();
//         options[index].style.display="none";
//         body.classList.remove("gradient");
//         imgList[index].classList.remove("brightness");
//         // img.classList.remove("brightness");
//         options[index].classList.add("invisible");
//     });
// });
let dots = document.querySelectorAll("#three-dot");
let body = document.querySelector("body");
let imgList = document.querySelectorAll("img");
let options = document.querySelectorAll(".optionsForU");
let cancel = document.querySelectorAll("#cancel");

let selectedDotIndex = -1; // Initialize to -1, indicating no dot is selected initially

document.addEventListener("DOMContentLoaded", () => {
    options.forEach(option => {
        option.classList.add("invisible");
    });
});

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        if (selectedDotIndex !== -1) {
            // Hide the previously selected options and remove classes
            options[selectedDotIndex].classList.add("invisible");
            body.classList.remove("gradient");
            imgList[selectedDotIndex].classList.remove("brightness");
        }

        // Show the options and apply classes for the clicked dot
        options[index].classList.remove("invisible");
        body.classList.add("gradient");
        imgList.forEach(img=>{
            img.classList.add("brightness");
        });
        // imgList[index].classList.add("brightness");

        selectedDotIndex = index; // Update the selected dot index
    });

    cancel[index].addEventListener("click", (event) => {
        event.preventDefault();

        // Hide the options, remove classes, and reset the selected dot index
        options[index].classList.add("invisible");
        body.classList.remove("gradient");
        imgList.forEach(img=>{
            img.classList.remove("brightness");
        });
        // imgList[index].classList.remove("brightness");
        selectedDotIndex = -1;
    });
});
