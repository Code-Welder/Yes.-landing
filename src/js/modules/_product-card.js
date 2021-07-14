const cards = document.querySelectorAll('.product-card');

cards.forEach((card) => {
  card.addEventListener('mouseover', (e) => {
    const img = e.target.closest('img');
    let prevImgSrc;

    if (!img) return;

    prevImgSrc = img.src;
    img.src = img.src.replace('side', 'front');

    img.addEventListener(
      'mouseout',
      () => {
        img.src = prevImgSrc;
      },
      { once: true }
    );
  });
});
