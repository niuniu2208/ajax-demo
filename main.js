console.log('今天天气不错')
getJSON.onclick=()=>{
  const request=new XMLHttpRequest
  request.open('GET','/test.json')
  request.onreadystatechange=()=>{
    if(request.readyState===4 && request.status===200){
      console.log(request.response)
      const bool=JSON.parse(request.response)
      console.log(bool)
    }else{
      console.log('加载失败了')
    }
  }
  request.send()
}

getXML.onclick=()=>{
  const request=new XMLHttpRequest
  request.open('GET','/test.xml')
  request.onreadystatechange=()=>{
    if(request.readyState===4 && request.status===200){
      console.log(request.responseXML)
      const dom=request.responseXML
      const text=dom.getElementsByTagName('warning')[0].textContent
      console.log(text.trim())
    }
  }
  request.send()
}
getHTML.onclick=()=>{
  const request=new XMLHttpRequest
  request.open('GET','/test.html')
  request.onreadystatechange=()=>{
    if(request.readyState===4 && request.status===200){
      const element=document.createElement('div')
      element.innerHTML=request.response
      document.body.appendChild(element)
    }else{
      console.log('加载失败')
    }
  }
  request.send()
}
getJS.onclick=()=>{
  const request=new XMLHttpRequest
  request.open('GET','/test.js')
  request.onload=()=>{
    console.log(request.response)
    const script=document.createElement('script')
    script.innerHTML=request.response
    document.body.appendChild(script)
  }
  request.onerror=()=>{
    console.log('失败了')
  }
  request.send()
}
//使用onreadystatechange
getCSS.onclick=()=>{
  const request=new XMLHttpRequest()
  request.open('GET','/style.css')
  request.onreadystatechange=()=>{
    if(request.readyState===4){
      console.log('加载完成')
      if(request.status>=200 && request.status<400){
        const style=document.createElement('style')
        style.innerHTML=request.response
        document.head.appendChild(style)
      }else{
        console.log('加载CSS失败')
      }
    }  
  }
  request.send()
}
