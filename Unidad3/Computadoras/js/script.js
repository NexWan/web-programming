/*This code of JS is going to be in charge of executing actions in the index HTML*/
if(window.location.href.includes('index.html')){
    const scrollToMain = document.getElementById('buttonStartIndex');
    var goOn = false;
    scrollToMain.addEventListener('click', () =>{
        let name = prompt('What\'s ur name?', ' ')
        let main = document.querySelector('.mainContent');
        console.log(main)
        if(name !== ' ' && name != null){
            let goToP = document.getElementById('modifyIndexC')
            goToP.innerHTML = `Welcome to the page ${name}! here you can see some of the content we will cover in these pages!`;
            goOn = true;
            main.style.display = 'block';
            scrollToMain.style.display = 'none';
            goToP.scrollIntoView()
        }else {
            alert("Error! type a valid name")
            goOn = false;
            document.location.reload();
        }
    });

    window.onload = () =>{
        console.log("Hello")
        const welcome = document.getElementById('welcomeIndex');
        let welcomeMessage = 'Welcome to the page!';
        let i = 0;
        function writeText(){
            if(i < welcomeMessage.length){
                welcome.innerHTML+= welcomeMessage.charAt(i);
                i++;
                setTimeout(writeText,90)
            }
            return true;
        }
        var button = document.getElementById('buttonStartIndex')
        var goingOp = 10;
        if(writeText()){
            console.log('Write text true')
            function sumOpacity(){
                console.log(`${goingOp} op value`)
                if(goingOp <= 100){
                    console.log(goingOp)
                    button.style.opacity = `${goingOp}%`;
                    goingOp += 10;
                    setTimeout(sumOpacity,40)
                }
            }
            sumOpacity();
        }
        writeText()
        var isRunning = false;
        let showCpuP = document.getElementById('cpu')

        function running(value){
            isRunning = value;
        }

        showCpuP.addEventListener('click', function cpuMsg(){
            if(!isRunning){
                console.log(isRunning + ' e')
                let msgC = 'A CPU, or central processing unit, is a type of electronic circuitry that serves as the "brain" of a computer or other digital device. It is responsible for executing instructions that make up software programs, performing calculations, and managing the flow of data within a system.\n' +
                    'CPUs come in a variety of different architectures, speeds, and power consumption levels, and are typically identified by their manufacturer and model number. They may also include features like multiple cores or threads, which allow them to perform multiple tasks simultaneously, and specialized instruction sets for specific types of computations.\n' +
                    'The performance of a CPU can have a significant impact on the overall speed and responsiveness of a computer or device, as well as its ability to handle complex tasks like gaming or video editing. As a result, CPUs are a critical component of modern computing systems, and their development and evolution are closely watched by computer enthusiasts, engineers, and researchers around the world.    '
                i = 0;
                if(showCpuP.dataset.clicked === 'false'){
                    showCpuP.dataset.clicked = 'true';
                    showMsg()
                    disableButton(showCpuP, 'click',`cpuMsg`)
                    function showMsg(){
                        console.log(isRunning)
                        if(i < msgC.length){
                            document.getElementById('cpuP').innerHTML += msgC[i]
                            i++
                            setTimeout(showMsg,2)
                            running(true)
                        }
                        if(i === msgC.length){
                            running(false)
                            console.log(isRunning)
                            console.log(`${i}, ${msgC.length}`)
                        }

                    }
                }
                function disableButton(button, trigger, func){
                    console.log(trigger + ' ' + func)
                    button.removeEventListener('click', cpuMsg,  false);
                }
                console.log(isRunning)
            }
        })

        let showGpuP = document.getElementById('gpu')
        showGpuP.addEventListener('click',function gpuMsg(){
            if(!isRunning){
                let msgG = 'A graphics card, also known as a video card or GPU (graphics processing unit), is a specialized circuit board designed to handle the processing and rendering of visual data for display on a computer monitor or other output device.\n' +
                    'The graphics card is responsible for performing a variety of tasks related to graphics rendering, including geometry processing, texture mapping, lighting calculations, and shading. These tasks require a great deal of computational power, and graphics cards are designed with specialized hardware to accelerate these operations.\n' +
                    'Modern graphics cards often include dedicated memory, called VRAM (video random access memory), which is used to store and manipulate large amounts of graphical data. They may also feature multiple cores or processing units, allowing them to handle multiple tasks simultaneously.\n' +
                    'The performance of a graphics card can have a significant impact on the quality and speed of visual applications like gaming, video editing, and 3D modeling. As a result, graphics cards are a critical component in many high-end computer systems, and are a key area of development and innovation in the computer hardware industry.'
                i = 0;
                if(showGpuP.dataset.clicked === 'false'){
                    showGpuP.dataset.clicked = 'true';
                    showMsg()
                    disableButton(showGpuP, 'click',`cpuMsg`)
                    function showMsg(){
                        if(i < msgG.length){
                            document.getElementById('gpuP').innerHTML += msgG[i]
                            i++
                            setTimeout(showMsg,2)
                            running(true)
                        }else if(i===msgG.length)
                            running(false)
                    }
                }
                function disableButton(button, trigger, func){
                    console.log(trigger + ' ' + func)
                    button.removeEventListener('click', gpuMsg,  false);
                }
            }
        })

        let showOsP = document.getElementById('os')
        showOsP.addEventListener('click', function osMsg(){
            if(!isRunning){
                let msg= 'An operating system (OS) is a software program that manages the hardware and software resources of a computer system. It provides a common platform for computer programs to run on, and manages the allocation of resources like memory, processing power, and storage.\n' +
                    'The operating system provides a user interface that allows users to interact with the computer and its resources. This can include graphical interfaces like desktop environments or command-line interfaces that allow users to enter commands and perform tasks.\n' +
                    'The OS is responsible for managing the system\'s security, including user access control and protection against malware and other threats. It also handles system updates and maintenance tasks like file management, backup and recovery, and device driver updates.\n' +
                    'There are many types of operating systems, including popular options like Microsoft Windows, Apple macOS, and Linux. Each operating system has its own unique features, capabilities, and limitations, and may be optimized for specific types of hardware or software applications. The choice of operating system can have a significant impact on the overall functionality and performance of a computer system.'
                i = 0;
                if(showOsP.dataset.clicked === 'false'){
                    showOsP.dataset.clicked = 'true'
                    showMsg()
                    disableButton()
                    function showMsg(){
                        if(i < msg.length){
                            document.getElementById('osP').innerHTML += msg[i]
                            i++
                            setTimeout(showMsg,2)
                            running(true)
                        }else if(i===msg.length)
                            running(false)
                    }
                }
                function disableButton(button, trigger, func){
                    console.log(trigger + ' ' + func)
                    button.removeEventListener('click', osMsg,  false);
                }

            }
        })

    }

    /*Here ends the code of JS for the page index*/
}else if(window.location.href.includes('processors.html')){
    /*Here starts the JS code of the page processors*/
    window.onload = () =>{
        const firstButton = document.getElementById('firstButtonCpu');
        const secondButton = document.getElementById('secondButtonCpu')
        const thirdButton = document.getElementById('thirdButtonCpu')
        var isActive = false;
        function activate(value){
            isActive = value
        }
        var i = 10;
        firstButton.addEventListener('click',()=>{
            console.log(isActive)
            show2ndButton()
            function show2ndButton(){
                if(i < 100){
                    secondButton.style.opacity = `${i}%`
                    console.log(secondButton.style.opacity)
                    i+=10;
                    setTimeout(show2ndButton,40)
                }else if(i === 100) {
                    activate(true);
                }
            }
        })
        var og;
        var restarted = false;
        secondButton.addEventListener('click', () =>{
            if(isActive){
                let modify = document.getElementById('modifyPCpu');
                console.log('a')
                let currentClick = document.querySelector('[data-clicked]');
                if(currentClick.dataset.clicked === '0'){
                    og = modify.innerHTML;
                    console.log(og)
                }
                console.log(currentClick.dataset.clicked);
                let x = parseInt(currentClick.dataset.clicked)
                currentClick.dataset.clicked = (x+=1).toString()
                let current = parseInt(currentClick.dataset.clicked)
                if(restarted === true){
                    modify.innerHTML = og;
                    console.log('entro')
                    currentClick.dataset.clicked = '0';
                    secondButton.innerHTML='Continue...';
                    restarted = false;
                }
                switch (current){
                    case 1:
                        modify.innerHTML = 'In the 1970s, the first microprocessors were developed. These were single-chip CPUs that could be used in a variety of devices, including personal computers. The first commercially successful microprocessor was the Intel 4004, which was released in 1971. It had a clock speed of 740 kHz and was capable of executing 92,000 instructions per second.<br>' +
                            'Throughout the 1970s and 1980s, CPUs continued to evolve rapidly. The Intel 8086, released in 1978, was the first 16-bit microprocessor, and it formed the basis of the IBM PC. The 8086 was succeeded by the 80286, 80386, and 80486, each of which offered significant improvements in speed and functionality.'
                        break;
                    case 2:
                        modify.innerHTML = 'In the 1990s, the era of the Pentium processor began. The Pentium was the successor to the 80486 and was introduced in 1993. It was the first processor to use the x86 architecture, which is still used today in many modern CPUs. The Pentium also introduced the concept of superscalar architecture, which allowed for multiple instructions to be executed simultaneously.<br>' +
                            'In the early 2000s, the era of the multi-core processor began. Multi-core processors are CPUs that contain two or more processing cores on a single chip. This allowed for even greater processing power and efficiency. The first multi-core processors were introduced by AMD and Intel in 2005.'
                        break;
                    case 3:
                        modify.innerHTML = 'In the years since, CPUs have continued to evolve, with advances in areas such as clock speed, power consumption, and architecture. Today, CPUs are used in a wide variety of devices, including desktop and laptop computers, smartphones, tablets, and gaming consoles.<br>' +
                            'The future of CPUs is likely to involve continued advances in areas such as artificial intelligence and machine learning. As these technologies become more widespread, CPUs will need to be capable of executing increasingly complex instructions at faster speeds and with greater efficiency. The development of new materials, such as graphene, may also play a role in the future of CPUs, as they offer the potential for even greater processing power and energy efficiency.'
                        secondButton.innerHTML='Reset';
                        restarted = true;
                        break;
                }
            }

        })
        thirdButton.addEventListener('click',() =>{
            window.location.href = 'Gpus.html';
        })
    }
}

