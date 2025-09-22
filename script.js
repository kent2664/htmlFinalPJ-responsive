function toggleAccordion(id) {
    const content = document.getElementById(`content-${id}`);
    
    // Tailwind の 'hidden' クラスをトグルする
    content.classList.toggle('hidden');
    
    // 💡 よりスムーズなアコーディオンアニメーションを実装する場合:
    // transition クラスを使い、高さを 'max-h-0' から 'max-h-96' などに切り替える複雑な手法が必要です。
}