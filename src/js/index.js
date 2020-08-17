import { elements } from './views/base';
import * as firstPageView from './views/firstPageView';
import * as secondPageView from './views/secondPageView';
import * as thirdPageView from './views/thirdPageView';
import * as fourthPageview from './views/fourthPageview';


/** Navbar bar start **/
elements.navbar.addEventListener('click', e => {
    const index = e.target.id
    if(index === 'first_page_btn') {
        firstPageView.clear();
        secondPageView.clear();
        thirdPageView.clear();
        fourthPageview.clear();
        elements.firstPage.classList.remove('hidden')
        firstPageView.renderpage()
    } else if (index === 'second_page_btn') {
        firstPageView.clear();
        secondPageView.clear();
        thirdPageView.clear();
        fourthPageview.clear();
        elements.secondPage.classList.remove('hidden')
        secondPageView.renderpage()
    } else if (index === 'third_page_btn') {
        firstPageView.clear();
        secondPageView.clear();
        thirdPageView.clear();
        fourthPageview.clear();
        elements.thirdPage.classList.remove('hidden')
        thirdPageView.renderPage()
    } else if (index === 'fourth_page_btn') {
        firstPageView.clear();
        secondPageView.clear();
        thirdPageView.clear();
        fourthPageview.clear();
        elements.fourthPage.classList.remove('hidden')
        fourthPageview.renderPage()
    }
})
/** Navbar bar end **/


/** First page start **/
elements.wrapper.addEventListener('click', e => {
    if (e.target.matches('#first_btn')){
        firstPageView.slide()
        setTimeout(() => {
            elements.firstPage.innerHTML = '';
            elements.firstPage.classList.add('hidden')
            elements.secondPage.classList.remove('hidden')
            secondPageView.renderpage();
        },1500) 
    }
})
/** First page end **/

/** Second page start **/
elements.wrapper.addEventListener('click', e => {
    if (e.target.matches('#second_btn')){
        elements.secondPage.classList.add('hidden');
        setTimeout(() => {
            elements.secondPage.innerHTML = '';
            elements.thirdPage.classList.remove('hidden')
            thirdPageView.renderPage();
        },2000) 
    }
})
/** Second page end **/

/** Third page start **/
elements.wrapper.addEventListener('click', e => {
    if (e.target.matches('#right')){
        elements.thirdPage.classList.add('hidden');
        elements.fourthPage.classList.remove('hidden');
        setTimeout(() => {
            elements.thirdPage.innerHTML = '';
            fourthPageview.renderPage();
        },2000) 
    }
})
/** Third page end **/

/** Fourth page start **/
elements.wrapper.addEventListener('click', e => {
    if (e.target.matches('#left')){
        elements.fourthPage.classList.add('hidden');
        elements.thirdPage.classList.remove('hidden');
        setTimeout(() => {
            elements.fourthPage.innerHTML = '';
            thirdPageView.renderPage();
        },2000) 
    }
})
/** Fourth page end **/




