// Wait for DOM Ready
document.addEventListener("DOMContentLoaded", function() {

    // Define follow buttons element array
    var followButtons = document.getElementsByClassName('profile-card__body_cta_twitter');
    
    // Loop follow button elements and attach click events to them
    for(i = 0; i < followButtons.length; i++) {
        followButtons[i].addEventListener('click', function(e) {

            // Add or remove 'followed' class based on current class
            // and change the text accordingly
            if(e.target.classList.contains('followed')) {
                e.target.classList.remove('followed');
                e.target.innerText = 'Follow';
            } else {
                e.target.classList.add('followed');
                e.target.innerText = 'Unfollow';
            }

        });
    }
  
  });