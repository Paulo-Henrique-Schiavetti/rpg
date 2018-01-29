function login() {
    email = document.getElementById('email').value;
    senha = document.getElementById('senha').value;
    if (email == ""){
        alert("insira seu e-mail!");
        return false;        
    } else {
        if (senha == ""){
            alert("insira sua senha!");
            return false;        
        } else {
            return true;
        }
    }
}