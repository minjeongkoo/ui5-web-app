sap.ui.define(['ui5webapp/controller/Base.controller', 'sap/ui/model/json/JSONModel'], (BaseController, JSONModel) => {
    return BaseController.extend('ui5webapp.controller.Home', {
        onInit() {
            // set explored app's demo model on this sample
            const oModel = new JSONModel( {
                ProductCollection: [
                    {
                        "ProductId": "HT-1000",
                        "Category": "Laptops",
                        "MainCategory": "Computer Systems",
                        "TaxTarifCode": "1",
                        "SupplierName": "Very Best Screens",
                        "WeightMeasure": 4.2,
                        "WeightUnit": "KG",
                        "Description": "Notebook Basic 15 with 2,80 GHz quad core, 15\" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro",
                        "Name": "Notebook Basic 15",
                        "DateOfSale": "2017-03-26",
                        "ProductPicUrl": "https://sdk.openui5.org/test-resources/sap/ui/documentation/sdk/images/HT-1000.jpg",
                        "Status": "Available",
                        "Quantity": 10,
                        "UoM": "PC",
                        "CurrencyCode": "EUR",
                        "Price": 956,
                        "Width": 30,
                        "Depth": 18,
                        "Height": 3,
                        "DimUnit": "cm"
                    },
                    {
                        "ProductId": "HT-1001",
                        "Category": "Laptops",
                        "MainCategory": "Computer Systems",
                        "TaxTarifCode": "1",
                        "SupplierName": "Very Best Screens",
                        "WeightMeasure": 4.5,
                        "WeightUnit": "KG",
                        "Description": "Notebook Basic 17 with 2,80 GHz quad core, 17\" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro",
                        "Name": "Notebook Basic 17",
                        "DateOfSale": "2017-04-17",
                        "ProductPicUrl": "https://sdk.openui5.org/test-resources/sap/ui/documentation/sdk/images/HT-1001.jpg",
                        "Status": "Available",
                        "Quantity": 20,
                        "UoM": "PC",
                        "CurrencyCode": "EUR",
                        "Price": 1249,
                        "Width": 29,
                        "Depth": 17,
                        "Height": 3.1,
                        "DimUnit": "cm"
                    },
                    {
                        "ProductId": "HT-1002",
                        "Category": "Laptops",
                        "MainCategory": "Computer Systems",
                        "TaxTarifCode": "1",
                        "SupplierName": "Very Best Screens",
                        "WeightMeasure": 4.2,
                        "WeightUnit": "KG",
                        "Description": "Notebook Basic 18 with 2,80 GHz quad core, 18\" LCD, 8 GB DDR3 RAM, 1000 GB Hard Disc, Windows 8 Pro",
                        "Name": "Notebook Basic 18",
                        "DateOfSale": "2017-01-07",
                        "ProductPicUrl": "https://sdk.openui5.org/test-resources/sap/ui/documentation/sdk/images/HT-1002.jpg",
                        "Status": "Available",
                        "Quantity": 10,
                        "UoM": "PC",
                        "CurrencyCode": "EUR",
                        "Price": 1570,
                        "Width": 28,
                        "Depth": 19,
                        "Height": 2.5,
                        "DimUnit": "cm"
                    }
                ],
            });
            this.getView().setModel(oModel);
        },

        handleSelectChange: function (oEvent) {
            var mode = oEvent.getParameter("selectedItem").getKey();
            this.byId("ProductList").setMode(mode);
        }
    });
});
