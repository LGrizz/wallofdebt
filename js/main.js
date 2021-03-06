$(document).ready(function () {

    String.prototype.capitalize = function (lower) {
        return (lower ? this.toLowerCase() : this).replace(/(?:^|\s)\S/g, function (a) {
            return a.toUpperCase();
        });
    };

    function IsEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }

    $('#submitBrick').click(function () {

        var capName = $('#name').val().capitalize(true);
        $("#name").val(capName);
        $("#debt").val($("#debt").val().replace(/[^\d.]/g, ""));

        if (IsEmail($('#email').val()) && $("#name").val() !== '' && $("#debt").val() !== '' && $("#school").val() !== '') {
            $.post("php/form.php", $("#join").serialize(), function (data) {
                $('#join-form form').fadeOut(function () {
                    $('#join-form form').empty();
                    $('.thank-you-message').fadeIn();
                });
            });
        } else {
            if (!IsEmail($('#email').val())) {
                $('#email').css("border-bottom-color", "#e8432e");
            } else {
                $('#email').css("border-bottom-color", "#fff");
            }
            if ($("#name").val() === '') {
                $('#name').css("border-bottom-color", "#e8432e");
            } else {
                $('#name').css("border-bottom-color", "#fff");
            }
            if ($("#school").val() === '') {
                $('#school').css("border-bottom-color", "#e8432e");
            } else {
                $('#school').css("border-bottom-color", "#fff");
            }
            if ($("#debt").val() === '') {
                $('#debt').css("border-bottom-color", "#e8432e");
            } else {
                $('#debt').css("border-bottom-color", "#fff");
            }
        }


    });

    $('#submitMessage').click(function () {

        var capName = $('#messageName').val().capitalize(true);
        $("#messageNname").val(capName);

        if (IsEmail($('#messageEmail').val()) && $("#messageName").val() !== '' && $("#messageContent").val() !== '') {
            $.post("php/contact.php", $("#contact").serialize(), function (data) {
                $('#contact').fadeOut(function () {
                    $('#contact').empty();
                    $('.message-thankyou').fadeIn();
                });
            });
        } else {
            if (!IsEmail($('#messageEmail').val())) {
                $('#messageEmail').css("border-bottom-color", "#e8432e");
            } else {
                $('#messageEmail').css("border-bottom-color", "#b8b8b8");
            }
            if ($("#messageName").val() === '') {
                $('#messageName').css("border-bottom-color", "#e8432e");
            } else {
                $('#messageName').css("border-bottom-color", "#b8b8b8");
            }
            if ($("#messageContent").val() === '') {
                $('#messageContent').css("border-bottom-color", "#e8432e");
            } else {
                $('#messageContent').css("border-bottom-color", "#b8b8b8");
            }
        }


    });



    var schools = [];

    $.getJSON('json/schools.json', function (data) {
        schools = data.schools;
    }).done(function () {
        $('#school').autocomplete({
            lookup: schools
        });
    });




    $('.joinbutton').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, "slow", function () {
            $('#main').fadeOut(500, function () {
                $('#join-form').fadeIn(500);
            });
        });

    });

    $(".contactus").click(function () {
        $("html, body").animate({
            scrollTop: $('.welcome.contact-us').offset().top
        }, 400);
    });

    $(".to-top").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
    });


});