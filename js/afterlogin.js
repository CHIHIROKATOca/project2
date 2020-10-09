onload = function() {
    //split data from cookie
    const cookieInfo = document.cookie;

    const cookieArray = document.cookie.split(';');
    const username = cookieArray[0].split('=')[1].toUpperCase();

    //add the data from cookie to html
    const userSpan =  document.querySelector('.username span');
    userSpan.textContent = `Welcome! ${username}`;

    const logOutButton = document.getElementById("logOutBtn");
    logOutButton.addEventListener("click", function(){
        var date1 = new Date();
        //1970年1月1日00:00:00の日付データをセットする
        date1.setTime(0);
        //有効期限を過去にして書き込む
        document.cookie = "counts=;expires="+date1.toGMTString();
        //ページを再読み込みする
        location.reload();
        },false)
    }


    //check the role to get access to the nav-item
