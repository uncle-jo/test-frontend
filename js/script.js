function openTab(evt, nameTab) {
  var i, x, tablinks;
  x = document.getElementsByClassName("tbs");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(nameTab).style.display = "flex";
  evt.currentTarget.className += " active";
}

$(".quantity__plus").click(function() {
  var $price = $(".quantity__price");
  $price.val(parseInt($price.val()) + 1);
  $price.change();
});
$(".quantity__min").click(function() {
  var $price = $(".quantity__price");
  $price.val(parseInt($price.val()) - 1);
  $price.change();
});

