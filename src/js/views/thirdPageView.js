import { elements } from './base';

export const renderPage = () => {
    const markup = `
    <div class='container_third_page'>
        <div class="container_content">
            <div class="container_content_inner">
                <div class="title">
                    <h1>Hello World</h1>
                </div>
                <div class="par">
                    <p>
                        Ever since I started coding, I’m finding it really interesting and enjoyable. 
                        I enjoy solving algorithms or mathematics question from a young age and it’s quite intriguing for me to find out the answers for 
                        whatever I want to create . I strive on challenges and I source my motivation from challenging problems.  
                        <br>
                        <br>
                        My motto is <i>'I do my best on what I do, and I try to be better of myself everyday.'. </i>Since I made up my desicion to do coding,
                        I won't just stop as a front-end developer. I won't stop learning to be better, eventually I will try to do back-end development so
                        I will be able to become a full-stack developer, furthermore I will try to learn more than full-stack development.
                    </p>
                </div>
            </div>
        </div>
        <div class="container_outer_img">
            <div class="img_inner_1">
            </div>
        </div>
        <i id="right" class="fas fa-angle-right"></i>
    </div>
    <div class="overlay"></div>
    `
    elements.thirdPage.insertAdjacentHTML('afterbegin', markup);

    new hoverEffect ({
        parent: document.querySelector('.img_inner_1'),
        intensity: 0.2,
        image1: "./img/edited/code2_edited.jpg",
        image2: "./img/edited/full_front_back_edited.jpg",
        displacementImage: "./img/effect/heightMap.png",
        imagesRatio: 1080 / 1920
    });
}

export const clear = () => {
    elements.thirdPage.classList.add('hidden')
    elements.thirdPage.innerHTML = '';
}