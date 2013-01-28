(function ($) {

Drupal.behaviors.Thingiview = {
  attach: function (context, settings) {

    thingiurlbase = settings.v3dm_thingiviewjs.path;
    $('.thingiview').each(function() {
      var id = $(this).attr('id');
      var file = settings.v3dm_thingiviewjs.files[id];
      var thingiview = new Thingiview(id);
      thingiview.setObjectColor('#C0D8F0');
      thingiview.initScene();
      thingiview.loadSTL(file);
    });
  }
};

})(jQuery);
