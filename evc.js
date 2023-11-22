// user information
const UserPin = 3535;
const userMobile = 615962724;
const EvcDial = "*770#";
const ShowUserMobile = "*999#";
const ShowUser$balance = "*711#";
var $Balance = 2.5;


// options
const haa = 1;
const maya = 2



function main(){
        
        dialNumber()
}

function dialNumber(){
    let dial = prompt("📞")
    if (dial == EvcDial){
        checkPin()
    }
    else if (dial == ShowUserMobile){
        alert(`MSISDN: 252${userMobile}`);
    }
    else if (dial == ShowUser$balance){
        let pin = prompt(`-EVCPLUS-\nfadlan geli pin-kaaga(Enter PIN)`);
        if (pin == UserPin){
            alert(`<-EVCPlus-> Haraagaagu waa $${$Balance}`)
        } else{
            alert(`PIN kaagu waa qalad`)
        }
    }
    else{
        alert(`Connection problem or invalid MMI code.`);
        attempt = 1;
        dial = prompt("📞");
        while(dial !=EvcDial){
            attempt += 1
            alert(`Connection problem or invalid MMI code.`);
            dial = prompt("📞");
        }checkPin()
        
    }
}

function checkPin(){
    let pin = prompt(`-EVCPLUS-\nfadlan geli pin-kaaga(Enter PIN)`);
    if (pin == UserPin){
        menu()
    }
    else{
        alert(`PIN kaagu waa qalad`)
    }
}


function menu(){
    let option = prompt(`EVCPlus
    1. Itus Haraaga
    2. Kaarka hadalka
    3. Bixi biil
    4. U wareeji EVCPLUS
    5. Warbixin kooban 
    6. Salaam Bank 
    7. Maareynta 
    8. Taaj 
    9. Bill payment`);
    if (option == '1'){
        showBalance()
    }
    else if(option == '2'){
        kaarkaHadalkaMenu()
    }
}




function showBalance(){
    alert(`<-EVCPlus-> Haraagaagu waa $${$Balance}`)
}


function kaarkaHadalkaMenu(){
    let option = prompt(`kaarka hadalka
    1. ku shubo Artime
    2. Ugu shub qof kale
    3. MIFI packages
    4. ku shubo internet
    5. Ugu shub qof kale(MMT)`);
    if(option == '1'){
        kuShubo()
    }
    else if(option == '2'){
        uguShub()
    }
    else if(option == '3'){
        mifiPackage()
    }
    else if (option == '4'){
        kushuboInternet()
    }
    else if(option == '5'){
        uguShubMMT()
    }
    else{
        alert(`fadlan dooro number sax ah`);
    }
    
}

function kuShubo(){
    let count = 0
    let currency$ = prompt('Fadlan geli lacagta');
    checkCurrency$()
    function checkCurrency$(){
        
        if (isNaN(currency$)){
            while(isNaN(currency$)){
                currency$ = prompt(`You can only enter a number!.\nFadlan geli lacagta`);
                count += 1;
                if(count == 4){
                    break;
                }
                else if(isNaN(currency$) == false){
                    let option = prompt(`Ma hubtaa inaad $${currency$} ugu shubtid undefined?\n1. Haa\n2. Maya`)
                    if (option == '1' && currency$ > $Balance){
                        alert('Haraaga xisaabtaadu kuguma filna, mobile No:\n(SENDER_MOBILE_NO )');
                    }
                    else if (option == '1' && currency$ < $Balance){
                        $Balance -= currency$;
                        alert(`waxaad $${currency$} ugu shubtay undefined haraagaagu hadda waa $${$Balance}`)
                    }
                    else{
                        alert("Mahadsanid");
                    }
    
                }
    
            }
            alert('waxaad gaartay inta ku noqosho laguu ogolaa,\nfadlan dib usoo gal');
    
        }
        else{
            let option = prompt(`Ma hubtaa inaad $${currency$} ugu shubtid undefined?\n1. Haa\n2. Maya`);
            if (option == '1' && currency$ > $Balance){
                alert('Haraaga xisaabtaadu kuguma filna, mobile No:\n(SENDER_MOBILE_NO )');
            }
            else if (option == '1' && currency$ < $Balance){
                $Balance -= currency$;
                alert(`waxaad $${currency$} ugu shubtay undefined haraagaagu hadda waa $${$Balance}`)
            }
            else{
                alert("Mahadsanid");
            }
        }
    }
}

function uguShub(){
    mobile = Number(prompt('Fadlan Geli mobile-ka'));


}
main()
