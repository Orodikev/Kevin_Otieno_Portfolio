document.addEventListener("DOMContentLoaded", () => {
    const title = document.getElementById("title");
    const summary = document.getElementById("summary");

    const fullText = summary.textContent.trim();
    summary.textContent.display = "block";
    summary.style.display = "block";

    title.addEventListener("click", () => {
        summary.style.display = "block";
        summary.textContent = "";

        let i = 0;
        function typeContent() {
            if (i < fullText.length) {
                summary.textContent += fullText.charAt(i);
                i++;
                setTimeout(typeContent, 5);
            }
        }
        typeContent();
    });
});