HTMLWidgets.widget({

  name: 'imageCropper',

  type: 'output',

  factory: function(el, width, height) {

    return {

      renderValue: function(x) {

        console.log("imageCropper -  03-06-20 13:45");

        // Init here, not on document ready: the widget's DOM and scripts are
        // only guaranteed to be in place by the time renderValue runs.
        window.idsCropperInit();
        window.idsCropperHelperInit();

      },

      resize: function(width, height) {

      }

    };
  }
});
