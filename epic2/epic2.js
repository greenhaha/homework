const menuItems = document.querySelectorAll('.sub-menu span');
const contentDivs = document.querySelectorAll('.content');

window.addEventListener('load', () => {
    const defaultTargetId = 'achievements';
    contentDivs.forEach(div => {
        div.style.display = 'none';
    });
    const defaultDiv = document.getElementById(defaultTargetId);
    if (defaultDiv) {
        defaultDiv.style.display = 'block';
    }
    menuItems.forEach(item => {
        if (item.dataset.target === defaultTargetId) {
            item.style.color = 'white';
        }
    });
});

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        const targetId = item.dataset.target;
        contentDivs.forEach(div => {
            div.style.display = 'none';
        });
        const targetDiv = document.getElementById(targetId);
        if (targetDiv) {
            targetDiv.style.display = 'block';
        }
        menuItems.forEach(menuItem => {
            menuItem.style.color = '#aaaaaa'; 
        });
        item.style.color = 'white';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const sortSelect = document.getElementById('sort-select');
    const achievementContainer = document.querySelector('#achievements');

    sortAchievements('alphabetical');

    sortSelect.addEventListener('change', function() {
        const sortValue = this.value;
        sortAchievements(sortValue);
    });

    function sortAchievements(sortType) {
        const achievementItems = Array.from(achievementContainer.querySelectorAll('.achievement-item'));
        let sortedItems;

        switch(sortType) {
            case 'alphabetical':
                sortedItems = achievementItems.sort((a, b) => {
                    const nameA = a.querySelector('.achievement-name').textContent.toLowerCase();
                    const nameB = b.querySelector('.achievement-name').textContent.toLowerCase();
                    return nameA.localeCompare(nameB);
                });
                break;
            case 'rarity':
                sortedItems = achievementItems.sort((a, b) => {
                    const rateA = parseFloat(a.querySelector('.achievement-unlock-rate').textContent.match(/\d+/)[0]);
                    const rateB = parseFloat(b.querySelector('.achievement-unlock-rate').textContent.match(/\d+/)[0]);
                    return rateA - rateB;
                });
                break;
            case 'progress-high':
                sortedItems = achievementItems.sort((a, b) => {
                    const nameA = a.querySelector('.achievement-name').textContent.toLowerCase();
                    const nameB = b.querySelector('.achievement-name').textContent.toLowerCase();
                    return nameA.localeCompare(nameB);
                });
                break;
            case 'progress-low':
                sortedItems = achievementItems.sort((a, b) => {
                    const nameA = a.querySelector('.achievement-name').textContent.toLowerCase();
                    const nameB = b.querySelector('.achievement-name').textContent.toLowerCase();
                    return nameB.localeCompare(nameA);
                });
                break;
            case 'exp-high':
                sortedItems = achievementItems.sort((a, b) => {
                    const expA = parseInt(a.querySelector('.achievement-exp').textContent.split(' ')[0], 10);
                    const expB = parseInt(b.querySelector('.achievement-exp').textContent.split(' ')[0], 10);
                    return expB - expA;
                });
                break;
            case 'exp-low':
                sortedItems = achievementItems.sort((a, b) => {
                    const expA = parseInt(a.querySelector('.achievement-exp').textContent.split(' ')[0], 10);
                    const expB = parseInt(b.querySelector('.achievement-exp').textContent.split(' ')[0], 10);
                    return expA - expB;
                });
                break;
            default:
                sortedItems = achievementItems;
        }

        sortedItems.forEach(item => achievementContainer.appendChild(item));
    }
});

const subMenuSpans = document.querySelectorAll('.sub-menu span');
subMenuSpans.forEach(span => {
    span.addEventListener('click', function() {
        subMenuSpans.forEach(s => s.classList.remove('active'));
        this.classList.add('active');
    });
});
