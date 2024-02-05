sap.ui.define(['ui5webapp/controller/Base.controller'], (BaseController) => {
    return BaseController.extend('ui5webapp.controller.Home', {
        onInit() {
        },

        // 홈으로 이동
        onPressSetUserInfo() {
            const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("home");
        },
    });
});
