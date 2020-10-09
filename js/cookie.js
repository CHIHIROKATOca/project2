    //create a cookie
    document.cookie = 'fname=John; expires='+ new Date(2021,0,1).toUTCString();

    let d = new Date();
    d.setTime(d.getTime() + (1*24*60*60*1000));
    document.cookie = 'lname=Doe; expires=' + d.toUTCString();

    //to delete a cookie, you can set the date to pass
    //document.cookie = 'lname=Doe; expires=' + new Date(1900,0,1).toUTCString();

    let cookieInfo = document.cookie;
    if (cookieInfo !== null ) {
        let cookieArray =  cookieInfo.split(';');
        let fnameCookie = cookieArray[0].split('=')[1].toUpperCase();
        console.log(fnameCookie);
        let lnameCookie = cookieArray[1].split('=')[1].toUpperCase();
        console.log(lnameCookie);

    }

    //to delete a cookie, you can set the date to pass
    //document.cookie = 'fname=John; expires='+ new Date(1900,0,1).toUTCString();

    const h1 = document.createElement('h1');
    h1.textContent = `Welcome ${fnameCookie} ${lnameCookie}`;
    document.body.appendChild(h1);