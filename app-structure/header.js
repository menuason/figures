const getAppHeader = ({ appName, pages }) =>`
    <div class="app-header">
        <span class="app-name">${appName}</span>
        
        ${getNavBar(pages)}
    </div>
`;