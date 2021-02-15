let searchBtn = document.querySelector('#searchBtn');
let searchUser = document.querySelector('#searchUser');
let ui = new UI();

searchBtn.addEventListener('click', (e) => {
    let userText = searchUser.value;
    if(userText != '') {
        fetch(`https://api.github.com/users/${searchUser.value}`)
            .then(result => result.json())
            .then(data => {
                if(data.message === 'Not Found') {
                    //show alert in ui
                    ui.showAlert("User Not Found!", "alert alert-danger");
                    searchUser.value = "";

                } else {
                    //show profile in ui
                    ui.showProfile(data);
                    searchUser.value = "";
                }
            })
    } else {
        //clear profile
        ui.clearProfile();

    }

});