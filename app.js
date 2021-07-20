const documentReady = async () => {
    const result = await new Promise( resolve => {
        function checkState() {
            if (document.readyState !== 'loading') resolve();
        }
        document.addEventListener('readystatechange', checkState);
        checkState();
    });
    return result;
}

const main = () => {
    // Add event listener to search input
    UI.searchInput.addEventListener('keyup', async (e) => {
        // Get the input value
        const inputVal = e.target.value;

        if (inputVal === '') return;
        // Empty the profile

        // Send GET request to get searched user
        const data = await GitHub.getUser(inputVal);
        if (data.profile.message === 'Not Found') return; // Show Allert
        console.log(data);

        // Display the output in the view

    })
}


documentReady().then(main);
