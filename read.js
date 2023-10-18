            var filters = [];
            filters.push(new sap.ui.model.Filter("cpuDt", "BT", dtFiltroInicial, dtFiltroFinal ) );

            // Seleção ASSET_VERSION 
            this.getOwnerComponent().getModel().read(`/ASSET_VERSION`, {
                filters: filters,
                success: (oDataAssetVersion) => {        
                    //******************************************* 
                    //TESTE dados - INI
                    //******************************************* 
                    tab_ASSET_VERSION_test = [];
                    if(oView.byId("inpTestRunVersion").getSelected()){
                        var tab_ASSET_VERSION_test  = this.preencherDadosTesteAssetVersion();
                        oDataAssetVersion.results = tab_ASSET_VERSION_test;

                    };
                    var tab_OUTLIER_test = [];
                    if(oView.byId("inpTestRunOutlier").getSelected()){
                        
                        tab_OUTLIER_test        = this.preencherDadosTesteOutlier();
                        var oDataOutliers = new JSONModel(tab_OUTLIER_test);
                        oDataOutliers.results = tab_OUTLIER_test;
                    };
                    
                    var oModelTest;
                    oModelTest = new JSONModel({
                        tab_ASSET_VERSION_test : tab_ASSET_VERSION_test,
                        tab_OUTLIER_test: tab_OUTLIER_test,
                    });
                    this.setModel(oModelTest, "test");
                    //******************************************* 
                    //TEST dados - FIM
                    //******************************************* 
                    
                    // this.getOwnerComponent().getModel().setSizeLimit(999999);
                    // // Card 2A
                    // this.processChart2a(dtFiltroInicial,dtFiltroFinal,oDataAssetVersion);
                    // Card 2B
                    // this.processChart2b(dtFiltroInicial,dtFiltroFinal,oDataAssetVersion);
                    // Card 2C
                    // this.processChart2c(dtFiltroInicial,dtFiltroFinal,oDataAssetVersion);
                    // Card 2D
                    // this.processChart2d(dtFiltroInicial,dtFiltroFinal,oDataAssetVersion);
                    // // Card 1B-part 1 Version part
                    // this.processChart1bVersion(dtFiltroInicial,dtFiltroFinal,oDataAssetVersion);
                },
                error: (oError) => {
                    console.log(oError)
                }
            });
