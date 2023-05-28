/* eslint-disable no-console */
import {languageData} from '../data/translate';

const changer = document.querySelector('[data-lang-changer]');
const translatable = document.querySelectorAll('[data-lang]');

const saveLanguage = (currentLanguage) => {
  localStorage.setItem('language', currentLanguage);
};

const translateSaved = (element, language) => {
  element.innerHTML = languageData[element.className][language];
  element.dataset.lang = language;
};

const translate = (element) => {
  const newLanguage = element.dataset.lang === 'eng' ? 'ru' : 'eng';
  element.innerHTML = languageData[element.className][newLanguage];
  element.dataset.lang = newLanguage;
  saveLanguage(newLanguage);
};

const getSavedLanguage = () => {
  const savedLanguage = localStorage.getItem('language');
  if (!savedLanguage) {
    return;
  } else if (changer.dataset.lang !== savedLanguage) {
    for (let i = 0; i < translatable.length; i++) {
      translateSaved(translatable[i], savedLanguage);
    }
  } else {
    return;
  }
};

const onChangerClick = () => {
  console.log(translatable.length);
  for (let i = 0; i < translatable.length; i++) {
    translate(translatable[i]);
  }
};

const initLanguageChanger = () => {
  getSavedLanguage();
  changer.style.cursor = 'pointer';
  changer.addEventListener('click', onChangerClick);
};

export {initLanguageChanger};
