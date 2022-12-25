function getData(){
    let name    = document.getElementById('nama').value
    let email   = document.getElementById('email').value
    let phone   = document.getElementById('phone').value
    let subject = document.getElementById('subject').value
    let message = document.getElementById('message').value
    let link = document.createElement('a')
    link.href = `mailto:${email}?subject=${subject}&body=Hallo nama saya ${name}, ${message}, silahkan kontak nomor saya di ${phone}`
    link.click()

    let student = {
        name,
        email,
        phone,
        subject,
        message
    }

    console.log(student)
    console.log(name)
    console.log(email)
    console.log(phone)
    console.log(subject)
    console.log(message)
}

let blogs = []
function getPost(event){
    event.preventDefault()
    let title       = document.getElementById('title').value
    let startDate   = new Date(document.getElementById('startDate').value)
    let endDate     = new Date(document.getElementById('endDate').value)
    let durasi      = getDistanceTime(startDate, endDate)
    let description = document.getElementById('desc').value
    
    let node        = document.getElementById('node')
    if (node.checked == true) {
        node = `<i class="fa-brands fa-node-js"></i>`
    }else{
        node = ""
    }

    let react        = document.getElementById('react')
    if (react.checked == true) {
        react = `<i class="fa-brands fa-react"></i>`
    }else{
        react = ""
    }

    let next        = document.getElementById('next')
    if (next.checked == true) {
        next = `<i class="fa-brands fa-square-js"></i>`
    }else{
        next = ""
    }

    let type        = document.getElementById('type')
    if (type.checked == true) {
        type = `<i class="fa-brands fa-playstation"></i>`
    }else{
        type = ""
    }

    let image   = document.getElementById('image').files
    image       = URL.createObjectURL(image[0])

    let addBlog = {
        title,
        durasi,
        description,
        node,
        react,
        next,
        type,
        image
    }

    blogs.push(addBlog)
    // console.log(title)
    // console.log(startDate)
    // console.log(endDate)
    // console.table(blogs)
    // console.log(description)
    // console.log(node)
    // console.log(react)
    // console.log(next)
    // console.log(type)
    // console.table(image)
    showData()
}

function showData() {
    document.getElementById('blog').innerHTML = ""
    for (let i = 0; i < blogs.length; i++) {
        let data = document.getElementById('blog')
        data.innerHTML += `
        <div class="card-blog">
        <div class="image">
            <img src="${blogs[i].image}" alt="">
        </div>
        <div class="desc">
            <div class="text-title"><a href="detail-blog.html">${blogs[i].title}</a></div>
            <div class="durasi">${blogs[i].durasi}</div>
            <div class="text-paragraf">${blogs[i].description}</div>
        </div>
        <div class="icon">
            ${blogs[i].node}    
            ${blogs[i].react}    
            ${blogs[i].next}
            ${blogs[i].type}    
        </div>
        <div class="button">
            <button class="btn">Edit</button>
            <button class="btn">Delete</button>
        </div>
    </div>`
        
    }
}

function getDistanceTime(start, end){
    let timePost    = start
    let timeNow     = end
    let distance    = timeNow - timePost
    let disMonth    = Math.floor(distance / (1000 * 60 * 60 * 24 * 30))
    let disDay      = Math.floor(distance / (1000 * 60 * 60 * 24))
    let disHour     = Math.floor(distance / (1000 * 60 * 60))
    let disMinute   = Math.floor(distance / (1000 * 60))
    let disSecond   = Math.floor(distance / (1000))
    // distance = distance / 1000
    // return `${Math.floor(distance)} Second Ago`
    if (disMonth > 0) {
        return `Durasi: ${disMonth} Bulan`
    } else if(disDay > 0){
        return `Durasi: ${disDay} Hari`
    } else if(disHour > 0){
        return `Durasi: ${disHour} Jam`
    } else if(disMinute > 0){
        return `Durasi: ${disMinute} Menit`
    } else if(disSecond > 0){
        return `Durasi: ${disSecond} Detik`
    }
}