const checkBoxList = document.querySelectorAll(".custom-checkbox");
const inputFields = document.querySelectorAll(".goal-input")
const errorLabel =document.querySelector(".error-label")
const progrssBar = document.querySelector(".progress-bar")

checkBoxList.forEach((checkbox) => {
    checkbox.addEventListener("click" , (e) => {

    const allFieldFilled = [...inputFields].every((input) => {
        return input.value
    }) 
    if(allFieldFilled) {
    checkbox.parentElement.classList.toggle("completed")
    } else {
        progrssBar.classList.add("show-error")
    }
    })
});

inputFields.forEach((input) => {
    input.addEventListener("focus", () => {
        progrssBar.classList.remove("show-error")
    })
})

