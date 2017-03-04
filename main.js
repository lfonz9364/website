var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slideImg");
  var dots = document.getElementsByClassName("indicator");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" selected", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " selected";
}

$( '.button' ).click(function(event) {
  var button = event.target;
  var slideArrow = $(button).next();
  var article = $('article.' + $(button).attr('class'));

  if ($(slideArrow).html() === $(slideArrow).html("&#10836;").text()) {
    $(slideArrow).html("&#10835;");
    article.css('display', 'block');
  } else {
    $(slideArrow).html("&#10836;");
    article.css('display', 'none');
  }
});
