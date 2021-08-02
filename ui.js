class UI {
  // Define UI Static Variables
  static searchInput = document.querySelector('#searchUser');
  static profile = document.querySelector('#profile');

  // Define UI Static Methods
  static showProfile = profileData => {
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${profileData.avatar_url}">
            <a href="${profileData.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary">Public Repos: ${profileData.public_repos}</span>
            <span class="badge badge-secondary">Public Gists: ${profileData.public_gists}</span>
            <span class="badge badge-success">Followers: ${profileData.followers}</span>
            <span class="badge badge-info">Following: ${profileData.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${profileData.company}</li>
              <li class="list-group-item">Website/Blog: ${profileData.blog}</li>
              <li class="list-group-item">Location: ${profileData.location}</li>
              <li class="list-group-item">Member Since: ${profileData.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
    `;
  }
}