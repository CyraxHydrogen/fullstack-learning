let sidebarButton = document.querySelector('.sidebar-toggle-button');
let sidebar = document.querySelector('.sidebar');
let onSideBarButtonClick = function () {
  if (sidebar.classList.contains('collapsed')) {
    sidebar.classList.remove('collapsed');
  } else {
    sidebar.classList.add('collapsed');
  }
};

sidebarButton.addEventListener('click', onSideBarButtonClick);

let tabTriggerButtons = document.querySelectorAll('.tabs-trigger');
const allTabPanels = document.querySelectorAll(`[data-tab-content]`);
let onTabTriggerButtonClicked = function (event) {
  let currentButton = event.target;

  for (let i = 0; i < tabTriggerButtons.length; i++) {
    const button = tabTriggerButtons[i];

    button.classList.remove('active');
  }

  currentButton.classList.add('active');
  const tabTarget = currentButton.getAttribute('data-tab-target');

  for (let i = 0; i < allTabPanels.length; i++) {
    let currentTab = allTabPanels[i];
    let tabContentValue = currentTab.getAttribute('data-tab-content');

    if (tabContentValue === tabTarget) {
      currentTab.classList.add('active');
    } else {
      currentTab.classList.remove('active');
    }
  }
};

for (let i = 0; i < tabTriggerButtons.length; i++) {
  let button = tabTriggerButtons[i];

  button.addEventListener('click', onTabTriggerButtonClicked);
}
