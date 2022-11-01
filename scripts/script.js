var nonMutatingData = [];

var checkbox = document.querySelector('input[name=theme]');

var bannerImg = document.querySelector('#leadBannerImg');

var contactImg1 = $("#telephone");

var contactImg2 = $("#emailId");

var contactImg3 = $("#location");

var mapImg = $("#map1");

var portfolioBanner = $("#leadPortfBannerImg");

checkbox.addEventListener('change', function() {
    if (this.checked) {
        trans()
        document.documentElement.setAttribute('data-theme', 'dark')
        $(bannerImg).attr("src", "/images/LeadBannerMain2.png");
        $(contactImg1).attr("src", "/images/contactwhite1.png");
        $(contactImg2).attr("src", "/images/emailwhite.png");
        $(contactImg3).attr("src", "/images/locationpinwhite.png");
        $(mapImg).attr("src", "/images/mapblk.png");
        $(portfolioBanner).attr("src", "/images/leadPortfBannerBlack.jpg");
    } else {
        trans()
        document.documentElement.setAttribute('data-theme', 'light')
        $(bannerImg).attr("src", "/images/LeadBannerMain1.png");
        $(contactImg1).attr("src", "/images/contactblk1.png");
        $(contactImg2).attr("src", "/images/emailblk.png");
        $(contactImg3).attr("src", "/images/locationpinblk.png");
        $(mapImg).attr("src", "/images/map.png");
        $(portfolioBanner).attr("src", "/images/leadPortfBannerWhite.jpg");

    }
})

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000)
}


// FETCH Method for when using local Server
fetch("DoggolandInfoSheetF.json")
    .then(response => response.json())
    .then(petData => {
        console.log(petData);

        nonMutatingData = petData;
        returnPetData(petData, "all");


    });


const buttons = document.querySelectorAll('.breedFilter');


for (let i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener('click', (e) => {
        e.preventDefault()

        // toggling the active class on selected button using ternary operation
        buttons.forEach(t => t != e.target ? t.classList.remove("active") : "");

        e.target.classList.toggle("active");


        const filter = e.target.dataset.filter;
        console.log(filter);

        returnPetData(nonMutatingData, filter);

    });

};



function returnPetData(petData, breedType = "all") {
    // when breedType is not all , data is filtered
    // storing filteredData in empty array var
    let filteredData = petData;
    if (breedType != "all") {
        filteredData = petData.filter((d) => {

            return d.breedType == breedType
        });

    }


    // clearing the UI to empty Ul tags 
    document.getElementById("dogListInfo").innerHTML = ``;
    document.getElementById("modalMain").innerHTML = ``;
    // loop throught the data to get the requried li elements
    for (let i = 0; i < filteredData.length; i++) {

        document.getElementById("dogListInfo").innerHTML += `
                    
                    <li class="dogLis hide ${filteredData[i].breedType}">
                    <img src="${filteredData[i].imgSrc1}" alt="img" title="${filteredData[i].breedType}">
                    <h3>${filteredData[i].h3}</h3>
                    <p>${filteredData[i].pInfoBrief}</p>
                    <button id="${filteredData[i].viewBtnId}">View more</button>
                    </li>
                    
                    `


        // DOG INFO MODAL 

        document.getElementById("modalMain").innerHTML += `

        <div class="bg-modal" id="${filteredData[i].id}">   
            <div id="modalTemplate" class="modal-content">
                <div class="modal">
                    <h3>${filteredData[i].h3}</h3>
                    <div class="slider">
                    <div class="slides">
                        <input type="radio" name="radio-btn" id="${filteredData[i].inputId1}">
                        <input type="radio" name="radio-btn" id="${filteredData[i].inputId2}">
                        <input type="radio" name="radio-btn" id="${filteredData[i].inputId3}">

                        <div class="slide first">
                            <img src="${filteredData[i].imgSrc1}" id="imgSrc1" alt="image">
                        </div>
                        <div class="slide">
                           <img src="${filteredData[i].imgSrc2}" id="imgSrc2" alt="image">
                        </div>
                        <div class="slide">
                            <img src="${filteredData[i].imgSrc3}" id="imgSrc3" alt="image">
                        </div>


                        <div class="navigation-auto">
                            <div class="auto-btn1"></div>
                            <div class="auto-btn2"></div>
                            <div class="auto-btn3"></div>
                        </div>
                    </div>
                    <div class="navigation-manual">

                        <label2 for="${filteredData[i].inputId1}" class="manual-btn"></label2>
                        <label2 for="${filteredData[i].inputId2}" class="manual-btn"></label2>
                        <label2 for="${filteredData[i].inputId3}" class="manual-btn"></label2>

                    </div>
                   </div>

                   <p id="pInfo">${filteredData[i].pInfoFull}</p>

                   <table>
                    <tr>
                        <th>Lifespan</th>
                        <th>Temperament</th>
                        <th>Coat Type</th>
                    </tr>
                    <tr>
                        <td id="td1">${filteredData[i].td1}</td>
                        <td id="td2">${filteredData[i].td2}</td>
                        <td id="td3">${filteredData[i].td3}</td>
                    </tr>
                </table>
                <button id="${filteredData[i].buttonId}">Close</button>
              </div>
            </div>
        </div>

            `
    }

    /* Modal Pop Up and Close for first 3 Dog Li's */
    document.querySelector('#dogListInfo > li:nth-child(1)').addEventListener('click',
        function() {
            document.querySelector('#modal1').style.display = 'flex';
        });


    document.querySelector('#close1').addEventListener('click',
        function() {
            document.querySelector('#modal1').style.display = 'none';
        });

    document.querySelector('#dogListInfo > li:nth-child(2)').addEventListener('click',
        function() {
            document.querySelector('#modal2').style.display = 'flex';
        });


    document.querySelector('#close2').addEventListener('click',
        function() {
            document.querySelector('#modal2').style.display = 'none';
        });

    document.querySelector('#dogListInfo > li:nth-child(3)').addEventListener('click',
        function() {
            document.querySelector('#modal3').style.display = 'flex';
        });


    document.querySelector('#close3').addEventListener('click',
        function() {
            document.querySelector('#modal3').style.display = 'none';
        });
}



// SEARCH FILTER
const searchInput = document.getElementById("searchBar").value;
const dogNameList = [];

// for (let index = 0, index < petData.h3.length, index++) {

// }

// // A BETTER WAY TO FILTER THROUGH THE DOGLIST
// search.addEventListener("keyup", filterDogs);


// function filterDogs(f) {
//     const text = f.target.value.toLowerCase();
//     // console.log(dogName[0]);
//     dogName.forEach(function(dogFilter) {
//         const dog = dogFilter.firstChild.textContent;
//         if (dog.toLowerCase().indexOf(text) != -1) {
//             dogFilter.parentElement.parentElement.style.display = "block"
//         } else {
//             dogFilter.parentElement.parentElement.style.display = "none"
//         }
//     })
// }

// const array = ['hello', 'world'];
// const substring = 'hell';

// const matches = dogName.filter(element => {
//     if (element.includes(searchInput)) {
//         return true;
//     }
// });

// console.log(matches); // 👉️ [ 'hello' ]

// if (matches.length > 0) {
//     // array contains substring match
// }



// Image cycle in modal //

var allImages = document.querySelectorAll(".slides > img");
var counter = 1;
setInterval(() => {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 3) {
        counter = 1;
    }
}, 3000);