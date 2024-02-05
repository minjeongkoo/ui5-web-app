sap.ui.define(['ui5webapp/controller/Base.controller'], (BaseController) => {
  return BaseController.extend('ui5webapp.controller.Login', {
    onInit() {

    },

    // 로그인 버튼 클릭시, 홈으로 이동
    onLoginPress() {
      const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
      oRouter.navTo("home");
    },

    // 비밀번호 찾기 버튼 클릭
    onResetAccountPress() {
      const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
      oRouter.navTo("home");
    },
  });
});
