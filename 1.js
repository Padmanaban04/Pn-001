let myForm = document.getElementById("ourForm")
let myField
myForm.addEventListener("submit",(e) => {
	e.preventDefault()
	myField = document.getElementById("ourField")
	//alert(myField)
	createItem(myField.value)
	myField.value = ""
	myField.focus()
})
function createItem(x){
	let myList = document.getElementById("ourList")
	let myHtml = `<li>${x} <button onclick ="deleteElement(this)" > Delete </button></li>`
	myList.insertAdjacentHTML("beforeend",myHtml)
}
function deleteElement(element){
	element.parentElement.remove()
	myField.focus()
}