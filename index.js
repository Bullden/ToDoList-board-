const DO = [];
const IN_PROGRESS= [];
const DONE = [];

/*RenderDoTasks(DO)*/

function RenderDoTasks(doArr) {
    const commentsContainer = document.createElement("div");
    doArr.forEach((item,index) => {
        const taskWrap = document.createElement('div');
        taskWrap.setAttribute('class','taskWrap');
        taskWrap.setAttribute('id','taskWrap');
        const doText = document.createElement("div");
        doText.setAttribute('class','text');
        const doSpan = document.createElement("span");
        doSpan.innerText = item.task;
        doText.appendChild(doSpan);
        const doAllButtonWrap = document.createElement('div');
        doAllButtonWrap.setAttribute('class','doAllButtonWrap');
        const doNextButton = document.createElement("div");
        doNextButton.setAttribute('class','doNextButton');
        const doNextButtonWrap = document.createElement('div');
        doNextButtonWrap.setAttribute('id','doNextButtonWrap');
        doNextButtonWrap.addEventListener('click', (e) => {
            const tempArr = [...DO]
            const currentItem = tempArr[index]
            console.log(currentItem)
            IN_PROGRESS.push(currentItem)
            DO.splice(index,1)
            RenderInProgressTasks(IN_PROGRESS)
            RenderDoTasks(DO)
            console.log(IN_PROGRESS)

        })
        const doDeleteButton = document.createElement("div");
        doDeleteButton.setAttribute('class','doDeleteButton');
        const doDeleteButtonWrap = document.createElement('div');
        doDeleteButtonWrap.setAttribute('id','doDeleteButtonWrap');
        doDeleteButtonWrap.addEventListener('click',(e) => {
            DO.splice(index,1)
            RenderDoTasks(DO)
        })
        doDeleteButtonWrap.appendChild(doDeleteButton);
        doNextButtonWrap.appendChild(doNextButton);
        doAllButtonWrap.appendChild(doNextButtonWrap);
        doAllButtonWrap.appendChild(doDeleteButtonWrap);
        doText.appendChild(doAllButtonWrap);
        taskWrap.appendChild(doText);
        commentsContainer.appendChild(taskWrap);
    })

   /* if (localStorage.getItem('ArrayDO')) {
        const lock = localStorage.getItem('ArrayDO')
        const strToArr = lock.split(';')
        const parseStrItemsDO = strToArr.map(item => JSON.parse(item))
        console.log(parseStrItemsDO)
        DO.push(...parseStrItemsDO)
    }*/

    document.getElementById('text-wrapper').innerText = '';
    document.getElementById('text-wrapper').appendChild(commentsContainer)

}
RenderDoTasks(DO);

function RenderInProgressTasks(InProgressArr) {
    const inProgressContainer = document.createElement('div');
    InProgressArr.forEach((item,index) => {
        const inProgrWrap = document.createElement('div');
        inProgrWrap.setAttribute('class','inProgrWrap');
        inProgrWrap.setAttribute('id','inProgrWrap');
        const inProgrText = document.createElement("div");
        inProgrText.setAttribute('class','inProgrText');
        const inProgrSpan = document.createElement("span");
        inProgrSpan.innerText = item.task;
        inProgrText.appendChild(inProgrSpan);
        const inProgrAllButtonWrap = document.createElement('div');
        inProgrAllButtonWrap.setAttribute('class','inProgrAllButtonWrap');
        const inProgrButton = document.createElement("div");
        inProgrButton.setAttribute('class','inProgrDeleteButton');
        const inProgrDeleteButtonWrap = document.createElement('div');
        inProgrDeleteButtonWrap.setAttribute('id','inProgrDeleteButtonWrap');
        inProgrDeleteButtonWrap.addEventListener('click',(e) => {
            IN_PROGRESS.splice(index,1)
            RenderInProgressTasks(IN_PROGRESS)
        })
        const inProgrNextButton = document.createElement("div");
        inProgrNextButton.setAttribute('class','inProgrNextButton');
        const inProgrNextButtonWrap = document.createElement('div');
        inProgrNextButtonWrap.setAttribute('id','inProgrNextButtonWrap');
        inProgrNextButtonWrap.addEventListener('click', (e) => {
            const tempArr = [...IN_PROGRESS]
            const currentItem = tempArr[index]
            console.log(currentItem)
            DONE.push(currentItem)
            IN_PROGRESS.splice(index,1)
            RenderDoneTasks(DONE)
            RenderInProgressTasks(IN_PROGRESS)
            console.log(DONE)

        })
        const inProgrPreviousButton = document.createElement("div");
        inProgrPreviousButton.setAttribute('class','inProgrPreviousButton');
        const inProgrPreviousButtonWrap = document.createElement('div');
        inProgrPreviousButtonWrap.setAttribute('id','inProgrPreviousButtonWrap');
        inProgrPreviousButtonWrap.addEventListener('click', (e) => {
            const tempArr = [...IN_PROGRESS]
            const currentItem = tempArr[index]
            console.log(currentItem)
            DO.push(currentItem)
            IN_PROGRESS.splice(index,1)
            RenderDoTasks(DO)
            RenderInProgressTasks(IN_PROGRESS)
            console.log(DO)

        })
        /*const InProgrNextButtonWrap = document.createElement('div');
        InProgrNextButtonWrap.setAttribute('id','doNextButtonWrap');
        InProgrNextButtonWrap.addEventListener('click', (e) => {
            IN_PROGRESS.splice(index,1)
            IN_PROGRESS.push()
        })*/
        inProgrPreviousButtonWrap.appendChild(inProgrPreviousButton);
        inProgrDeleteButtonWrap.appendChild(inProgrButton);
        inProgrNextButtonWrap.appendChild(inProgrNextButton);
        inProgrAllButtonWrap.appendChild(inProgrPreviousButtonWrap);
        inProgrAllButtonWrap.appendChild(inProgrNextButtonWrap);
        inProgrAllButtonWrap.appendChild(inProgrDeleteButtonWrap);
        inProgrText.appendChild(inProgrAllButtonWrap);
        inProgrWrap.appendChild(inProgrText);
        inProgressContainer.appendChild(inProgrWrap);
    })

    document.getElementById('text-wrapper2').innerText = '';
    document.getElementById('text-wrapper2').appendChild(inProgressContainer)
}
RenderInProgressTasks(IN_PROGRESS)

function RenderDoneTasks(doneArr) {
    const doneContainer = document.createElement("div");
    doneArr.forEach((item,index) => {
        const doneWrap = document.createElement('div');
        doneWrap.setAttribute('class','doneWrap');
        doneWrap.setAttribute('id','doneWrap');
        const doneText = document.createElement("div");
        doneText.setAttribute('class','doneText');
        const doneSpan = document.createElement("span");
        doneSpan.innerText = item.task;
        doneText.appendChild(doneSpan);
        const doneAllButtonWrap = document.createElement('div');
        doneAllButtonWrap.setAttribute('class','doneAllButtonWrap');
        const donePreviousButton = document.createElement("div");
        donePreviousButton.setAttribute('class','donePreviousButton');
        const donePreviousButtonWrap = document.createElement('div');
        donePreviousButtonWrap.setAttribute('id','donePreviousButtonWrap');
        donePreviousButtonWrap.addEventListener('click', (e) => {
            const tempArr = [...DONE]
            const currentItem = tempArr[index]
            console.log(currentItem)
            IN_PROGRESS.push(currentItem)
            DONE.splice(index,1)
            RenderInProgressTasks(IN_PROGRESS)
            RenderDoneTasks(DONE)
            console.log(IN_PROGRESS)

        })
        const doneDeleteButton = document.createElement("div");
        doneDeleteButton.setAttribute('class','doneDeleteButton');
        const doneDeleteButtonWrap = document.createElement('div');
        doneDeleteButtonWrap.setAttribute('id','doneDeleteButtonWrap');
        doneDeleteButtonWrap.addEventListener('click',(e) => {
            DONE.splice(index,1)
            RenderDoneTasks(DONE)
        })
        doneDeleteButtonWrap.appendChild(doneDeleteButton);
        donePreviousButtonWrap.appendChild(donePreviousButton);
        doneAllButtonWrap.appendChild(donePreviousButtonWrap);
        doneAllButtonWrap.appendChild(doneDeleteButtonWrap);
        doneText.appendChild(doneAllButtonWrap);
        doneWrap.appendChild(doneText);
        doneContainer.appendChild(doneWrap);
    })

    document.getElementById('text-wrapper3').innerText = '';
    document.getElementById('text-wrapper3').appendChild(doneContainer)

}
RenderDoneTasks(DONE);

/*function RenderInProgressTasks() {
    const inProgressContainer = document.createElement('div');
    document.getElementById('text-wrapper').appendChild(inProgressContainer)
}
RenderInProgressTasks(IN_PROGRESS)*/

document.getElementById("add").addEventListener("click", (e) => {
    e.preventDefault()
    document.getElementById('wrap-modal').classList.add('wrap-modal2')
})

document.getElementById('buttonOk').addEventListener('click', (e) => {
    e.preventDefault();
    const inputValue = document.getElementById('inputModal').value;
    const newDo = {
        task: inputValue
    }
    if (inputValue === '') {
        alert('Заполните поле');
        return true
    }
    document.getElementById('inputModal').value = ''
    console.log('Ду до пуша',DO)
    DO.push(newDo);
    console.log('Ду после пуша',DO)
    RenderDoTasks(DO);

    /*if (localStorage.getItem('ArrayDO')) {
        localStorage.removeItem('ArrayDO')
    }*/
    /*localStorage.removeItem('ArrayDO')
    const stringifiedArrItemsDO = DO.map(item => JSON.stringify(item))
    const arrToStrDO = stringifiedArrItemsDO.join(';')
    localStorage.setItem('ArrayDO', arrToStrDO)*/

});

document.getElementById('buttonCancel').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('wrap-modal').classList.remove('wrap-modal2')
});








