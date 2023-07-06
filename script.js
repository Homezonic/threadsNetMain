document.getElementById('searchBtn').addEventListener('click', function () {
    var urlInput = document.getElementById('urlInput');
    var url = urlInput.value;

    // Display the spinner
    document.getElementById('searchContainer').classList.add('hidden');
    document.getElementById('resultContainer').classList.remove('hidden');
    document.getElementById('spinner').classList.remove('hidden');

    // Make an HTTP POST request to the backend
    fetch('https://dlthreadsnet.onrender.com:3000/search', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url: url })
    })
        .then(function (response) {
            return response.text(); // Retrieve the response as text
        })
        .then(function (data) {
            // Process the response data as needed
            document.getElementById('spinner').classList.add('hidden');
            document.getElementById('resultContainer').innerHTML = data;
        })
        .catch(function (error) {
            console.error('Error:', error);
        });
});
