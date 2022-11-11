import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");
galleryRef.insertAdjacentHTML("beforeend", createGalleryMarkup(galleryItems));
galleryRef.addEventListener("click", openModalWindow);

function createGalleryMarkup(items) {
  return items
    .map(
      (item) => `<a class="gallery__link" href="${item.original}">
      <img class="gallery__image"
      src="${item.preview}" 
      data-source="${item.original}"
      alt="${item.description}" 
      />
      </a>`
    )
    .join("");
}

function openModalWindow(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    // якщо не картинка - виходимо;
    return;
  }
  showOriginalImage(evt.target.dataset.source);
}

function showOriginalImage(item) {
  const instance = basicLightbox.create(`<img src="${item}">`);
  instance.show(); // показати картинку
  closeModalWindowByEsc(instance);
}

function closeModalWindowByEsc(instance) {
  document.addEventListener("keydown", (evt) => {
    if (evt.code !== "Escape") {
      return;
    }
    instance.close();
  });
}

// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
// Реалізація делегування на div.gallery і отримання url великого зображення.
// Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.
// Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
// Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.

//
// Зверни увагу на те, що зображення обгорнуте посиланням, отже по кліку за замовчуванням користувач буде перенаправлений на іншу сторінку. Заборони цю поведінку за замовчуванням.

// Закриття з клавіатури
// УВАГА
// Наступний функціонал не обов'язковий для здавання завдання, але буде хорошою додатковою практикою.

// Додай закриття модального вікна після натискання клавіші Escape. Зроби так, щоб прослуховування клавіатури було тільки доти, доки відкрите модальне вікно. Бібліотека basicLightbox містить метод для програмного закриття модального вікна.
