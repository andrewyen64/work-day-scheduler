$(document).ready(function() {
    // Displays current day at the top
    $("#currentDay").append(moment().format('dddd, MMMM Do'));
        
    // Changes Timeblocks color
    var textBlock9 = $(".textarea9")
    var textBlock10 = $(".textarea10")
    var textBlock11 = $(".textarea11")
    var textBlock12 = $(".textarea12")
    var textBlock13 = $(".textarea13")
    var textBlock14 = $(".textarea14")
    var textBlock15 = $(".textarea15")
    var textBlock16 = $(".textarea16")
    var textBlock17 = $(".textarea17")
    var setHour9 = 9;
    var setHour10 = 10;
    var setHour11 = 11;
    var setHour12 = 12;
    var setHour13 = 13;
    var setHour14 = 14;
    var setHour15 = 15;
    var setHour16 = 16;
    var setHour17 = 17;

    var presentHour = moment().format("kk");

    function change9Color () {
        if (setHour9 < presentHour) {
            textBlock9.addClass("past");
        } else if (setHour9 == presentHour) {
            textBlock9.addClass("present")    
        } else {
            textBlock9.addClass("future");
        }
    }    
    function change10Color () {
        if (setHour10 < presentHour) {
            textBlock10.addClass("past");
        } else if (setHour10 == presentHour) {
            textBlock10.addClass("present")    
        } else {
            textBlock10.addClass("future");
        }
    }
    function change11Color () {
        if (setHour11 < presentHour) {
            textBlock11.addClass("past");
        } else if (setHour11 == presentHour) {
            textBlock11.addClass("present")    
        } else {
            textBlock11.addClass("future");
        }
    }
    function change12Color () {
        if (setHour12 < presentHour) {
            textBlock12.addClass("past");
        } else if (setHour12 == presentHour) {
            textBlock12.addClass("present")    
        } else {
            textBlock12.addClass("future");
        }
    }
    function change13Color () {
        if (setHour13 < presentHour) {
            textBlock13.addClass("past");
        } else if (setHour13 == presentHour) {
            textBlock13.addClass("present")    
        } else {
            textBlock13.addClass("future");
        }
    }
    function change14Color () {
        if (setHour14 < presentHour) {
            textBlock14.addClass("past");
        } else if (setHour14 == presentHour) {
            textBlock14.addClass("present")    
        } else {
            textBlock14.addClass("future");
        }
    }

    function change15Color () {
        if (setHour15 < presentHour) {
            textBlock15.addClass("past");
        } else if (setHour15 == presentHour) {
            textBlock15.addClass("present")    
        } else {
            textBlock15.addClass("future");
        }
    }
    function change16Color () {
        if (setHour16 < presentHour) {
            textBlock16.addClass("past");
        } else if (setHour16 == presentHour) {
            textBlock16.addClass("present")    
        } else {
            textBlock16.addClass("future");
        }
    }
    function change17Color () {
        if (setHour17 < presentHour) {
            textBlock17.addClass("past");
        } else if (setHour17 == presentHour) {
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

    // Saves text in localStorage for that specific time
    var text9 = $(".textarea9").val();
    var text10 = $(".textarea10").val();
    var text11 = $(".textarea11").val();
    var text12 = $(".textarea12").val();
    var text13 = $(".textarea13").val();
    var text14 = $(".textarea14").val();
    var text15 = $(".textarea15").val();
    var text16 = $(".textarea16").val();
    var text17 = $(".textarea17").val();

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
                var text9 = $(".textarea9").val();
                localStorage.setItem ("9am", text9);
            }
            
            if (event.target.matches(".saveBtn")){
                var text10 = $(".textarea10").val();
                localStorage.setItem ("10am", text10);
            }
            
            if (event.target.matches(".saveBtn")){
                var text11 = $(".textarea11").val();
                localStorage.setItem ("11am", text11);
            }
            
            if (event.target.matches(".saveBtn")){
                var text12 = $(".textarea12").val();
                localStorage.setItem ("12pm", text12);
            }
            
            if (event.target.matches(".saveBtn")){
                var text13 = $(".textarea13").val();
                localStorage.setItem ("13pm", text13);
            }
            
            if (event.target.matches(".saveBtn")){
                var text14 = $(".textarea14").val();
                localStorage.setItem ("14pm", text14);
            }
            
            if (event.target.matches(".saveBtn")){
                var text15 = $(".textarea15").val();
                localStorage.setItem ("15pm", text15);
            }
            
            if (event.target.matches(".saveBtn")){
                var text16 = $(".textarea16").val();
                localStorage.setItem ("16pm", text16);
            }
            
            if (event.target.matches(".saveBtn")){
                var text17 = $(".textarea17").val();
                localStorage.setItem ("17pm", text17);
            }           
            
        });
    }
    init();
});
