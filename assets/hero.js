(function () {
  var btn = document.querySelector(".hero__sound");
  var video = document.querySelector(".hero__media");
  if (!btn || !video) return;

  btn.addEventListener("click", function () {
    var unmuting = video.muted;
    video.muted = !unmuting;
    btn.setAttribute("aria-pressed", String(unmuting));
    btn.setAttribute(
      "aria-label",
      unmuting ? btn.dataset.labelMute : btn.dataset.labelUnmute
    );
    if (unmuting && video.paused) {
      var p = video.play();
      if (p && typeof p.catch === "function") p.catch(function () {});
    }
  });
})();
