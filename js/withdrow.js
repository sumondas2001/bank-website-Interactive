// step => 1
document.getElementById('btn-withdrow').addEventListener('click', function () {
     // step => 2
     const inputWithdrow = document.getElementById('input-withdeow');
     const NewWindawString = inputWithdrow.value;
     const NewWithdrow = parseFloat(NewWindawString);
     inputWithdrow.value = '';
     console.log(NewWithdrow);

     if(isNaN(NewWithdrow)){
          alert('Plz Enter Your Number');
          return;
     }

     // step =>3
     const withdrawMoney = document.getElementById('withdrow-money');
     const previousWindawTotalString = withdrawMoney.innerText;
     const previousWindawTotal = parseFloat(previousWindawTotalString);




     // step =>5
     const balanceTotalElement = document.getElementById('balance-total');
     const balanceTotalElementString = balanceTotalElement.innerText;
     const withdeow = parseFloat(balanceTotalElementString);

     if (NewWithdrow > withdeow) {
          alert('Bank not a money');
          return;
     }


     // step => 4
     const total = previousWindawTotal + NewWithdrow;
     withdrawMoney.innerText = total;

     // step => 6
     const totalWithdrow = withdeow - NewWithdrow;
     balanceTotalElement.innerText = totalWithdrow;


     // console.log(typeof previousWindowTotal)
})