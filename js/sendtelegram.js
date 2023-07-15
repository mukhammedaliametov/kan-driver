//bot token
var telegram_bot_id = "6350785777:AAGbLbEpyKyyiiu-LyEf4pRJ5aJ8C6Y0qzE"; 
//chat id
var chat_id = -1001893503530; 
var u_name, email, message;
var ready = function() {
    u_name = document.getElementById("name").value;
    tel = document.getElementById("tel").value;
    textOne = document.getElementById("text-1").value;
    textTwo = document.getElementById("text-2").value;
    message = document.getElementById("message").value;
    moneys = document.getElementById("moneys").value;
    persons = document.getElementById("person").value;

    message = "🙎‍♂️ Atı: " + u_name + "\n📞 Tel: " + `+998${tel}` + "\n📍 Qay Jerden: " + textOne + "\n📍 Qay Jerge: " + textTwo + "\n💸 Summa: " + moneys + "\n🧍 Adam sanı: " + `${persons} adam` + "\n📝 Tusindirme: " + message;
};
var sendtelegram = function() {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function(response) {
        console.log(response);
    });
    u_name = document.getElementById("name").value = '';
    tel = document.getElementById("tel").value = '';
    textOne = document.getElementById("text-1").value = '';
    textTwo = document.getElementById("text-2").value = '';
    moneys = document.getElementById("moneys").value = 'Kelisimli';
    persons = document.getElementById("person").value = '';
    message = document.getElementById("message").value = '';
    return false;
};
