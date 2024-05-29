let loader = document.querySelector('[data-component="loader"]');
let previousPage = document.querySelector(
  '[data-component = "pagination:previous"]'
);
let selectPage = document.querySelector('[data-component="pagination:select"]');
let nextPage = document.querySelector('[ data-component="pagination:next"]');

let buildPagination = function (pagination) {
  let newContent = '';
  for (let i = 1; i <= pagination.items.count; i++) {
    newContent = newContent + `<option value = "${i}">${i}</option>`;
  }
  selectPage.innerHTML = newContent;
};
let renderList = function (data) {
  let newContent = '';

  let listView = document.querySelector('[data-component="list"]');
  for (let i = 0; i < data.length; i++) {
    let item = data[i];
    let newItemContent = `
    <div class="col-6 col-md-3 mb-5 text-center" title="${item.title_english}">
      <a href="detailpage.html?id=${item.mal_id}" class="link-primary d-block position-relative text-decoration-none" data-component="item">
        <span class="position-absolute badge bg-danger top-0 end-0">
            <i class="bi bi-star-fill"></i> ${item.score}
        </span>
        <span class="d-flex flex-column justify-content-center">
            <img class="rounded shadow" src="${item.images.jpg.large_image_url}" data-component="image" />
            <span class="text-dark mt-2" data-component="title">${item.title_english}</span>
        </span>
      </a>
    </div>`;
    newContent = newContent + newItemContent;
  }

  listView.innerHTML = newContent;
};

let onFilterSelectChange = function () {
  loadList();
};
let onPaginationSelectChange = function () {
  loadList();
};
let setLoadingState = function (loading) {
  if (loading) {
    loader.classList.remove('d-none');
  } else {
    loader.classList.add('d-none');
  }

  selectPage.disabled = loading;
  previousPage.disabled = loading;
  nextPage.disabled = loading;

  if (loading) {
    let items = list.querySelectorAll('[data-component="item"]');

    for (let i = 0; i < items.length; i++) {
      let item = items[i];
      let image = item.querySelector('[data-component="image"]');
      let title = item.querySelector('[data-component="title"]');

      item.classList.add('placeholder-wave');
      image.classList.add('placeholder');
      title.classList.add('placeholder');
    }
  }
};

fetch('https://api.jikan.moe/v4/top/anime')
  .then(function (response) {
    return response.json();
  })
  .then(function (result) {
    console.log(result);
    let data = result.data;

    let pagination = result.pagination;

    buildPagination(pagination);
    renderList(data);
  });

let loadListWithPageNumber = function (pageNumber) {
  fetch(`https://api.jikan.moe/v4/top/anime?page=${pageNumber}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (result) {
      let data = result.data;

      renderList(data);
    });
};
selectPage.addEventListener('change', function () {
  let paginationSelect = selectPage.value;
  loadListWithPageNumber(paginationSelect);
});

nextPage.addEventListener('click', function () {
  let currentPageValue = selectPage.value;
  currentPageValue = Number(currentPageValue);
  let newPageValue = currentPageValue + 1;

  let allOptions = selectPage.querySelectorAll('option');
  let lastOption = allOptions[allOptions.length - 1];
  let lastOptionValue = lastOption.value;

  lastOptionValue = Number(lastOptionValue);

  if (newPageValue <= lastOptionValue) {
    selectPage.value = newPageValue;
    loadListWithPageNumber(newPageValue);
  }
});

previousPage.addEventListener('click', function () {
  let currentPageValue = selectPage.value;
  currentPageValue = Number(currentPageValue);
  let newPageValue = currentPageValue - 1;

  if (newPageValue >= 1) {
    selectPage.value = newPageValue;
    loadListWithPageNumber(newPageValue);
  }
});
