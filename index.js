let profileDetails = {
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/user-profile-img.png",
    name: "RAHUL ATTULURI",
    age: 25
};

let container = document.createElement("div")
container.setAttribute("id","containerId")
container.classList.add("container")
container.style.backgroundColor="pink"
container.style.height="100vh"
document.body.appendChild(container)


let imgContainer = document.createElement("div")
imgContainer.setAttribute("id","imgContainerId")
imgContainer.classList.add("imgContainer")
container.appendChild(imgContainer)

let image = document.createElement("img")
image.setAttribute("id","imageId")
image.classList.add("imageClass")
image.src=profileDetails.imgSrc
imgContainer.appendChild(image)


let textContainer = document.createElement("div")
textContainer.setAttribute("id","textContainerId")
textContainer.classList.add("textContainerClass")
container.appendChild(textContainer)

let para1 = document.createElement("p")
para1.setAttribute("id","paraId")
para1.classList.add("paraClass")
para1.textContent=profileDetails.name
textContainer.appendChild(para1)

let para2 = document.createElement("p")
para2.setAttribute("id","paraId")
para2.classList.add("paraClass")
para2.textContent=profileDetails.age
textContainer.appendChild(para2)
para2.style.textAlign="center"
console.log(container)