document.getElementById('btn-login').addEventListener('click', function(){
     const dopositFiled = document.getElementById('doposit-filed');
     const newDopositString = dopositFiled.value ;
     const newDoposit = parseFloat(newDopositString);
     
     dopositFiled.value = '';
     
     

     const dopositMoneyElement = document.getElementById('doposit-money');
     const previousDopositTotalString = dopositMoneyElement.innerText;
     const previousDopositTotal = parseFloat(previousDopositTotalString);


     const totalDoposit = previousDopositTotal + newDoposit; 

     dopositMoneyElement.innerText = totalDoposit ;
     // console.log(totalMoney)
    

     const balanceTotalElement = document.getElementById('balance-total');
     const balanceTotalElementString = balanceTotalElement.innerText;
     const Doposit = parseFloat(balanceTotalElementString);
     
     const total = Doposit + newDoposit;
     balanceTotalElement.innerText = total;
    


     // console.log(typeof previousBalnceTotal)
     
     
});