document.getElementById('blog-btn').addEventListener('click', function() {
    window.location.href = 'blog.html';
});



const noakhaliDonateBtn = document.getElementById('noakhali-donate-btn');
const noakhaliAccount = document.getElementById('noakhali-account');


function getInnerTextValue(id) {
    return parseFloat(document.getElementById(id).innerText);
}

function getInputValue(id) {
    return parseFloat(document.getElementById(id).value);
}

let newBalance = parseFloat(noakhaliAccount.innerText);

noakhaliDonateBtn.addEventListener('click', function() {
    const myBalance = getInnerTextValue('my-balance');
    const noakhaliDonateAmount = getInputValue('noakhali-donate');

    if (isNaN(noakhaliDonateAmount) || noakhaliDonateAmount <= 0) {
        alert("Invalid Donation Amount");
        document.getElementById('noakhali-donate').value = "";
        return;
    }

    if (noakhaliDonateAmount > myBalance) {
        alert("You don't have enough balance for this donation.");
        return;
    }


    newBalance += noakhaliDonateAmount;
    noakhaliAccount.innerText = newBalance.toFixed(2);

    document.getElementById('my-balance').innerText = (myBalance - noakhaliDonateAmount).toFixed(2);


    const noakhaliHeadline = document.getElementById('noakhali-headline').innerText;
    const dt = new Date();

    const div = document.createElement('div');
    div.classList.add('drop-shadow-lg', 'border-2', 'p-8', 'rounded-xl', 'mb-4');
    div.innerHTML = `
        <h3 class="text-xl font-bold mb-2">${noakhaliDonateAmount.toFixed(2)} Taka is donated for ${noakhaliHeadline}</h3>
        <p class="text-gray-500"> Date: ${dt.toLocaleString()} </p>
    `;

    document.getElementById('history-section').appendChild(div);
    document.getElementById('my_modal_1').showModal();
    document.getElementById('quota-donate').value = ""; // Reset input
});





const feniDonateBtn = document.getElementById('feni-donate-btn');
const feniAccount = document.getElementById('feni-account'); 


let newBalance2 = parseFloat(feniAccount.innerText);

feniDonateBtn.addEventListener('click', function() {
    const myBalance = getInnerTextValue('my-balance');
    const feniDonateAmount = getInputValue('feni-donate');


    if (isNaN(feniDonateAmount) || feniDonateAmount <= 0) {
        alert("Invalid Donation Amount");
        document.getElementById('feni-donate').value = "";
        return;
    }


    if (feniDonateAmount > myBalance) {
        alert("You don't have enough balance for this donation.");
        return;
    }

 
    newBalance2 += feniDonateAmount;
    feniAccount.innerText = newBalance2.toFixed(2); 

    document.getElementById('my-balance').innerText = (myBalance - feniDonateAmount).toFixed(2);


    const feniHeadline = document.getElementById('feni-headline').innerText;
    const dt = new Date();

    const div = document.createElement('div');
    div.classList.add('drop-shadow-lg', 'border-2', 'p-8', 'rounded-xl', 'mb-4');
    div.innerHTML = `
        <h3 class="text-xl font-bold mb-2">${feniDonateAmount.toFixed(2)} Taka is donated for ${feniHeadline}</h3>
        <p class="text-gray-500"> Date: ${dt.toLocaleString()} </p>
    `;

    document.getElementById('history-section').appendChild(div);
    document.getElementById('my_modal_1').showModal();
    document.getElementById('quota-donate').value = ""; // Reset input
});



// // Handle Quota Donation
// const quotaDonateBtn = document.getElementById('quota-donate-btn');
// const quotaAccount = document.getElementById('quota-account'); 

// let newBalance3 = parseFloat(quotaAccount.innerText);

// quotaDonateBtn.addEventListener('click', function() {
//     const myBalance = getInnerTextValue('my-balance');
//     const quotaDonateAmount = getInputValue('quota-donate');

//     // Validation for donation amount
//     if (isNaN(quotaDonateAmount) || quotaDonateAmount <= 0) {
//         alert("Invalid Donation Amount");
//         document.getElementById('quota-donate').value = "";
//         return;
//     }

//     // Check if user has enough balance
//     if (quotaDonateAmount > myBalance) {
//         alert("You don't have enough balance for this donation.");
//         return;
//     }

//     // Update balances
//     newBalance3 += quotaDonateAmount;
//     quotaAccount.innerText = newBalance3.toFixed(2); 
//     document.getElementById('my-balance').innerText = (myBalance - quotaDonateAmount).toFixed(2);

//     // Append donation history
//     const quotaHeadline = document.getElementById('quota-headline').innerText;
//     const dt = new Date();

//     const div = document.createElement('div');
//     div.classList.add('drop-shadow-lg', 'border-2', 'p-8', 'rounded-xl', 'mb-4');
//     div.innerHTML = `
//         <h3 class="text-xl font-bold mb-2">${quotaDonateAmount.toFixed(2)} Taka is donated for ${quotaHeadline}</h3>
//         <p class="text-gray-500"> Date: ${dt.toLocaleString()} </p>
//     `;

//     document.getElementById('history-section').appendChild(div);
//     document.getElementById('my_modal_1').showModal();
//     document.getElementById('quota-donate').value = ""; // Reset input
// });

// // Handle Button Switching Between Donation and History Sections
// const donationButton = document.getElementById('donation-button');
// const historyButton = document.getElementById('history-button');

// historyButton.addEventListener('click', function() {
//     historyButton.classList.add('bg-button-bg');
//     donationButton.classList.remove('bg-button-bg');
//     document.getElementById('history-section').classList.remove('hidden');
//     document.getElementById('donation-section').classList.add('hidden');
// });

// donationButton.addEventListener('click', function() {
//     donationButton.classList.add('bg-button-bg');
//     historyButton.classList.remove('bg-button-bg');
//     document.getElementById('history-section').classList.add('hidden');
//     document.getElementById('donation-section').classList.remove('hidden');
// });



// Ensure this function works as expected to get input values from donation inputs
// function getInputValue(id) {
//     return parseFloat(document.getElementById(id).value);
// }

// // Function to get the inner text (used to get account balances)
// function getInnerTextValue(id) {
//     return parseFloat(document.getElementById(id).innerText);
// }




const donationButton = document.getElementById('donation-button');
const historyButton = document.getElementById('history-button');

historyButton.addEventListener('click', function() {
    historyButton.classList.add('bg-button-bg');
    donationButton.classList.remove('bg-button-bg');
    document.getElementById('history-section').classList.remove('hidden');
    document.getElementById('donation-section').classList.add('hidden');
});

donationButton.addEventListener('click', function() {
    donationButton.classList.add('bg-button-bg');
    historyButton.classList.remove('bg-button-bg');
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById('donation-section').classList.remove('hidden');
});


const quotaDonateBtn = document.getElementById('quota-donate-btn');
const quotaAccount = document.getElementById('quota-account'); 

let newBalance3 = parseFloat(quotaAccount.innerText);

quotaDonateBtn.addEventListener('click', function() {
    const myBalance = getInnerTextValue('my-balance');
    const quotaDonateAmount = getInputValue('quota-donate');


    if (isNaN(quotaDonateAmount) || quotaDonateAmount <= 0) {
        alert("Invalid Donation Amount");
        document.getElementById('quota-donate').value = "";
        return;
    }


    if (quotaDonateAmount > myBalance) {
        alert("You don't have enough balance for this donation.");
        return;
    }


    newBalance3 += quotaDonateAmount;
    quotaAccount.innerText = newBalance3.toFixed(2); 
    document.getElementById('my-balance').innerText = (myBalance - quotaDonateAmount).toFixed(2);


    const quotaHeadline = document.getElementById('quota-headline').innerText;
    const dt = new Date();

    const div = document.createElement('div');
    div.classList.add('drop-shadow-lg', 'border-2', 'p-8', 'rounded-xl', 'mb-4');
    div.innerHTML = `
        <h3 class="text-xl font-bold mb-2">${quotaDonateAmount.toFixed(2)} Taka is donated for ${quotaHeadline}</h3>
        <p class="text-gray-500"> Date: ${dt.toLocaleString()} </p>
    `;

    document.getElementById('history-section').appendChild(div);
    document.getElementById('my_modal_1').showModal();
    document.getElementById('quota-donate').value = ""; // Reset input
});
