Feature: Hotel Booking In Adactin Application
@Login
Scenario: User Login In The Web Application
Given user Launch The Url In Adactin in Application
When user Enter The Username In Username Field
And user Enter The Password In Password Field
Then user Click the Login Button And It Navigatees To Search Hotel Page
@FillUp
Scenario: User Search the Hotel In The Hotel Page
When user Select The Location In Location Dropdown Field
And user Select The Hotel In Hotel Dropdown Field
And user Select The Room Type From Room Type Dropdown Field
And user Select The Number Of Room in Number Of Room Field
And user Enter The Check In Date In Check In Field
And user Enter The Check Out Date In Check Out Field
And user Select The Adult Per Room and Child Per Room In There Perspective Field
Then user Click The Search Button And It Navigates To The Select Hotel Page
@Verfiy
Scenario: User To Verify The Select Hotel Page

When user Select The Hotel In Hotel
Then user Click The Continue Button And It Navigates To Book Hotel Page
@Book
Scenario: User to Verify The Book Hotel Page

When user Enter The First Name In First Name Field
And user Enter The Last Name In Last Name Field
And user Enter The Billing Address In Billing Address Field
And user Enter The Credit Card No In Credit Card No Field
And user Select The Credit Card Type In Credit Card Field
And user Select The Expiry Date In Select Month & Select Date Field
And user Enter the CVV Number In CVV Number Field
Then user Click The Book Now Button And It Navigates To Confirmation Hotel Page
@Logout
Scenario: User to Verify The Logout
When user See The Booking Confirmation And The Order NO
Then user Click The Logout Button And It Navigate To Logout Page And User See You Have Been Successfully Logged Out
