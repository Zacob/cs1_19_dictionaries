// Write a function as specified in each of the paragraphs below.

// Write a function callled `showPerson`.  It takes a dictionary with
// attributes 'name' and 'email'.  It gives back a string. For example,
// showPerson({'name': 'Daniel Bergey', 'email': 'dbergey@friendscentral.org'})
// returns "Daniel Bergey <dbergey@friendscentral.org>"
var showPerson = function (person) {
    
    return person.name + ' <' + person.email + '>' ;
};
// Write `showDate`.
// Input: {year: 1970, month: 01, day:01, hour: 0, minute: 0, second: 0}
// Output: "1970-01-31T12:59:59" Note the T between date and time
var showDate = function (date) {
    if (date.month < 10) {
        date.month = "0" + date.month;
    }
      if (date.day < 10) {
        date.day = "0" + date.day;
    }
      if (date.hour < 10) {
        date.hour = "0" + date.hour;
    }
      if (date.minute < 10) {
        date.minute = "0" + date.minute;
    }
      if (date.second < 10) {
        date.second = "0" + date.second;
    }
   return date.year + '-' + date.month + '-' + date.day + 'T' + date.hour + ':' + date.minute + ':' + date.second;
};
// compareInts
// Input: 2 integer numbers
// Output: one of "LT", "EQ", or "GT" (less than, equal, or greater than)

var compareInts = function (I, J) {
   
   if (I>J) {
       return "GT";
   } 
   if (I<J){
       return "LT";
   }
   if (I==J){
       return "EQ";
   }
   
       
};

// compareDates
// Input: Two dates, in the format:
// {year: 1969, month: 7, day: 24, hour: 16, minute: 50, second: 35}
// Output: one of "LT", "EQ", or "GT"

var compareDates = function (a,b){
    
    if (a.year > b.year){
        return "GT";
    }
    if (a.year < b.year){
        return "LT";
    } 
    if (a.year == b.year){
        if (a.month >b.month){
            return "GT";
        }
        if (a.month <b.month){
            return "LT";
        }
        if (a.month == b.month){
            if (a.day > b.day){
                return "GT";
            }
            if (a.day < b.day){
                return "LT";
            }
            if (a.day == b.day){
                if (a.hour >b.hour){
                    return "GT";
                }
                if (a.hour <b.hour){
                    return "LT";
                }
                if (a.hour ==b.hour){
                    if (a.minute > b.minute){
                        return "GT";
                    }
                    if (a.minute < b.minute){
                        return "LT";
                    }
                    if (a.minute == b.minute){
                        if (a.second > b.second){
                            return "GT";
                        }
                         if (a.second < b.second){
                            return "LT";
                        }
                         if (a.second == b.second){
                            return "EQ";
                        }
                    }
                }
            }
        }
    }
};

// elementOf
// Input: a String and a list of Strings
// Output: true or false (lowercase - these are JS keywords)
// return true if the first input is present in the list (second input)

var elementOf = function (a,b) {
    var x=0;
    while (x<b.length){
    if (b[x] == a){
        return true;
    } 
    x=x+1;
    }
    if (b[x] != a){
        return false;
    }
};
// hasTag
// Input: a String and an Email
// Email has the following attributes:
// sender, recipients, subject, date, body, tags
// Output: true or false
// return true if the first input is present in the tags of the email

var hasTag = function (a,b) {
    var i=0;
    while (i<b.tags.length){
    if (b.tags[i] == a){
       return true;
    } 
    i=i+1;
}
return false;
};

// filterByTag
// Input: a String and a list of Emails
// Output: a list of Emails
// return a list with those emails that have the first input in their tags
// return the emails in the same order they appear in the input
// use hasTag

var filterByTag = function (a,b){
    var c = [];
    var x=0;
    while (x<b.length){
    if(hasTag(a,b[x]) == true){
       c.push (b[x]);
    }
        x=x+1;
    }
    return c;
};

// parseYear
// Input: String, in the format "2016"
// Output: Int, 2016
// use `parseInt`:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
var parseYear=function(x){
   var y = parseInt(x, 10);
        return y;
    
};
// parseDate
// Input: String, in the format"2016-01-20T13:41:00"
// Output: A Date dictionary, with the attributes:
// year, month, day, hour, minute, second
// use parseInt and substr:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr

var parseDate=function(x){
  var y = parseInt(x, 10);
  var m = parseInt(x.substr(5,2), 10);
  var d = parseInt (x.substr(8,2), 10);
  var h = parseInt (x.substr(11,2), 10);
  var t = parseInt (x.substr(14,2), 10);
  var s = parseInt (x.substr(17,2), 10);
  return {year:y, month:m, day:d, hour:h, minute:t, second:s};
};
// inSubject
// Input: a String and an Email, in the same format as hasTag
// Output: true or false
// return true if the first input is part of the 'subject' field of the Email
// use .includes
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes

// filterBySubject
// Input: a String and a list of Emails
// Output: a list of Emails
// return a list of the emails that have the first email in their subject
// use inSubject

// inBody
// Input: a String and an Email, in the same format as hasTag
// Output: true or false
// return true if the first input is part of the 'body' field of the Email

// filterByBody
// Input: a String and a list of Emails
// Output: a list of Emails
// return a list of the emails that have the first email in their body
// use inBody
