$(window).on("load", function() {
  $(".slide-show__thumbnail").on("click", function(e) {
    let img_src = $(this).attr("src");
    const $main_img = $(e.target).parent().prevAll(".slide-show__main");
    $main_img.attr("src", img_src);
  });
});
