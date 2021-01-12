/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/
header.style.color = "blue"


/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)
const profile = document.querySelector(" #profile ")
profile.children[0].src = traveler.photo
profile.children[0].alt = traveler.name
const h2 = profile.querySelector(" h2 ")
h2.textContent = traveler.name
const em = profile.querySelector("em")
em.textContent = traveler.nickname
    /***** Deliverable 4 *****/
traveler.animalSightings.forEach(function(postObject) {
    const animals = document.querySelector("#animals")
    animals.innerHTML +=
        `<li data-id="${postObject.id}">
            <p>${postObject.description}</p>
            <img src= "${postObject.photo}" alt="${postObject.species}"/>
            <a href="${postObject.link}" target="_blank">Here's a video about the ${postObject.species}</a>
        </li>`
})

/***** Deliverable 5 *****/
const butterfly = document.querySelector("li[data-id='3']")
butterfly.remove()