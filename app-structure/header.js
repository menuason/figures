const getAppHeader = ({ appName, ...navBarProps }) => { 
    const [] = navBarProps.pages;

    // const {appName, pages} = props;
    // const appName = props.appName;
    // const pages = props.pages;

    // const a = { appName, pages, x: 0, y: 8, name: 'valod', surname: 'chan' };
    // const { x, y, ...otherProps } = a;

    // console.log(x, y, otherProps);

    const appHeader = document.createElement('div');
    appHeader.className = 'app-header'
    appHeader.innerHTML = `<span class="app-name">${appName}</span>`;
    appHeader.append(getNavBar(navBarProps))

    return appHeader;

};

