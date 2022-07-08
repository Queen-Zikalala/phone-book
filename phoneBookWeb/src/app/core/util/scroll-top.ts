declare var $: any;
export const scrollTop = () => {
    $('html, body').animate({ scrollTop: 0 }, 500);
};
