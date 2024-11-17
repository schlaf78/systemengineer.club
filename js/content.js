// Function to load content from a file
async function loadFileContent(filePath) {
    try {
        const response = await fetch(filePath);
        if (!response.ok) throw new Error(`Error fetching file: ${response.statusText}`);
        
        const content = await response.text();
        return content;
    } catch (error) {
        console.error("Failed to load file content:", error);
        return "<p>Failed to load content. Please try again later.</p>";
    }
}

// Function to display content for each topic
async function loadContent(topic) {
    const mainContent = document.getElementById("main-content");

    // Map topics to corresponding files
    const fileMap = {
        "section1": "section1/index.html",
        "topic1.1": "section1/topic1_1.html",
        "topic1.2": "section1/topic1_2.html",
        "section2": "section2/index.html",
        "topic2.1": "section2/topic2_1.html",
        "topic2.2": "section2/topic2_2.html"
    };

    // Get the file path for the selected topic
    const filePath = fileMap[topic];

    // Load and display the content
    if (filePath) {
        const content = await loadFileContent(filePath);
        mainContent.innerHTML = content;
    } else {
        mainContent.innerHTML = "<p>Content not found.</p>";
    }
}
