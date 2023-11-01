$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Hotel Booking In Adactin Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "User Login In The Web Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-login-in-the-web-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "user Launch The Url In Adactin in Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user Enter The Username In Username Field",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user Enter The Password In Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user Click the Login Button And It Navigatees To Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.user_Launch_The_Url_In_Adactin_in_Application()"
});
formatter.result({
  "duration": 5426205900,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_Enter_The_Username_In_Username_Field()"
});
formatter.result({
  "duration": 141020300,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_Enter_The_Password_In_Password_Field()"
});
formatter.result({
  "duration": 110936900,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_Click_the_Login_Button_And_It_Navigatees_To_Search_Hotel_Page()"
});
formatter.result({
  "duration": 1028446100,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "User Search the Hotel In The Hotel Page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-search-the-hotel-in-the-hotel-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@FillUp"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "user Select The Location In Location Dropdown Field",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user Select The Hotel In Hotel Dropdown Field",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user Select The Room Type From Room Type Dropdown Field",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user Select The Number Of Room in Number Of Room Field",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user Enter The Check In Date In Check In Field",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user Enter The Check Out Date In Check Out Field",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user Select The Adult Per Room and Child Per Room In There Perspective Field",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user Click The Search Button And It Navigates To The Select Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.user_Select_The_Location_In_Location_Dropdown_Field()"
});
formatter.result({
  "duration": 161526300,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_Select_The_Hotel_In_Hotel_Dropdown_Field()"
});
formatter.result({
  "duration": 173513900,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_Select_The_Room_Type_From_Room_Type_Dropdown_Field()"
});
formatter.result({
  "duration": 161391400,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_Select_The_Number_Of_Room_in_Number_Of_Room_Field()"
});
formatter.result({
  "duration": 157117200,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_Enter_The_Check_In_Date_In_Check_In_Field()"
});
formatter.result({
  "duration": 93172900,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_Enter_The_Check_Out_Date_In_Check_Out_Field()"
});
formatter.result({
  "duration": 98670700,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_Select_The_Adult_Per_Room_and_Child_Per_Room_In_There_Perspective_Field()"
});
formatter.result({
  "duration": 304399000,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_Click_The_Search_Button_And_It_Navigates_To_The_Select_Hotel_Page()"
});
formatter.result({
  "duration": 703561100,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "User To Verify The Select Hotel Page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-to-verify-the-select-hotel-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@Verfiy"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "user Select The Hotel In Hotel",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "user Click The Continue Button And It Navigates To Book Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.user_Select_The_Hotel_In_Hotel()"
});
formatter.result({
  "duration": 95225500,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_Click_The_Continue_Button_And_It_Navigates_To_Book_Hotel_Page()"
});
formatter.result({
  "duration": 941200400,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "User to Verify The Book Hotel Page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-to-verify-the-book-hotel-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@Book"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "user Enter The First Name In First Name Field",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "user Enter The Last Name In Last Name Field",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "user Enter The Billing Address In Billing Address Field",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "user Enter The Credit Card No In Credit Card No Field",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "user Select The Credit Card Type In Credit Card Field",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "user Select The Expiry Date In Select Month \u0026 Select Date Field",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "user Enter the CVV Number In CVV Number Field",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "user Click The Book Now Button And It Navigates To Confirmation Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.user_Enter_The_First_Name_In_First_Name_Field()"
});
formatter.result({
  "duration": 120910400,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_Enter_The_Last_Name_In_Last_Name_Field()"
});
formatter.result({
  "duration": 91964800,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_Enter_The_Billing_Address_In_Billing_Address_Field()"
});
formatter.result({
  "duration": 114945200,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_Enter_The_Credit_Card_No_In_Credit_Card_No_Field()"
});
formatter.result({
  "duration": 140024200,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_Select_The_Credit_Card_Type_In_Credit_Card_Field()"
});
formatter.result({
  "duration": 147237500,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_Select_The_Expiry_Date_In_Select_Month_Select_Date_Field()"
});
formatter.result({
  "duration": 527747800,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_Enter_the_CVV_Number_In_CVV_Number_Field()"
});
formatter.result({
  "duration": 83529300,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_Click_The_Book_Now_Button_And_It_Navigates_To_Confirmation_Hotel_Page()"
});
formatter.result({
  "duration": 66129500,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "User to Verify The Logout",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-to-verify-the-logout",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 34,
      "name": "@Logout"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "user See The Booking Confirmation And The Order NO",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "user Click The Logout Button And It Navigate To Logout Page And User See You Have Been Successfully Logged Out",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.user_See_The_Booking_Confirmation_And_The_Order_NO()"
});
formatter.result({
  "duration": 5869691400,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_Click_The_Logout_Button_And_It_Navigate_To_Logout_Page_And_User_See_You_Have_Been_Successfully_Logged_Out()"
});
formatter.result({
  "duration": 5440732200,
  "status": "passed"
});
});