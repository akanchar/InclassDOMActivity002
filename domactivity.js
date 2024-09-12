/* add your code here */

// Path to the folder where images are stored
const imageFolder = 'images/small/';

// Get reference to the <ul> inside <section id="paintings">
const paintingsSection = document.getElementById("paintings1");

// Array of image file names (this should be populated dynamically by your back-end in a real-world scenario)
const imageFiles = [
    "005010.jpg", 
    "095010.jpg",
    "099160.jpg",
    "100030.jpg",
    "101030.jpg",
    "104020.jpg",
    "105010.jpg",
    "105040.jpg",
    "118050.jpg"
];

function loadPaintingInfo(e) {
    if (e.type === "click") {
        // Get the clicked image
        const clickedImage = e.target;
        
        // Extract the filename from the clicked image's src
        const imageFileName = clickedImage.src.split('/').pop(); // E.g., '005010.jpg'
        
        // Construct the URL for the larger image
        const largeImageUrl = `images/large/${imageFileName}`;
        
        // Update the larger image's src attribute
        const fullImage = document.getElementById('full');
        fullImage.src = largeImageUrl;
    }
}

// Loop through each image file
imageFiles.forEach(image => {
    // Create a new <li> element
    const listItem = document.createElement('li');
    listItem.classList.add("paintings");

    // Create an <img> element
    const imgElement = document.createElement('img');
    imgElement.src = `images/small/${image}`;
    imgElement.alt = image;  // You can set a more descriptive alt text here
    imgElement.classList.add("paintings");
    
    // Append the <img> to the <li>
    listItem.appendChild(imgElement);

    // Add event listener to handle clicks
    listItem.addEventListener("click", loadPaintingInfo);
    
    // Append the <li> to the <ul>
    paintingsSection.appendChild(listItem);
});
