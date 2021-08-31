const appRoot = document.getElementById('app-root');

const renderApp = () => {
    appRoot.innerHTML = `
        <div class="page-container">
            ${getAppHeader({appName: "Figures",pages})}
        </div>

        ${
            activePage.data ? `
                <div class="app-shell">
                    <h1> ${activePage.data.pageName} </h1>
                    ${activePage.data.renderPage()}
                </div> 
            ` : ''
        }
    `;
}

renderApp();