var today = new Date();
var mm = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
row = ["first", "second", "third", "fourth", "fifth", "sixth"];
var d = today.getDate();
var m = today.getMonth();
var y = today.getFullYear();
let firstDay = new Date(mm[m]+" 1, "+y);
firstD=firstDay.getDay();
function main()
{
    date_time(d,m,y,firstD);
}
var getDaysInMonth = function(month,year) {
    // Here January is 1 based
    //Day 0 is the last day in the previous month
   return new Date(year, month, 0).getDate();
  // Here January is 0 based
  // return new Date(year, month+1, 0).getDate();
  }
function date_time(d,m,y,firstDay)
{
    console.log(firstDay);
    console.log(d + '-' + m + '-' + y);
    month=mm[m];
    console.log(month);
    document.getElementById("year").innerHTML=y;
    document.getElementById("month").innerHTML=month;
    lastdate = getDaysInMonth(m+1,y);
    var tmpDate = new Date(year, month, 0);
    var num = daysInMonth(month, year);
    datee=0
    for(j=0; j<firstD; j++)
    {
        // datee += 1;
        r = document.createElement("td");
        r.innerHTML="";
        document.getElementById(row[0]).appendChild(r);
    }
    for(j=firstD; j<=6; j++)
    {
        datee += 1;
       var r = document.createElement("td");
        r.innerHTML=datee;
        document.getElementById(row[0]).appendChild(r);
        if(d == datee)
        {
            r.style.cssText = 'background-color:#3333ff; color:#fff';
        }
    }
    for(i=1; i<=5; i++)
    {
        // dd = document.getElementById(row[i]);
        for(k=1;k<=7; k++)
        {
            if(datee != lastdate)
            {
                datee += 1;
                r = document.createElement("td");
                r.innerHTML=datee;
                document.getElementById(row[i]).appendChild(r);
                if(d == datee)
                {
                    r.style.cssText = 'background-color:#3333ff; color:#fff';
                }
            }
            else
            {
                r = document.createElement("td");
                r.innerHTML="";
                document.getElementById(row[i]).appendChild(r);
            }
        }
    }
}
function daysInMonth(month, year)
{
    let d = new Date(year, month+1, 0);
    return d.getDate();
}
function erase()
{
    // var myobj = document.getElementsByTagName("td");
    // myobj.remove();
    // for(i=0; i<=5; i++)
    // {
    //     var r= document.getElementById(row[i]);
    //     for(j=0;j<7;j++)
    //     {
    //         // console.log(r.childNodes.length);
    //         r.removeChild(r.childNodes[j]);
    //     }
    // }
    $('td').remove()
}
function backwrd()
{
    erase();
    if(m>0)
    {
        m=m-1;
    }
    else
    {
        m=11;
        y=y-1;
    }
    let firstDay = new Date(mm[m]+" 1, "+y);
    firstD=firstDay.getDay();
    date_time(d,m,y,firstD);
}
function forwrd()
{
    erase();
    if(m<11)
    {
        m=m+1;
    }
    else{
        m=0;
        y=y+1;
    }
    let firstDay = new Date(mm[m]+" 1, "+y);
    firstD=firstDay.getDay();
    date_time(d,m,y,firstDay);
}