$(document).ready(function() {


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

    $('#familyDogs').on("click", function showHide() {

        if (this.checked) {

            $("#dogList > ul > li[title===herding]").hide;
        } else {

            $("#dogList > ul > li[title===herding]").show;
        }

    })

    // # dogList > ul > li: nth - child(1) > img

    /* Modal Pop Up and Close */

    /* Modal for Bearded Collie */
    document.getElementById('bcollie').addEventListener('click',
        function() {
            document.querySelector('#modal1').style.display = 'flex';
        });


    document.querySelector('#close1').addEventListener('click',
        function() {
            document.querySelector('#modal1').style.display = 'none';
        });

    /* Modal for Belgian Sheepdog */
    document.getElementById('bsheepdog').addEventListener('click',
        function() {
            document.querySelector('#modal2').style.display = 'flex';
        });


    document.querySelector('#close2').addEventListener('click',
        function() {
            document.querySelector('#modal2').style.display = 'none';
        });


    /* Image Cycle in Modal */

    // var allImages = $('.modal>img');
    // var currentImage = 0;

    // function changeImage() {
    //     $(allImages[currentImage]).fadeOut(200, function() {
    //         if (currentImage == allImages.length - 1) {

    //             currentImage = 0;

    //         } else {
    //             currentImage++;
    //         }

    //         $(allImages[currentImage]).fadeIn(200);
    //     });


    // }

    // var imageTimer = setInterval(changeImage, 4000);


    // Image cycle in modal //

    // var allImages = document.querySelector(".slides > img");
    var counter = 1;
    setInterval(() => {
        document.getElementById('radio' + counter).checked = true;
        counter++;
        if (counter > 3) {
            counter = 1;
        }
    }, 5000);


});