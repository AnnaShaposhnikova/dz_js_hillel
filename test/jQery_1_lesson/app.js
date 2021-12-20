// const container$ = $('ul');
;
// 1 способ повесить обработчик
// container$.click((e)=>{
//     console.log(e.target.textContent)
// })

 // 2 способ
// container$.on('click',clickOnHendler);


// function clickOnHendler(e){
//     console.log(e);
//     console.log('this', this)// this выведет ul

// }
//---------------------------------------------------------------
// чтобы указать, на что конкретно мы ожидаем клик, передаем третий параметр
// container$.on('click','li', clickOnHendler);


// function clickOnHendler(e){
//     const el$ = $(this);
//     console.log('this', el$)

// }
//---------------------------------------------------------------
//повесить обработчик на класс
// const container$ = $('.container');
// container$.on('click','li' , clickOnHendler);


// function clickOnHendler(e){
//     const el$ = $(this);
//     el$.css('color', 'pink')
//     // el$.toggleClass('active');
//     const new$ = $('div');
//     new$.textNode = 'NEW ELEMENT';
//     el$.append('<strong>hello</strong>');


//     console.log('this', el$)

// }
//---------------------------------------------------------------
const container$ = $('.container');
container$.one('click','h1' , clickOnHendler);


function clickOnHendler(e){
    const el$ = $(this);
    el$.css('color', 'red')
    // el$.toggleClass('active');
    const new$ = $('div');
    new$.textNode = 'NEW ELEMENT';
    el$.append('<strong>hello</strong>');


    console.log('this', el$)

}