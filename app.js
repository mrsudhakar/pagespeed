function checkPageSpeed() {
    const urlsInput = document.getElementById('urls');
    const resultsDiv = document.getElementById('results');

    // Clear previous results
    resultsDiv.innerHTML = '';

    // Split URLs by comma
    const urls = urlsInput.value.split(',');

    // Loop through each URL and fetch PageSpeed data
    urls.forEach(url => {
        fetch(`/api/pagespeed?url=${url.trim()}&key=AIzaSyCBadLQtBLdVPD37LfmnqoetTv57L2isOc`)
            .then(response => response.json())
            .then(data => {
                // Display results
                const resultDiv = document.createElement('div');
                resultDiv.innerHTML = `<strong>${url.trim()}</strong>: ${data.score}`;
                resultsDiv.appendChild(resultDiv);
            })
            .catch(error => {
                console.error(error);
            });
    });
}
