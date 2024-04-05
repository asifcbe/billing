let totalbill=0;



function hello(typ){
    
    let item=document.getElementById('item').value
    let quantity=document.getElementById('quantity').value
    let rate=document.getElementById('rate').value
    let amount=Number(quantity)*Number(rate)
    let table=document.getElementById('myTable')
    let invNum=document.getElementById('invoiceNum')
    let invDate=document.getElementById('invoiceDa')
    let invNumVal=document.getElementById('invoiceNumber').value;
    let invDateVal=document.getElementById('invoiceDate').value;
    let count=document.getElementsByTagName('tr').length;
    
table.innerHTML+=`<tr>

<td>${count}</td>
<td>${item}</td>
<td>${quantity}</td>
<td>₹ ${rate}</td>
<td>₹ ${amount}</td>
</tr>`

totalbill+=Number(amount)

invNum.innerText='Invoice No #'+invNumVal
invDate.innerText='Invoice Date '+invDateVal


    


}

function inv(e){
    let el=document.getElementById(typ).value;
        let invNo=document.getElementById('invoiceNum');
        invNo.innerHTML='Invoice No #'+ el;
console.log(e.value)
}

function numberToWordsINR(number) {
    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    function convertLessThanOneThousand(n) {
        let word = '';
        if (n >= 100) {
            word += ones[Math.floor(n / 100)] + ' hundred ';
            n %= 100;
        }
        if (n >= 11 && n <= 19) {
            word += teens[n - 10] + ' ';
            return word.trim();
        }
        if (n >= 10) {
            word += tens[Math.floor(n / 10)] + ' ';
            n %= 10;
        }
        if (n > 0) {
            word += ones[n] + ' ';
        }
        return word.trim();
    }

    if (number === 0) {
        return 'zero';
    }

    let words = '';
    if (number < 0) {
        words += 'negative ';
        number = Math.abs(number);
    }

    const crores = Math.floor(number / 10000000);
    const lakhs = Math.floor((number % 10000000) / 100000);
    const thousands = Math.floor((number % 100000) / 1000);
    const remainder = number % 1000;

    if (crores > 0) {
        words += convertLessThanOneThousand(crores) + ' crore ';
    }
    if (lakhs > 0) {
        words += convertLessThanOneThousand(lakhs) + ' lakh ';
    }
    if (thousands > 0) {
        words += convertLessThanOneThousand(thousands) + ' thousand ';
    }
    if (remainder > 0) {
        words += convertLessThanOneThousand(remainder);
    }
words+=' Rupees Only'
    return words.trim().toUpperCase();
}



function printbtn(){
    let total=document.getElementById('total');
    total.innerText+=numberToWordsINR(totalbill)
    let totalinr=document.getElementById('totalinr');
    totalinr.innerText+='₹ '+totalbill;
    window.print()
}
