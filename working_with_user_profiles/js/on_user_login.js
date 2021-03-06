// each of the below mentioned fields are optional
// with the exception of one of Identity, Email, FBID or GPID
clevertap.onUserLogin.push({
 "Site": {
   "Name": "Jack Montana",            // String
   "Identity": 61026032,              // String or number
   "Email": "jack@gmail.com",         // Email address of the user
   "Phone": "+14155551234",           // Phone (with the country code)
   "Gender": "M",                     // Can be either M or F
   "Employed": "Y",                   // Can be either Y or N
   "Education": "Graduate",           // Can be either School, College or Graduate
   "Married": "Y",                    // Can be either Y or N
   "DOB": $WZRK_WR.setDate(20150501), // Date of Birth. Format date as yyyymmdd
   "Age": 28,                         // Not required if DOB is set

// optional fields. controls whether the user will be sent email, push etc.
   "MSG-email": false,                // Disable email notifications
   "MSG-push": true,                  // Enable push notifications
   "MSG-sms": true                    // Enable sms notifications
 }
});
