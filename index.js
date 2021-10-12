const appRoot = document.querySelector('#app-root');

let pageContentShell = null;
let pageContenctName = null;
const renderPageContent = () => {
    document.title = `Figures | ${activePage.data.pageName}`;
    pageContenctName.innerText = activePage.data.pageName;
    pageContentShell.innerHTML = activePage.data.renderPage();
}

const renderApp = () => {
    appRoot.innerHTML = `
        <div class="page-container">
            <div class="page-content">
                <h1 class="page-content-name"> ${activePage.data.pageName} </h1>
                <div class="page-content-shell"></div>
            </div> 
        </div>
    `;

    const  pageContainer = appRoot.querySelector('.page-container');

    pageContainer.prepend(getAppHeader({
        appName: 'Figures',
        pages,
        onPageChange: renderPageContent,
    }))

    pageContentShell = appRoot.querySelector('.page-content-shell');
    pageContenctName = appRoot.querySelector('.page-content-name');

    renderPageContent();
}

renderApp();