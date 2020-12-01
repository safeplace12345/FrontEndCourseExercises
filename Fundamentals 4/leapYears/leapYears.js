const leapYears = function(year) {
    return true ? ((year % 400 === 0) || (year % 100 !== 0)) && ((year % 4) == 0) : false;
    ;
}

module.exports = leapYears
