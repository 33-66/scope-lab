// Write your solution in this file!
var customerName = "bob"
function upperCaseCustomerName() {
    if (typeof window.customerName === 'string') {
        window.customerName = window.customerName.toUpperCase();
    } else {
        ('customerName is not a valid string.');
    }
}
function setBestCustomer(){
    window.bestCustomer ='not bob';
}
function overwriteBestCustomer(){
    window.bestCustomer = 'maybe bob'
}
function changeLeastFavoriteCustomer() {
    const leastFavoriteCustomer = 'mata';
    leastFavoriteCustomer = 'bob'; 
}
