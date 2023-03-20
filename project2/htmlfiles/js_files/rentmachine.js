const searchInput = document.getElementById("search-input");
const machineryResults = document.getElementById("machinery-results");

// An array of sample machinery data for demonstration purposes
const machineryData = [
    {
        name: "John Deere Tractor",
        description: "A high-powered tractor with advanced features",
        type: "rental",
    },
    {
        name: "Harvesting Machine",
        description: "A machine for efficient harvesting of crops",
        type: "rental",
    },
    {
        name: "Tilling Machine",
        description: "A machine for tilling the soil before planting",
        type: "rental",
    },
];

// Function to filter machinery data based on search input
function filterMachineryData(searchTerm) {
    return machineryData.filter((machinery) =>
        machinery.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
}

// Function to display filtered machinery data in the results section
function displayMachineryResults(filteredData) {
    // Clear the previous search results
    machineryResults.innerHTML = "";

    // If there are no results, display a message
    if (filteredData.length === 0) {
        machineryResults.innerHTML = "No results found";
    } else {
        // Loop through the filtered data and create a card for each machinery item
        filteredData.forEach((machinery) => {
            const card = document.createElement("div");
            card.classList.add("machinery-card");
            card.innerHTML = `
        <h3>${machinery.name}</h3>
        <p>${machinery.description}</p>
        <p>Type: ${machinery.type}</p>
      `;
            machineryResults.appendChild(card);
        });
    }
}

// Event listener for search input changes
searchInput.addEventListener("input", (e) => {
    const searchTerm = e.target.value.trim();
    const filteredData = filterMachineryData(searchTerm);
    displayMachineryResults(filteredData);
});
