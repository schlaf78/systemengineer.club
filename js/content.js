function loadContent(topic) {
    const mainContent = document.getElementById("main-content");

    const content = {
        "section1": "<h2>Section 1</h2><p>This is content for Section 1 kjhhjghjk.</p>",
        "topic1.1": `
            <h2>Topic 1.1</h2>
            <p>This is the content for Topic 1.1 under Section 15555.</p>
            <img src="https://avatars.githubusercontent.com/u/27727118?v=4" alt="Description of Example Image" style="max-width: 100%; height: auto;">
        `,
        "topic1.2": "<h2>Topic 1.2</h2><p>This is the content for Topic 1.2 under Section 1 99999.</p>",
        "section2": "<h2>Section 2</h2><p>This is content for Section 2.</p>",
        "topic2.1": "<h2>Topic 2.1</h2><p>This is the content for Topic 2.1 under Section 2.</p>",
        "topic2.2": "<h2>Topic 2.2</h2><p>This is the content for Topic 2.2 under Section 2.</p>"
    };

    mainContent.innerHTML = content[topic] || "<p>Content not found.</p>";
}
