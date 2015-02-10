'use strict'

function hello() {
  return 'world';
}

//Selector variables 
  var $newContactContainer = $('.newContactContainer');
  var $newContactButton = $('.newContactButton');
  var $addContactButton = $('.addContactButton');
  var $tbody = $('#tbody');
  var $hiddenContainer = $('.hiddenContainer');

//Document On Load - Return Existing Addresses
  $.get('https://address-booking.firebaseio.com/addressbook.json', function(res){
    if(res !== null) {
      Object.keys(res).forEach(function(uuid){
        getCurrentAddressBook(uuid, res[uuid]);
      });
    } else{}
  });

// On New Contact Click, Create A Table Row
  //

  $newContactButton.click(function(evt){
    evt.preventDefault();
    $hiddenContainer.css('display', 'inline-block');
  });
  $addContactButton.click(function(evt){
    evt.preventDefault();
    addRowToTable();
    $hiddenContainer.css('display', 'none');
    this.form.reset();
  });

  function addRowToTable(){
    var $tr = $('<tr class="tableRow"></tr>');
    var $nameInput = $('#nameInput').val();
      var $nameTd = $('<td>'+$nameInput+'</td>');
    var $phoneNumberInput = $('#phoneNumberInput').val();
      var $phoneNumberTd = $('<td>'+$phoneNumberInput+'</td>');
    var $emailInput = $('#emailInput').val();
      var $emailTd = $('<td>'+$emailInput+'</td>');
    var $twitterInput = $('#twitterInput').val();
      var $twitterTd = $('<td>'+$twitterInput+'</td>');
    var $instagramInput = $('#instagramInput').val();
      var $instagramTd = $('<td>'+$instagramInput+'</td>');
    var $photoInput = $('#photoInput').val();
      var $photoTd = $('<td><img src='+$photoInput+'></img></td>');
    var $remove = $('<td><button class="removeButton">Remove</button></td>');

    var  url = 'https://address-booking.firebaseio.com/addressbook.json';
    var object = {photo: $photoInput, name: $nameInput,  phonenumber: $phoneNumberInput, email: $emailInput, twitter: $twitterInput, instagram: $instagramInput}

    $.post(url, JSON.stringify(object), function(res){
      $tr.attr('data-uuid', res.name);
    });

    $tr.append($photoTd);$tr.append($nameTd);$tr.append($phoneNumberTd);$tr.append($emailTd);
    $tr.append($twitterTd);$tr.append($instagramTd);$tr.append($remove);
    $tbody.append($tr);
  }

// On Remove Button Click, Remove ROw from Table and Database 
  $tbody.on("click", "button", function(){
    var $tr = $(this).closest('tr');
    var uuid = $tr.data('uuid');
    console.log(uuid);
    var url = 'https://address-booking.firebaseio.com/addressbook/'+uuid+'.json';
    $.ajax({url: url, type:'DELETE'});
    $tr.remove();
  });


// Get Current Address Book

function getCurrentAddressBook(uuid, data){
    var $tr = $('<tr class="tableRow"></tr>');
      var $nameTd = $('<td>'+data.name+'</td>');
      var $phoneNumberTd = $('<td>'+data.phonenumber+'</td>');
      var $emailTd = $('<td>'+data.email+'</td>');
      var $twitterTd = $('<td>'+data.twitter+'</td>');
      var $instagramTd = $('<td>'+data.instagram+'</td>');
      var $photoTd = $('<td><img src='+data.photo+'></img></td>');
    var $remove = $('<td><button class="removeButton">Remove</button></td>');
    
    $tr.append($photoTd);$tr.append($nameTd);$tr.append($phoneNumberTd);$tr.append($emailTd);
    $tr.append($twitterTd);$tr.append($instagramTd);$tr.append($remove);
    $tr.attr('data-uuid', uuid);
    $tbody.append($tr);

}
