import { elements } from './base';

export const renderPage = () => {
    const markup = `
    <div class='container_fourth_page'>
        <i id="left" class="fas fa-angle-left"></i>
        <div class="container_outer_img">
            <div class="img_inner_2"></div>
        </div>
        <div class="container_content">
            <div class="container_content_inner">
                <div class="title">
                    <h1>As a developer</h1>
                </div>
                <div class="par">
                    <p>
                        There are so many new technologies out there, even when I was making my personal portfolio there are new technologies coming out. 
                        I'm quite interested in block-chain at the moment, as I study and further educate myself in this field, 
                        I’m keen to learn and find challenges in this industry.
                        <br>
                        <br>
                        My aspiration is to be one of the people out there  who's developing  new technology to change the world and the way human lives.
                        Although I want to become a full stack developer, I will always try to improve on myself and become more everyday. 
                    </p>
                </div>
            </div>
        </div>    
    </div>
    <div class="overlay"></div>
    `
    elements.fourthPage.insertAdjacentHTML('afterbegin', markup);

    new hoverEffect ({
        parent: document.querySelector('.img_inner_2'),
        intensity: 0.2,
        image1: "./img/edited/blockchain_2_edited.jpg",
        image2: "./img/edited/software_engineering_edited.jpg",
        displacementImage: "./img/effect/heightMap.png",
        imagesRatio: 1080 / 1920
    });
    
}

export const clear = () => {
    elements.fourthPage.classList.add('hidden')
    elements.fourthPage.innerHTML = '';
}