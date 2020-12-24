export default class CommonFunction {
    public static sendEmail = (subject: string, content: string) => {
        var data = JSON.stringify({
            "personalizations":
                [{ "to": [{ "email": "fivestarhonda@yahoo.com" }] }],
            "from": { "email": "kunj@testinglala.onmicrosoft.com" },
            "subject": `${subject}`,
            "content": [{
                "type": "text/html",
                "value": `${content}`
            }]
        });

        var xhr = new XMLHttpRequest();
        xhr.open("POST", "https://cors-anywhere.herokuapp.com/https://api.sendgrid.com/v3/mail/send");
        //xhr.withCredentials = true;
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                console.log(this.responseText);
            }
        });
        xhr.setRequestHeader("Authorization", "Bearer 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");
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.send(data);
    }
}