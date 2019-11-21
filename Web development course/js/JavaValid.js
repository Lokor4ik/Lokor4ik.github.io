function valid(form) {
    var fail = false;
    var name = form.user_name.value;
    var last_name = form.user_last_name.value;
    var us_num = form.user_num.value;
    var eMail = form.user_email.value;
    var us_pay_cash = form.user_pay_cash.checked;
    var us_pay_non_cash = form.user_pay_non_cash.checked;
    var form_ed = form.f_ed.value;
    var comment = form.c_qu.value;

    var adr_pattern = /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}/i;

    if (/^\s+$/.test(name) || name == "") //false - если есть какая то буква, true - если заполнено пробелом все
        fail = "Вы не ввели своё имя!";
    else
    if (/^\s+$/.test(name) || last_name == "")
        fail = "Вы не ввели свою фамилию!";
    else
    if (us_num == "")
        fail = "Вы не ввели телефон!";
    else
    if (eMail == "")
        fail = "Вы не ввели почту!";
    else
    if (adr_pattern.test(eMail) == false)
        fail = "Вы ввели некоректно email!"
    else
    if (!(us_pay_cash || us_pay_non_cash))
        fail = "Вы не выбрали форму оплаты!"
    else
    if (form_ed == "choice")
        fail = "Вы не выбрали форму обучения!"

    if (fail)
        alert(fail);
    else {
        document.getElementById('hidden_name').innerHTML += name;
        document.getElementById('hidden_last_name').innerHTML += last_name;
        document.getElementById('hidden_num').innerHTML += us_num;
        document.getElementById('hidden_email').innerHTML += eMail;

        if (us_pay_cash)
            document.getElementById('hidden_payment').innerHTML += "Наличный расчёт";
        else
            document.getElementById('hidden_payment').innerHTML += "Безналичный расчёт";

        document.getElementById('hidden_education').innerHTML += form_ed;

        if (!(/^\s+$/.test(comment) || comment == ""))
            document.getElementById('hidden_comment').innerHTML += comment;
        else
            document.getElementById('hidden_comment').style.display = 'none';

        $.fancybox.open({
            src: '#hidden-content',
            opts: {
                afterClose: function(e, instance, slide) {
                    location.reload();
                }
            }
        });
    }
}