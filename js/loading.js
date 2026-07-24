document.addEventListener('DOMContentLoaded', () => {
    const loading = document.getElementById('loading');

    if (!loading) {
        return;
    }

    loading.classList.remove('display-none');

    const hideLoader = () => {
        loading.classList.add('display-none');
    };

    if (document.readyState === 'complete') {
        hideLoader();
    } else {
        window.addEventListener('load', hideLoader, { once: true });
    }
});
