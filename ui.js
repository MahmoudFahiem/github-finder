class UI {
  // Define UI Static Variables
  static searchInput = document.querySelector('#searchUser');
  static profile = document.querySelector('#profile');
  static searchCard = document.querySelector('.search.card');

  // Define UI Static Methods
  static showProfile = profileData => {
    const emptyLabel = '--';
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${profileData.avatar_url}">
            <a href="${profileData.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary">Public Repos: ${profileData.public_repos || emptyLabel}</span>
            <span class="badge badge-secondary">Public Gists: ${profileData.public_gists || emptyLabel}</span>
            <span class="badge badge-success">Followers: ${profileData.followers || emptyLabel}</span>
            <span class="badge badge-info">Following: ${profileData.following || emptyLabel}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${profileData.company || emptyLabel}</li>
              <li class="list-group-item">Website/Blog: ${profileData.blog || emptyLabel}</li>
              <li class="list-group-item">Location: ${profileData.location || emptyLabel}</li>
              <li class="list-group-item">Member Since: ${profileData.created_at || emptyLabel}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
    `;
  }
  static emptyProfile = () => this.profile.innerHTML = '';
  static showAlert = (message, type = 'danger') => {
    const UIalert = document.querySelector('.alert');
    if (UIalert) return;
    const alertTemp = `
      <div class="alert alert-${type}" role="alert">${message}</div>
    `;
    this.searchCard.insertAdjacentHTML('beforebegin', alertTemp);
    setTimeout(this.clearAlert, 2000);
  }

  static clearAlert = () => {
    const UIalert = document.querySelector('.alert');
    if (UIalert) UIalert.remove();
  }
}