import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'code-test';
  static tags: string[]=[]


  constructor(){

  }


  createTag(label: any) {
    const div = document.createElement('div')
    div.setAttribute('class', 'tag')
    const span =  document.createElement('span')
    span.innerHTML= label
    const closeBtn = document.createElement('i')
    closeBtn.setAttribute('class', 'fas fa-times')
    closeBtn.setAttribute('data-item', label)
    closeBtn.addEventListener('click', function (e) {
      const target = e.target as HTMLElement
      const value = target.getAttribute('data-item')
      //@ts-ignore
      const index = AppComponent.tags.indexOf(value);
      AppComponent.tags = [...AppComponent.tags.slice(0, index), ...AppComponent.tags.slice(index+1)]
      let app = new AppComponent()
      app.addTags()
    })

    div.appendChild(span)
    div.appendChild(closeBtn)
    return div;
  }

  addInput(tag: any) {
    AppComponent.tags.push(tag?.value)
    this.addTags()
    tag.value=''
  }

  addTags() {
    this.reset()
    AppComponent.tags.slice().reverse().forEach((tag) => {
      const input = this.createTag(tag)
      const tagContainer = document.querySelector('.container-tag')
      tagContainer?.prepend(input)
    })
  }

  reset() {
    document.querySelectorAll('.tag').forEach((tag)=> {
      tag.parentElement?.removeChild(tag)
    })
  }

  ngOnInit() {

  }

}




