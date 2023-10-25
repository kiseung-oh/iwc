Fancybox.bind('[data-fancybox="gallery"]', 
    {
    placeFocusBack: false,

    tpl: {
    main: 
    `<div class="fancybox__container has-sidebar" role="dialog" aria-modal="true" aria-label="{{MODAL}}" tabindex="-1">
    <div class="fancybox__backdrop"></div>
    <div class="fancybox__cols">
    <div class="fancybox__col">
        <div class="fancybox__carousel"></div>
    </div>
        <div class="fancybox__col">
            <div class="fancybox__data">
                <p id="fancybox_title"></p>
                <p id="fancy-text"></p>
            </div>
        </div>
        </div>
    </div>`,
},

idle: false,
compact: false,
dragToClose: false,

showClass: 'f-fadeIn',
hideClass: 'f-fadeOut',

    Images: {
        zoom: false,
    },


    Toolbar: {
        parentEl: (toolbar) => 
        {
        return toolbar.instance.container.querySelector('.fancybox__col');
        },
        items: {
            sidebar: 
            {
                tpl: `<button class="f-button"><svg><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg></button>`,
                click: (toolbar) => 
                {
                toolbar.instance.container.classList.toggle('has-sidebar');
                },
            },
        },
        display: 
        {
        left: ['infobar'],
        middle: [],
        right: ['sidebar', 'close'],
        },
    },

    on: 
    {
        'Carousel.ready Carousel.change': (fancybox) => 
        {
            const fancy_title = fancybox.getSlide().triggerEl.dataset.title;
            const fancy_text = fancybox.getSlide().triggerEl.dataset.text;
            const titleEl = document.getElementById('fancybox_title');
            const text_inside = document.getElementById('fancy-text');
        
            if (titleEl) 
            {
            titleEl.innerHTML = fancy_title;
            text_inside.innerHTML = fancy_text;
            }
        },
    },
});