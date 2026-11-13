---
layout: project
title: W.A.N.D. Project Mods
description: A collection of modifications for W.A.N.D. Project, developed by AkaneDev.
category: Game Modifications
---

<div class="mod-catalogue">

    <div class="mod-catalogue-intro">
        <p>
            Browse every W.A.N.D. Project mod developed by AkaneDev.
            Use the search below to find a mod.
        </p>

        <p class="mod-notice">
            These mods require BepInEx to be installed.
        </p>
    </div>

    <div class="mod-search">
        <input
            id="mod-search"
            type="search"
            placeholder="Search mods..."
            aria-label="Search mods"
        >

        <p class="mod-count">
            Showing <span id="mod-count">0</span> mod(s)
        </p>
    </div>

    <div class="mod-list" id="mod-list">

        <article
            class="mod-entry"
            data-title="Remove Cooldown On Cast"
            data-description="Removes cooldowns on spell cast."
            data-tags="cooldowns magic gameplay cheats"
        >
            <div class="mod-entry-info">
                <h3>Remove Cooldown On Cast</h3>

                <p>Removes cooldowns on spell cast.</p>

                <div class="mod-tags">
                    <span>Magic</span>
                    <span>Gameplay</span>
                </div>
            </div>

            <a
                class="mod-download"
                href="/downloads/wand/RemoveCooldownOnCast.dll"
                download
            >
                Download DLL
            </a>
        </article>

    </div>

    <p id="mod-none-found" class="mod-none-found" hidden>
        No mods found.
    </p>

</div>

<script>
document.addEventListener("DOMContentLoaded", () => {
    const search = document.getElementById("mod-search");
    const mods = [...document.querySelectorAll(".mod-entry")];
    const count = document.getElementById("mod-count");
    const none = document.getElementById("mod-none-found");

    function updateSearch() {
        const query = search.value.toLowerCase().trim();
        let visible = 0;

        mods.forEach(mod => {
            const searchable = [
                mod.dataset.title,
                mod.dataset.description,
                mod.dataset.tags
            ].join(" ").toLowerCase();

            const matches = searchable.includes(query);

            mod.hidden = !matches;

            if (matches) visible++;
        });

        count.textContent = visible;
        none.hidden = visible !== 0;
    }

    search.addEventListener("input", updateSearch);
    updateSearch();
});
</script>
