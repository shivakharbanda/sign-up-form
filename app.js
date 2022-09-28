console.log("Linked");


password1 = document.querySelector("#password");
password2 = document.querySelector("#password2");


submitBtn = document.querySelector(".submit");

submitBtn.addEventListener("submit", () => {
    if (password1.value != password2.value) {
        password1.setCustomValidity("passwords dont match");
        password2.setCustomValidity("passwords dont match");

        password1.reportValidity();
        console.log(password1.reportValidity());
        password2.reportValidity();

    };
})