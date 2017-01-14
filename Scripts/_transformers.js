$(function () {

    $("#fullContainer").fullpage({
        anchors: ['homeSection', 'eventsSection', 'speakersSection', 'aboutusSection', 'registerSection', 'contactSection'],
        menu: '#transMenu',
        //equivalent to jQuery `easeOutBack` extracted from http://matthewlein.com/ceaser/
        easingcss3: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)'
    });

    //EventManager Code
    $().timelinr({
        orientation: 'vertical',
        issuesSpeed: 500,
        datesSpeed: 300,
        startAt: 3,
        autoPlay: 'true'
    });
});
