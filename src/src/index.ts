const styles = {
    "style1.css": "styles/style1.css",
    "style2.css": "styles/style2.css"
};

function changeStyle(style: string): void {
    const link = document.getElementById("theme-link") as HTMLLinkElement;
    if (link) {
        link.href = styles[style];
    }
}