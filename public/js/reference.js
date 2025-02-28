document.addEventListener('DOMContentLoaded', function () {
    let apiListItems;
    let currentApiListItem = null;
    let currentApiIndex = 0;

    function GetApiDescCont(index) {
        const header = functionName[index];
        const description = descriptions[index];
        const title = document.querySelector('.api-desc-title');
        const subtitle = document.querySelector('.api-desc-subtitle');
        title.innerHTML = header;
        subtitle.innerHTML = description;

        updateCodeSidebar(index, "cpp"); // Default to C++ code
        currentApiIndex = index; // Update current API index

        if (window.innerWidth <= 1200) {

            document.querySelector('.api-list').style.display='none';
        }
        populateList();
    }

    function updateCodeSidebar(index, lang) {
        const langIndex = {
            "cpp": 0,
            "java": 1,
            "csharp": 2,
            "python": 3,
            "javascript": 4
        };

        const codeDisplay = document.querySelector('.code-display');
        codeDisplay.textContent = code[index][langIndex[lang]];
    }

    function populateList() {
        const list = document.querySelector('.api-list ul');
        list.innerHTML = ''; // Clear the list before populating
        functionName.forEach(function (item, index) {
            const li = document.createElement('li');
            li.textContent = item;
            li.addEventListener('click', function () {
                apiListItemClicked(li, index);
            });
            list.appendChild(li);
        });
        apiListItems = document.querySelectorAll('.api-list li');
    }

    function apiListItemClicked(li, index) {
        if (currentApiListItem !== null) {
            currentApiListItem.classList.remove('api-list-item-clicked');
        }
        li.classList.add('api-list-item-clicked');
        currentApiListItem = li;
        GetApiDescCont(index);
    }

    function changeCodeOnClick(index, lang) {
        updateCodeSidebar(index, lang);
    }

    function setupLangButtons(index) {
        const buttons = document.querySelectorAll('.lang-btn');
        buttons.forEach(button => {
            button.addEventListener('click', function () {
                const lang = button.getAttribute('data-tab');
                changeCodeOnClick(currentApiIndex, lang);
            });
        });
    }

    populateList();
    GetApiDescCont(0); // Load the first API description and code by default
    setupLangButtons();

    let toggleButton = document.querySelector('.api-list-arrow-icon');
    let apiListSidebar = document.querySelector('.api-list-sidebar');
    let apiDescCont = document.querySelector(".api-desc-cont");
    let arrowIcon = document.querySelector(".api-list-arrow-icon-active");

    function toggleSidebar() {
        const isClosed = apiListSidebar.classList.toggle('closed');
        apiDescCont.classList.toggle('expanded', isClosed);
        arrowIcon.style.display = isClosed ? 'block' : 'none';
        if (window.innerWidth <= 1200) {
            arrowIcon.style.left = isClosed ? '5px' : 'auto';
            arrowIcon.style.right = isClosed ? 'auto' : '5px';
        }
    }

    toggleButton.addEventListener('click', toggleSidebar);
    arrowIcon.addEventListener('click', toggleSidebar);

    const searchContainer = document.querySelector('.search-container');
    const searchContainerInput = document.querySelector('.search-container-input');
    const apiDescSaveIcon = document.querySelector('.api-desc-save-icon');
    const resultList = document.querySelector(".api-list ul");

    let saveIconActive = false;

    searchContainerInput.addEventListener('focus', handleSearchFocus);
    searchContainerInput.addEventListener('blur', handleSearchBlur);
    searchContainerInput.addEventListener('input', handleSearchInput);
    apiDescSaveIcon.addEventListener('click', toggleSaveIcon);

    function handleSearchFocus() {
        searchContainer.style.backgroundColor = "#0F1111";
        searchContainer.style.border = "1px solid #136E4C";
        searchContainerInput.style.color = "#FFFFFF";
        searchContainerInput.style.backgroundColor = "#0F1111";
        searchContainerInput.style.outline = "none";
        if (window.innerWidth <= 1200) {
            apiListSidebar.classList.remove('closed');
            apiDescCont.classList.add('expanded');
            // arrowIcon.style.display = 'block';
            // arrowIcon.style.left = '5px';
            // arrowIcon.style.right = 'auto';
        }
    }

    function handleSearchBlur() {
        searchContainer.style.backgroundColor = "";
        searchContainer.style.border = "";
        searchContainerInput.style.color = "";
        searchContainerInput.style.backgroundColor = "";
        searchContainerInput.style.outline = "";
    }

    function toggleSaveIcon() {
        apiDescSaveIcon.style.color = saveIconActive ? "#CDCDCD" : "#136E4C";
        saveIconActive = !saveIconActive;
    }

    function handleSearchInput() {
        updateSearchResults();
    }

    function updateSearchResults() {
        let searchInputValue = searchContainerInput.value.toLowerCase();
        resultList.innerHTML = '';

        functionName.forEach(function (item, index) {
            if (item.toLowerCase().includes(searchInputValue)) {
                let li = document.createElement('li');
                li.textContent = item;
                resultList.appendChild(li);
                li.addEventListener('click', function () {
                    apiListItemClicked(li, index);
                });
            }
        });

        if (resultList.children.length === 0) {
            let li = document.createElement('li');
            li.textContent = 'No results found';
            resultList.appendChild(li);
        }
    }

    function initialize() {
        const apiList = document.querySelector('.api-list');
        const searchInput = document.querySelector('.search-container-input');

        function hideApiList() {
            apiList.style.display = 'none';
        }

        // if (window.innerWidth <= 1200) {
        //     hideApiList();
        // }

        searchInput.addEventListener('click', function () {
            if (window.innerWidth <= 1200) {

                apiList.style.display = 'block';
            }
        });

        searchInput.addEventListener('focus', function () {
            if (window.innerWidth > 1200) {
                apiList.style.display = 'block';
            }
        });

        // searchInput.addEventListener('blur', function () {
        //     if (window.innerWidth <= 1200) {

        //         hideApiList();
        //     }
        // });

        window.addEventListener('resize', function () {
            if (window.innerWidth <= 1200) {
                hideApiList();
            } else {
                apiList.style.display = '';
            }
        });
    }

    initialize();
});


function changeColor(button) {
    var buttons = document.getElementsByClassName('lang-btn');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('lang-btn-clicked');
    }
    button.classList.add('lang-btn-clicked');
}

document.querySelector('.api-desc-save-icon').addEventListener('click', function() {
    document.querySelector('.api-code-sidebar').classList.toggle('visible');
    if(document.querySelector('.api-code-sidebar').classList.contains('visible')){
    document.querySelector('.api-desc-save-icon').style.position="fixed";
    }
    else{
        document.querySelector('.api-desc-save-icon').style.position="";

    }
});

document.querySelector('.landing-header-menu-icon').addEventListener('click',function(){
    document.querySelector('.api-list-sidebar').classList.toggle('visible');
    document.querySelector('.search-container').style.display="none";
    document.querySelector('.api-list').classList.toggle('visible');
    document.getElementById('overlay').style.display="block";
    document.querySelector('.api-list-sidebar-close-icon').classList.toggle('visible');
    document.querySelector('.api-list-sidebar-line').style.display="block";
});
document.querySelector('.api-list-sidebar-close-icon').addEventListener('click',function(){
    document.querySelector('.api-list-sidebar').classList.remove('visible');
    document.querySelector('.search-container').style.display="flex";
    document.querySelector('.api-list').classList.remove('visible');
    document.getElementById('overlay').style.display="none";
    document.querySelector('.api-list-sidebar-close-icon').classList.remove('visible');
    document.querySelector('.api-list-sidebar-line').style.display="none";
});
const saveIcon = document.querySelector('.api-desc-save-icon');
const apiCodePopup = document.getElementById('api-code-popup');
const closeBtn = document.querySelector('.close-btn');
const apiListSidebar=document.querySelector('.api-list-sidebar');
const apiListSidebarVisible=document.querySelector('.api-list-sidebar.visible');

closeBtn.addEventListener('click', () => {
    apiCodePopup.style.display = 'none';
});

saveIcon.addEventListener('click', () => {
    apiCodePopup.style.display = 'block';
});


window.addEventListener('click', (event) => {
    console.log("Hiii");
    if (event.target === apiCodePopup) {
        apiCodePopup.style.display = 'none';
    }
    if(apiListSidebarVisible!==event.target && apiListSidebar.classList.contains('visible')){
        document.querySelector('.api-list-sidebar').classList.remove('visible');
        document.querySelector('.api-list').classList.remove('visible');
        document.getElementById('overlay').style.display="none";
        document.querySelector('.api-list-sidebar-close-icon').classList.remove('visible');
        document.querySelector('.api-list-sidebar-line').style.display="none";
    }
});
