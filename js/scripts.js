var begin = Date.now();
console.log(begin, "begin");
$(window).on('load', () => {
    console.log(Date.now(), `Loaded after ${Date.now() - begin}ms`);
    $('.cover').remove();
});