import React, { useState } from "react";

const Admin = () => {
   // our initial states
 const [enteredTitle, setEnteredTitle] = useState("");
 const [enteredPrice, setEnteredPrice] = useState("");
 const [enteredDate, setEnteredDate] = useState("");

 // this function for get our title value from the user.
 function titleChangeHandler(event) {
   setEnteredTitle(event.target.value);
 }
 // this function for get our price  value from the user.
 // price that we will get is string we have to convert it to number simply add + in front of the event.target.value like this +event.target.value
 function priceChangeHandler(event) {
   setEnteredPrice(+event.target.value);
 }
 // this function for get our date value from the user.
 // don't forget we we will get it as string .
 function dateChangeHandler(event) {
   setEnteredDate(event.target.value);
 }
 // here we will gather our data title, price, and date
 let expensesData = {
   title: enteredTitle,
   price: enteredPrice,
   date: new Date(enteredDate), // we have to convert our date form string to date
 };
 // this function will clear our fields
 // we will call it inside submitFormHandler
 // after submit form we we will call submitFormHandler function and we will pass event as parameter to clearFields
 function clearFields(event) {
   // we have to convert event.target to array
   // we use from method to convert event.target to array
   // after that we will use forEach function to go through every input to clear it
   Array.from(event.target).forEach((e) => (e.value = ""));
 }
 // this function to submit form
 function submitFormHandler(event) {
   // we don't want our page to refresh
   event.preventDefault();
    // print expenses data
    console.log(expensesData)
   // clear the fields
   clearFields(event);
   //update our states
   // why we should update our states to empty string 
   // if we have not done it we clears the fields but we still have the data in our states
   // if the  user submit the form without any data but our states still has the previous data
   //update title
   setEnteredTitle("");
   //update title
   setEnteredPrice("");
   //update title
   setEnteredDate("");
 }
  return (
    <>
      <div className="min-h-screen bg-gray-100 text-gray-900">
        <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <div className="">
            <div className="navbar bg-base-100 drop-shadow-md rounded-lg ">
              <div className="navbar-start">
                <a
                  href="/"
                  aria-current="page"
                  aria-label="Homepage"
                  className="flex-0 btn btn-ghost px-2"
                >
                  <div className="font-title text-primary inline-flex text-3xl transition-all duration-200">
                    <span className="capitalize">mate</span>
                    <span className="text-black capitalize">Ly</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          {/* Admin form  */}
          <div className="my-6">
            <form onSubmit={submitFormHandler} className="bg-base-100 drop-shadow-md rounded-lg p-5 ">
              {/* heading */}
              <div>
                <div className="text-lg md:text-xl font-bold">
                  Student Registration
                </div>
                {/* inputs  */}
                <div className="my-3 flex flex-col justify-start flex-wrap md:flex-row">
                  <div className="flex flex-col m-3">
                    <label className="text-md md:text-sm" for="name">
                      Student Name*
                    </label>
                    <input
                    onChange={titleChangeHandler}
                      type="text"
                      name="name"
                      id="name"
                      cols="30"
                      rows="3"
                      required
                      className="peer rounded-md input-sm border-gray-400 focus:ring focus:ring-indigo-200 focus:border-indigo-300 my-2 w-full max-w-xs "
                      // placeholder="Admin Id"
                    ></input>
                  </div>
                  <div className="flex flex-col m-3">
                    <label className="text-md md:text-sm" for="role">
                      Role in Company*
                    </label>
                    <input
                    onChange={titleChangeHandler}
                      type="text"
                      name="role"
                      id="role"
                      cols="30"
                      rows="3"
                      required
                      className="peer rounded-md input-sm border-gray-400 focus:ring focus:ring-indigo-200 focus:border-indigo-300 my-2 w-full max-w-xs "
                      // placeholder="Admin Id"
                    ></input>
                  </div>

                  <div className="flex flex-col m-3">
                    <label className="text-md md:text-sm" for="company">
                      Company's Name*
                    </label>
                    <input
                    onChange={titleChangeHandler}
                      type="text"
                      name="company"
                      id="company"
                      cols="30"
                      rows="3"
                      required
                      className="peer rounded-md input-sm border-gray-400 focus:ring focus:ring-indigo-200 focus:border-indigo-300 my-2 w-full max-w-xs "
                      // placeholder="Admin Id"
                    ></input>
                  </div>
                  <div className="flex flex-col m-3">
                    <label className="text-md md:text-sm" for="department">
                      Department*
                    </label>
                    <input
                    onChange={titleChangeHandler}
                      type="text"
                      name="department"
                      id="department"
                      cols="30"
                      rows="3"
                      required
                      className="peer rounded-md input-sm border-gray-400 focus:ring focus:ring-indigo-200 focus:border-indigo-300 my-2 w-full max-w-xs "
                      // placeholder="Admin Id"
                    ></input>
                  </div>
                  <div className="flex flex-col m-3">
                    <label className="text-md md:text-sm" for="batch">
                      Year Batch*
                    </label>
                    <input
                    onChange={priceChangeHandler}
                      type="number"
                      name="batch"
                      id="batch"
                      cols="30"
                      rows="3"
                      required
                      className="peer rounded-md input-sm border-gray-400 focus:ring focus:ring-indigo-200 focus:border-indigo-300 my-2 w-full max-w-xs "
                      // placeholder="Admin Id"
                    ></input>
                  </div>
                  <div className="flex flex-col m-3">
                    <label className="text-md md:text-sm" for="branch">
                      Branch*
                    </label>
                    <input
                    onChange={titleChangeHandler}
                      type="text"
                      name="branch"
                      id="branch"
                      cols="30"
                      rows="3"
                      required
                      className="peer rounded-md input-sm border-gray-400 focus:ring focus:ring-indigo-200 focus:border-indigo-300 my-2 w-full max-w-xs "
                      // placeholder="Admin Id"
                    ></input>
                  </div>
                  <div className="flex flex-col m-3">
                    <label className="text-md md:text-sm" for="package">
                      Annual Package*
                    </label>
                    <input
                    onChange={priceChangeHandler}
                      type="number"
                      name="package"
                      id="package"
                      cols="30"
                      rows="3"
                      required
                      className="peer rounded-md input-sm border-gray-400 focus:ring focus:ring-indigo-200 focus:border-indigo-300 my-2 w-full max-w-xs "
                      // placeholder="Admin Id"
                    ></input>
                  </div>
                  <div className="flex flex-col m-3">
                    <label className="text-md md:text-sm" for="imgUrl">
                      Profile Image Url*
                    </label>
                    <input
                    onChange={titleChangeHandler}
                      type="url"
                      name="imgUrl"
                      id="imgUrl"
                      cols="30"
                      rows="3"
                      required
                      className="peer rounded-md input-sm border-gray-400 focus:ring focus:ring-indigo-200 focus:border-indigo-300 my-2 w-full max-w-xs "
                      // placeholder="Admin Id"
                    ></input>
                  </div>
                  <div className="flex flex-col m-3">
                    <label className="text-md md:text-sm" for="socials">
                      Social Media*
                    </label>
                    <input
                    onChange={titleChangeHandler}
                      type="text"
                      name="socials"
                      id="socials"
                      cols="30"
                      rows="3"
                      required
                      className="peer rounded-md input-sm border-gray-400 focus:ring focus:ring-indigo-200 focus:border-indigo-300 my-2 w-full max-w-xs "
                      // placeholder="Admin Id"
                    ></input>
                  </div>
                
                  <div className="flex flex-col m-3">
                    <label className="text-md md:text-sm" for="socialUrl">
                      Social Url*
                    </label>
                    <input
                    onChange={titleChangeHandler}
                      type="url"
                      name="socialUrl"
                      id="socialUrl"
                      cols="30"
                      rows="3"
                      required
                      className="peer rounded-md input-sm border-gray-400 focus:ring focus:ring-indigo-200 focus:border-indigo-300 my-2 w-full max-w-xs "
                      // placeholder="Admin Id"
                    ></input>
                  </div>
                </div>
              </div>
              {/* submit button */}
              <div>
                <div className="flex flex-row justify-end md:mx-8">
                  <button type="submit" className="btn  m-1 text-xs">Cancel</button>
                  <button type="submit" className="btn  text-xs btn-primary m-1">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </main>
      </div>
    </>
  );
};

export default Admin;
