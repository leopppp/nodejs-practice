{
  "Header": {
    "MessageHeader": {
      "activityName": "notifyIncident",
      "msgName": "ManageIncidentNotificationnotifyIncidentRequest",
      "businessServiceName": "ManageIncident",
      "businessServiceVersion": "V3.0",
      "msgType": "Notification",
      "accessSeekerID": "ASI000000000035",
      "correlationId": "f4cfe2be-a308-445e-addd-e06746f30e66",
      "security": "Placeholder Security",
      "priority": "6",
      "communicationPattern": "SubmitNotification",
      "timestamp": "2019-12-14T05:26:11Z",
      "businessChannel": "Portal",
      "HeaderCharacteristicValue": {
        "value": "FALSE",
        "Characteristic": {
          "name": "Mocked"
        }
      },
      "businessProcessVersion": "V9.0"
    }
  },
  "Body": {
    "ManageIncidentNotification": {
      "notificationType": "IncidentResolved",
      "IncidentTicket": {
        "ID": "INC300000952024",
        "AccessSeekerInteraction": {
          "ID": "DQACC-W6793814"
        },
        "interactionDate": "2019-12-13T00:02:39Z",
        "description": "Company Name: Answer not provided\n                    FNN: Answer not provided\n                    ULL: Answer not provided\n                    Floor: Answer not provided\n                    Plan Number: Answer not provided\n                    Latitude: -16.78804357\n                    Longitude: 145.68949310\n                    NTD Details: Answer not provided\n\n                    Hi team,\n                    Please add the above Address to the NBN Co-portal as per  State map with LOC ID : LOC000173287425  & as per Co-ordinates\n\n                    Note :  This LOC ID :LOC000173287425  co-ordinates  in  39 property\n\n                    Address :  39 CONICAL CL TRINITY BEACH QLD 4879\n\n                    Thank you\n                    Fault Type - Address\n\n                ",
        "interactionStatus": "Resolved",
        "DescribedBy": [
          {
            "value": "No",
            "Characteristic": {
              "ID": "Priority Assist"
            }
          },
          {
            "value": "Address",
            "Characteristic": {
              "ID": "ServiceRequestType"
            }
          },
          {
            "value": "NCAS-FTTN",
            "Characteristic": {
              "ID": "ProductCategoryTechnologyType"
            }
          },
          {
            "value": "Inconclusive",
            "Characteristic": {
              "ID": "End User Engagement Type"
            }
          }
        ],
        "type": "Service Request",
        "resolvedDate": "2019-12-14T05:26:11Z",
        "severity": "Low",
        "TicketComprisedOf": {
          "ItemInvolvesLocation": {
            "Place": {
              "type": "pla:NBNLocation",
              "ID": "LOC000173287425",
              "DescribedBy": {
                "value": "Urban",
                "Characteristic": {
                  "ID": "Region"
                }
              },
              "PhysicalAddress": {
                "roadNumber1": "39",
                "roadName": "CONICAL",
                "roadTypeCode": "Close",
                "localityName": "TRINITY BEACH",
                "stateTerritoryCode": "QLD"
              }
            }
          },
          "Note": [
            {
              "ID": "WLG000157851996",
              "description": "Hi Team,\n\n                            This address Lot 20, 39 Conical Close, Trinity Beach, QLD 4879 has been amended in the Service Portal and  is available for order with LOC000173287425. Please place the order accordingly.  This Service Request has been closed. Please submit a new Service Request if you believe this requires further investigation.\n\n                            Note: For future reference can we please request you to include below mentioned information for a timely resolution of  missing Location queries:\n                            1.\tGPS Co-ordinates (sourced from Google maps or State database)\n                            2.\tCorrect Addressing Attributes of the requested location\n                            3.\tNTD serial number starting with ALCLF (if nbn equipment already installed)\n                            4.\tMention business name/ Shop name/ office number along with floor/level details (for MDU sites)\n\n                            Thank you,\n                            NBN.\n                        ",
              "DescribedBy": {
                "value": "NBN Network & Service Operations",
                "Characteristic": {
                  "ID": "ProvidedBy"
                }
              },
              "VersionDetails": {
                "RootEntityVersion": {
                  "revisionTimestamp": "2019-12-14T05:26:11Z"
                }
              },
              "noteType": "WorkInfo"
            },
            {
              "ID": "WLG000157760466",
              "description": "Hi Team,  This address with LOC000173287425 has been amended in the Service Portal and should be available for order within 24-48 hours.  Thank you, nbn.",
              "DescribedBy": {
                "value": "NBN Network & Service Operations",
                "Characteristic": {
                  "ID": "ProvidedBy"
                }
              },
              "VersionDetails": {
                "RootEntityVersion": {
                  "revisionTimestamp": "2019-12-13T07:51:32Z"
                }
              },
              "noteType": "WorkInfo"
            },
            {
              "ID": "WLG000157682006",
              "description": "Hi Team,\n\n                            The Service Request is acknowledged and an update will be provided in next 48 hrs.\n\n                            Regards,\n                            nbn Customer Connections",
              "DescribedBy": {
                "value": "NBN Network & Service Operations",
                "Characteristic": {
                  "ID": "ProvidedBy"
                }
              },
              "VersionDetails": {
                "RootEntityVersion": {
                  "revisionTimestamp": "2019-12-13T01:14:42Z"
                }
              },
              "noteType": "WorkInfo"
            }
          ]
        },
        "category": "Address",
        "subCategory": "Missing address"
      }
    }
  }
}

