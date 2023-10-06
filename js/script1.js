var array=[{img:"image/food1.webp",name:"Albi Homemade Cakes",type:"bakery",rating:3.2,time:"29 mins",price:300},
{img:"image/food2.jpg",name:"salem RR biriyani unavagam",type:"biriyany,chettinad,tandoori,chinese",rating:3.7,time:"21 mins",price:400},
{img:"image/food3.webp",name:"the BVK biriyani(bai veetu kalyanam)",type:"biriyani,south indian",rating:3.8,time:"14 mins",price:550},
{img:"image/food4.webp",name:"atho man",type:"burmese,indian,chinese,arabian",rating:3.9,time:"27 mins",price:350},
{img:"image/food5.webp",name:"pally tastei food(perambur)",type:"chinese,north indian,south indian",rating:4.2,time:"29 mins",price:250},
{img:"image/food6.webp",name:"grill & barbeque",type:"chinese,fast food,grill,north indian",rating:4.0,time:"32 mins",price:300},
{img:"image/food7.webp",name:"basheer bai biriyani",type:"south indian,indian,biriyani",rating:3.8,time:"31 mins",price:200},
{img:"image/food8.webp",name:"shawarma kings",type:"arabian,mediterranean",rating:4.2,time:"30 mins",price:200},
{img:"image/food9.webp",name:"the belgian waffle co.",type:"waffle,desert,ice cream",rating:4.3,time:"26 mins",price:200},
{img:"image/food10.webp",name:"bombay tandoor",type:"north indian,biriyani",rating:4.2,time:"28 mins",price:500},
{img:"image/food11.webp",name:"frozen bottle - milkshakes, dessert and ice cream",type:"beverages,desserts,ice creams,waffle",rating:4.1,time:"29 mins",price:250},
{img:"image/food12.webp",name:"cafe amin",type:"indian,chinese,biriyani,tandoor",rating:4.3,time:"28 mins",price:500},
{img:"image/food13.webp",name:"potful - claypot biriyanis",type:"biriyani,kebabs,north indian,mughlai",rating:4.3,time:"56 mins",price:500},
{img:"image/food14.webp",name:"the high joint",type:"fast food,snacks,beverages",rating:4.5,time:"34 mins",price:400},
{img:"image/food15.webp",name:"la pizza loca",type:"pizzas,desserts,indian",rating:4.5,time:"34 mins",price:800}
]
var array2=[{img:"image/food1.webp",name:"Albi Homemade Cakes",type:"bakery",rating:3.2,time:"29 mins",price:300},
{img:"image/food2.jpg",name:"salem RR biriyani unavagam",type:"biriyany,chettinad,tandoori,chinese",rating:3.7,time:"21 mins",price:400},
{img:"image/food3.webp",name:"the BVK biriyani(bai veetu kalyanam)",type:"biriyani,south indian",rating:3.8,time:"14 mins",price:550},
{img:"image/food4.webp",name:"atho man",type:"burmese,indian,chinese,arabian",rating:3.9,time:"27 mins",price:350},
{img:"image/food5.webp",name:"pally tastei food(perambur)",type:"chinese,north indian,south indian",rating:4.2,time:"29 mins",price:250},
{img:"image/food6.webp",name:"grill & barbeque",type:"chinese,fast food,grill,north indian",rating:4.0,time:"32 mins",price:300},
{img:"image/food7.webp",name:"basheer bai biriyani",type:"south indian,indian,biriyani",rating:3.8,time:"31 mins",price:200},
{img:"image/food8.webp",name:"shawarma kings",type:"arabian,mediterranean",rating:4.2,time:"30 mins",price:200},
{img:"image/food9.webp",name:"the belgian waffle co.",type:"waffle,desert,ice cream",rating:4.3,time:"26 mins",price:200},
{img:"image/food10.webp",name:"bombay tandoor",type:"north indian,biriyani",rating:4.2,time:"28 mins",price:500},
{img:"image/food11.webp",name:"frozen bottle - milkshakes, dessert and ice cream",type:"beverages,desserts,ice creams,waffle",rating:4.1,time:"29 mins",price:250},
{img:"image/food12.webp",name:"cafe amin",type:"indian,chinese,biriyani,tandoor",rating:4.3,time:"28 mins",price:500},
{img:"image/food13.webp",name:"potful - claypot biriyanis",type:"biriyani,kebabs,north indian,mughlai",rating:4.3,time:"56 mins",price:500},
{img:"image/food14.webp",name:"the high joint",type:"fast food,snacks,beverages",rating:4.5,time:"34 mins",price:400},
{img:"image/food15.webp",name:"la pizza loca",type:"pizzas,desserts,indian",rating:4.5,time:"34 mins",price:800}


]

//home food images
/*
var arrayLength=array.length
for(e=0;e<arrayLength;e++){
	var home=document.getElementById("foodfilter")
	home.setAttribute("class","row")
	var fooddiv1=document.createElement("div")
	fooddiv1.setAttribute("class","col-3 food-hover p-3 foodDelete")
	var foodImg=document.createElement("img")
	var foodDetailsDiv=document.createElement("div")
	var hotelName=document.createElement("h6")
	hotelName.innerHTML=array2[e].name
	var hotelType=document.createElement("p")
	hotelType.innerHTML=array2[e].type
	var foodspan=document.createElement("div")
	var hotelRating=document.createElement("i")
	hotelRating.innerHTML=array2[e].rating
	var hotelTime=document.createElement("span")
	var dot1=document.createElement("span")
	dot1.innerHTML="."
	hotelTime.innerHTML=array2[e].time
	var dot2=document.createElement("span")
	dot2.innerHTML="."
	var foodPrice=document.createElement("span")
	var span3="FOR EACH"
	foodPrice.innerHTML=`${array2[e].price} FOR EACH`

	
	foodImg.setAttribute("src",array2[e].img)
	foodImg.setAttribute("style","height:200px;padding:10px 10px")
	foodDetailsDiv.setAttribute("class","col-12 row")
	foodDetailsDiv.setAttribute("style","padding:10px 10px")
	hotelName.setAttribute("class","col-12 fw-bold text-capitalize")
	hotelType.setAttribute("class","col-12 mb-0 text-secondary text-capitalize fontSize")
	foodspan.setAttribute("class","col-12 ps-3 row span-padding align-items-center")
	
	if(array2[e].rating>=4.0){
		hotelRating.setAttribute("class","col-3 bi bi-star-fill fontSize")
		hotelRating.setAttribute("style","background-color:#30cd30;color:white;padding:5px 0;text-align:center;")
	}
	else if(array2[e].rating>=3.0 && array2[e].rating<=4.0){
		hotelRating.setAttribute("class","col-3 bi bi-star-fill fontSize")
		hotelRating.setAttribute("style","background-color:orange;color:white;padding:5px 0;text-align:center;")
	}
	else if(array2[e].rating>=0 && array2[e].rating<=3.0){
		hotelRating.setAttribute("class","col-3 bi bi-star-fill fontSize")
		hotelRating.setAttribute("style","background-color:red;color:white;padding:5px 0;text-align:center;")
	}
	else{
		hotelRating.innerHTML="--"
	}
	dot1.setAttribute("class","col-1 fs-4 pb-3 span-padding")
	hotelTime.setAttribute("class","col-3 text-secondary text-uppercase span-padding fontSize")
	dot2.setAttribute("class","col-1 fs-4 pb-3 span-padding")
	foodPrice.setAttribute("class","bi bi-currency-rupee col-4 text-secondary text-uppercase span-padding fontSize")


	home.appendChild(fooddiv1)
	fooddiv1.appendChild(foodImg)
	fooddiv1.appendChild(foodDetailsDiv)
	foodDetailsDiv.appendChild(hotelName)
	foodDetailsDiv.appendChild(hotelType)
	foodDetailsDiv.appendChild(foodspan)
	foodspan.appendChild(hotelRating)
	foodspan.appendChild(dot1)
	foodspan.appendChild(hotelTime)
	foodspan.appendChild(dot2)
	foodspan.appendChild(foodPrice)
}
*/
///home img food


var arrayLength=array.length
var fltr=document.getElementById("filter")
fltr.setAttribute("class","row")
var fltr_col_1=document.createElement("div")
var fltr_col_2=document.createElement("div")
var hotelCount=document.createElement("span")
hotelCount.innerHTML=arrayLength
var rest=document.createElement("h3")
rest.innerHTML="Restaurent"
var relevance=document.createElement("p")
relevance.innerHTML="Relevance"
var deliveryTime=document.createElement("p")
deliveryTime.innerHTML="Delivery"
var rating=document.createElement("p")
rating.innerHTML="Rating"
var costHtL=document.createElement("p")
costHtL.innerHTML="cost High to Low"
var costLtH=document.createElement("p")
costLtH.innerHTML="cost Low to High"

fltr.setAttribute("style","position:sticky;top:0;background-color:white;")
fltr_col_1.setAttribute("class","col-4 row align-items-center")
fltr_col_2.setAttribute("class","col-8 row align-items-center pt-2")
hotelCount.setAttribute("class","col-3 fw-bolder text-center fs-1 pb-3")
rest.setAttribute("class","col-8 fw-bolder cursr")
relevance.setAttribute("id","scriptRelevance")
relevance.setAttribute("class","text-secondary col-2 cursr")
deliveryTime.setAttribute("class","text-secondary col-2 cursr")
deliveryTime.setAttribute("id","scriptDtime")
rating.setAttribute("class","text-secondary col-2 cursr")
rating.setAttribute("id","scriptRating")
costHtL.setAttribute("class","text-secondary col-3 cursr")
costHtL.setAttribute("id","scriptHtL")
costLtH.setAttribute("class","text-secondary col-3 cursr")
costLtH.setAttribute("id","scriptLtH")

fltr.appendChild(fltr_col_1)
fltr.appendChild(fltr_col_2)
fltr_col_1.appendChild(hotelCount)
fltr_col_1.appendChild(rest)
fltr_col_2.appendChild(relevance)
fltr_col_2.appendChild(deliveryTime)
fltr_col_2.appendChild(rating)
fltr_col_2.appendChild(costHtL)
fltr_col_2.appendChild(costLtH)

var count=0
var count1=0
var count2=0
var count3=0

//food relevance
relevance.addEventListener("click",function(a){
	a.preventDefault()
	++count
	
	var arrayLength=array.length
	if(count1==1){
		for(i=0;i<arrayLength;i++){
			var fooddiv2=document.querySelector(".foodDelete2")
			fooddiv2.setAttribute("class","d-none")
		}
		--count1
	}
	if(count2==1){
		for(j=0;j<arrayLength;j++){
			var fooddiv3=document.querySelector(".foodDelete3")
			fooddiv3.setAttribute("class","d-none")
		}
		--count2
	}
	if(count3==1){
		for(k=0;k<arrayLength;k++){
			var fooddiv4=document.querySelector(".foodDelete4")
			fooddiv4.setAttribute("class","d-none")
		}
		--count3
	}
		
	if(count == 1){
		food1()		
	}
	if(count>=2){
		count=1
	}
})
function food1(){	
	for(e=0;e<arrayLength;e++){
		var filter1=document.getElementById("foodfilter")
		filter1.setAttribute("class","row")
		var fooddiv1=document.createElement("div")
		fooddiv1.setAttribute("class","col-3 food-hover p-3 foodDelete")
		var foodImg=document.createElement("img")
		var foodDetailsDiv=document.createElement("div")
		var hotelName=document.createElement("h6")
		hotelName.innerHTML=array2[e].name
		var hotelType=document.createElement("p")
		hotelType.innerHTML=array2[e].type
		var foodspan=document.createElement("div")
		var hotelRating=document.createElement("i")
		hotelRating.innerHTML=array2[e].rating
		var hotelTime=document.createElement("span")
		var dot1=document.createElement("span")
		dot1.innerHTML="."
		hotelTime.innerHTML=array2[e].time
		var dot2=document.createElement("span")
		dot2.innerHTML="."
		var foodPrice=document.createElement("span")
		var span3="FOR EACH"
		foodPrice.innerHTML=`${array2[e].price} FOR EACH`

		
		foodImg.setAttribute("src",array2[e].img)
		foodImg.setAttribute("style","height:200px;padding:10px 10px")
		foodDetailsDiv.setAttribute("class","col-12 row")
		foodDetailsDiv.setAttribute("style","padding:10px 10px")
		hotelName.setAttribute("class","col-12 fw-bold text-capitalize")
		hotelType.setAttribute("class","col-12 mb-0 text-secondary text-capitalize fontSize")
		foodspan.setAttribute("class","col-12 ps-3 row span-padding align-items-center")
		
		if(array2[e].rating>=4.0){
			hotelRating.setAttribute("class","col-3 bi bi-star-fill fontSize")
			hotelRating.setAttribute("style","background-color:#30cd30;color:white;padding:5px 0;text-align:center;")
		}
		else if(array2[e].rating>=3.0 && array2[e].rating<=4.0){
			hotelRating.setAttribute("class","col-3 bi bi-star-fill fontSize")
			hotelRating.setAttribute("style","background-color:orange;color:white;padding:5px 0;text-align:center;")
		}
		else if(array2[e].rating>=0 && array2[e].rating<=3.0){
			hotelRating.setAttribute("class","col-3 bi bi-star-fill fontSize")
			hotelRating.setAttribute("style","background-color:red;color:white;padding:5px 0;text-align:center;")
		}
		else{
			hotelRating.innerHTML="--"
		}
		dot1.setAttribute("class","col-1 fs-4 pb-3 span-padding")
		hotelTime.setAttribute("class","col-3 text-secondary text-uppercase span-padding fontSize")
		dot2.setAttribute("class","col-1 fs-4 pb-3 span-padding")
		foodPrice.setAttribute("class","bi bi-currency-rupee col-4 text-secondary text-uppercase span-padding fontSize")


		filter1.appendChild(fooddiv1)
		fooddiv1.appendChild(foodImg)
		fooddiv1.appendChild(foodDetailsDiv)
		foodDetailsDiv.appendChild(hotelName)
		foodDetailsDiv.appendChild(hotelType)
		foodDetailsDiv.appendChild(foodspan)
		foodspan.appendChild(hotelRating)
		foodspan.appendChild(dot1)
		foodspan.appendChild(hotelTime)
		foodspan.appendChild(dot2)
		foodspan.appendChild(foodPrice)
	}
	}

//rating
rating.addEventListener("click",function(a){
	a.preventDefault()
	
	++count1
	
	var arrayLength=array.length
	if(count==1){
		for(i=0;i<arrayLength;i++){
			var fooddiv=document.querySelector(".foodDelete")
			fooddiv.setAttribute("class","d-none")
		}
		--count
	}
	if(count2==1){
		for(j=0;j<arrayLength;j++){
			var fooddiv3=document.querySelector(".foodDelete3")
			fooddiv3.setAttribute("class","d-none")
		}
		--count2
	}
	if(count3==1){
		for(k=0;k<arrayLength;k++){
			var fooddiv4=document.querySelector(".foodDelete4")
			fooddiv4.setAttribute("class","d-none")
		}
		--count3
	}
	if(count1 == 1){
		food2()
	}
	if(count1>=2){
		count1=1
	}
})

function food2(){	
	for(i=0;i<arrayLength;i++){
		for(j=i+1;j<arrayLength;j++){
			if(array[i].rating < array[j].rating){
				var temp;
				temp=array[j];
				array[j]=array[i];
				array[i]=temp;
			}
		}
	}
	for(e=0;e<arrayLength;e++){
		var filter1=document.getElementById("foodfilter")
		var fooddiv2=document.createElement("div")
		var foodImg=document.createElement("img")
		var foodDetailsDiv=document.createElement("div")
		var hotelName=document.createElement("h6")
		hotelName.innerHTML=array[e].name
		var hotelType=document.createElement("p")
		hotelType.innerHTML=array[e].type
		var foodspan=document.createElement("div")
		var hotelRating=document.createElement("i")
		hotelRating.innerHTML=array[e].rating
		var hotelTime=document.createElement("span")
		var dot1=document.createElement("span")
		dot1.innerHTML="."
		hotelTime.innerHTML=array[e].time
		var dot2=document.createElement("span")
		dot2.innerHTML="."
		var foodPrice=document.createElement("span")
		foodPrice.innerHTML=`${array[e].price} FOR EACH`

		fooddiv2.setAttribute("class","col-3 food-hover p-3 foodDelete2")
		foodImg.setAttribute("src",array[e].img)
		foodImg.setAttribute("style","height:200px;padding:10px 10px")
		foodDetailsDiv.setAttribute("class","col-12 row")
		foodDetailsDiv.setAttribute("style","padding:10px 10px")
		hotelName.setAttribute("class","col-12 fw-bold text-capitalize")
		hotelType.setAttribute("class","col-12 mb-0 text-secondary text-capitalize fontSize")
		foodspan.setAttribute("class","col-12 ps-3 row span-padding align-items-center")
		
		if(array[e].rating>=4.0){
			hotelRating.setAttribute("class","col-3 bi bi-star-fill fontSize")
			hotelRating.setAttribute("style","background-color:#30cd30;color:white;padding:5px 0;text-align:center;")
		}
		else if(array[e].rating>=3.0 && array[e].rating<=4.0){
			hotelRating.setAttribute("class","col-3 bi bi-star-fill fontSize")
			hotelRating.setAttribute("style","background-color:orange;color:white;padding:5px 0;text-align:center;")
		}
		else if(array[e].rating>=0 && array[e].rating<=3.0){
			hotelRating.setAttribute("class","col-3 bi bi-star-fill fontSize")
			hotelRating.setAttribute("style","background-color:red;color:white;padding:5px 0;text-align:center;")
		}
		else{
			hotelRating.innerHTML="--"
		}
		dot1.setAttribute("class","col-1 fs-4 pb-3 span-padding")
		hotelTime.setAttribute("class","col-3 text-secondary text-uppercase span-padding fontSize")
		dot2.setAttribute("class","col-1 fs-4 pb-3 span-padding")
		foodPrice.setAttribute("class","bi bi-currency-rupee col-4 text-secondary text-uppercase span-padding fontSize")


		filter1.appendChild(fooddiv2)
		fooddiv2.appendChild(foodImg)
		fooddiv2.appendChild(foodDetailsDiv)
		foodDetailsDiv.appendChild(hotelName)
		foodDetailsDiv.appendChild(hotelType)
		foodDetailsDiv.appendChild(foodspan)
		foodspan.appendChild(hotelRating)
		foodspan.appendChild(dot1)
		foodspan.appendChild(hotelTime)
		foodspan.appendChild(dot2)
		foodspan.appendChild(foodPrice)
	}
}

//cost high to low
costHtL.addEventListener("click",function(a){
	a.preventDefault()
	++count2 
	
	var arrayLength=array.length
	if(count==1){
		for(i=0;i<arrayLength;i++){
			var fooddiv=document.querySelector(".foodDelete")
			fooddiv.setAttribute("class","d-none")
		}
		--count
	}
	if(count1==1){
		for(i=0;i<arrayLength;i++){
			var fooddiv2=document.querySelector(".foodDelete2")
			fooddiv2.setAttribute("class","d-none")
		}
		--count1
	}
	if(count3==1){
		for(k=0;k<arrayLength;k++){
			var fooddiv4=document.querySelector(".foodDelete4")
			fooddiv4.setAttribute("class","d-none")
		}
		--count3
	}
	if(count2 == 1){
		food3()
	}
	if(count2>=2){
		count2=1
	}
	
})

function food3(){	
	for(i=0;i<arrayLength;i++){
		for(j=i+1;j<arrayLength;j++){
			if(array[i].price < array[j].price){
				var temp;
				temp=array[j];
				array[j]=array[i];
				array[i]=temp;
			}
		}
	}
	for(e=0;e<arrayLength;e++){
		var filter1=document.getElementById("foodfilter")
		var fooddiv3=document.createElement("div")
		var foodImg=document.createElement("img")
		var foodDetailsDiv=document.createElement("div")
		var hotelName=document.createElement("h6")
		hotelName.innerHTML=array[e].name
		var hotelType=document.createElement("p")
		hotelType.innerHTML=array[e].type
		var foodspan=document.createElement("div")
		var hotelRating=document.createElement("i")
		hotelRating.innerHTML=array[e].rating
		var hotelTime=document.createElement("span")
		var dot1=document.createElement("span")
		dot1.innerHTML="."
		hotelTime.innerHTML=array[e].time
		var dot2=document.createElement("span")
		dot2.innerHTML="."
		var foodPrice=document.createElement("span")
		foodPrice.innerHTML=`${array[e].price} FOR EACH`

		fooddiv3.setAttribute("class","col-3 food-hover p-3 foodDelete3")
		foodImg.setAttribute("src",array[e].img)
		foodImg.setAttribute("style","height:200px;padding:10px 10px")
		foodDetailsDiv.setAttribute("class","col-12 row")
		foodDetailsDiv.setAttribute("style","padding:10px 10px")
		hotelName.setAttribute("class","col-12 fw-bold text-capitalize")
		hotelType.setAttribute("class","col-12 mb-0 text-secondary text-capitalize fontSize")
		foodspan.setAttribute("class","col-12 ps-3 row span-padding align-items-center")
		
		if(array[e].rating>=4.0){
			hotelRating.setAttribute("class","col-3 bi bi-star-fill fontSize")
			hotelRating.setAttribute("style","background-color:#30cd30;color:white;padding:5px 0;text-align:center;")
		}
		else if(array[e].rating>=3.0 && array[e].rating<=4.0){
			hotelRating.setAttribute("class","col-3 bi bi-star-fill fontSize")
			hotelRating.setAttribute("style","background-color:orange;color:white;padding:5px 0;text-align:center;")
		}
		else if(array[e].rating>=0 && array[e].rating<=3.0){
			hotelRating.setAttribute("class","col-3 bi bi-star-fill fontSize")
			hotelRating.setAttribute("style","background-color:red;color:white;padding:5px 0;text-align:center;")
		}
		else{
			hotelRating.innerHTML="--"
		}
		dot1.setAttribute("class","col-1 fs-4 pb-3 span-padding")
		hotelTime.setAttribute("class","col-3 text-secondary text-uppercase span-padding fontSize")
		dot2.setAttribute("class","col-1 fs-4 pb-3 span-padding")
		foodPrice.setAttribute("class","bi bi-currency-rupee col-4 text-secondary text-uppercase span-padding fontSize")


		filter1.appendChild(fooddiv3)
		fooddiv3.appendChild(foodImg)
		fooddiv3.appendChild(foodDetailsDiv)
		foodDetailsDiv.appendChild(hotelName)
		foodDetailsDiv.appendChild(hotelType)
		foodDetailsDiv.appendChild(foodspan)
		foodspan.appendChild(hotelRating)
		foodspan.appendChild(dot1)
		foodspan.appendChild(hotelTime)
		foodspan.appendChild(dot2)
		foodspan.appendChild(foodPrice)
	}
}

//cost low to high
costLtH.addEventListener("click",function(a){
	a.preventDefault()
 
	++count3
	
	var arrayLength=array.length
	if(count==1){
		for(i=0;i<arrayLength;i++){
			var fooddiv=document.querySelector(".foodDelete")
			fooddiv.setAttribute("class","d-none")
		}
		--count
	}
	if(count1==1){
		for(i=0;i<arrayLength;i++){
			var fooddiv2=document.querySelector(".foodDelete2")
			fooddiv2.setAttribute("class","d-none")
		}
		--count1
	}
	if(count2==1){
		for(k=0;k<arrayLength;k++){
			var fooddiv3=document.querySelector(".foodDelete3")
			fooddiv3.setAttribute("class","d-none")
		}
		--count2
	}
	if(count3 == 1){
		food4()
	}
	if(count3>=2){
		count3=1
	}
	
})

function food4(){	
	for(i=0;i<arrayLength;i++){
		for(j=i+1;j<arrayLength;j++){
			if(array[i].price > array[j].price){
				var temp;
				temp=array[j];
				array[j]=array[i];
				array[i]=temp;
			}
		}
	}
	for(e=0;e<arrayLength;e++){
		var filter1=document.getElementById("foodfilter")
		var fooddiv4=document.createElement("div")
		var foodImg=document.createElement("img")
		var foodDetailsDiv=document.createElement("div")
		var hotelName=document.createElement("h6")
		hotelName.innerHTML=array[e].name
		var hotelType=document.createElement("p")
		hotelType.innerHTML=array[e].type
		var foodspan=document.createElement("div")
		var hotelRating=document.createElement("i")
		hotelRating.innerHTML=array[e].rating
		var hotelTime=document.createElement("span")
		var dot1=document.createElement("span")
		dot1.innerHTML="."
		hotelTime.innerHTML=array[e].time
		var dot2=document.createElement("span")
		dot2.innerHTML="."
		var foodPrice=document.createElement("span")
		foodPrice.innerHTML=`${array[e].price} FOR EACH`

		fooddiv4.setAttribute("class","col-3 food-hover p-3 foodDelete4")
		foodImg.setAttribute("src",array[e].img)
		foodImg.setAttribute("style","height:200px;padding:10px 10px")
		foodDetailsDiv.setAttribute("class","col-12 row")
		foodDetailsDiv.setAttribute("style","padding:10px 10px")
		hotelName.setAttribute("class","col-12 fw-bold text-capitalize")
		hotelType.setAttribute("class","col-12 mb-0 text-secondary text-capitalize fontSize")
		foodspan.setAttribute("class","col-12 ps-3 row span-padding align-items-center")
		
		if(array[e].rating>=4.0){
			hotelRating.setAttribute("class","col-3 bi bi-star-fill fontSize")
			hotelRating.setAttribute("style","background-color:#30cd30;color:white;padding:5px 0;text-align:center;")
		}
		else if(array[e].rating>=3.0 && array[e].rating<=4.0){
			hotelRating.setAttribute("class","col-3 bi bi-star-fill fontSize")
			hotelRating.setAttribute("style","background-color:orange;color:white;padding:5px 0;text-align:center;")
		}
		else if(array[e].rating>=0 && array[e].rating<=3.0){
			hotelRating.setAttribute("class","col-3 bi bi-star-fill fontSize")
			hotelRating.setAttribute("style","background-color:red;color:white;padding:5px 0;text-align:center;")
		}
		else{
			hotelRating.innerHTML="--"
		}
		dot1.setAttribute("class","col-1 fs-4 pb-3 span-padding")
		hotelTime.setAttribute("class","col-3 text-secondary text-uppercase span-padding fontSize")
		dot2.setAttribute("class","col-1 fs-4 pb-3 span-padding")
		foodPrice.setAttribute("class","bi bi-currency-rupee col-4 text-secondary text-uppercase span-padding fontSize")


		filter1.appendChild(fooddiv4)
		fooddiv4.appendChild(foodImg)
		fooddiv4.appendChild(foodDetailsDiv)
		foodDetailsDiv.appendChild(hotelName)
		foodDetailsDiv.appendChild(hotelType)
		foodDetailsDiv.appendChild(foodspan)
		foodspan.appendChild(hotelRating)
		foodspan.appendChild(dot1)
		foodspan.appendChild(hotelTime)
		foodspan.appendChild(dot2)
		foodspan.appendChild(foodPrice)
	}
}