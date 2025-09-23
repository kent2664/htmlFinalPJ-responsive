document.addEventListener('DOMContentLoaded', () => {
    // Select all accordion buttons on the page
    const buttons = document.querySelectorAll('.faq-button');
    const menuButton = document.getElementById('nav-toggle');
    const menuContainer = document.getElementById('menu-container');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Find the parent item and its content/icon
            const item = button.closest('.faq-item');
            const content = item.querySelector('.accordion-content');
            const icon = item.querySelector('.faq-icon');

            // Check if the accordion is currently open
            const isOpen = content.style.maxHeight && content.style.maxHeight !== '0px';

            if (isOpen) {
                // --- Close the accordion ---
                // Set max-height to its current scroll height to enable transition
                content.style.maxHeight = content.scrollHeight + 'px';
                // Then, a slight delay before setting max-height to 0
                setTimeout(() => {
                    content.style.maxHeight = '0px';
                }, 10);

                // Rotate the icon back to its original position
                icon.classList.remove('rotate-45');

            } else {
                // --- Open the accordion ---
                // Set max-height to the content's full scroll height
                content.style.maxHeight = content.scrollHeight + 'px';

                // Rotate the icon by 45 degrees
                icon.classList.add('rotate-45');

                // ⚠️ Important: After the transition, set max-height to 'none'
                // This ensures the accordion content can resize if its content changes dynamically
                content.addEventListener('transitionend', function handler() {
                    if (content.style.maxHeight !== '0px') {
                        content.style.maxHeight = 'none';
                    }
                    content.removeEventListener('transitionend', handler);
                }, { once: true });
            }
        });
    });

    menuButton.addEventListener('click', () => {
        // translate-x-full クラスをトグルする
        menuContainer.classList.toggle('-translate-x-full');
        menuButton.classList.toggle('menu-open');
    });
});

function toggleAccordion(id) {
    const content = document.getElementById(`content-${id}`);

    // Tailwind の 'hidden' クラスをトグルする
    content.classList.toggle('hidden');

    // 💡 よりスムーズなアコーディオンアニメーションを実装する場合:
    // transition クラスを使い、高さを 'max-h-0' から 'max-h-96' などに切り替える複雑な手法が必要です。
}