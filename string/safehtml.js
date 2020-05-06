function safeHtml(templateData) {
    let s = templateData[0];

    for (let i = 1; i < arguments.length; i++) {
        const arg = String(arguments[i]);

        s += arg.replace('/&/g', '&amp;')
            .replace('/</g', '&lt;')
            .replace('/>/g', 'gt;');

        s += templateData[i];
    }
    return s;
}

let sender = "<script>alert('abc')</script>";
// 恶意代码
let message = safeHtml`<p>${sender} has sent you a message</p>`;