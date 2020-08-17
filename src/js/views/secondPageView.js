import { elements } from './base';

export const renderpage = () => {
    const markup = `
    <div class="container_second_page">
        <div class="name">
            <h2>Juheon Lee(John Lee)</h2>
            <p id="japanese">どうぞ よろしく お願います</p>
            <p id="eng">(I'm looking forward to working with you.)</p>
        </div>
        <div class="first paragraph">
            <div id="first_img" class="img_box"></div>
            <div class="text_box">
                <p>
                    Hi, I'm John Lee. As you could probably tell, I used to be a chef. I cooked professionally for more than 5 years.
                    The fulfilment I get from cooking is incredible, I enjoy being able to bring joy to others and make people happy with the food I serve.
                </p>
                <p>
                    I used to work at a Japanese restaurant called Kisume which is one of the best Japanese restaurant in Melbourne.
                </p>
            </div>
        </div>
        <div class="second paragraph">
            <div class="text_box">
                <p>
                    With only 5 years of experience, I considered myself new in the hospitality industry but I had great confidence in my cooking career,
                    thinking I was going to do it for the rest of my life.
                </p>
            </div>
            <div id="second_img" class="img_box"></div>
        </div>
        <div class="third paragraph">
            <div id="third_img" class="img_box"></div>
            <div class="text_box">
                <p>
                    However, I still had doubts about my future and always imagined for a better future. 
                    Technology had been front of mind and I’ve always wanted been interested in future oriented industries.
                </p>

                <p>
                    Computer was one of the stuff I was most interested in, also what I've been good at. So I decided to study to be a front-end developer which
                    is most common where they start their journey as a developer.
                </p>
            </div>
        </div>
        <button id="second_btn">Would you like to know more about John Lee?</button>
    </div>

    `
    elements.secondPage.insertAdjacentHTML('afterbegin', markup);

    new hoverEffect ({
        parent: document.querySelector('#first_img'),
        intensity: 0.2,
        image1: "./img/edited/second_page_img1_edited.jpg",
        image2: "./img/edited/second_page_img3_edited.jpg",
        displacementImage: "./img/effect/heightMap.png"
    });
    
    new hoverEffect ({
        parent: document.querySelector('#second_img'),
        intensity: 0.2,
        image1: "./img/edited/second_page_img2_edited.jpg",
        image2: "./img/edited/second_page_img7_edited.jpg",
        displacementImage: "./img/effect/heightMap.png"
    });
    
    new hoverEffect ({
        parent: document.querySelector('#third_img'),
        intensity: 0.2,
        image1: "./img/edited/second_page_img6_edited.jpg",
        image2: "./img/edited/second_page_img5_edited.jpg",
        displacementImage: "./img/effect/heightMap.png"
    });
}
export const clear = () => {
    elements.secondPage.classList.add('hidden');
    elements.secondPage.innerHTML = '';
}
