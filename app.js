const image = document.getElementById('img')

const imageSelectItem = document.querySelectorAll('.imageSelectItemLink')

const main = document.getElementById('main')




function imageHandler(item){
    // if(item.classlist.contains('corkcicle')){
    //     image.src = 'Images/corkcicle.jpg'
    // }
    console.log(imageSelectItem);
}

imageSelectItem.forEach((item)=>{
  item.addEventListener('mouseover', (event) => {
    console.log(event.target)
    image.style.opacity = '1';
    if(event.target.classList.contains('corkcicle')){
        image.src = 'Images/corkcicle.jpg'
        
        image.classList.remove('fadein')
    } else if(event.target.classList.contains('chacha')){
        image.src = 'Images/chacha.webp'
        
    }

    else if(event.target.classList.contains('aisle')){
        image.src = 'Images/aisle.jpg'
        
    }

    else if(event.target.classList.contains('empire')){
        image.src = 'Images/empire.webp'
        
    }

    else if(event.target.classList.contains('nutririch')){
        image.src = 'Images/nutririch.webp'
        
    }

    else if(event.target.classList.contains('juneshine')){
        image.src = 'Images/juneshine.webp'
        
    }

    else if(event.target.classList.contains('dudewipes')){
        image.src = 'Images/dudewipes.webp'
        
    }

    else if(event.target.classList.contains('billblass')){
        image.src = 'Images/billblass.webp'
        
    }
  })
})

function hideImg(){
    image.style.opacity = '0';
}


// main.addEventListener('mouseover', hideImg)




