var controller = new ScrollMagic.Controller();
var animateElem = [".animate_1", ".animate_2", ".animate_3", ".animate_4", ".animate_5", ".animate_6", ".animate_7", ".animate_8"];
var triggerElem = [".trigger_1", ".trigger_2", ".trigger_3", ".trigger_4", ".trigger_5", ".trigger_6", ".trigger_7", ".trigger_8"];

for (var i = 0; i < animateElem.length; i++) {
  var currentAnimateElem = animateElem[i];
  var currentTriggerElem = triggerElem[i];

  var timeline = new TimelineMax();

  var tween_move = TweenMax.fromTo(
    currentAnimateElem,
    1,
    {
      ease: SlowMo.ease.config(0.7, 0.7, false),
      y: 50
    },
    {
      ease: SlowMo.ease.config(0.7, 0.7, false),
      y: -50
    }
  );

  var tween_opacity = new TimelineMax();
  tween_opacity
    .to(currentAnimateElem, 0.3, {
      ease: Linear.easeNone,
      opacity: 1
    })
    .to(
      currentAnimateElem,
      0.3,
      {
        ease: Linear.easeNone,
        opacity: 0
      },
      "+=0.4"
    );

  timeline.add(tween_move, 0).add(tween_opacity, 0);

  var scene_main = new ScrollMagic.Scene({
    triggerElement: currentTriggerElem,
    duration: "900px"
  })
    .setTween(timeline)
    .addTo(controller);
}

var controller = new ScrollMagic.Controller();
var aniElem = [".ani_1", ".ani_2", ".ani_3", ".ani_4", ".ani_5"];
var triElem = [".tri_1", ".tri_2", ".tri_3", ".tri_4", ".tri_5"];

for (var i = 0; i < aniElem.length; i++) {
  var currentAniElem = aniElem[i];
  var currentTriElem = triElem[i];

  var timeline = new TimelineMax();

  var tween_move = TweenMax.fromTo(
    currentAniElem,
    1,
    {
      ease: SlowMo.ease.config(0.7, 0.7, false),
      y: 50
    },
    {
      ease: SlowMo.ease.config(0.7, 0.7, false),
      y: -50
    }
  );

  var tween_opacity = new TimelineMax();
  tween_opacity
    .to(currentAniElem, 0.3, {
      ease: Linear.easeNone,
      opacity: 1
    })
    .to(
      currentAniElem,
      0.3,
      {
        ease: Linear.easeNone,
        opacity: 0
      },
      "+=0.4"
    );

  timeline.add(tween_move, 0).add(tween_opacity, 0);

  var scene_main = new ScrollMagic.Scene({
    triElement: currentTriElem,
    duration: "900px"
  })
    .setTween(timeline)
    .addTo(controller);
}

