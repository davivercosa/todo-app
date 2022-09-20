// # 1 - Add jQuery to the index.html page. You can find a jQuery link at https://code.jquery.com/,
//       or use the CDN link that was used in the video. Use the minified, 3.x version.
//       Add it right before the other script tag up in the head.
//       Once it's been added, you can move to the next step.

// # 2 - Since we are running our JavaScript at the top, we will want to
//       make sure everything is loaded before we run our JavaScript.
//       Use jQuery's .ready() method. (page 312). This can go at the bottom of this page.
//
//       All the code that we write for this assignment will need to go within this block.

// # 3 - Using jQuery, update the title to something better.
//       The title has an id of 'mainTitle'

// #4 - There is an error message on the page above the textbox. We want this to be hidden
//      when the page is loaded. Make sure to only hide it and not remove it.
//      This error has an id of 'errorMessage'

// #5 - There are several placeholder items that should be there. Using jQuery, remove them.
//      These items have a class of 'placeholder'. Hint, you don't need to use any sort of loop
//      to remove these items.

// #6 - When the 'Add Item' button is clicked, add a new item to the list.
//      If the textbox is empty when the button is clicked, don't add anything
//       * The button that you'll need to tie the event to has an id of 'btnAddItem'
//       * The textbox that you want to pull the value from has an id of 'txtItem'
//       * The list that you are adding this new item to has an id of 'groceryList'
//       * The error message to show if there is no text has an id of 'errorMessage'

// #7 - Make it so that when you double click on any li, the item gets removed, by using
//      the slideUp method. This animation should run for a quarter of a second.
//      Hint: The jQuery event you'll be using is 'dblclick', not 'click'. Page 326

// #8 - Make sure that when you add items, they are able to be removed by
//       double clicking on them as well.

// #9 - Whenever you 'focus' on the Item Name textbox, make sure to hide the error message
//      if it is showing. It is ok to run .hide() on an element that is already hidden.
//      The 'focus' event is whenever a textbox becomes active.
//       * The textbox you are adding this event to has the id of 'txtItem'
//       * The error message to hide has an id of 'errorMessage'

// #10 - The 'Add Item' button is actualy an a tag made to look like a button. When it's clicked,
//       the page scrolls to the top. (You might need to shrink your browser window). We don't
//       want it to behave this way. We want to make sure the click event that we created in 6
//       has the event object passed to it and the .preventDefault() method is run. Page 328

// code goes below this line =========================================
$(function () {
  // focusing on the input when the app is opened (there is also an html tag for this purpose)
  $('#txtItem').focus();

  // step 3 changing the mainTitle id text
  $('#mainTitle').text('To do App!');

  // step 4 -> hiding the errorMessage id text
  $('#errorMessage').hide();

  // step 5 -> removing the placeholder class
  $('.placeholder').remove();

  // step 6 -> appending a new todo to the list
  $('#btnAddItem').on('click', (e) => {
    // step 10 -> prevent the default beahior to happen
    e.preventDefault();

    // adding the event listener to the button
    if (!$('#txtItem').val()) {
      $('#errorMessage').show(); // making the error message appear, in case there is no val in the txtItem id
    } else {
      const newItemText = $('#txtItem').val(); // creating a variable to hold the value of the new li we ll crate
      $('#groceryList').append(`<li> ${newItemText} </li>`); // appending the new li to the grocery list
      $('#txtItem').val(''); // cleaning the txtItem input
    }
  });

  // step 9
  $('#txtItem').on('click', function () {
    $('#errorMessage').hide(); // making the error desappear when txtItem input is clicked
  });

  // step 7 -> removing li on dblclick
  $('#groceryList').on('dblclick', 'li', function () {
    // step 8 -> making sure the dblclick event is applied to new li
    // obs: DONT USE ARROW FUNCTION HERE! BECAUSE OF SCOPE, WE WILL LOSE THE ABILITY TO USE THE "this"
    $(this).slideUp();
  });
});
