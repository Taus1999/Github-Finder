class UI {
    constructor() {
        //to save
        this.profile = document.querySelector('#profile');
    }
    showProfile(user) {
        this.clearAlert();
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
        <div class="row">
        <div class="col-md-3">
        <img class="img-fluid mb-2" src="${user.avatar_url}">
        <a href="${user.html_url}" target="_blank" class="btn btn-warning btn-block mb-4">View Profile</a>
        </div>
        
        <div class="col-md-9">
        <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
        <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
        <span class="badge badge-success">Followers: ${user.followers}</span>
        <span class="badge badge-info">Following: ${user.following}</span>
        <br><br>
        <ul class="list-group">
          <li class="list-group-item text-light">Full Name: ${user.name}</li>
          <li class="list-group-item text-light">Company: ${user.company}</li>
          <li class="list-group-item text-light">Website/Blog: ${user.blog}</li>
          <li class="list-group-item text-light">Location: ${user.location}</li>
          <li class="list-group-item text-light">Member Since: ${user.created_at}</li>         
        </ul>
        </div>

        </div>
        </div>
        `;
    }
    clearProfile() {
        this.profile.innerHTML = "";

    }
    showAlert(message, erclassName) {
        this.clearAlert();
        this.clearProfile();
        let div = document.createElement('div');
        div.className = erclassName;
        div.appendChild(document.createTextNode(message));
        let container = document.querySelector('.searchContainer')
        let search = document.querySelector('.search');
        container.insertBefore(div, search);
        /* console.log(search); */
       
    }
        clearAlert() {
        let currentAlert = document.querySelector('.alert');
        if(currentAlert) {
            currentAlert.remove();
        }
    } 
}