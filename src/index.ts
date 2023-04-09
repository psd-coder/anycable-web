import './js/components/gtm-link';
import './js/components/gtm-footer-link';
import './js/components/gtm-form';
import './js/components/header-show-hide';
import './js/components/popups-show-hide';
import './js/components/learn-more-scroll';
import './js/components/slide-show';
import './js/components/carousel';
import './index.scss';

//to prevent flickering on load
window.addEventListener('load', () => {
  document.body.style.visibility = 'visible';
});
