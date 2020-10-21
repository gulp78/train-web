$(document).ready(function () {
   //Nav Menu
    $(".train-btn").click(trains)

    function trains(){
        if(this.getAttribute('id').toLowerCase() == "suburban-btn"){
            $("button[name*='Suburban']").removeClass("hideContent")
            $("button[name*='regional']").addClass("hideContent")
        }else{
            $("button[name*='Suburban']").addClass("hideContent")
            $("button[name*='regional']").removeClass("hideContent")
        }
    }

    //modal stuff
    const modalTitle = document.getElementById("ModalLabel"); 
    const modalDesc = document.getElementById("modal-body");
    const modalImage1 = document.getElementById("modal-image1");
    const modalImage2 = document.getElementById("modal-image2");
    const modalImage3 = document.getElementById("modal-image3");

    const servYears = document.getElementById("ServiceYears");
    const maxSpd = document.getElementById("MaxSpeed");
    const compName = document.getElementById("Company");

    const defaultpic = "./images/default.jpg"

    //Modal showing relevant info (with help from JQuery)

    $(".train-choice").click(testOpen);

    function testOpen() {
        modalTitle.innerHTML = "";
        modalDesc.innerHTML = "";
        servYears.innerHTML = "xxxx-xxxx";
        maxSpd.innerHTML = "xxxkmh";
        compName.innerHTML = "[company]";

        switch (this.getAttribute('id').toLowerCase()) {
            case 'dogbox':
                modalTitle.innerHTML = "Dogbox Tait/Swing-Door Train";
                modalImage1.src = trainImages[0];
                modalImage2.src = trainImages[1];
                modalImage3.src = trainImages[2];
                servYears.innerHTML = "1887-1973";
                maxSpd.innerHTML = "83kmh";
                compName.innerHTML = "Victorian Railways";
                $("#modal-body").load("./resources/dogbox.html")
                break;
            case 'tait':
                modalTitle.innerHTML = "Tait Train/Red Rattler";
                modalImage1.src = trainImages[3];
                modalImage2.src = trainImages[4];
                modalImage3.src = trainImages[5];
                servYears.innerHTML = "1910-1984";
                maxSpd.innerHTML = "80kmh";
                compName.innerHTML = "Victorian Railways";
                $("#modal-body").load("./resources/tait.html");
                break;
            case 'harris-s1':
                modalTitle.innerHTML = "Harris Series 1";
                modalImage1.src = trainImages[6];
                modalImage2.src = trainImages[7];
                modalImage3.src = trainImages[8];
                servYears.innerHTML = "1956-1988";
                maxSpd.innerHTML = "130kmh";
                compName.innerHTML = "Gloucester Railway Carriage and Wagon Company";
                $("#modal-body").load("./resources/harris1.html");
                break;
            case 'harris-s2':
                modalTitle.innerHTML = "Harris Series 2";
                modalImage1.src = trainImages[9];
                modalImage2.src = trainImages[10];
                modalImage3.src = trainImages[11];
                servYears.innerHTML = "1956-1988";
                maxSpd.innerHTML = "130kmh";
                compName.innerHTML = "Martin & King";
                $("#modal-body").load("./resources/harris2.html");
                break;
            case 'hitachi':
                modalTitle.innerHTML = "Hitachi";
                modalImage1.src = trainImages[12];
                modalImage2.src = trainImages[13];
                modalImage3.src = trainImages[14];
                servYears.innerHTML = "1972-2014";
                maxSpd.innerHTML = "116kmh";
                compName.innerHTML = "Martin & King, Commonwealth Engineering";
                $("#modal-body").load("./resources/hitachi.html");
                break;
            case 'comeng':
                modalTitle.innerHTML = "Comeng";
                modalImage1.src = trainImages[15];
                modalImage2.src = trainImages[16];
                modalImage3.src = trainImages[17];
                servYears.innerHTML = "1981-present";
                maxSpd.innerHTML = "115kmh";
                compName.innerHTML = "Commonwealth Engineering";
                $("#modal-body").load("./resources/comeng.html");
                break;
            case 'refurb-harris':
                modalTitle.innerHTML = "Refurbished Harris/Grey Ghost";
                modalImage1.src = trainImages[18];
                modalImage2.src = trainImages[19];
                modalImage3.src = trainImages[20];
                servYears.innerHTML = "1982-1988";
                maxSpd.innerHTML = "130kmh";
                compName.innerHTML = "Martin & King, The Met";
                $("#modal-body").load("./resources/greyghost.html");
                break;
            case 'trial-4d':
                modalTitle.innerHTML = "4D";
                modalImage1.src = trainImages[21];
                modalImage2.src = trainImages[22];
                modalImage3.src = trainImages[23];
                servYears.innerHTML = "1992-2002";
                maxSpd.innerHTML = "130kmh";
                compName.innerHTML = "A Goninan & Co";
                $("#modal-body").load("./resources/trial4d.html");
                break;
            case 'xtrapolis':
                modalTitle.innerHTML = "X'trapolis 100";
                modalImage1.src = trainImages[24];
                modalImage2.src = trainImages[25];
                modalImage3.src = trainImages[26];
                servYears.innerHTML = "2002-present";
                maxSpd.innerHTML = "143kmh";
                compName.innerHTML = "Alstom";
                $("#modal-body").load("./resources/xtrapolis.html");
                break;
            case 'nexas':
                modalTitle.innerHTML = "Siemens Nexas";
                modalImage1.src = trainImages[27];
                modalImage2.src = trainImages[28];
                modalImage3.src = trainImages[29];
                servYears.innerHTML = "2003-present";
                maxSpd.innerHTML = "147kmh";
                compName.innerHTML = "Siemens";
                $("#modal-body").load("./resources/nexas.html");
                break;
            case 'hcmt':
                modalTitle.innerHTML = "High-Capacity Metro Train";
                modalImage1.src = trainImages[30];
                modalImage2.src = trainImages[31];
                modalImage3.src = trainImages[32];
                servYears.innerHTML = "ETA December 2020t";
                maxSpd.innerHTML = "130kmh";
                compName.innerHTML = "Downer Rail";
                $("#modal-body").load("./resources/hcmt.html");
                break;
            case 'leyland':
                modalTitle.innerHTML = "Leyland Railmotor";
                modalImage1.src = trainImages[33];
                modalImage2.src = trainImages[34];
                modalImage3.src = trainImages[35];
                servYears.innerHTML = "1925-1954";
                maxSpd.innerHTML = "[Unknown]";
                compName.innerHTML = "Leyland, Victorian Railways";
                $("#modal-body").load("./resources/leyland.html");
                break
            case 'mckeen':
                modalTitle.innerHTML = "Mckeen Railmotor";
                modalImage1.src = trainImages[36];
                modalImage2.src = trainImages[37];
                modalImage3.src = trainImages[38];
                servYears.innerHTML = "1911-1919";
                maxSpd.innerHTML = "[Unknown]";
                compName.innerHTML = "McKeen Company of Omaha, Nebraska, U.S.A.";
                $("#modal-body").load("./resources/mckeen.html");
                break
            case 'aec':
                modalTitle.innerHTML = "AEC Railmotor";
                modalImage1.src = trainImages[39];
                modalImage2.src = trainImages[40];
                modalImage3.src = trainImages[41];
                servYears.innerHTML = "1922-1954";
                maxSpd.innerHTML = "[Unknown]";
                compName.innerHTML = "Associated Equipment Company (AEC), Victorian Railways";
                $("#modal-body").load("./resources/aec.html");
                break
            default:
                modalTitle.innerHTML = "Default Page"
                modalImage1.src = defaultpic;
                modalImage2.src = defaultpic;
                modalImage3.src = defaultpic;
                $("#modal-body").load("./resources/default.html");
        }

    }

    //theme changer
    $(".theme-changer").click(changeTheme)

    let WhiteTheme = true;

    function changeTheme() {

        if (WhiteTheme == true) {
            //change theme to dark
            $(".card").addClass("dark-mode");
            $(".train-choice").addClass("dark-mode");
            $(".main-body").addClass("dark-mode");
            $(".modal-header").addClass("dark-mode");
            $(".modal-body").addClass("dark-mode");
            $(".card-body").addClass("dark-mode");
            $(".theme-changer").addClass("dark-mode");
            WhiteTheme = false;
        } else {
            //change theme to white
            $(".card").removeClass("dark-mode");
            $(".train-choice").removeClass("dark-mode");
            $(".main-body").removeClass("dark-mode");
            $(".modal-header").removeClass("dark-mode");
            $(".modal-body").removeClass("dark-mode");
            $(".card-body").removeClass("dark-mode");
            $(".theme-changer").removeClass("dark-mode");
            WhiteTheme = true;
        }

    }
})