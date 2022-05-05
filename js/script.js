const $inp = $('input');
const $submit = $('.submit');

$submit.on('click', function () {
  const $skillDiv = $('<div>').addClass('skill');
  const $skillButton = $('<button class="remove">X</button>');
  const $skillSpan = $(`<span>${$inp.val()}</span>`);
  //   $skillSpan.val('hello');
  $skillDiv.append($skillButton);
  $skillDiv.append($skillSpan);

  $('.skills').append($skillDiv);
  $inp.val('');
});

$('.skills').on('click', '.remove', function () {
  $(this)
    .closest('div')
    .fadeOut(1000, function () {
      $(this).remove();
    });
});
