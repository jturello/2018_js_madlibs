$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    event.preventDefault();

    $(".person1").text($('input#person1').val());
    $(".person2").text($('input#person2').val());
    $(".animal").text($('input#animal').val());
    $(".exclamation").text($('input#exclamation').val());
    $(".verb").text($('input#verb').val());
    $(".noun").text($('input#noun').val());

    $('#madlibs-form')[0].reset();
    $("#story").show();
  });
});
