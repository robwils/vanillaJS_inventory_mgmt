function tabModule(event) {
  console.log('module connected');

  const myTabs = document.querySelectorAll('ul.nav-tabs > li');
  const myTabContent = document.querySelectorAll('.tabContent');

  console.log(myTabs);
  console.log(myTabContent);

  for (let i = 0; i < myTabs.length; i++) {
    myTabs[i].className.remove('active');
  }

  for (let i = 0; i < myTabContent.length; i++) {
    myTabContent[i].className.remove('active');
  }
}

export default tabModule;
