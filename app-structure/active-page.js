let _activePageIndex = 0;

const activePage = {
    _index: 0,

    get index() {
        return this._index;
    },

    set index (value) {
        return this._index = value;
    },

    get data() {
        return pages[this.index];
    }
}

const getActivePageIndex = () =>_activePageIndex;
const setActivePageIndex = (pageIndex) => _activePageIndex = pageIndex;

const getActivePage = () => pages[getActivePageIndex()];