(function() {

    let screen = document.querySelctor('.screen');
    let buttons = document.querySelctorAll('.btn');
    let clear = document.querySelctor('.btn-clear');
    let equal = document.querySelctor('.btn-equal');

    buttons.forEach(function(button) {
        button.addEventListener('click', function(e){
            let value = e.target.dataset.num;
            screen.value += value;
        })
    })

    equal.addEventListener('click', function(e){
        if(screen.value === ''){
            screen.value = "";
        }else{
            let answer = eval(screen.value);
            screenLeft.value =answer;
        }
    })

    clear.addEventListener('click', function(e){
        screen.value = "";
    })

})(); 