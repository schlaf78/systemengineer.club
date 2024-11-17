async function loadContentIndex() {
    const response = await fetch("content/index.json");
    return response.ok ? await response.json() : { sections: [] };
}

async function buildMenu() {
    const treeView = document.getElementById("treeview");
    const contentIndex = await loadContentIndex();

    contentIndex.sections.forEach(section => {
        const sectionItem = document.createElement("li");
        const sectionTitle = document.createElement("span");
        sectionTitle.textContent = section.displayName;
        sectionItem.appendChild(sectionTitle);

        const topicList = document.createElement("ul");
        section.topics.forEach(topic => {
            const topicItem = document.createElement("li");
            const topicLink = document.createElement("span");
            topicLink.textContent = topic.name;
            topicLink.onclick = () => loadContent(`content/${section.name}/${topic.file}`);
            topicItem.appendChild(topicLink);
            topicList.appendChild(topicItem);
        });

        sectionItem.appendChild(topicList);
        treeView.appendChild(sectionItem);
    });
}

async function loadContent(filePath) {
    const mainContent = document.getElementById("main-content");
    try {
        const response = await fetch(filePath);
        mainContent.innerHTML = response.ok ? await response.text() : "<p>Content not found.</p>";
    } catch {
        mainContent.innerHTML = "<p>Error loading content.</p>";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    buildMenu();
});
