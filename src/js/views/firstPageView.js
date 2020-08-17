import { elements } from './base';

export const renderpage = () => {
    const markup = `
    <div class="container_first_page">
        <div class="text_box">
            <div>
                <h2>John Lee</h2>
            </div>
            <p>He used to be one of the most potential chef,
                <br>
                now he would like to take another journey in another world.
            </p>
            <button id="first_btn">Would like to know more about him?</button>
        </div>
        <div class="img_box"></div>
    </div>
    `
    elements.firstPage.insertAdjacentHTML('afterbegin', markup);
    waterRipple();
}

export const slide = () => {
    elements.imgBox.classList.add('slideRight');
    elements.textBox.classList.add('slideLeft');
}

export const clear = () => {
    elements.firstPage.classList.add('hidden')
    elements.firstPage.innerHTML = '';
}

const waterRipple = () => {
    $('.container_first_page').ripples({
        resolution:600,
        perturbance: 0.03,
    });
}
