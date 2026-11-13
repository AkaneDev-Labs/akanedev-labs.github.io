(() => {
    const CHECK_INTERVAL = 60_000;
    const VERSION_URL = "/version.json";
    const CHANNEL_NAME = "akanedev-site-updates";

    const channel = "BroadcastChannel" in window
        ? new BroadcastChannel(CHANNEL_NAME)
        : null;

    let currentVersion = null;
    let reloading = false;

    function reload() {
        if (reloading) return;

        reloading = true;
        window.location.reload();
    }

    // Listen for updates detected by other tabs.
    if (channel) {
        channel.addEventListener("message", (event) => {
            if (event.data?.type === "site-update") {
                reload();
            }
        });
    }

    async function checkForUpdates() {
        try {
            const response = await fetch(
                `${VERSION_URL}?_=${Date.now()}`,
                { cache: "no-store" }
            );

            if (!response.ok) return;

            const data = await response.json();

            if (currentVersion === null) {
                currentVersion = data.build;
                return;
            }

            if (data.build !== currentVersion) {
                channel?.postMessage({
                    type: "site-update",
                    version: data.build
                });

                reload();
            }
        } catch (error) {
            console.warn("[Site Updates] Could not check for updates:", error);
        }
    }

    checkForUpdates();
    setInterval(checkForUpdates, CHECK_INTERVAL);
})();