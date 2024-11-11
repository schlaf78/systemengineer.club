function loadContent(topic) {
    const mainContent = document.getElementById("main-content");

    const content = {
        "section1": "<h2>Ubuntu</h2><p>This is content for Ubuntu section</p>",
        "topic1.1": `
            <h2>Create User</h2>
            <p>Ubuntu</p>

        `,
        "topic1.2": "<h2>Topic 1.2</h2><p>This is the content for Topic 1.2 under Section 1 99999.</p>",
        "section2": "<h2>Section 2</h2><p>This is content for Section 2.</p>",
        "topic2.1": "<h2>Topic 2.1</h2><p>This is the content for Topic 2.1 under Section 2.</p>",
        "topic2.2": "<h2>Topic 2.2</h2><p>This is the content for Topic 2.2 under Section 2.</p>"
    };

    mainContent.innerHTML = content[topic] || "<p>Content not found.</p>";
}
