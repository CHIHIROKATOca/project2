onload = function() {

    //split data from cookie
    const cookieInfo = document.cookie;
    const cookieArray = cookieInfo.split(';');
    const username = cookieArray[0].split('=')[1].toLowerCase();
    //add the data from cookie to html
    const userSpan =  document.querySelector('.username-login span');
    userSpan.textContent = `Welcome! ${username}`;
    }