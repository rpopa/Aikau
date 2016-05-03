model.jsonModel = {
   services: [
      {
         name: "alfresco/services/LoggingService",
         config: {
            loggingPreferences: {
               enabled: true,
               all: true
            }
         }
      },
      "alfresco/services/DocumentService"
   ],
   widgets: [
      // NOTE: Provided as an example only, the tutorial files are not in the source, they can be re-added
      {
         name: "alfresco/experimental/mdl/Layout",
         config: {
            widgets: [
               {
                  name: "alfresco/experimental/mdl/Header",
                  config: {
                     widgets: [
                        {
                           name: "alfresco/experimental/mdl/HeaderRow",
                           config: {
                              widgets: [
                                 {
                                    name: "alfresco/experimental/mdl/Title",
                                    config: {
                                       title: "Material Designed Aikau"
                                    }
                                 },
                                 {
                                    name: "alfresco/experimental/mdl/Spacer"
                                 },
                                 {
                                    name: "alfresco/experimental/mdl/Menu",
                                    config: {
                                       widgets: [
                                          {
                                             name: "alfresco/experimental/mdl/MenuItem",
                                             config: {
                                                title: "Help"
                                             }
                                          },
                                          {
                                             name: "alfresco/experimental/mdl/MenuItem",
                                             config: {
                                                title: "Logout"
                                             }
                                          }
                                       ]
                                    }
                                 }
                              ]
                           }
                        },
                        // {
                        //    name: "alfresco/experimental/mdl/TabBar"
                        // }
                        // {
                        //    name: "alfresco/experimental/mdl/HeaderRow",
                        //    config: {
                        //       widgets: [
                        //          {
                        //             name: "alfresco/experimental/mdl/Spacer"
                        //          },
                        //          {
                        //             name: "alfresco/experimental/mdl/Navigation"
                        //          }
                        //       ]
                        //    }
                        // }
                        
                     ]
                  }
               },
               {
                  name: "alfresco/experimental/mdl/Drawer",
                  config: {
                     widgets: [
                        {
                           name: "alfresco/experimental/mdl/Title",
                           config: {
                              title: "Options"
                           }
                        },
                        {
                           name: "alfresco/experimental/mdl/Navigation"
                        }
                     ]
                  }
               },
               {
                  name: "alfresco/experimental/mdl/Content",
                  config: {
                     contentAsTabs: false,
                     widgets: [
                        {
                           name: "alfresco/lists/Paginator",
                           config: {
                              documentsPerPage: 10,
                              pageSizes: [5,10,20],
                              visibilityConfig: {
                                 initialValue: false
                              }
                           }
                        },
                        {
                           name: "alfresco/experimental/mdl/FabButton",
                           config: {
                              icon: "skip_previous",
                              publishTopic: "ALF_PAGE_BACK"
                           }
                        },
                        {
                           name: "alfresco/experimental/mdl/FabButton",
                           config: {
                              icon: "skip_next",
                              publishTopic: "ALF_PAGE_FORWARD"
                           }
                        },
                        {
                           id: "DOCLIST",
                           // title: "Document Library",
                           name: "alfresco/documentlibrary/AlfDocumentList",
                           config: {
                              useHash: false,
                              additionalControlsTarget: "TOOLBAR",
                              currentPageSize:10,
                              widgets: [
                                 {
                                    name: "alfresco/experimental/mdl/views/TableView"
                                 }
                              ]
                           }
                        },
                        {
                           id: "NODES_MOCK",
                           // title: "Mock XHR",
                           name: "alfresco/testing/NodesMockXhr",
                           config: {
                              totalItems: 40,
                              folderRatio: [100],
                              visibilityConfig: {
                                 initialValue: false
                              }
                           }
                        },
                        {
                           id: "DEBUG_LOG",
                           // title: "Publication/Subscription Log",
                           name: "alfresco/logging/DebugLog",
                           config: {
                              visibilityConfig: {
                                 initialValue: false
                              }
                           }
                        }
                     ]
                  }
               }
            ]
         }
      }
   ]
};