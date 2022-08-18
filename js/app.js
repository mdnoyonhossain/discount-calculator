document.getElementById('apply').addEventListener('click', function () {
    let discount = 30;
    const cuponField = document.getElementById('cupon').value;
    if (cuponField === "cupon") {
        const billAmountField = document.getElementById('bill-amount');
        const billTotalString = billAmountField.value;
        const billTotal = parseFloat(billTotalString);
        const discountTotal = billTotal - (billTotal * discount / 100);

        const discountAmountField = document.getElementById('discount-amount');
        // optional
        // const discountTotalString = discountAmountField.value;
        // const discountPersentTotal = parseFloat(discountTotalString);
        discountAmountField.value = discountTotal;
    }
    else {
        const billAmountField = document.getElementById('bill-amount');
        const billTotalString = billAmountField.value;
        const billTotal = parseFloat(billTotalString);
        const discountTotal = billTotal - (billTotal * 0 / 100);



        const discountAmountField = document.getElementById('discount-amount');
        // optional
        // const discountTotalString = discountAmountField.value;
        // const discountPersentTotal = parseFloat(discountTotalString);
        discountAmountField.value = discountTotal;
    }


});

document.getElementById('reset').addEventListener('click', function () {
    const billAmountField = document.getElementById('bill-amount');
    const discountAmountField = document.getElementById('discount-amount');
    const cuponField = document.getElementById('cupon');

    billAmountField.value = "";
    discountAmountField.value = "";
    cuponField.value = "";
});