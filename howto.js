
class Carousel {
    constructor(element){
      this.element =  element;
      this.btnData = this.element.dataset.btn

       this.element.addEventListener('click', () => {this.moveImg()});
    }
  
    moveImg(){
      const arr = Array.from(imgs)
      let current = 0;
      arr.forEach(function(thing,idx) {
        if(imgs[idx].style.display === 'flex')
            {current = idx}
       })

       if(this.btnData === 'L') {   
        if (current === 0)
         {current = imgs.length - 1}
        else
         {current = current - 1}
      }
       
        if(this.btnData === 'R') {
        if (current === (imgs.length-1))
         {current =  0 }
        else
         {current = current + 1}
      }

      arr.forEach(function(thing,idx) {
        if(idx === current)
        {imgs[idx].style = 'display: flex'}
        else
        {imgs[idx].style = 'display: none'}
       })

    }
}
  let btns = document.querySelectorAll('.xbtn');
  let imgs = document.querySelectorAll('.carousel img');

  btns.forEach(one => new Carousel(one))

  for ( i = 0; i < (imgs.length - 1); i++)
   { imgs[i].style = 'display: none'}

  imgs[0].style='display: flex'

  class Steps {
    constructor(element){
      this.element =  element;
      this.btnData = this.element.dataset.btn
       this.element.addEventListener('click', () => {this.moveSpan()});
    }
  
    moveSpan(){
      const arr = Array.from(spans)
      let current = 0;
      arr.forEach(function(thing,idx) {
        if(spans[idx].style.display === 'flex')
            {current = idx}
       })

       if(this.btnData === 'L') {   
        if (current === 0)
         {current = spans.length - 1}
        else
         {current = current - 1}
      }
       
        if(this.btnData === 'R') {
        if (current === (spans.length-1))
         {current =  0 }
        else
         {current = current + 1}
      }

      arr.forEach(function(thing,idx) {
        if(idx === current)
        {spans[idx].style = 'display: flex'}
        else
        {spans[idx].style = 'display: none'}
       })

    }
}
  let sbtns = document.querySelectorAll('.sbtn');
  let spans = document.querySelectorAll('.steps span');

  sbtns.forEach(one => new Steps(one))
  
  