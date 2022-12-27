        const swipper = document.querySelector('.swipper');
        const image = document.querySelector('.gambar');
        const bulat = document.querySelectorAll('.bulat');
        let gambar = 1;

        let interval = setInterval(auto_slide, 5000);
        function auto_slide(){
        gambar += 1;
        if(gambar == 0){
            gambar = 3;
        }
        if(gambar == 4){
            gambar = 1;
        }
        if(gambar == 1){
            image.className = 'gambar bg-satu';
            bulat[0].className = 'bulat select';
            bulat[0].nextElementSibling.className = 'bulat';
            bulat[0].nextElementSibling.nextElementSibling.className = 'bulat';
        }
        if(gambar == 2){
            image.className = 'gambar bg-dua';
            bulat[1].className = 'bulat select';
            bulat[1].previousElementSibling.className = 'bulat';
            bulat[1].nextElementSibling.className = 'bulat';
        }
        if(gambar == 3){
            image.className = 'gambar bg-tiga';
            bulat[2].className = 'bulat select';
            bulat[2].previousElementSibling.className = 'bulat';
            bulat[2].previousElementSibling.previousElementSibling.className = 'bulat';
        }
        }

        swipper.addEventListener('click', function(e){  
            // Prev
            if(e.target.classList.contains('previous')){
                if(gambar > 0){
                    gambar -= 1;
                }
                if(gambar == 0){
                    gambar = 3;
                }
                // Reset Interval (biar gak bentrok)
                clearInterval(interval);
                interval = setInterval(auto_slide, 5000);
            }
            // Next
            if(e.target.classList.contains('next')){
                if(gambar < 4){
                    gambar += 1;
                }
                if(gambar == 4){
                    gambar = 1;
                }
                // Reset Interval (biar gak bentrok)
                clearInterval(interval);
                interval = setInterval(auto_slide, 5000);
            }

            // Foor loop bulat-bulat nya
            for(let i = 0; i <= bulat.length; i++){
                if(e.target == bulat[i]){
                    bulat[i].className = 'bulat select';
                    gambar = i + 1;
                    clearInterval(interval);
                    interval = setInterval(auto_slide, 5000);
                }
            }
            
            // index gambar
            if(gambar == 1){
                image.className = 'gambar bg-satu';
                bulat[0].className = 'bulat select';
                bulat[0].nextElementSibling.className = 'bulat';
                bulat[0].nextElementSibling.nextElementSibling.className = 'bulat';
            }
            if(gambar == 2){
                image.className = 'gambar bg-dua';
                bulat[1].className = 'bulat select';
                bulat[1].previousElementSibling.className = 'bulat';
                bulat[1].nextElementSibling.className = 'bulat';
            }
            if(gambar == 3){
                image.className = 'gambar bg-tiga';
                bulat[2].className = 'bulat select';
                bulat[2].previousElementSibling.className = 'bulat';
                bulat[2].previousElementSibling.previousElementSibling.className = 'bulat';
            }
        });

        // Starter :v
        if(gambar == 1){
            image.className = 'gambar bg-satu';
            bulat[0].className = 'bulat select';
        }