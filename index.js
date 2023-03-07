
function doStuff() {
    
    const nonasyncfunc = async () => {

        const $restart = document.querySelector(".restart")
        $restart.classList.toggle("hide")

        const letters = [
            {
                selector: ".i",
                cls: 'dashWhite'
            },
            {
                selector: ".l,.o,.v,.e",
                cls: 'dashRed'
            },
            {
                selector: ".y,.p,.u",
                cls: 'dashWhite'
            }
        ]

        for (let i = 0; i < letters.length; ++i) {
            const $els = document.querySelectorAll(letters[i].selector);


            $els.forEach(($el, _) => {
                const length = $el.getTotalLength();
                $el.style.strokeDasharray = length;
                $el.style.strokeDashoffset = length;
                $el.classList.add(letters[i].cls)
            })

            await new Promise(r => setTimeout(r, 3000));

        }

        $restart.classList.toggle("hide")
    }

    nonasyncfunc()
    
}

document.addEventListener("DOMContentLoaded", function () {

    doStuff()

});

