onload = function() {
    //split data from cookie
    const cookieInfo = document.cookie;

    const cookieArray = document.cookie.split(';');
    const username = cookieArray[0].split('=')[1].toUpperCase();

    //add the data from cookie to html
    const userSpan =  document.querySelector('.username span');
    userSpan.textContent = username;

    //check the role to get access to the nav-item

    }
