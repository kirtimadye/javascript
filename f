var checkLeapYear=function(leapYear)
{
    var leapYear;
    if(leapYear%4==0)
    {
        console.log(`"${leapYear}":is a Leap year.`);
    }
    else{
        if(leapYear%4!==0)
        {
        console.log(`"${leapYear}":is a not leap year.`);
    }
    else{

        if(leapYear==null||leapYear==NaN||leapYear=="Twenty Twenty"||leapYear=="undefined")
        {
            console.log(`"${leapYear}":is not valid input.`);
        }
    }
}
}   

checkLeapYear(2020);
checkLeapYear(1999);
checkLeapYear(1600);
checkLeapYear(2022);
checkLeapYear(1945);
checkLeapYear(null);
checkLeapYear("Twenty Twenty");
checkLeapYear(undefined);
checkLeapYear(NaN);
checkLeapYear(1750);






























































