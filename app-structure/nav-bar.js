const setActivePage = (ind) => {
    activePage.index = ind;
    renderApp();
};

const getNavBar = ({pages, onPageChange}) => {
    const navBar = document.createElement('div');
    navBar.className = 'nav-bar';

    const pageButtons = pages.map(({ pageName }, ind) => {
        const pageButton = document.createElement('button');
        pageButton.className = 'nav-button';
        pageButton.innerText = pageName;
        if (ind === activePage.index) {
            pageButton.classList.add('active');
        }

        pageButton.onclick = () => {
            activePage.index = ind;

            const prevActive = navBar.querySelector('.active');
            prevActive.classList.remove('active');
            pageButton.classList.add('active');
            onPageChange();
        };

        return pageButton;

    });

    navBar.append(...pageButtons);
    return navBar;
};
