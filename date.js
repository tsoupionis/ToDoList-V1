exports.getDate = function () {
    const today = new Date(); 
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    return today.toLocaleDateString("en-US",options);
};

exports.getDay = function getDay() {
    const today = new Date(); 
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
    const options = {
        weekday: "long",
    };

    return today.toLocaleDateString("en-US",options);
};


