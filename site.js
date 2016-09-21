var manifests = "./manifest.json";
jQuery(function() {
  if (typeof manifests === undefined || manifests === null || manifests === "") {
    manifests = "./manifest.json";
    // window.console.log(encodeURIComponent(manifests));
  }
});

$(function() {
  Mirador({
    "id": "viewer",
    "mainMenuSettings": {
      'show': true
    },
    "data": [
      { "manifestUri": manifests, "location": "University of Maryland" }
    ],
    'layout': '1x1',
    "windowObjects": [
      {
        "loadedManifest": manifests,
        "viewType": "ImageView",
        "displayLayout": false,
        "sidePanel" : true, //whether or not to make the side panel available in this window
        //control what is available in the side panel. if "sidePanel" is false, these options won't be applied
        "sidePanelOptions" : {
          "toc" : true,
          "annotations" : true
        },
        "bottomPanelVisible": true, //whether or not to make the bottom panel visible in this window on load. This setting is dependent on bottomPanel being true
        "canvasControls": { // The types of controls available to be displayed on a canvas
          "annotations": {
            "annotationLayer": true, //whether or not to make annotation layer available in this window
            "annotationCreation": false, 
            /*whether or not to make annotation creation available in this window,
                         only valid if annotationLayer is set to True and an annotationEndpoint is defined.
                         This setting does NOT affect whether or not a user can edit an individual annotation that has already been created.*/
            "annotationState": 'on', //[_'off'_, 'on'] whether or not to turn on the annotation layer on window load
            // "annotationRefresh" : false, //whether or not to display the refresh icon for annotations
          },
          // "imageManipulation": {
          //   "manipulationLayer": false,
          // }
        }
      }
    ],

    'mainMenuSettings': {
      'show': true,
      'buttons' : {
        'bookmark' : false,
        'layout' : true,
        'options' : false,
        'fullScreenViewer': true
      }
      //'height': 25,
      //'width': '100%'
    },

    'workspacePanelSettings': {
      'maxRows': 3,
      'maxColumns': 3,
      'preserveWindows': true
    },

    'drawingToolsSettings': {
      // Additional tool settings.
      // 'Pin': {
      // },
      'selectedColor': 'yellow',
      // 'doubleClickReactionTime': 300,
      'strokeColor': 'rgba(255, 255, 255, 0)',
      'fillColor': 'yellow',
      'fillColorAlpha': 0.2,
      // 'shapeHandleSize':10,
      // 'fixedShapeSize':10,
      // 'newlyCreatedShapeStrokeWidthFactor': 0,
      'hoverColor': 'rgba(255, 255, 255, 0.5)',
      'annotationTypeStyles': {
        'umd:searchResult': {
          'strokeColor': 'rgba(255, 255, 255, 0.2)',
          'fillColor': 'yellow',
          'fillColorAlpha': 0.2
        },
        'umd:articleSegment': {
          'strokeColor': 'rgba(0, 0, 0, 0.2)',
          'fillColor': 'green',
          'fillColorAlpha': 0.2
        },
        'umd:Article': {
          'strokeColor': 'rgba(0, 0, 0, 0.2)',
          'fillColor': 'green',
          'fillColorAlpha': 0.2
        }
      }
    },
  });
});
