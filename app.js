const documentReady = () => new Promise( resolve => {
    function checkState() {
        if (document.readyState !== 'loading') resolve();
    }
    document.addEventListener('readystatechange', checkState);
    checkState();
});

const main = () => {
    // Add event listener to search input
    UI.searchInput.addEventListener('keyup', async (e) => {
        // Get the input value
        const inputVal = e.target.value;

        if (inputVal === '') return;
        // TODO: Empty the profile

        // Send GET request to get searched user
        const data = await GitHub.getUser(inputVal);
        if (data.profile.message === 'Not Found') return; // TODO: Show Allert

        // TODO: Display the output in the view
        UI.showProfile(data.profile);
    })
}


documentReady().then(main);
