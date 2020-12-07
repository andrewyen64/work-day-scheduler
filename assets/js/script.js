$(document).ready(function() {
    // Displays current day at the top
    $("#currentDay").append(moment().format('dddd, MMMM Do'));
    var presentHour = moment().format("kk");
    
    // Set each text area to a variable
    var textBlock9 = $(".textarea9")
    var textBlock10 = $(".textarea10")
    var textBlock11 = $(".textarea11")
    var textBlock12 = $(".textarea12")
    var textBlock13 = $(".textarea13")
    var textBlock14 = $(".textarea14")
    var textBlock15 = $(".textarea15")
    var textBlock16 = $(".textarea16")
    var textBlock17 = $(".textarea17")
    
    // Functions to change textblock colors
    function change9Color () {
        if (presentHour > 9) {
            textBlock9.addClass("past");
        } else if (presentHour == 9) {
            textBlock9.addClass("present")    
        } else {
            textBlock9.addClass("future");
        }
    }

    function change10Color () {
        if (presentHour > 10) {
            textBlock10.addClass("past");
        } else if (presentHour == 10) {
            textBlock10.addClass("present")    
        } else {
            textBlock10.addClass("future");
        }
    }

    function change11Color () {
        if (presentHour > 11) {
            textBlock11.addClass("past");
        } else if (presentHour == 11) {
            textBlock11.addClass("present")    
        } else {
            textBlock11.addClass("future");
        }
    }

    function change12Color () {
        if (presentHour) {
            textBlock12.addClass("past");
        } else if (presentHour == 12) {
            textBlock12.addClass("present")    
        } else {
            textBlock12.addClass("future");
        }
    }

    function change13Color () {
        if (presentHour > 13) {
            textBlock13.addClass("past");
        } else if (presentHour == 13) {
            textBlock13.addClass("present")    
        } else {
            textBlock13.addClass("future");
        }
    }
    function change14Color () {
        if (presentHour > 14) {
            textBlock14.addClass("past");
        } else if (presentHour == 14) {
            textBlock14.addClass("present")    
        } else {
            textBlock14.addClass("future");
        }
    }

    function change15Color () {
        if (presentHour > 15) {
            textBlock15.addClass("past");
        } else if (presentHour == 15) {
            textBlock15.addClass("present")    
        } else {
            textBlock15.addClass("future");
        }
    }

    function change16Color () {
        if (presentHour > 16) {
            textBlock16.addClass("past");
        } else if (presentHour == 16) {
            textBlock16.addClass("present")    
        } else {
            textBlock16.addClass("future");
        }
    }

    function change17Color () {
        if (presentHour > 17) {
            textBlock17.addClass("past");
        } else if (presentHour == 17) {
            textBlock17.addClass("present")    
        } else {
            textBlock17.addClass("future");
        }
    }

    change9Color();
    change10Color();
    change11Color();
    change12Color();
    change13Color();
    change14Color();
    change15Color();
    change16Color();
    change17Color();

    // Declare variables to store each textarea's value
    var text9 = $(".textarea9").val();
    var text10 = $(".textarea10").val();
    var text11 = $(".textarea11").val();
    var text12 = $(".textarea12").val();
    var text13 = $(".textarea13").val();
    var text14 = $(".textarea14").val();
    var text15 = $(".textarea15").val();
    var text16 = $(".textarea16").val();
    var text17 = $(".textarea17").val();
    
    // Saves text in localStorage for that specific time
    function init() {  
        $(".textarea9").val(localStorage.getItem("9am"));        
        $(".textarea10").val(localStorage.getItem("10am"));        
        $(".textarea11").val(localStorage.getItem("11am"));        
        $(".textarea12").val(localStorage.getItem("12pm"));        
        $(".textarea13").val(localStorage.getItem("13pm"));        
        $(".textarea14").val(localStorage.getItem("14pm"));        
        $(".textarea15").val(localStorage.getItem("15pm"));        
        $(".textarea16").val(localStorage.getItem("16pm"));        
        $(".textarea17").val(localStorage.getItem("17pm"));        
        
        $(document).on("click", function(event) {
            if (event.target.matches(".saveBtn")){
                text9 = $(".textarea9").val();
                localStorage.setItem ("9am", text9);
            }
            
            if (event.target.matches(".saveBtn")){
                text10 = $(".textarea10").val();
                localStorage.setItem ("10am", text10);
            }
            
            if (event.target.matches(".saveBtn")){
                text11 = $(".textarea11").val();
                localStorage.setItem ("11am", text11);
            }
            
            if (event.target.matches(".saveBtn")){
                text12 = $(".textarea12").val();
                localStorage.setItem ("12pm", text12);
            }
            
            if (event.target.matches(".saveBtn")){
                text13 = $(".textarea13").val();
                localStorage.setItem ("13pm", text13);
            }
            
            if (event.target.matches(".saveBtn")){
                text14 = $(".textarea14").val();
                localStorage.setItem ("14pm", text14);
            }
            
            if (event.target.matches(".saveBtn")){
                text15 = $(".textarea15").val();
                localStorage.setItem ("15pm", text15);
            }
            
            if (event.target.matches(".saveBtn")){
                text16 = $(".textarea16").val();
                localStorage.setItem ("16pm", text16);
            }
            
            if (event.target.matches(".saveBtn")){
                text17 = $(".textarea17").val();
                localStorage.setItem ("17pm", text17);
            }           
            
        });
    }
    
    init();
});
