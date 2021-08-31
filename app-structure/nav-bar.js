const setActivePage = (ind) => {
    activePage.index = ind;
    renderApp();
};

const getNavBar = (pages) => `
    <div class="nav-bar">
        ${
            pages.map(({pageName}, ind)=> `
                <button
                class="nav-button ${ind === activePage.index ? 'active' : ''}"
                onclick = "setActivePage(${ind})"
                >
                    ${pageName}
                </button>
            `).join('')
        }
    </div>
`;