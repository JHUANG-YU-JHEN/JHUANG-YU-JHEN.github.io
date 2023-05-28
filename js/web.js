$('#scrollToTop').on('click', (e) => {
    $('html, body').animate({
        scrollTop: 0
    }, 800)
})


$(document).ready(function() {
    $(".question-title").click(function() {
        $(this).next(".question-content").toggle();
        $(this).find(".remove").toggle();
        $(this).find(".add").toggle();
    });
});