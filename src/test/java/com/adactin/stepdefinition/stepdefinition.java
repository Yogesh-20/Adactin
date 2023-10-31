package com.adactin.stepdefinition;

import java.io.File;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import com.adactin.runner.RunnerClass;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class stepdefinition {
	
	public static WebDriver driver = RunnerClass.driver;

	@Given("^user Launch The Url In Adactin in Application$")
	public void user_Launch_The_Url_In_Adactin_in_Application() throws Throwable {
		driver.get("https://adactinhotelapp.com/");
	}

	@When("^user Enter The Username In Username Field$")
	public void user_Enter_The_Username_In_Username_Field() throws Throwable {
		
		WebElement username = driver.findElement(By.xpath("//input[@name='username']"));
	    username.sendKeys("YogeshMS");
	}

	@When("^user Enter The Password In Password Field$")
	public void user_Enter_The_Password_In_Password_Field() throws Throwable {
		
		WebElement mpass = driver.findElement(By.xpath("//input[@name='password']"));
	    mpass.sendKeys("yogesh@123");
	}

	@Then("^user Click the Login Button And It Navigatees To Search Hotel Page$")
	public void user_Click_the_Login_Button_And_It_Navigatees_To_Search_Hotel_Page() throws Throwable {
		
		WebElement login = driver.findElement(By.xpath("//input[@type='Submit']"));
	    login.click();
	}

	@When("^user Select The Location In Location Dropdown Field$")
	public void user_Select_The_Location_In_Location_Dropdown_Field() throws Throwable {
		
		WebElement location = driver.findElement(By.xpath("//select[@name='location']"));
	    Select a=new Select(location);
	    a.selectByValue("New York");
	}

	@When("^user Select The Hotel In Hotel Dropdown Field$")
	public void user_Select_The_Hotel_In_Hotel_Dropdown_Field() throws Throwable {
		
		WebElement hotel = driver.findElement(By.xpath("//select[@name='hotels']"));
	    Select b=new Select(hotel);
	    b.selectByIndex(2);
	}

	@When("^user Select The Room Type From Room Type Dropdown Field$")
	public void user_Select_The_Room_Type_From_Room_Type_Dropdown_Field() throws Throwable {
		
		WebElement roomtype = driver.findElement(By.xpath("//select[@name='room_type']"));
	    Select c=new Select(roomtype);
	    c.selectByIndex(3);
	}

	@When("^user Select The Number Of Room in Number Of Room Field$")
	public void user_Select_The_Number_Of_Room_in_Number_Of_Room_Field() throws Throwable {
		
		 WebElement room = driver.findElement(By.xpath("//select[@name='room_nos']"));
		    Select d=new Select(room);
		    d.selectByIndex(2);
	}

	@When("^user Enter The Check In Date In Check In Field$")
	public void user_Enter_The_Check_In_Date_In_Check_In_Field() throws Throwable {
		
		WebElement datein = driver.findElement(By.xpath("//input[@name='datepick_in']"));
		datein.sendKeys("30/10/23");
	}

	@When("^user Enter The Check Out Date In Check Out Field$")
	public void user_Enter_The_Check_Out_Date_In_Check_Out_Field() throws Throwable {
		
		WebElement datein = driver.findElement(By.xpath("//input[@name='datepick_out']"));
		datein.sendKeys("01/11/23");
	}

	@When("^user Select The Adult Per Room and Child Per Room In There Perspective Field$")
	public void user_Select_The_Adult_Per_Room_and_Child_Per_Room_In_There_Perspective_Field() throws Throwable {
		
		WebElement adult = driver.findElement(By.xpath("//select[@name='adult_room']"));
	    Select e=new Select(adult);
	    e.selectByIndex(2);
	    WebElement child = driver.findElement(By.xpath("//select[@name='child_room']"));
	    Select f=new Select(child);
	    f.selectByIndex(2);
	}

	@Then("^user Click The Search Button And It Navigates To The Select Hotel Page$")
	public void user_Click_The_Search_Button_And_It_Navigates_To_The_Select_Hotel_Page() throws Throwable {
		
		WebElement search1 = driver.findElement(By.xpath("//input[@type='submit']"));
	    search1.click();
	}

	@When("^user Select The Hotel In Hotel$")
	public void user_Select_The_Hotel_In_Hotel() throws Throwable {
		
		 WebElement box1 = driver.findElement(By.xpath("//input[@name='radiobutton_0']"));
		    box1.click();
	}

	@Then("^user Click The Continue Button And It Navigates To Book Hotel Page$")
	public void user_Click_The_Continue_Button_And_It_Navigates_To_Book_Hotel_Page() throws Throwable {
		
		WebElement continue1 = driver.findElement(By.xpath("//input[@type='submit']"));
	    continue1.click();
	}

	@When("^user Enter The First Name In First Name Field$")
	public void user_Enter_The_First_Name_In_First_Name_Field() throws Throwable {
		
		WebElement firstname = driver.findElement(By.xpath("//input[@name='first_name']"));
	    firstname.sendKeys("Yogesh");
	}

	@When("^user Enter The Last Name In Last Name Field$")
	public void user_Enter_The_Last_Name_In_Last_Name_Field() throws Throwable {
		
		WebElement lastname = driver.findElement(By.xpath("//input[@name='last_name']"));
	    lastname.sendKeys("M");
	}

	@When("^user Enter The Billing Address In Billing Address Field$")
	public void user_Enter_The_Billing_Address_In_Billing_Address_Field() throws Throwable {
		
		 WebElement address = driver.findElement(By.xpath("//textarea[@name='address']"));
		    address.sendKeys("Los Angels");
	}

	@When("^user Enter The Credit Card No In Credit Card No Field$")
	public void user_Enter_The_Credit_Card_No_In_Credit_Card_No_Field() throws Throwable {
		
		 WebElement cardno = driver.findElement(By.xpath("//input[@name='cc_num']"));
		    cardno.sendKeys("2325890377772532");
	}

	@When("^user Select The Credit Card Type In Credit Card Field$")
	public void user_Select_The_Credit_Card_Type_In_Credit_Card_Field() throws Throwable {
		
		 WebElement card = driver.findElement(By.xpath("//select[@name='cc_type']"));
		    Select g=new Select(card);
		    g.selectByIndex(2);
	}

	@When("^user Select The Expiry Date In Select Month & Select Date Field$")
	public void user_Select_The_Expiry_Date_In_Select_Month_Select_Date_Field() throws Throwable {
		
		WebElement month = driver.findElement(By.xpath("//select[@name='cc_exp_month']"));
		Select h=new Select(month);
	    h.selectByIndex(2);
	    WebElement year = driver.findElement(By.xpath("//select[@name='cc_exp_year']"));
	    Select i=new Select(year);
	    i.selectByIndex(14);
	}

	@When("^user Enter the CVV Number In CVV Number Field$")
	public void user_Enter_the_CVV_Number_In_CVV_Number_Field() throws Throwable {
		
		WebElement cv = driver.findElement(By.xpath("//input[@name='cc_cvv']"));
	    cv.sendKeys("232");
	}

	@Then("^user Click The Book Now Button And It Navigates To Confirmation Hotel Page$")
	public void user_Click_The_Book_Now_Button_And_It_Navigates_To_Confirmation_Hotel_Page() throws Throwable {
		
		WebElement book = driver.findElement(By.xpath("//input[@type='button']"));
	    book.click();
	}

	@When("^user See The Booking Confirmation And The Order NO$")
	public void user_See_The_Booking_Confirmation_And_The_Order_NO() throws Throwable {
		

	}

	@Then("^user Click The Logout Button And It Navigate To Logout Page And User See You Have Been Successfully Logged Out$")
	public void user_Click_The_Logout_Button_And_It_Navigate_To_Logout_Page_And_User_See_You_Have_Been_Successfully_Logged_Out() throws Throwable {
		
		WebElement logg = driver.findElement(By.xpath("//input[@name='logout']"));
	    logg.click();
}
}
