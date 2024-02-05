sap.ui.define(['ui5webapp/controller/Base.controller'], (BaseController) => {
  return BaseController.extend('ui5webapp.controller.Login', {
    onInit() {

    },

    onLoginPress() {
      const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
      oRouter.navTo("home");
    },

    onResetAccountPress() {
      const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
      oRouter.navTo("home");
    },
  });
});
