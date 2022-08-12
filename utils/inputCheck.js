// utility to check if an object has the required properties

module.exports = function(obj, ...props) {
    const errors = [];

    props.forEach((prop) => {
        if (obj[prop]=== undefined || obj[prop] === "") {
            errors.push(`No ${prop} specified.`);
        }
    });

    if (errors.length) {
        return {
            error: errors.join(' ')
        };
    }
    return null;
};