// State management
let currentTheme = 'light';
let activeTab = 'videos';
let activeFilters = [];
let currentSort = 'shuffle';
let currentSearchTerm = '';
let selectedFilters = {
    actress: [],
    tags: [],
    studios: [],
    label: [],
    series: [],
    version: [],
    group: []
};

// Pagination state
let currentVideoPage = 1;
let currentAlbumPage = 1;
let currentPicturePage = 1;
const itemsPerPage = {
    videos: 10,
    albums: 12,
    pictures: 30
};

// Current video for suggestion carousels
let currentVideoForSuggestions = null;

// Track video player state
let isVideoPlaying = false;
let currentVideoPlayerType = null;

// Store event listeners to prevent duplicates
let modalEventListenersAttached = false;

// Album image gallery state
let currentAlbumImages = [];
let currentImageIndex = 0;
let currentPictureDataForModal = null;

// Album images column count
let currentAlbumCols = 1;

// Actress grid column count
let currentActressCols = 3;

// DOM Elements
const themeToggle = document.getElementById('themeToggle');
const filtersBtn = document.getElementById('filtersBtn');
const searchInput = document.getElementById('searchInput');
const sortBtn = document.getElementById('sortBtn');
const sortMenu = document.getElementById('sortMenu');
const activeFiltersContainer = document.getElementById('activeFilters');
const tabs = document.querySelectorAll('.tab');
const contentSections = document.querySelectorAll('.content-section');
const videosGrid = document.getElementById('videosGrid');
const albumsGrid = document.getElementById('albumsGrid');
const picturesGrid = document.getElementById('picturesGrid');
const videoModal = document.getElementById('videoModal');
const filterModal = document.getElementById('filterModal');
const albumModal = document.getElementById('albumModal');
const imageModal = document.getElementById('imageModal');
const closeVideoModal = document.getElementById('closeVideoModal');
const closeFilterModal = document.getElementById('closeFilterModal');
const closeAlbumModal = document.getElementById('closeAlbumModal');
const closeImageModal = document.getElementById('closeImageModal');
const fullscreenImage = document.getElementById('fullscreenImage');
const prevImageBtn = document.getElementById('prevImageBtn');
const nextImageBtn = document.getElementById('nextImageBtn');

// Video modal elements
const mainModalContent = document.getElementById('mainModalContent');
const previewPage = document.getElementById('previewPage');
const previewBackBtn = document.getElementById('previewBackBtn');
const videoThumbnailContainer = document.getElementById('videoThumbnailContainer');
const modalThumb = document.getElementById('modalThumb');
const videoPlayer = document.getElementById('videoPlayer');
const videoFrame = document.getElementById('videoFrame');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const toggleDesc = document.getElementById('toggleDesc');
const modalTags = document.getElementById('modalTags');
const modalSeries = document.getElementById('modalSeries');
const modalActress = document.getElementById('modalActress');
const modalRating = document.getElementById('modalRating');
const modalStudio = document.getElementById('modalStudio');
const modalLabel = document.getElementById('modalLabel');
const modalRelease = document.getElementById('modalRelease');
const modalDuration = document.getElementById('modalDuration');
const modalVersions = document.getElementById('modalVersions');
const modalGroup = document.getElementById('modalGroup');
const modalViews = document.getElementById('modalViews');
const modalPoster = document.getElementById('modalPoster');
const modalCode = document.getElementById('modalCode');
const previewBtn = document.getElementById('previewBtn');
const trailerBtn = document.getElementById('trailerBtn');
const videoBtn = document.getElementById('videoBtn');
const previewImagesFull = document.getElementById('previewImagesFull');

// Suggestion carousel elements
const alsoStarredCarousel = document.getElementById('alsoStarredCarousel');
const youMayLikeCarousel = document.getElementById('youMayLikeCarousel');
const alsoStarredPrev = document.getElementById('alsoStarredPrev');
const alsoStarredNext = document.getElementById('alsoStarredNext');
const youMayLikePrev = document.getElementById('youMayLikePrev');
const youMayLikeNext = document.getElementById('youMayLikeNext');

// Pagination elements
const videosPrevBtn = document.getElementById('videosPrevBtn');
const videosNextBtn = document.getElementById('videosNextBtn');
const videosPageNumber = document.getElementById('videosPageNumber');
const albumsPrevBtn = document.getElementById('albumsPrevBtn');
const albumsNextBtn = document.getElementById('albumsNextBtn');
const albumsPageNumber = document.getElementById('albumsPageNumber');
const picturesPrevBtn = document.getElementById('picturesPrevBtn');
const picturesNextBtn = document.getElementById('picturesNextBtn');
const picturesPageNumber = document.getElementById('picturesPageNumber');

// Album modal elements
const albumModalTitle = document.getElementById('albumModalTitle');
const albumModalTags = document.getElementById('albumModalTags');
const albumModalActress = document.getElementById('albumModalActress');
const albumModalImageCount = document.getElementById('albumModalImageCount');
const albumMainCover = document.getElementById('albumMainCover');
const albumImagesContainer = document.getElementById('albumImages');

// Filter modal elements
const filterTabs = document.querySelectorAll('.filter-tab');
const filterSections = document.querySelectorAll('.filter-section');
const selectedFiltersContainer = document.getElementById('selectedFilters');

// Helper function to scroll to top smoothly
function smoothScrollToTop(element) {
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Helper function to format date to dd-mm-yyyy
function formatDate(dateString) {
    if (!dateString) return 'N/A';
    try {
        const date = new Date(dateString);
        if (isNaN(date.getTime())) return dateString;
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    } catch (e) {
        return dateString;
    }
}

// Helper function to calculate age from DOB
function calculateAge(dobString) {
    if (!dobString) return 'N/A';
    try {
        const dob = new Date(dobString);
        if (isNaN(dob.getTime())) return 'N/A';
        const today = new Date();
        let age = today.getFullYear() - dob.getFullYear();
        const m = today.getMonth() - dob.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
            age--;
        }
        return age;
    } catch (e) {
        return 'N/A';
    }
}

// Helper function to calculate debut age
function calculateDebutAge(dobString, debutString) {
    if (!dobString || !debutString) return 'N/A';
    try {
        const dob = new Date(dobString);
        const debut = new Date(debutString);
        if (isNaN(dob.getTime()) || isNaN(debut.getTime())) return 'N/A';
        let age = debut.getFullYear() - dob.getFullYear();
        const m = debut.getMonth() - dob.getMonth();
        if (m < 0 || (m === 0 && debut.getDate() < dob.getDate())) {
            age--;
        }
        return age;
    } catch (e) {
        return 'N/A';
    }
}

// Actress profile card component - individual card for each actress (1 column, horizontal, full width)
function createActressProfileCard(actressName) {
    if (!actressName) return '';
    
    const actressData = filterData.actress.find(a => a.name === actressName);
    if (!actressData) return '';
    
    const age = calculateAge(actressData.dob);
    const debutAge = calculateDebutAge(actressData.dob, actressData.debut);
    const formattedDob = formatDate(actressData.dob);
    const formattedDebut = formatDate(actressData.debut);
    
    return `
        <div class="actress-profile-card">
            <div class="actress-profile-card-info">
                <div class="actress-profile-card-name">${actressData.name}</div>
                <div class="actress-profile-card-details">
                    <div class="actress-profile-card-detail">
                        <span class="detail-label">Date of Birth:</span>
                        <span class="detail-value">${formattedDob}</span>
                    </div>
                    <div class="actress-profile-card-detail">
                        <span class="detail-label">Age:</span>
                        <span class="detail-value">${age} yrs</span>
                    </div>
                    <div class="actress-profile-card-detail">
                        <span class="detail-label">Debut Date:</span>
                        <span class="detail-value">${formattedDebut}</span>
                    </div>
                    <div class="actress-profile-card-detail">
                        <span class="detail-label">Debut Age:</span>
                        <span class="detail-value">${debutAge} yrs</span>
                    </div>
                    <div class="actress-profile-card-detail">
                        <span class="detail-label">Measurements:</span>
                        <span class="detail-value">${actressData.measurements || 'N/A'}</span>
                    </div>
                    <div class="actress-profile-card-detail">
                        <span class="detail-label">Cup Size:</span>
                        <span class="detail-value">${actressData.cup || 'N/A'}</span>
                    </div>
                    <div class="actress-profile-card-detail">
                        <span class="detail-label">Height:</span>
                        <span class="detail-value">${actressData.height || 'N/A'} cm</span>
                    </div>
                </div>
                ${actressData.javguru ? `
                    <a href="${actressData.javguru}" target="_blank" class="javguru-profile-btn">
                        <i class="fas fa-external-link-alt"></i> Visit JAVguru
                    </a>
                ` : ''}
            </div>
            <div class="actress-profile-card-image">
                <img src="${actressData.image}" alt="${actressData.name}" onerror="this.onerror=null; this.src='https://via.placeholder.com/400x600/7c3aed/ffffff?text=${encodeURIComponent(actressData.name)}'">
            </div>
        </div>
    `;
}

// Render all selected actress profile cards (1 column, full width, horizontal)
function renderActressProfileCards(container) {
    if (!container) return;
    
    // Remove existing actress cards if any
    const existingCards = container.querySelectorAll('.actress-profile-cards-wrapper');
    existingCards.forEach(card => card.remove());
    
    if (selectedFilters.actress.length === 0) return;
    
    const wrapper = document.createElement('div');
    wrapper.className = 'actress-profile-cards-wrapper';
    
    // Create a card for each selected actress (stacked vertically)
    selectedFilters.actress.forEach(actressName => {
        const cardHTML = createActressProfileCard(actressName);
        if (cardHTML) {
            const cardContainer = document.createElement('div');
            cardContainer.className = 'actress-profile-card-container';
            cardContainer.innerHTML = cardHTML;
            wrapper.appendChild(cardContainer);
        }
    });
    
    // Insert at the very beginning of the container
    container.insertBefore(wrapper, container.firstChild);
}

// Initialize the app
function init() {
    console.log('Initializing app...');
    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            currentTheme = 'dark';
        }
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        toggleTheme();
    }
    
    document.querySelectorAll('.sort-option').forEach(option => {
        option.classList.remove('active');
        if (option.dataset.sort === 'shuffle') {
            option.classList.add('active');
        }
    });
    
    loadFilterData();
    loadVideos();
    loadAlbums();
    loadPictures();
    setupEventListeners();
    updatePagination();
    
    console.log('App initialized');
}

function setupEventListeners() {
    console.log('Setting up event listeners...');
    
    if (themeToggle) {
        themeToggle.removeEventListener('click', toggleTheme);
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    if (searchInput) {
        searchInput.removeEventListener('input', handleSearch);
        searchInput.removeEventListener('keypress', handleSearchKeyPress);
        searchInput.addEventListener('input', handleSearch);
        searchInput.addEventListener('keypress', handleSearchKeyPress);
    }
    
    if (sortBtn) {
        sortBtn.removeEventListener('click', toggleSortMenu);
        sortBtn.addEventListener('click', toggleSortMenu);
    }
    
    document.querySelectorAll('.sort-option').forEach(option => {
        option.removeEventListener('click', handleSortChange);
        option.addEventListener('click', handleSortChange);
    });
    
    tabs.forEach(tab => {
        tab.removeEventListener('click', handleTabChange);
        tab.addEventListener('click', handleTabChange);
    });
    
    if (filtersBtn) {
        filtersBtn.removeEventListener('click', openFilterModal);
        filtersBtn.addEventListener('click', openFilterModal);
    }
    
    if (closeVideoModal) {
        closeVideoModal.removeEventListener('click', closeVideoModalHandler);
        closeVideoModal.addEventListener('click', closeVideoModalHandler);
    }
    
    if (closeFilterModal) {
        closeFilterModal.removeEventListener('click', closeFilterModalHandler);
        closeFilterModal.addEventListener('click', closeFilterModalHandler);
    }
    
    if (closeAlbumModal) {
        closeAlbumModal.removeEventListener('click', closeAlbumModalHandler);
        closeAlbumModal.addEventListener('click', closeAlbumModalHandler);
    }
    
    if (closeImageModal) {
        closeImageModal.removeEventListener('click', closeImageModalHandler);
        closeImageModal.addEventListener('click', closeImageModalHandler);
    }
    
    if (prevImageBtn) {
        prevImageBtn.removeEventListener('click', prevImageHandler);
        prevImageBtn.addEventListener('click', prevImageHandler);
    }
    
    if (nextImageBtn) {
        nextImageBtn.removeEventListener('click', nextImageHandler);
        nextImageBtn.addEventListener('click', nextImageHandler);
    }
    
    [videoModal, filterModal, albumModal, imageModal].forEach(modal => {
        if (modal) {
            modal.removeEventListener('click', modalOutsideClick);
            modal.addEventListener('click', modalOutsideClick);
        }
    });
    
    document.removeEventListener('click', documentClickHandler);
    document.addEventListener('click', documentClickHandler);
    
    if (toggleDesc) {
        toggleDesc.removeEventListener('click', toggleDescription);
        toggleDesc.addEventListener('click', toggleDescription);
    }
    
    if (previewBtn) {
        previewBtn.removeEventListener('click', openPreviewPage);
        previewBtn.addEventListener('click', openPreviewPage);
    }
    
    if (trailerBtn) {
        trailerBtn.removeEventListener('click', trailerClickHandler);
        trailerBtn.addEventListener('click', trailerClickHandler);
    }
    
    if (videoBtn) {
        videoBtn.removeEventListener('click', videoClickHandler);
        videoBtn.addEventListener('click', videoClickHandler);
    }
    
    if (previewBackBtn) {
        previewBackBtn.removeEventListener('click', closePreviewPage);
        previewBackBtn.addEventListener('click', closePreviewPage);
    }
    
    if (alsoStarredPrev) {
        alsoStarredPrev.removeEventListener('click', alsoStarredPrevHandler);
        alsoStarredPrev.addEventListener('click', alsoStarredPrevHandler);
    }
    
    if (alsoStarredNext) {
        alsoStarredNext.removeEventListener('click', alsoStarredNextHandler);
        alsoStarredNext.addEventListener('click', alsoStarredNextHandler);
    }
    
    if (youMayLikePrev) {
        youMayLikePrev.removeEventListener('click', youMayLikePrevHandler);
        youMayLikePrev.addEventListener('click', youMayLikePrevHandler);
    }
    
    if (youMayLikeNext) {
        youMayLikeNext.removeEventListener('click', youMayLikeNextHandler);
        youMayLikeNext.addEventListener('click', youMayLikeNextHandler);
    }
    
    if (videosPrevBtn) {
        videosPrevBtn.removeEventListener('click', videosPrevHandler);
        videosPrevBtn.addEventListener('click', videosPrevHandler);
    }
    
    if (videosNextBtn) {
        videosNextBtn.removeEventListener('click', videosNextHandler);
        videosNextBtn.addEventListener('click', videosNextHandler);
    }
    
    if (albumsPrevBtn) {
        albumsPrevBtn.removeEventListener('click', albumsPrevHandler);
        albumsPrevBtn.addEventListener('click', albumsPrevHandler);
    }
    
    if (albumsNextBtn) {
        albumsNextBtn.removeEventListener('click', albumsNextHandler);
        albumsNextBtn.addEventListener('click', albumsNextHandler);
    }
    
    if (picturesPrevBtn) {
        picturesPrevBtn.removeEventListener('click', picturesPrevHandler);
        picturesPrevBtn.addEventListener('click', picturesPrevHandler);
    }
    
    if (picturesNextBtn) {
        picturesNextBtn.removeEventListener('click', picturesNextHandler);
        picturesNextBtn.addEventListener('click', picturesNextHandler);
    }
    
    filterTabs.forEach(tab => {
        tab.removeEventListener('click', handleFilterTabChange);
        tab.addEventListener('click', handleFilterTabChange);
    });
    
    document.querySelectorAll('.filter-search-input').forEach(input => {
        input.removeEventListener('input', handleFilterSearch);
        input.addEventListener('input', handleFilterSearch);
    });
    
    document.querySelectorAll('.option-item').forEach(item => {
        item.removeEventListener('click', handleOptionSelect);
        item.addEventListener('click', handleOptionSelect);
    });
    
    document.querySelectorAll('.col-btn').forEach(btn => {
        btn.removeEventListener('click', handleColumnChange);
        btn.addEventListener('click', handleColumnChange);
    });
    
    setupCarouselTouch();
    
    if (modalPoster) {
        modalPoster.removeEventListener('click', posterClickHandler);
        modalPoster.addEventListener('click', posterClickHandler);
    }
    
    if (videoThumbnailContainer) {
        videoThumbnailContainer.removeEventListener('click', thumbnailContainerClickHandler);
        videoThumbnailContainer.addEventListener('click', thumbnailContainerClickHandler);
    }
    
    // Add click handler for modal code
    if (modalCode) {
        modalCode.removeEventListener('click', handleCodeClick);
        modalCode.addEventListener('click', handleCodeClick);
    }
}

// Handle code click to filter by code
function handleCodeClick(e) {
    e.preventDefault();
    e.stopPropagation();
    const code = modalCode.textContent;
    if (code && code !== 'N/A') {
        if (searchInput) {
            searchInput.value = code;
            currentSearchTerm = code;
            resetPageForActiveTab();
            renderCurrentTab();
            updatePagination();
            closeModal(videoModal);
            showNotification(`Filtering by code: ${code}`);
        }
    }
}

function handleColumnChange(e) {
    const cols = parseInt(e.currentTarget.dataset.cols);
    currentActressCols = cols;
    
    document.querySelectorAll('.col-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    e.currentTarget.classList.add('active');
    
    const actressGrid = document.getElementById('actressGrid');
    if (actressGrid) {
        actressGrid.classList.remove('cols-1', 'cols-2', 'cols-3');
        actressGrid.classList.add(`cols-${cols}`);
    }
}

// Handle album images column change
function handleAlbumColChange(e) {
    const cols = parseInt(e.currentTarget.dataset.cols);
    currentAlbumCols = cols;
    
    document.querySelectorAll('.album-col-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    e.currentTarget.classList.add('active');
    
    const albumImagesGrid = document.getElementById('albumImagesGrid');
    if (albumImagesGrid) {
        albumImagesGrid.classList.remove('cols-1', 'cols-2', 'cols-3');
        albumImagesGrid.classList.add(`cols-${cols}`);
    }
}

function prevImageHandler() {
    if (currentAlbumImages.length === 0) return;
    currentImageIndex = (currentImageIndex - 1 + currentAlbumImages.length) % currentAlbumImages.length;
    updateFullscreenImage();
}

function nextImageHandler() {
    if (currentAlbumImages.length === 0) return;
    currentImageIndex = (currentImageIndex + 1) % currentAlbumImages.length;
    updateFullscreenImage();
}

function updateFullscreenImage() {
    if (fullscreenImage && currentAlbumImages[currentImageIndex]) {
        fullscreenImage.src = currentAlbumImages[currentImageIndex];
        
        if (currentPictureDataForModal && currentAlbumImages.length === 1) {
            updatePictureModalInfo(currentPictureDataForModal);
        }
    }
}

// Update picture modal info
function updatePictureModalInfo(picture) {
    const existingInfo = document.querySelector('.picture-info-section');
    if (existingInfo) {
        existingInfo.remove();
    }
    
    const infoSection = document.createElement('div');
    infoSection.className = 'picture-info-section';
    infoSection.innerHTML = `
        <div class="picture-actress-name">
            <i class="fas fa-user"></i> ${picture.actress}
        </div>
        <div class="picture-tags">
            ${picture.tags.map(tag => `<span class="picture-tag">#${tag}</span>`).join('')}
        </div>
    `;
    
    const modalContainer = document.querySelector('#imageModal .modal-container');
    if (modalContainer) {
        const imageDiv = modalContainer.querySelector('div[style*="display: flex; justify-content: center;"]');
        if (imageDiv && !modalContainer.querySelector('.picture-info-section')) {
            imageDiv.parentNode.insertBefore(infoSection, imageDiv.nextSibling);
        }
    }
}

function handleSearchKeyPress(e) {
    if (e.key === 'Enter') performSearch();
}

function closeVideoModalHandler() {
    closeModal(videoModal);
}

function closeFilterModalHandler() {
    closeModal(filterModal);
}

function closeAlbumModalHandler() {
    closeModal(albumModal);
}

function closeImageModalHandler() {
    closeModal(imageModal);
    currentAlbumImages = [];
    currentImageIndex = 0;
    currentPictureDataForModal = null;
    const existingInfo = document.querySelector('.picture-info-section');
    if (existingInfo) existingInfo.remove();
}

function modalOutsideClick(e) {
    if (e.target === this) closeModal(this);
}

function documentClickHandler(e) {
    if (sortBtn && sortMenu && !sortBtn.contains(e.target) && !sortMenu.contains(e.target)) {
        sortMenu.classList.remove('active');
    }
}

function trailerClickHandler() {
    playVideo('trailer');
    setTimeout(() => {
        if (videoThumbnailContainer) {
            smoothScrollToTop(videoThumbnailContainer);
        }
    }, 100);
}

function videoClickHandler() {
    playVideo('full');
    setTimeout(() => {
        if (videoThumbnailContainer) {
            smoothScrollToTop(videoThumbnailContainer);
        }
    }, 100);
}

function alsoStarredPrevHandler() {
    scrollCarousel('alsoStarred', -1);
}

function alsoStarredNextHandler() {
    scrollCarousel('alsoStarred', 1);
}

function youMayLikePrevHandler() {
    scrollCarousel('youMayLike', -1);
}

function youMayLikeNextHandler() {
    scrollCarousel('youMayLike', 1);
}

function videosPrevHandler() {
    changePage('videos', -1);
}

function videosNextHandler() {
    changePage('videos', 1);
}

function albumsPrevHandler() {
    changePage('albums', -1);
}

function albumsNextHandler() {
    changePage('albums', 1);
}

function picturesPrevHandler() {
    changePage('pictures', -1);
}

function picturesNextHandler() {
    changePage('pictures', 1);
}

function posterClickHandler(e) {
    e.stopPropagation();
}

function thumbnailContainerClickHandler(e) {
    if (isVideoPlaying && (e.target === videoPlayer || e.target === videoFrame || (videoPlayer && videoPlayer.contains(e.target)))) {
        e.stopPropagation();
    }
}

function toggleTheme() {
    const body = document.body;
    
    if (currentTheme === 'light') {
        body.classList.add('dark-mode');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        currentTheme = 'dark';
    } else {
        body.classList.remove('dark-mode');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        currentTheme = 'light';
    }
    
    localStorage.setItem('theme', currentTheme);
}

function disableBodyScroll() {
    document.body.classList.add('modal-open');
}

function enableBodyScroll() {
    document.body.classList.remove('modal-open');
}

function openModal(modal) {
    if (modal) {
        modal.classList.add('active');
        disableBodyScroll();
    }
}

function closeModal(modal) {
    if (modal) {
        modal.classList.remove('active');
        enableBodyScroll();
        
        if (modal === videoModal) {
            resetVideoPlayer();
            currentVideoForSuggestions = null;
        }
    }
}

function resetVideoPlayer() {
    if (videoFrame) videoFrame.src = '';
    if (modalThumb) modalThumb.style.display = 'block';
    if (videoPlayer) videoPlayer.style.display = 'none';
    isVideoPlaying = false;
    currentVideoPlayerType = null;
}

function toggleSortMenu() {
    if (sortMenu) sortMenu.classList.toggle('active');
}

function handleSortChange(e) {
    const sortValue = e.currentTarget.dataset.sort;
    
    document.querySelectorAll('.sort-option').forEach(option => {
        option.classList.remove('active');
    });
    e.currentTarget.classList.add('active');
    
    currentSort = sortValue;
    if (sortMenu) sortMenu.classList.remove('active');
    
    resetPageForActiveTab();
    renderCurrentTab();
    updatePagination();
}

function resetPageForActiveTab() {
    if (activeTab === 'videos') currentVideoPage = 1;
    if (activeTab === 'albums') currentAlbumPage = 1;
    if (activeTab === 'pictures') currentPicturePage = 1;
}

function handleTabChange(e) {
    const tabId = e.currentTarget.dataset.tab;
    
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });
    e.currentTarget.classList.add('active');
    
    contentSections.forEach(section => {
        section.classList.remove('active');
    });
    const targetSection = document.getElementById(`${tabId}Section`);
    if (targetSection) targetSection.classList.add('active');
    
    activeTab = tabId;
    
    updatePagination();
    renderCurrentTab();
}

function handleSearch() {
    currentSearchTerm = searchInput.value.trim();
    
    if (!currentSearchTerm) {
        resetPageForActiveTab();
        renderCurrentTab();
        updatePagination();
    }
}

function performSearch() {
    if (currentSearchTerm) {
        resetPageForActiveTab();
        renderCurrentTab();
        updatePagination();
        showNotification(`Search results for "${currentSearchTerm}"`);
    }
}

function toggleDescription() {
    if (modalDesc && toggleDesc) {
        modalDesc.classList.toggle('expanded');
        toggleDesc.textContent = modalDesc.classList.contains('expanded') ? 'Show Less' : 'Show More';
    }
}

function openPreviewPage() {
    if (mainModalContent && previewPage) {
        mainModalContent.style.display = 'none';
        previewPage.style.display = 'block';
    }
}

function closePreviewPage() {
    if (previewPage && mainModalContent) {
        previewPage.style.display = 'none';
        mainModalContent.style.display = 'block';
    }
}

function getGoogleDrivePreviewUrl(url) {
    if (!url || !url.includes('drive.google.com')) return null;
    
    let match = url.match(/\/d\/([^\/?]+)/);
    if (!match) {
        match = url.match(/[?&]id=([^&]+)/);
    }
    if (!match) {
        match = url.match(/[a-zA-Z0-9_-]{28,}/);
    }
    
    if (!match) {
        console.warn('Invalid Google Drive link format');
        return null;
    }
    
    const fileId = match[1] || match[0];
    return `https://drive.google.com/file/d/${fileId}/preview`;
}

function getVideoEmbedUrl(url) {
    if (!url) return '';
    
    if (url.includes('drive.google.com')) {
        const previewUrl = getGoogleDrivePreviewUrl(url);
        if (previewUrl) return previewUrl;
    }
    
    if (url.includes('youtube.com/watch') || url.includes('youtu.be')) {
        let videoId = '';
        if (url.includes('youtube.com/watch')) {
            try {
                videoId = new URL(url).searchParams.get('v');
            } catch (e) {
                const match = url.match(/[?&]v=([^&]+)/);
                if (match) videoId = match[1];
            }
        } else if (url.includes('youtu.be')) {
            videoId = url.split('youtu.be/')[1]?.split('?')[0];
        }
        
        if (videoId) {
            return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
        }
    }
    
    if (url.includes('youtube.com/shorts/')) {
        const videoId = url.split('shorts/')[1]?.split('?')[0];
        if (videoId) {
            return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
        }
    }
    
    if (url.includes('vimeo.com')) {
        const videoId = url.split('vimeo.com/')[1]?.split('?')[0];
        if (videoId) {
            return `https://player.vimeo.com/video/${videoId}?autoplay=1`;
        }
    }
    
    if (url.includes('dailymotion.com')) {
        const videoId = url.split('dailymotion.com/video/')[1]?.split('?')[0];
        if (videoId) {
            return `https://www.dailymotion.com/embed/video/${videoId}?autoplay=1`;
        }
    }
    
    if (url.includes('embed') || url.includes('preview') || url.includes('player')) {
        if (url.includes('?')) {
            return url + '&autoplay=1';
        } else {
            return url + '?autoplay=1';
        }
    }
    
    if (url.includes('?')) {
        return url + '&autoplay=1';
    } else {
        return url + '?autoplay=1';
    }
}

function playVideo(type) {
    if (!videoThumbnailContainer || !currentVideoForSuggestions) return;
    
    const thumbnail = videoThumbnailContainer.querySelector('img');
    const player = videoThumbnailContainer.querySelector('.video-player');
    
    if (!thumbnail || !player || !videoFrame) return;
    
    if (isVideoPlaying) {
        videoFrame.src = '';
    }
    
    let videoUrl = '';
    if (type === 'trailer') {
        videoUrl = currentVideoForSuggestions.trailerUrl;
        console.log('Playing trailer:', videoUrl);
    } else if (type === 'full') {
        videoUrl = currentVideoForSuggestions.videoUrl;
        console.log('Playing full video:', videoUrl);
    }
    
    if (!videoUrl) {
        showNotification(`${type === 'trailer' ? 'Trailer' : 'Video'} URL not available`);
        return;
    }
    
    const embedUrl = getVideoEmbedUrl(videoUrl);
    videoFrame.src = embedUrl;
    
    thumbnail.style.display = 'none';
    player.style.display = 'block';
    isVideoPlaying = true;
    currentVideoPlayerType = type;
    
    console.log('Playing video with embed URL:', embedUrl);
}

function handleFilterTabChange(e) {
    const tabId = e.currentTarget.dataset.filterTab;
    
    filterTabs.forEach(tab => {
        tab.classList.remove('active');
    });
    e.currentTarget.classList.add('active');
    
    filterSections.forEach(section => {
        section.classList.remove('active');
    });
    const targetSection = document.getElementById(`${tabId}Filter`);
    if (targetSection) targetSection.classList.add('active');
}

function handleFilterSearch(e) {
    const filterType = e.currentTarget.dataset.filterType;
    const searchTerm = e.currentTarget.value.toLowerCase();
    
    const gridId = `${filterType}Grid`;
    const grid = document.getElementById(gridId);
    
    if (grid) {
        const items = grid.querySelectorAll('.filter-item');
        items.forEach(item => {
            const nameElement = item.querySelector('.filter-name');
            if (nameElement) {
                const name = nameElement.textContent.toLowerCase();
                item.style.display = name.includes(searchTerm) ? 'block' : 'none';
            }
        });
    }
}

function handleOptionSelect(e) {
    e.preventDefault();
    e.stopPropagation();
    
    const filterType = e.currentTarget.dataset.filterType;
    const value = e.currentTarget.dataset.value;
    
    if (!filterType || !value) return;
    
    if (selectedFilters[filterType].includes(value)) {
        selectedFilters[filterType] = selectedFilters[filterType].filter(v => v !== value);
        e.currentTarget.classList.remove('selected');
    } else {
        selectedFilters[filterType].push(value);
        e.currentTarget.classList.add('selected');
    }
    
    applyFilterChanges();
}

function selectFilterItem(filterType, value) {
    if (!filterType || !value) return;
    
    if (selectedFilters[filterType].includes(value)) {
        selectedFilters[filterType] = selectedFilters[filterType].filter(v => v !== value);
    } else {
        selectedFilters[filterType].push(value);
    }
    
    updateFilterItemUI(filterType, value);
    applyFilterChanges();
}

function updateFilterItemUI(filterType, value) {
    const isSelected = selectedFilters[filterType].includes(value);
    
    const filterItems = document.querySelectorAll(`.filter-item[data-value="${value}"]`);
    filterItems.forEach(item => {
        if (isSelected) {
            item.classList.add('selected');
        } else {
            item.classList.remove('selected');
        }
    });
    
    const optionItems = document.querySelectorAll(`.option-item[data-filter-type="${filterType}"][data-value="${value}"]`);
    optionItems.forEach(item => {
        if (isSelected) {
            item.classList.add('selected');
        } else {
            item.classList.remove('selected');
        }
    });
}

function applyFilterChanges() {
    resetPageForActiveTab();
    updateActiveFilters();
    renderSelectedFilters();
    renderCurrentTab();
    updatePagination();
}

function removeSelectedFilter(filterType, value) {
    if (!filterType || !value) return;
    
    selectedFilters[filterType] = selectedFilters[filterType].filter(v => v !== value);
    updateFilterItemUI(filterType, value);
    applyFilterChanges();
}

function updateActiveFilters() {
    activeFilters = [];
    
    Object.keys(selectedFilters).forEach(filterType => {
        selectedFilters[filterType].forEach(value => {
            let displayName = value;
            
            if (filterType === 'version' || filterType === 'group') {
                displayName = value.charAt(0).toUpperCase() + value.slice(1);
            }
            
            activeFilters.push(`${filterType.charAt(0).toUpperCase() + filterType.slice(1)}: ${displayName}`);
        });
    });
    
    renderActiveFilters();
}

function removeFilter(filterText) {
    const match = filterText.match(/^(\w+):\s*(.+)$/);
    if (match) {
        const filterType = match[1].toLowerCase();
        let value = match[2];
        
        if (filterType === 'version' || filterType === 'group') {
            value = value.toLowerCase();
        }
        
        removeSelectedFilter(filterType, value);
    } else {
        activeFilters = activeFilters.filter(filter => filter !== filterText);
        renderActiveFilters();
    }
}

function renderActiveFilters() {
    if (!activeFiltersContainer) return;
    
    activeFiltersContainer.innerHTML = '';
    
    activeFilters.forEach(filter => {
        const filterElement = document.createElement('div');
        filterElement.className = 'filter-tag';
        
        const safeFilter = filter.replace(/'/g, "\\'");
        filterElement.innerHTML = `
            <span>${filter}</span>
            <span class="remove" onclick="window.removeFilter('${safeFilter}')">
                <i class="fas fa-times"></i>
            </span>
        `;
        
        activeFiltersContainer.appendChild(filterElement);
    });
    
    activeFiltersContainer.style.display = activeFilters.length === 0 ? 'none' : 'flex';
}

function renderSelectedFilters() {
    if (!selectedFiltersContainer) return;
    
    selectedFiltersContainer.innerHTML = '';
    
    let hasSelectedFilters = false;
    
    Object.keys(selectedFilters).forEach(filterType => {
        if (selectedFilters[filterType].length > 0) {
            hasSelectedFilters = true;
            
            selectedFilters[filterType].forEach(value => {
                let displayName = value;
                
                if (filterType === 'version' || filterType === 'group') {
                    displayName = value.charAt(0).toUpperCase() + value.slice(1);
                }
                
                const filterItem = document.createElement('div');
                filterItem.className = 'selected-filter-item';
                filterItem.innerHTML = `
                    <span>${filterType.charAt(0).toUpperCase() + filterType.slice(1)}: ${displayName}</span>
                    <button class="remove-selected" data-filter-type="${filterType}" data-value="${value}">
                        <i class="fas fa-times"></i>
                    </button>
                `;
                
                const removeBtn = filterItem.querySelector('.remove-selected');
                if (removeBtn) {
                    removeBtn.addEventListener('click', (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        removeSelectedFilter(filterType, value);
                    });
                }
                
                selectedFiltersContainer.appendChild(filterItem);
            });
        }
    });
    
    selectedFiltersContainer.style.display = hasSelectedFilters ? 'flex' : 'none';
}

function shuffleArray(array) {
    if (!array || !Array.isArray(array)) return [];
    
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function renderAllFilterItems() {
    Object.keys(filterData).forEach(filterType => {
        if (filterType === 'tokens') {
            renderFilterItems('label', true);
        } else {
            renderFilterItems(filterType, true);
        }
    });
}

function renderFilterItems(filterType, shouldShuffle = false) {
    let gridId = `${filterType}Grid`;
    if (filterType === 'label') gridId = 'labelGrid';
    
    const grid = document.getElementById(gridId);
    let filterItemsData = filterType === 'label' ? filterData.tokens : filterData[filterType];
    
    if (!grid || !filterItemsData) return;
    
    grid.innerHTML = '';
    
    const selectedItems = selectedFilters[filterType] || [];
    let filterItems = [...filterItemsData];
    
    if (shouldShuffle) {
        filterItems = shuffleArray(filterItems);
    }
    
    selectedItems.forEach(value => {
        const itemData = filterItems.find(item => item.name === value);
        if (itemData) {
            const item = createFilterItem(filterType, itemData, true);
            grid.appendChild(item);
        }
    });
    
    filterItems.forEach(itemData => {
        if (!selectedItems.includes(itemData.name)) {
            const item = createFilterItem(filterType, itemData, false);
            grid.appendChild(item);
        }
    });
}

function createFilterItem(filterType, itemData, isSelected) {
    const item = document.createElement('div');
    item.className = `filter-item ${isSelected ? 'selected' : ''}`;
    item.dataset.value = itemData.name;
    
    let aspectRatio = '1/1';
    if (filterType === 'actress') aspectRatio = '2/3';
    if (filterType === 'label') aspectRatio = '3/2';
    if (filterType === 'series') aspectRatio = '16/9';
    
    const placeholderText = encodeURIComponent(itemData.name);
    
    let html = `
        <img src="${itemData.image || ''}" alt="${itemData.name}" class="filter-image" style="--ratio: ${aspectRatio};" onerror="this.onerror=null; this.src='https://via.placeholder.com/300x300/7c3aed/ffffff?text=${placeholderText}'">
        <div class="filter-name">${itemData.name}</div>
    `;
    
    // Add JAVguru button for actress items with proper styling
    if (filterType === 'actress' && itemData.javguru) {
        html += `
            <a href="${itemData.javguru}" target="_blank" class="javguru-btn" onclick="event.stopPropagation();">
                <i class="fas fa-external-link-alt"></i> JAVguru
            </a>
        `;
    }
    
    item.innerHTML = html;
    
    item.addEventListener('click', (e) => {
        if (e.target.closest('.javguru-btn')) return;
        e.preventDefault();
        e.stopPropagation();
        selectFilterItem(filterType, itemData.name);
    });
    
    return item;
}

function loadFilterData(shouldShuffle = false) {
    Object.keys(filterData).forEach(filterType => {
        if (filterType === 'tokens') {
            renderFilterItems('label', shouldShuffle);
        } else {
            renderFilterItems(filterType, shouldShuffle);
        }
    });
    
    renderSelectedFilters();
}

function openFilterModal() {
    renderAllFilterItems();
    openModal(filterModal);
}

function changePage(contentType, direction) {
    if (contentType === 'videos') {
        currentVideoPage += direction;
        loadVideos();
    } else if (contentType === 'albums') {
        currentAlbumPage += direction;
        loadAlbums();
    } else if (contentType === 'pictures') {
        currentPicturePage += direction;
        loadPictures();
    }
    
    updatePagination();
    
    const section = document.getElementById(`${contentType}Section`);
    if (section) {
        smoothScrollToTop(section);
    }
}

function updatePagination() {
    const totalVideoPages = Math.max(1, Math.ceil(getFilteredVideos().length / itemsPerPage.videos));
    const totalAlbumPages = Math.max(1, Math.ceil(getFilteredAlbums().length / itemsPerPage.albums));
    const totalPicturePages = Math.max(1, Math.ceil(getFilteredPictures().length / itemsPerPage.pictures));
    
    if (currentVideoPage > totalVideoPages) currentVideoPage = totalVideoPages;
    if (currentAlbumPage > totalAlbumPages) currentAlbumPage = totalAlbumPages;
    if (currentPicturePage > totalPicturePages) currentPicturePage = totalPicturePages;
    
    if (videosPageNumber) videosPageNumber.textContent = currentVideoPage;
    if (videosPrevBtn) videosPrevBtn.disabled = currentVideoPage <= 1;
    if (videosNextBtn) videosNextBtn.disabled = currentVideoPage >= totalVideoPages;
    
    if (albumsPageNumber) albumsPageNumber.textContent = currentAlbumPage;
    if (albumsPrevBtn) albumsPrevBtn.disabled = currentAlbumPage <= 1;
    if (albumsNextBtn) albumsNextBtn.disabled = currentAlbumPage >= totalAlbumPages;
    
    if (picturesPageNumber) picturesPageNumber.textContent = currentPicturePage;
    if (picturesPrevBtn) picturesPrevBtn.disabled = currentPicturePage <= 1;
    if (picturesNextBtn) picturesNextBtn.disabled = currentPicturePage >= totalPicturePages;
}

function getFilteredVideos() {
    let filteredVideos = [...videoData];
    
    if (currentSearchTerm) {
        const searchLower = currentSearchTerm.toLowerCase();
        filteredVideos = filteredVideos.filter(video => 
            (video.title && video.title.toLowerCase().includes(searchLower)) ||
            (video.actress && video.actress.toLowerCase().includes(searchLower)) ||
            (video.code && video.code.toLowerCase().includes(searchLower)) ||
            (video.tags && video.tags.some(tag => tag.toLowerCase().includes(searchLower)))
        );
    }
    
    Object.keys(selectedFilters).forEach(filterType => {
        if (selectedFilters[filterType].length > 0) {
            filteredVideos = filteredVideos.filter(video => {
                switch(filterType) {
                    case 'actress':
                        if (!video.actress) return false;
                        const videoActresses = video.actress.split(',').map(a => a.trim());
                        return selectedFilters[filterType].some(selected => 
                            videoActresses.includes(selected)
                        );
                    
                    case 'tags':
                        if (!video.tags || !Array.isArray(video.tags)) return false;
                        return selectedFilters[filterType].some(selected => 
                            video.tags.includes(selected)
                        );
                    
                    case 'studios':
                        return video.studio && selectedFilters[filterType].includes(video.studio);
                    
                    case 'label':
                        return video.token && selectedFilters[filterType].includes(video.token);
                    
                    case 'series':
                        return video.series && selectedFilters[filterType].includes(video.series);
                    
                    case 'version':
                        return video.version && selectedFilters[filterType].includes(video.version);
                    
                    case 'group':
                        return video.group && selectedFilters[filterType].includes(video.group.toLowerCase());
                    
                    default:
                        return true;
                }
            });
        }
    });
    
    return filteredVideos;
}

function getFilteredAlbums() {
    let filteredAlbums = [...albumData];
    
    if (currentSearchTerm) {
        const searchLower = currentSearchTerm.toLowerCase();
        filteredAlbums = filteredAlbums.filter(album => 
            (album.title && album.title.toLowerCase().includes(searchLower)) ||
            (album.actress && album.actress.toLowerCase().includes(searchLower)) ||
            (album.tags && album.tags.some(tag => tag.toLowerCase().includes(searchLower)))
        );
    }
    
    Object.keys(selectedFilters).forEach(filterType => {
        if (selectedFilters[filterType].length > 0) {
            filteredAlbums = filteredAlbums.filter(album => {
                switch(filterType) {
                    case 'actress':
                        if (!album.actress) return false;
                        const albumActresses = album.actress.split(',').map(a => a.trim());
                        return selectedFilters[filterType].some(selected => 
                            albumActresses.includes(selected)
                        );
                    
                    case 'tags':
                        if (!album.tags || !Array.isArray(album.tags)) return false;
                        return selectedFilters[filterType].some(selected => 
                            album.tags.includes(selected)
                        );
                    
                    default:
                        return true;
                }
            });
        }
    });
    
    return filteredAlbums;
}

function getFilteredPictures() {
    let filteredPictures = [...pictureData];
    
    if (currentSearchTerm) {
        const searchLower = currentSearchTerm.toLowerCase();
        filteredPictures = filteredPictures.filter(picture => 
            (picture.actress && picture.actress.toLowerCase().includes(searchLower)) ||
            (picture.tags && picture.tags.some(tag => tag.toLowerCase().includes(searchLower)))
        );
    }
    
    Object.keys(selectedFilters).forEach(filterType => {
        if (selectedFilters[filterType].length > 0) {
            filteredPictures = filteredPictures.filter(picture => {
                switch(filterType) {
                    case 'actress':
                        if (!picture.actress) return false;
                        const pictureActresses = picture.actress.split(',').map(a => a.trim());
                        return selectedFilters[filterType].some(selected => 
                            pictureActresses.includes(selected)
                        );
                    
                    case 'tags':
                        if (!picture.tags || !Array.isArray(picture.tags)) return false;
                        return selectedFilters[filterType].some(selected => 
                            picture.tags.includes(selected)
                        );
                    
                    default:
                        return true;
                }
            });
        }
    });
    
    return filteredPictures;
}

function sortItems(items, contentType) {
    if (!items || !Array.isArray(items)) return [];
    
    const sortedItems = [...items];
    
    switch(currentSort) {
        case 'shuffle':
            return shuffleArray(sortedItems);
            
        case 'latest':
            if (contentType === 'videos' || contentType === 'albums') {
                sortedItems.sort((a, b) => {
                    const dateA = a.release ? new Date(a.release) : new Date(0);
                    const dateB = b.release ? new Date(b.release) : new Date(0);
                    return dateB - dateA;
                });
            } else {
                sortedItems.sort((a, b) => (b.id || 0) - (a.id || 0));
            }
            break;
            
        case 'oldest':
            if (contentType === 'videos' || contentType === 'albums') {
                sortedItems.sort((a, b) => {
                    const dateA = a.release ? new Date(a.release) : new Date(0);
                    const dateB = b.release ? new Date(b.release) : new Date(0);
                    return dateA - dateB;
                });
            } else {
                sortedItems.sort((a, b) => (a.id || 0) - (b.id || 0));
            }
            break;
            
        case 'top-rated':
            if (contentType === 'videos') {
                sortedItems.sort((a, b) => (b.rating || 0) - (a.rating || 0));
            } else if (contentType === 'albums') {
                sortedItems.sort((a, b) => (b.pages || 0) - (a.pages || 0));
            }
            break;
            
        case 'most-viewed':
            if (contentType === 'videos') {
                sortedItems.sort((a, b) => (b.rating || 0) - (a.rating || 0));
            } else if (contentType === 'albums') {
                sortedItems.sort((a, b) => (b.pages || 0) - (a.pages || 0));
            }
            break;
    }
    
    return sortedItems;
}

function renderCurrentTab() {
    switch(activeTab) {
        case 'videos':
            loadVideos();
            break;
        case 'albums':
            loadAlbums();
            break;
        case 'pictures':
            loadPictures();
            break;
    }
}

function loadVideos() {
    if (!videosGrid) return;
    
    videosGrid.innerHTML = '';
    
    let filteredVideos = getFilteredVideos();
    filteredVideos = sortItems(filteredVideos, 'videos');
    
    const startIndex = (currentVideoPage - 1) * itemsPerPage.videos;
    const endIndex = startIndex + itemsPerPage.videos;
    const pageVideos = filteredVideos.slice(startIndex, endIndex);
    
    renderActressProfileCards(videosGrid);
    
    pageVideos.forEach(video => {
        const videoCard = createVideoCard(video);
        videosGrid.appendChild(videoCard);
    });
    
    if (pageVideos.length === 0 && selectedFilters.actress.length === 0) {
        videosGrid.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-video-slash"></i>
                <h3>No videos found</h3>
                <p>Try adjusting your search or filters</p>
            </div>
        `;
    }
}

function createVideoCard(video) {
    const videoCard = document.createElement('div');
    videoCard.className = 'video-card';
    
    const thumbnail = video.thumbnail || 'https://via.placeholder.com/300x200/7c3aed/ffffff?text=No+Image';
    const title = video.title || 'Untitled';
    const code = video.code || 'N/A';
    const version = video.version || 'Standard';
    const duration = video.duration || '0';
    const rating = video.rating ? video.rating.toFixed(1) : '0.0';
    
    videoCard.innerHTML = `
        <img src="${thumbnail}" alt="${title}" class="video-thumbnail" onerror="this.onerror=null; this.src='https://via.placeholder.com/300x200/7c3aed/ffffff?text=Thumbnail'">
        <div class="video-info">
            <h3 class="video-title">${title}</h3>
            <div class="video-meta">
                <div class="video-meta-item">
                    <i class="fas fa-hashtag"></i>
                    <span>${code}</span>
                </div>
                <div class="video-meta-item">
                    <i class="fas fa-layer-group"></i>
                    <span>${version}</span>
                </div>
                <div class="video-meta-item">
                    <i class="fas fa-clock"></i>
                    <span>${duration} min</span>
                </div>
                <div class="video-meta-item">
                    <i class="fas fa-star"></i>
                    <span>${rating}</span>
                </div>
            </div>
        </div>
    `;
    
    videoCard.addEventListener('click', () => {
        openVideoModal(video);
    });
    
    return videoCard;
}

function loadAlbums() {
    if (!albumsGrid) return;
    
    albumsGrid.innerHTML = '';
    
    let filteredAlbums = getFilteredAlbums();
    filteredAlbums = sortItems(filteredAlbums, 'albums');
    
    const startIndex = (currentAlbumPage - 1) * itemsPerPage.albums;
    const endIndex = startIndex + itemsPerPage.albums;
    const pageAlbums = filteredAlbums.slice(startIndex, endIndex);
    
    renderActressProfileCards(albumsGrid);
    
    pageAlbums.forEach(album => {
        const albumCard = createAlbumCard(album);
        albumsGrid.appendChild(albumCard);
    });
    
    if (pageAlbums.length === 0 && selectedFilters.actress.length === 0) {
        albumsGrid.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-book-open"></i>
                <h3>No albums found</h3>
                <p>Try adjusting your search or filters</p>
            </div>
        `;
    }
}

function createAlbumCard(album) {
    const albumCard = document.createElement('div');
    albumCard.className = 'album-card';
    
    const cover = album.cover || 'https://via.placeholder.com/300x400/8b5cf6/ffffff?text=No+Image';
    const title = album.title || 'Untitled';
    
    albumCard.innerHTML = `
        <img src="${cover}" alt="${title}" class="album-cover" onerror="this.onerror=null; this.src='https://via.placeholder.com/300x400/8b5cf6/ffffff?text=Album'">
        <div class="album-info">
            <h3 class="album-title">${title}</h3>
        </div>
    `;
    
    albumCard.addEventListener('click', () => {
        openAlbumModal(album);
    });
    
    return albumCard;
}

function loadPictures() {
    if (!picturesGrid) return;
    
    picturesGrid.innerHTML = '';
    
    let filteredPictures = getFilteredPictures();
    filteredPictures = sortItems(filteredPictures, 'pictures');
    
    const startIndex = (currentPicturePage - 1) * itemsPerPage.pictures;
    const endIndex = startIndex + itemsPerPage.pictures;
    const pagePictures = filteredPictures.slice(startIndex, endIndex);
    
    renderActressProfileCards(picturesGrid);
    
    pagePictures.forEach(picture => {
        const pictureCard = createPictureCard(picture);
        picturesGrid.appendChild(pictureCard);
    });
    
    if (pagePictures.length === 0 && selectedFilters.actress.length === 0) {
        picturesGrid.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-image"></i>
                <h3>No pictures found</h3>
                <p>Try adjusting your search or filters</p>
            </div>
        `;
    }
}

function createPictureCard(picture) {
    const pictureCard = document.createElement('div');
    pictureCard.className = 'picture-card';
    
    const image = picture.image || 'https://via.placeholder.com/300x375/a78bfa/ffffff?text=No+Image';
    
    pictureCard.innerHTML = `
        <img src="${image}" alt="Picture" class="picture-img" onerror="this.onerror=null; this.src='https://via.placeholder.com/300x375/a78bfa/ffffff?text=Picture'">
    `;
    
    pictureCard.addEventListener('click', () => {
        openImageModal(picture);
    });
    
    return pictureCard;
}

function getAlsoStarredVideos(currentVideo) {
    if (!currentVideo || !currentVideo.actress) return [];
    
    const currentActresses = currentVideo.actress.split(',').map(a => a.trim());
    const allVideos = [...videoData];
    
    const otherVideos = allVideos.filter(video => video.id !== currentVideo.id);
    
    const matchingVideos = otherVideos.filter(video => {
        if (!video.actress) return false;
        const videoActresses = video.actress.split(',').map(a => a.trim());
        return videoActresses.some(actress => currentActresses.includes(actress));
    });
    
    matchingVideos.sort((a, b) => {
        const aActresses = a.actress ? a.actress.split(',').map(act => act.trim()) : [];
        const bActresses = b.actress ? b.actress.split(',').map(act => act.trim()) : [];
        
        const aMatches = aActresses.filter(act => currentActresses.includes(act)).length;
        const bMatches = bActresses.filter(act => currentActresses.includes(act)).length;
        
        if (bMatches !== aMatches) {
            return bMatches - aMatches;
        }
        
        return (b.rating || 0) - (a.rating || 0);
    });
    
    return matchingVideos.slice(0, 10);
}

function getYouMayLikeVideos(currentVideo) {
    if (!currentVideo || !currentVideo.tags) return [];
    
    const allVideos = [...videoData];
    const otherVideos = allVideos.filter(video => video.id !== currentVideo.id);
    
    const videosWithScore = otherVideos.map(video => {
        const commonTags = video.tags ? video.tags.filter(tag => currentVideo.tags.includes(tag)).length : 0;
        const totalTags = new Set([...(video.tags || []), ...(currentVideo.tags || [])]).size;
        const similarityScore = totalTags > 0 ? commonTags / totalTags : 0;
        
        return {
            ...video,
            similarityScore
        };
    });
    
    videosWithScore.sort((a, b) => {
        if (b.similarityScore !== a.similarityScore) {
            return b.similarityScore - a.similarityScore;
        }
        return (b.rating || 0) - (a.rating || 0);
    });
    
    return videosWithScore.slice(0, 10).map(video => {
        const { similarityScore, ...videoData } = video;
        return videoData;
    });
}

function setupCarouselTouch() {
    const carousels = [alsoStarredCarousel, youMayLikeCarousel].filter(Boolean);
    
    carousels.forEach(carousel => {
        let isDown = false;
        let startX;
        let scrollLeft;
        
        carousel.addEventListener('mousedown', (e) => {
            isDown = true;
            carousel.classList.add('active');
            startX = e.pageX - carousel.offsetLeft;
            scrollLeft = carousel.scrollLeft;
        });
        
        carousel.addEventListener('mouseleave', () => {
            isDown = false;
            carousel.classList.remove('active');
        });
        
        carousel.addEventListener('mouseup', () => {
            isDown = false;
            carousel.classList.remove('active');
        });
        
        carousel.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - carousel.offsetLeft;
            const walk = (x - startX) * 2;
            carousel.scrollLeft = scrollLeft - walk;
        });
        
        carousel.addEventListener('touchstart', (e) => {
            isDown = true;
            startX = e.touches[0].pageX - carousel.offsetLeft;
            scrollLeft = carousel.scrollLeft;
        });
        
        carousel.addEventListener('touchend', () => {
            isDown = false;
        });
        
        carousel.addEventListener('touchmove', (e) => {
            if (!isDown) return;
            const x = e.touches[0].pageX - carousel.offsetLeft;
            const walk = (x - startX) * 2;
            carousel.scrollLeft = scrollLeft - walk;
        });
    });
}

function scrollCarousel(carouselId, direction) {
    const carousel = carouselId === 'alsoStarred' ? alsoStarredCarousel : youMayLikeCarousel;
    if (!carousel) return;
    
    const scrollAmount = 300;
    carousel.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}

function loadSuggestionCarousels(video) {
    if (!video) return;
    
    if (alsoStarredCarousel) alsoStarredCarousel.innerHTML = '';
    if (youMayLikeCarousel) youMayLikeCarousel.innerHTML = '';
    
    const alsoStarredVideos = getAlsoStarredVideos(video);
    const youMayLikeVideos = getYouMayLikeVideos(video);
    
    if (alsoStarredCarousel) {
        if (alsoStarredVideos.length > 0) {
            alsoStarredVideos.forEach(suggestedVideo => {
                const carouselItem = createCarouselItem(suggestedVideo, 'poster');
                alsoStarredCarousel.appendChild(carouselItem);
            });
        } else {
            alsoStarredCarousel.innerHTML = `
                <div class="carousel-empty">
                    <p>No other videos with the same actress(es)</p>
                </div>
            `;
        }
    }
    
    if (youMayLikeCarousel) {
        if (youMayLikeVideos.length > 0) {
            youMayLikeVideos.forEach(suggestedVideo => {
                const carouselItem = createCarouselItem(suggestedVideo, 'thumbnail');
                youMayLikeCarousel.appendChild(carouselItem);
            });
        } else {
            youMayLikeCarousel.innerHTML = `
                <div class="carousel-empty">
                    <p>No similar videos found</p>
                </div>
            `;
        }
    }
}

function createCarouselItem(video, type) {
    const carouselItem = document.createElement('div');
    carouselItem.className = `carousel-item ${type}`;
    
    const imageUrl = type === 'poster' 
        ? (video.poster || 'https://via.placeholder.com/300x450/7c3aed/ffffff?text=Poster')
        : (video.thumbnail || 'https://via.placeholder.com/300x200/7c3aed/ffffff?text=Thumbnail');
    
    const code = video.code || 'N/A';
    
    carouselItem.innerHTML = `
        <img src="${imageUrl}" alt="${video.title || ''}" onerror="this.onerror=null; this.src='https://via.placeholder.com/300x450/7c3aed/ffffff?text=Poster'">
        <div class="carousel-code">${code}</div>
    `;
    
    carouselItem.addEventListener('click', () => {
        closeModal(videoModal);
        setTimeout(() => {
            openVideoModal(video);
        }, 50);
    });
    
    return carouselItem;
}

function openVideoModal(video) {
    if (!video) return;
    
    console.log('Opening video modal for:', video.title);
    
    currentVideoForSuggestions = video;
    resetVideoPlayer();
    closePreviewPage();
    updateVideoModalContent(video);
    loadSuggestionCarousels(video);
    openModal(videoModal);
}

function updateVideoModalContent(video) {
    if (modalTitle) modalTitle.textContent = video.title || 'Untitled';
    if (modalDesc) modalDesc.textContent = video.description || '';
    if (modalCode) modalCode.textContent = video.code || 'N/A';
    
    if (modalThumb) {
        modalThumb.src = video.thumbnail || 'https://via.placeholder.com/600x400/7c3aed/ffffff?text=No+Image';
        modalThumb.alt = video.title || 'Video Thumbnail';
    }
    
    if (modalPoster) {
        modalPoster.src = video.poster || 'https://via.placeholder.com/300x450/7c3aed/ffffff?text=No+Image';
        modalPoster.alt = video.title || 'Video Poster';
    }
    
    if (modalRating) modalRating.textContent = video.rating ? video.rating.toFixed(1) : '0.0';
    if (modalStudio) modalStudio.textContent = video.studio || 'N/A';
    if (modalLabel) modalLabel.textContent = video.token || 'N/A';
    if (modalRelease) modalRelease.textContent = formatDate(video.release);
    if (modalDuration) modalDuration.textContent = video.duration || '0';
    if (modalVersions) modalVersions.textContent = video.version || 'Standard';
    if (modalGroup) modalGroup.textContent = video.group || 'N/A';
    if (modalViews) {
        const viewsRow = modalViews.closest('.meta-row');
        if (viewsRow) viewsRow.style.display = 'none';
    }
    if (modalSeries) modalSeries.textContent = video.series || 'N/A';
    
    if (modalDesc && toggleDesc) {
        modalDesc.classList.remove('expanded');
        toggleDesc.textContent = 'Show More';
    }
    
    updateModalTags(video);
    updateModalActresses(video);
    updateClickableMetadata(video);
    updatePreviewImages(video);
}

function updateModalTags(video) {
    if (!modalTags) return;
    
    modalTags.innerHTML = '';
    
    if (video.tags && video.tags.length > 0) {
        video.tags.forEach(tag => {
            const tagElement = document.createElement('div');
            tagElement.className = 'tag';
            tagElement.textContent = tag;
            tagElement.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                selectFilterItem('tags', tag);
                closeModal(videoModal);
            });
            modalTags.appendChild(tagElement);
        });
    }
}

function updateModalActresses(video) {
    if (!modalActress) return;
    
    modalActress.innerHTML = '';
    
    if (video.actress) {
        const actressNames = video.actress.split(',').map(name => name.trim());
        
        actressNames.forEach(actressName => {
            const actressData = filterData.actress ? filterData.actress.find(a => a.name === actressName) : null;
            const actressImg = actressData ? actressData.image : '';
            
            const actressElement = document.createElement('div');
            actressElement.className = 'actress';
            
            const actressImgElement = document.createElement('img');
            actressImgElement.src = actressImg;
            actressImgElement.alt = actressName;
            actressImgElement.onerror = function() {
                this.onerror = null;
                this.src = `https://via.placeholder.com/200x300/7c3aed/ffffff?text=${encodeURIComponent(actressName)}`;
            };
            
            const actressNameElement = document.createElement('span');
            actressNameElement.textContent = actressName;
            
            actressElement.appendChild(actressImgElement);
            actressElement.appendChild(actressNameElement);
            
            actressElement.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                selectFilterItem('actress', actressName);
                closeModal(videoModal);
            });
            
            modalActress.appendChild(actressElement);
        });
    }
}

function updateClickableMetadata(video) {
    if (modalSeries) {
        modalSeries.replaceWith(modalSeries.cloneNode(true));
        const newModalSeries = document.getElementById('modalSeries');
        if (newModalSeries && video.series) {
            newModalSeries.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                selectFilterItem('series', video.series);
                closeModal(videoModal);
            });
        }
    }
    
    if (modalStudio) {
        modalStudio.replaceWith(modalStudio.cloneNode(true));
        const newModalStudio = document.getElementById('modalStudio');
        if (newModalStudio && video.studio) {
            newModalStudio.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                selectFilterItem('studios', video.studio);
                closeModal(videoModal);
            });
        }
    }
    
    if (modalLabel) {
        modalLabel.replaceWith(modalLabel.cloneNode(true));
        const newModalLabel = document.getElementById('modalLabel');
        if (newModalLabel && video.token) {
            newModalLabel.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                selectFilterItem('label', video.token);
                closeModal(videoModal);
            });
        }
    }
    
    if (modalVersions) {
        modalVersions.replaceWith(modalVersions.cloneNode(true));
        const newModalVersions = document.getElementById('modalVersions');
        if (newModalVersions && video.version) {
            newModalVersions.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                selectFilterItem('version', video.version);
                closeModal(videoModal);
            });
        }
    }
    
    if (modalGroup) {
        modalGroup.replaceWith(modalGroup.cloneNode(true));
        const newModalGroup = document.getElementById('modalGroup');
        if (newModalGroup && video.group) {
            newModalGroup.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                selectFilterItem('group', video.group.toLowerCase());
                closeModal(videoModal);
            });
        }
    }
}

function updatePreviewImages(video) {
    if (!previewImagesFull) return;
    
    previewImagesFull.innerHTML = '';
    
    if (video.previews && video.previews.length > 0) {
        video.previews.forEach((preview, index) => {
            const previewImage = document.createElement('div');
            previewImage.className = 'preview-image-full';
            
            previewImage.innerHTML = `
                <img src="${preview}" alt="Preview ${index + 1}" onerror="this.onerror=null; this.src='https://via.placeholder.com/600x338/7c3aed/ffffff?text=Preview'">
            `;
            
            previewImagesFull.appendChild(previewImage);
        });
    } else {
        previewImagesFull.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-image"></i>
                <h3>No preview images available</h3>
            </div>
        `;
    }
}

function openAlbumModal(album) {
    if (!album) return;
    
    if (albumModalTitle) albumModalTitle.textContent = album.title || 'Untitled';
    
    if (albumModalTags) {
        albumModalTags.innerHTML = '';
        if (album.tags && album.tags.length > 0) {
            album.tags.forEach(tag => {
                const tagElement = document.createElement('div');
                tagElement.className = 'tag';
                tagElement.textContent = tag;
                tagElement.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    selectFilterItem('tags', tag);
                    closeModal(albumModal);
                });
                albumModalTags.appendChild(tagElement);
            });
        }
    }
    
    if (albumModalActress) {
        albumModalActress.innerHTML = '';
        if (album.actress) {
            const actressNames = album.actress.split(',').map(name => name.trim());
            
            actressNames.forEach(actressName => {
                const actressData = filterData.actress ? filterData.actress.find(a => a.name === actressName) : null;
                const actressImg = actressData ? actressData.image : '';
                
                const actressElement = document.createElement('div');
                actressElement.className = 'actress';
                
                const actressImgElement = document.createElement('img');
                actressImgElement.src = actressImg;
                actressImgElement.alt = actressName;
                actressImgElement.onerror = function() {
                    this.onerror = null;
                    this.src = `https://via.placeholder.com/200x300/8b5cf6/ffffff?text=${encodeURIComponent(actressName)}`;
                };
                
                const actressNameElement = document.createElement('span');
                actressNameElement.textContent = actressName;
                
                actressElement.appendChild(actressImgElement);
                actressElement.appendChild(actressNameElement);
                
                actressElement.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    selectFilterItem('actress', actressName);
                    closeModal(albumModal);
                });
                
                albumModalActress.appendChild(actressElement);
            });
        }
    }
    
    if (albumModalImageCount) {
        const totalImages = album.albumImages && album.albumImages.length ? album.albumImages.length + 1 : 1;
        albumModalImageCount.textContent = `${totalImages} images (including cover)`;
    }
    
    if (albumMainCover) {
        albumMainCover.src = album.cover || 'https://via.placeholder.com/600x800/8b5cf6/ffffff?text=No+Image';
        albumMainCover.alt = album.title || 'Album Cover';
    }
    
    if (albumImagesContainer) {
        albumImagesContainer.innerHTML = '';
        
        const colControls = document.createElement('div');
        colControls.className = 'album-col-controls';
        colControls.innerHTML = `
            <button class="album-col-btn ${currentAlbumCols === 1 ? 'active' : ''}" data-cols="1">1 Col</button>
            <button class="album-col-btn ${currentAlbumCols === 2 ? 'active' : ''}" data-cols="2">2 Cols</button>
            <button class="album-col-btn ${currentAlbumCols === 3 ? 'active' : ''}" data-cols="3">3 Cols</button>
        `;
        albumImagesContainer.appendChild(colControls);
        
        const imagesGrid = document.createElement('div');
        imagesGrid.id = 'albumImagesGrid';
        imagesGrid.className = `album-images-grid cols-${currentAlbumCols}`;
        albumImagesContainer.appendChild(imagesGrid);
        
        const coverDiv = document.createElement('div');
        coverDiv.className = 'album-image';
        coverDiv.innerHTML = `<img src="${album.cover}" alt="Cover Image" onerror="this.onerror=null; this.src='https://via.placeholder.com/600x800/8b5cf6/ffffff?text=Cover'">`;
        coverDiv.addEventListener('click', () => {
            currentAlbumImages = [album.cover, ...(album.albumImages || [])];
            currentImageIndex = 0;
            if (fullscreenImage) {
                fullscreenImage.src = currentAlbumImages[currentImageIndex];
            }
            openModal(imageModal);
        });
        imagesGrid.appendChild(coverDiv);
        
        if (album.albumImages && album.albumImages.length > 0) {
            album.albumImages.forEach((image, index) => {
                const albumImageDiv = document.createElement('div');
                albumImageDiv.className = 'album-image';
                albumImageDiv.innerHTML = `<img src="${image}" alt="Album Image ${index + 1}" onerror="this.onerror=null; this.src='https://via.placeholder.com/600x338/8b5cf6/ffffff?text=Album+Image'">`;
                albumImageDiv.addEventListener('click', () => {
                    currentAlbumImages = [album.cover, ...album.albumImages];
                    currentImageIndex = index + 1;
                    if (fullscreenImage) {
                        fullscreenImage.src = currentAlbumImages[currentImageIndex];
                    }
                    openModal(imageModal);
                });
                imagesGrid.appendChild(albumImageDiv);
            });
        }
        
        document.querySelectorAll('.album-col-btn').forEach(btn => {
            btn.removeEventListener('click', handleAlbumColChange);
            btn.addEventListener('click', handleAlbumColChange);
        });
    }
    
    openModal(albumModal);
}

function openImageModal(picture) {
    if (!picture || !fullscreenImage) return;
    
    currentAlbumImages = [picture.image];
    currentImageIndex = 0;
    currentPictureDataForModal = picture;
    
    fullscreenImage.src = picture.image || 'https://via.placeholder.com/800x1000/a78bfa/ffffff?text=No+Image';
    fullscreenImage.alt = 'Fullscreen Image';
    
    const existingInfo = document.querySelector('.picture-info-section');
    if (existingInfo) existingInfo.remove();
    
    const infoSection = document.createElement('div');
    infoSection.className = 'picture-info-section';
    infoSection.innerHTML = `
        <div class="picture-actress-name">
            <i class="fas fa-user"></i> ${picture.actress}
        </div>
        <div class="picture-tags">
            ${picture.tags.map(tag => `<span class="picture-tag">#${tag}</span>`).join('')}
        </div>
    `;
    
    const modalContainer = document.querySelector('#imageModal .modal-container');
    if (modalContainer) {
        const imageDiv = modalContainer.querySelector('div[style*="display: flex; justify-content: center;"]');
        if (imageDiv) {
            imageDiv.parentNode.insertBefore(infoSection, imageDiv.nextSibling);
        }
    }
    
    openModal(imageModal);
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transition = 'opacity 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

document.addEventListener('DOMContentLoaded', init);

window.removeFilter = removeFilter;
window.selectFilterItem = selectFilterItem;
