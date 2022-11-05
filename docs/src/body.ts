import Swiper, {Navigation, Pagination, SwiperOptions} from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

Swiper.use([Navigation, Pagination])

export const body = (message: string): void => {
    slide(message)
}


function slide (message: string): void {
    // document.body.innerHTML  = `${message}`;
    console.log(`${message}を出力しました`)

    window.onload = () => {
        const swiperParams: SwiperOptions = {
            direction: 'horizontal',
            slidesPerView: 1,
            spaceBetween: 1,
            loop: false,
            autoplay: true,
            pagination: {
                el: '.swiper-pagination',
                type: "fraction" 
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            scrollbar: {
                el:'.swiper-scrollbar',
            },
        }

        const swiper = new Swiper('.swiper', swiperParams)

    }

}

