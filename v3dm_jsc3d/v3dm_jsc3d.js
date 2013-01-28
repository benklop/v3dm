(function ($) {

Drupal.behaviors.JSC3D = {
  attach: function (context, settings) {
    $('.jsc3d').each(function() {
      var id = $(this).attr('id');
      var file = settings.v3dm_jsc3d.files[id];
      var viewer = new JSC3D.Viewer(this);
      viewer.setParameter('SceneUrl', file);
      viewer.init();
      viewer.update();
    });
  }
};

})(jQuery);
