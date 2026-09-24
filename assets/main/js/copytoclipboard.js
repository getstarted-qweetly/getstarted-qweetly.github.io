async function copyToClipboard() {
    const button = document.getElementById("copytoclipboardbutton");
    const code = `<body>
    <link rel="stylesheet" href="https://work.gd">
 <!--Please do not delete the  <link rel="stylesheet" href="https://work.gd"> as its style for the get started design-->
    <h1>Get Started</h1>
 <!--Please do not change the div classes as its the names directly placed in the css-->
    <div class="content">
        <h3>Change this line in the code editor</h3>
        <div class="gsbuttondiv">
            <a href="/get-started"><button class="gsbutton">Get Started</button></a>
            <!---->
        </div>
    </div>
</body>`;

    try {
        await navigator.clipboard.writeText(code);
        
        // Save the original text, change it to "Copied!", and disable the button
        const originalText = button.textContent;
        button.textContent = "Copied!";
        button.disabled = true;

        // Reset the button back to normal after 2 seconds (2000 milliseconds)
        setTimeout(() => {
            button.textContent = originalText;
            button.disabled = false;
        }, 2000);

    } catch (error) {
        console.error("Failed to copy:", error);
        alert("Failed to copy to clipboard.");
    }
}

// Bind the function to your button ID
document.getElementById("copytoclipboardbutton").addEventListener("click", copyToClipboard);
