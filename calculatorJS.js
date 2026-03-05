function calculateAge(){

    let birthdate = document.getElementById("birthdate").value;

    if(!birthdate){
        document.getElementById("result").innerText = "Please select a date.";
        return;
    }

    let birth = new Date(birthdate);
    let today = new Date();

    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();

    if(months < 0){
        years--;
        months += 12;
    }

    document.getElementById("result").innerText =
        `You are: ${years} years ${months} months old`;
}
