        async function copyToClipboard() {
            const code = `<body>
    <link rel="stylesheet" href="https://getstarted.qweetly.work.gd/assets/main/css/getstarted.css">
 <!--Please do not delete the  <link rel="stylesheet" href="https://getstarted.qweetly.work.gd/assets/main/css/getstarted.css"> as its style for the get started design-->
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

                const button = document.querySelector(".gsbutton");
                const oldText = button.textContent;

                button.textContent = "Copied!";

                setTimeout(() => {
                    button.textContent = oldText;
                }, 1500);

            } catch (error) {
                console.error("Failed to copy:", error);
                alert("Failed to copy to clipboard.");
            }
        }
