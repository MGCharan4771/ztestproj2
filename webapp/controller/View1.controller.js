sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    function (Controller) {
        "use strict";

        return Controller.extend("ztestproject2.controller.View1", {
            onInit: function () {

            },
            onPressNav: function () {
                var xnavservice = sap.ushell && sap.ushell.Container &&
                    sap.ushell.Container.getService && sap.ushell.Container.getService("CrossApplicationNavigation");
                    var href = (xnavservice && xnavservice.hrefForExternal({
                        target: {
                            semanticObject: "zsemobj_filtermat",
                            action: "display"
                        },
                        params : {
                            matno : "M001"
                        }
                    })) || '';                    
            
                xnavservice.toExternal({
                    target: {
                        shellHash: href
                    }
                })
            }
        });
    });
