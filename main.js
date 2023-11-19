let convert = document.getElementById("convert");

let day = document.querySelector(".date #day");
let month = document.querySelector(".date #month");
let year = document.querySelector(".date #year");

let inputs = document.querySelectorAll(".date input");

convert.addEventListener("click", () => {
    inputs.forEach(input => {
        let p = document.querySelectorAll(".date p");
        let spansReq = document.querySelectorAll(".date span.required");
        let spansWrong = document.querySelectorAll(".date span.wrong");

        let years = document.querySelector(".years");
        let months = document.querySelector(".months");
        let days = document.querySelector(".days");

    // ----------- RESET
        p.forEach(p => {
            p.style.cssText = "color: var(--smokeyGrey);";
        });
        spansReq.forEach(span => {
            span.classList.add("none");
        });
        spansWrong.forEach(span => {
            span.classList.add("none");
        });

        years.innerHTML = "--";
        months.innerHTML = "--";
        days.innerHTML = "--";
        // ----------- RESET

        let birthdayArray = [month.value, day.value, year.value];

        function ageCalc () {
            const birthday = new Date(birthdayArray);
            const dateNow = new Date();
            const yearsAge = dateNow.getFullYear() - birthday.getFullYear();
            const monthsAge = dateNow.getMonth() - birthday.getMonth();
            const daysAge = dateNow.getDate() - birthday.getDate();

            years.innerHTML = yearsAge;
            months.innerHTML = monthsAge;
            days.innerHTML = daysAge;
        };

        if (input.value == "") {
            p.forEach(p => {
                p.style.color = "red";
            });
            spansReq.forEach(span => {
                span.classList.remove("none");
            });
            spansWrong.forEach(span => {
                span.classList.add("none");
            });
        } else if (input.value <= "0" || day.value == "31" && month.value == "4"){
            years.innerHTML = "--";
            months.innerHTML = "--";
            days.innerHTML = "--";
            p.forEach(p => {
                p.style.color = "red";
            });
            spansReq.forEach(span => {
                span.classList.add("none");
            });
            spansWrong.forEach(span => {
                span.classList.remove("none");
            });
        } else {
            ageCalc();
        };
    });
});