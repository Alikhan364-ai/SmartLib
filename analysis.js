// =========================
// PERIOD BUTTONS
// =========================

const periodButtons =
document.querySelectorAll('.period-btn');

periodButtons.forEach(button => {

    button.addEventListener('click', () => {

        periodButtons.forEach(btn =>
            btn.classList.remove('active')
        );

        button.classList.add('active');

    });

});

// =========================
// DATA
// =========================

const statistics = {

    day: {
        books: "4",
        time: "3 сағ 12 мин",
        words: "1 250",
        activity: "86%",
        progress: "86%"
    },

    week: {
        books: "19",
        time: "16 сағ 48 мин",
        words: "6 840",
        activity: "91%",
        progress: "91%"
    },

    month: {
        books: "25",
        time: "48 сағ 15 мин",
        words: "24 760",
        activity: "94%",
        progress: "94%"
    }

};

// =========================
// ELEMENTS
// =========================

const buttons =
document.querySelectorAll('.period-btn');

const statTitles =
document.querySelectorAll('.stat-card h2');

const progress =
document.querySelector('.progress');

// =========================
// UPDATE FUNCTION
// =========================

function updateStatistics(type){

    statTitles[0].textContent =
    statistics[type].books;

    statTitles[1].textContent =
    statistics[type].time;

    statTitles[2].textContent =
    statistics[type].words;

    statTitles[3].textContent =
    statistics[type].activity;

    progress.style.width =
    statistics[type].progress;

}

// =========================
// BUTTON EVENTS
// =========================

buttons.forEach((button,index)=>{

    button.addEventListener('click',()=>{

        buttons.forEach(btn=>
            btn.classList.remove('active')
        );

        button.classList.add('active');

        if(index === 0){
            updateStatistics('day');
        }

        if(index === 1){
            updateStatistics('week');
        }

        if(index === 2){
            updateStatistics('month');
        }

    });

});

// =========================
// GENRE CHART
// =========================

const genreCtx =
document.getElementById('genreChart');

if (genreCtx) {

new Chart(genreCtx, {

    type: 'doughnut',

    data: {

        labels: [
            'Фантастика',
            'Детектив',
            'Психология',
            'Романтика',
            'Тарихи'
        ],

        datasets: [{
            data:[40,25,20,10,5],

            backgroundColor:[
                '#6C4CFF',
                '#FFB100',
                '#2196F3',
                '#FF5BA7',
                '#31C48D'
            ],

            borderWidth:0
        }]
    },

    options:{

        responsive:true,

        plugins:{
            legend:{
                position:'right'
            }
        },

        cutout:'60%'
    }

});

}

// =========================
// READING CHART
// =========================

const readingCtx =
document.getElementById('readingChart');

if(readingCtx){

new Chart(readingCtx,{

    type:'line',

    data:{

        labels:[
            'Дс',
            'Сс',
            'Ср',
            'Бс',
            'Жм',
            'Сн',
            'Жк'
        ],

        datasets:[

            {
                label:'Бір күн',
                data:[1,2.5,2.2,3.1,3,2.2,4],
                borderColor:'#6C4CFF',
                backgroundColor:'#6C4CFF',
                tension:0.4
            },

            {
                label:'Апта',
                data:[0.5,0.8,1.4,1.6,0.9,1.1,1.6],
                borderColor:'#FF9800',
                backgroundColor:'#FF9800',
                tension:0.4
            },

            {
                label:'Ай',
                data:[0.6,0.7,0.7,0.8,0.9,1.7,3],
                borderColor:'#31C48D',
                backgroundColor:'#31C48D',
                tension:0.4
            }

        ]

    },

    options:{

        responsive:true,

        plugins:{
            legend:{
                position:'top'
            }
        }

    }

});

}

// =========================
// VOCABULARY CHART
// =========================

const vocabularyCtx =
document.getElementById('vocabularyChart');

if(vocabularyCtx){

new Chart(vocabularyCtx,{

    type:'line',

    data:{

        labels:[
            '12.05',
            '13.05',
            '14.05',
            '15.05',
            '16.05',
            '17.05',
            '18.05'
        ],

        datasets:[{

            label:'Сөз саны',

            data:[
                10000,
                15000,
                18000,
                24000,
                28000,
                32000,
                40000
            ],

            borderColor:'#6C4CFF',

            backgroundColor:
            'rgba(108,76,255,0.15)',

            fill:true,

            tension:0.4

        }]

    },

    options:{

        responsive:true,

        plugins:{
            legend:{
                display:false
            }
        }

    }

});

}

// =========================
// STAR RATING
// =========================

const stars =
document.querySelectorAll('.stars span');

let selectedRating = 0;

stars.forEach((star,index)=>{

    star.addEventListener('click',()=>{

        selectedRating = index + 1;

        stars.forEach((s,i)=>{

            if(i < selectedRating){

                s.textContent = '★';

                s.style.color =
                '#facc15';

            }else{

                s.textContent = '☆';

                s.style.color =
                '#d1d5db';

            }

        });

    });

});

// =========================
// REVIEW SUBMIT
// =========================

const submitBtn =
document.querySelector('.submit-review');

const reviewText =
document.querySelector('textarea');

if(submitBtn){

submitBtn.addEventListener('click',()=>{

    const text =
    reviewText.value.trim();

    if(text === ''){

        alert(
          'Пікір мәтінін енгізіңіз'
        );

        return;
    }

    const review = {

        rating:selectedRating,

        text:text,

        date:new Date()
            .toLocaleDateString()

    };

    localStorage.setItem(
        'lastReview',
        JSON.stringify(review)
    );

    alert(
      'Пікір сәтті жіберілді!'
    );

    reviewText.value='';

});

}

// =========================
// LOAD SAVED REVIEW
// =========================

const savedReview =
localStorage.getItem('lastReview');

if(savedReview){

    const review =
    JSON.parse(savedReview);

    console.log(
        'Соңғы пікір:',
        review
    );

}

// =========================
// BOOK CARD EFFECT
// =========================

const cards =
document.querySelectorAll('.book-card');

cards.forEach(card=>{

    card.addEventListener('mouseenter',()=>{

        card.style.transform =
        'translateY(-8px)';

    });

    card.addEventListener('mouseleave',()=>{

        card.style.transform =
        'translateY(0px)';

    });

});

// =========================
// DATE PICKER CLICK
// =========================

const datePicker =
document.querySelector('.date-picker');

if(datePicker){

datePicker.addEventListener('click',()=>{

    alert(
      'Күн таңдау функциясын кейін қосуға болады'
    );

});

}

// =========================
// PAGE LOADED
// =========================

window.addEventListener('load',()=>{

    console.log(
      'SmartLib Analysis Ready'
    );

});