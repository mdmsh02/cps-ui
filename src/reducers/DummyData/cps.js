const dummyData = JSON.parse(`
{
  "id": "98036a59-8059-529b-8100-18ebc71db563",
  "CustomerKey": "APITEST",
  "url": "https://jda-platform-qa.azure-api.net/retail/",
  "backendurl": "https://apitest.jdadelivers.com/retail/",
  "customerid": "C5",
  "customername": "APITEST",
  "sslenabledurl": "",
  "theme": {
    "brandcolor": "#006341",
    "backgroundcolor": "#EBF7F6"
  },
  "googleanalytics": {
    "key": "UA-127480726-1"
  },
  "appcenteranalytics": {
    "androidkey": "96a7b061-4233-4808-a775-46b5153c3000;",
    "ioskey": "a38add18-afc1-4b11-a547-445894ada631;"
  },
  "screenTracking": [
    {
      "pagename": "registration",
      "canTrackPage": true,
      "actions": [
        {
          "actionname": "register",
          "canTrackAction": true
        }
      ]
    },
    {
      "pagename": "welcome",
      "canTrackPage": true,
      "actions": [
        {
          "actionname": "login",
          "canTrackAction": true
        },
        {
          "actionname": "forgot_password",
          "canTrackAction": false
        }
      ]
    }
  ],
  "features": {
    "ess": [
      {
        "featurename": "restrictEmployeeGeneralAvailability",
        "enable": true
      },
      {
        "featurename": "enableAvailableShifts",
        "enable": true
      },
      {
        "featurename": "enableEmployeePreferredAvailability",
        "enable": true
      },
      {
        "featurename": "enableSwapShift",
        "enable": true
      },
      {
        "featurename": "hidePunches",
        "enable": true
      },
      {
        "featurename": "restrictFixedShiftFromSwap",
        "enable": true
      },
      {
        "featurename": "showESSPaySummary",
        "enable": true
      },
      {
        "featurename": "showScheduledMealsAndBreaks",
        "enable": true
      }
    ]
  },
  "canAudit": true
}
`);

class FakeData {

  
  constructor(){
    
    this.fakeData = dummyData;
  }
  
  GetSections(){
    var keys = Object.keys(this.fakeData);
    const {url,backendurl, ...rest } = this.fakeData;
    const objtoReturn = {
      url,
      backendurl,
      rest
    }
  }

    GetBaiscInfo(){
      const {CustomerKey,customerid,customername,canAudit} = this.fakeData;
      const baiscInfo ={
        CustomerKey,
        customerid,
        customername,
        canAudit
      }
      return {
        MetaData : baiscInfo
      }
    }

    GetThemes(){
      const {theme} = this.fakeData;
      return { Themes :theme
      };
    }

    GetFeatures(){
     const {features} = this.fakeData;
     return {
        Features : features
     } 
    }

    GetAnalytics(){
     const {googleanalytics,appcenteranalytics} = this.fakeData;
       return {
       Analytics :{
        googleanalytics,
        appcenteranalytics
       } 
       } 
       
    }

    GetUrls (){
      const {url,backendurl,sslenabledurl} = this.fakeData;
      return {
        Urls :{
          url,
          backendurl,
          sslenabledurl

        }
      }
    }

    GetScreenTracking(){
      const {screenTracking} = this.fakeData;
      return {
        ScreenTracking : screenTracking
      }
    }
    //console.log(objtoReturn);
    //console.log(backendurl);
    //console.log(rest);
    //console.log(url);
  

}
//var result = new FakeData().GetFeatures().Features.ess.map(person => ({ value: person.featurename, text: person.enable }));
// console.log( new FakeData().GetBaiscInfo());
//console.log(result);
// console.log( new FakeData().GetThemes());
// console.log( new FakeData().GetScreenTracking());
// console.log( new FakeData().GetUrls());

const CustomerDetail = new FakeData();
 export default CustomerDetail;

