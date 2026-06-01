// ============================
// AVATAR CHANGE
// ============================

const avatarBtn =
document.getElementById("changeAvatarBtn");

const avatarInput =
document.getElementById("avatarInput");

const avatarImage =
document.getElementById("profileAvatar");

avatarBtn.addEventListener("click", () => {
    avatarInput.click();
});

avatarInput.addEventListener("change", (e) => {

    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = function(event){

        avatarImage.src = event.target.result;

        localStorage.setItem(
            "smartlib_avatar",
            event.target.result
        );

    };

    reader.readAsDataURL(file);

});

const savedAvatar =
localStorage.getItem("smartlib_avatar");

if(savedAvatar){
    avatarImage.src = savedAvatar;
}

// ============================
// EDIT NAME
// ============================

const editNameBtn =
document.getElementById("editNameBtn");

const profileName =
document.getElementById("profileName");

editNameBtn.addEventListener("click", () => {

    const newName =
    prompt(
        "Жаңа есімді енгізіңіз:",
        profileName.textContent
    );

    if(newName && newName.trim() !== ""){

        profileName.textContent =
        newName.trim();

        localStorage.setItem(
            "smartlib_name",
            newName.trim()
        );

    }

});

const savedName =
localStorage.getItem("smartlib_name");

if(savedName){

    profileName.textContent =
    savedName;

}

// ============================
// GOAL MODAL
// ============================

const goalBtn =
document.getElementById("goalBtn");

const goalModal =
document.getElementById("goalModal");

const saveGoalBtn =
document.getElementById("saveGoalBtn");

const goalInput =
document.getElementById("goalInput");

goalBtn.addEventListener("click", () => {

    goalModal.style.display =
    "flex";

});

goalModal.addEventListener("click", (e) => {

    if(e.target === goalModal){

        goalModal.style.display =
        "none";

    }

});

saveGoalBtn.addEventListener("click", () => {

    const goal =
    goalInput.value.trim();

    if(goal === ""){

        alert(
            "Мақсат енгізіңіз"
        );

        return;

    }

    localStorage.setItem(
        "smartlib_goal",
        goal
    );

    alert(
        "Мақсат сақталды!"
    );

    goalInput.value = "";

    goalModal.style.display =
    "none";

});

// ============================
// LOAD GOAL
// ============================

const savedGoal =
localStorage.getItem(
    "smartlib_goal"
);

if(savedGoal){

    console.log(
        "Мақсат:",
        savedGoal
    );

}

// ============================
// QUICK ACTION BUTTONS
// ============================

const actionButtons =
document.querySelectorAll(
    ".action-btn"
);

actionButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            const text =
            button.textContent;

            if(
                text.includes(
                    "Анализ"
                )
            ){

                window.location.href =
                "analysis.html";

            }

            else if(
                text.includes(
                    "Параметрлер"
                )
            ){

                alert(
                    "Параметрлер бөлімі кейін қосылады"
                );

            }

            else{

                alert(
                    text +
                    " бөлімі ашылды"
                );

            }

        }
    );

});

// ============================
// CONTINUE READING BUTTONS
// ============================

const continueButtons =
document.querySelectorAll(
    ".continue-btn"
);

continueButtons.forEach(btn => {

    btn.addEventListener(
        "click",
        () => {

            const title =
            btn.parentElement
            .querySelector("h3")
            .textContent;

            alert(
                `"${title}" кітабы ашылды`
            );

        }
    );

});

// ============================
// ACHIEVEMENT HOVER EFFECT
// ============================

const achievements =
document.querySelectorAll(
    ".achievement-card"
);

achievements.forEach(card => {

    card.addEventListener(
        "mouseenter",
        () => {

            card.style.transform =
            "translateY(-8px)";

            card.style.transition =
            ".3s";

        }
    );

    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
            "translateY(0px)";

        }
    );

});

// ============================
// BOOK HOVER EFFECT
// ============================

const books =
document.querySelectorAll(
    ".book-card"
);

books.forEach(book => {

    book.addEventListener(
        "mouseenter",
        () => {

            book.style.transform =
            "translateY(-10px)";

            book.style.transition =
            ".3s";

        }
    );

    book.addEventListener(
        "mouseleave",
        () => {

            book.style.transform =
            "translateY(0px)";

        }
    );

});

// ============================
// XP SYSTEM
// ============================

const xpFill =
document.querySelector(
    ".xp-fill"
);

const xpText =
document.querySelector(
    ".xp-text"
);

let currentXP = 750;
let maxXP = 1200;

function updateXP(){

    const percent =
    (currentXP / maxXP) * 100;

    xpFill.style.width =
    percent + "%";

    xpText.textContent =
    `${currentXP} / ${maxXP} XP`;

}

updateXP();

// ============================
// PROFILE SAVE
// ============================

window.addEventListener(
    "beforeunload",
    () => {

        localStorage.setItem(
            "smartlib_profile_backup",
            JSON.stringify({

                name:
                profileName.textContent,

                xp:
                currentXP

            })

        );

    }
);

// ============================
// LOAD PROFILE
// ============================

const backup =
localStorage.getItem(
    "smartlib_profile_backup"
);

if(backup){

    const data =
    JSON.parse(backup);

    if(data.name){

        profileName.textContent =
        data.name;

    }

    if(data.xp){

        currentXP =
        data.xp;

        updateXP();

    }

}

// ============================
// PAGE READY
// ============================

window.addEventListener(
    "load",
    () => {

        console.log(
            "SmartLib Profile Loaded"
        );

    }
);

const logoutBtn =
document.getElementById("logoutBtn");

if(logoutBtn){

    logoutBtn.addEventListener("click",()=>{

        localStorage.removeItem(
            "isLoggedIn"
        );

        window.location.href =
        "index.html";

    });

}