const kitchenImage = document.getElementById('kitchen-image');
const worktopSelect = document.getElementById('worktop-select');
const cabinetSelect = document.getElementById('cabinet-select');

const renders = {
    worktop1: {
        cabinet1: 'images/kitchen_marble_white.jpg',
        cabinet2: 'images/kitchen_marble_gray.jpg',
        cabinet3: 'images/kitchen_marble_black.jpg'
    },
    worktop2: {
        cabinet1: 'images/kitchen_granite_white.jpg',
        cabinet2: 'images/kitchen_granite_gray.jpg',
        cabinet3: 'images/kitchen_granite_black.jpg'
    },
    worktop3: {
        cabinet1: 'images/kitchen_quartz_white.jpg',
        cabinet2: 'images/kitchen_quartz_gray.jpg',
        cabinet3: 'images/kitchen_quartz_black.jpg'
    }
};

function updateImage() {
    const worktop = worktopSelect.value;
    const cabinet = cabinetSelect.value;
    kitchenImage.src = renders[worktop][cabinet];
}

worktopSelect.addEventListener('change', updateImage);
cabinetSelect.addEventListener('change', updateImage);
