var array=[{id:"food1",img:"image/food1.webp",name:"Albi Homemade Cakes",type:"bakery",rating:3.2,time:"29 mins",price:300},
{id:"food2",img:"image/food2.jpg",name:"salem RR biriyani unavagam",type:"biriyany,chettinad,tandoori,chinese",rating:3.7,time:"21 mins",price:400},
{id:"food3",img:"image/food3.webp",name:"the BVK biriyani(bai veetu kalyanam)",type:"biriyani,south indian",rating:3.8,time:"14 mins",price:550},
{id:"food4",img:"image/food4.webp",name:"atho man",type:"burmese,indian,chinese,arabian",rating:3.9,time:"27 mins",price:350},
{id:"food5",img:"image/food5.webp",name:"pally tastei food(perambur)",type:"chinese,north indian,south indian",rating:4.2,time:"29 mins",price:250},
{id:"food6",img:"image/food6.webp",name:"grill & barbeque",type:"chinese,fast food,grill,north indian",rating:4.0,time:"32 mins",price:300},
{id:"food7",img:"image/food7.webp",name:"basheer bai biriyani",type:"south indian,indian,biriyani",rating:3.8,time:"31 mins",price:200},
{id:"food8",img:"image/food8.webp",name:"shawarma kings",type:"arabian,mediterranean",rating:4.2,time:"30 mins",price:200},
{id:"food9",img:"image/food9.webp",name:"the belgian waffle co.",type:"waffle,desert,ice cream",rating:4.3,time:"26 mins",price:200},
{id:"food10",img:"image/food10.webp",name:"bombay tandoor",type:"north indian,biriyani",rating:4.2,time:"28 mins",price:500},
{id:"food11",img:"image/food11.webp",name:"frozen bottle - milkshakes, dessert and ice cream",type:"beverages,desserts,ice creams,waffle",rating:4.1,time:"29 mins",price:250},
{id:"food12",img:"image/food12.webp",name:"cafe amin",type:"indian,chinese,biriyani,tandoor",rating:4.3,time:"28 mins",price:500},
{id:"food13",img:"image/food13.webp",name:"potful - claypot biriyanis",type:"biriyani,kebabs,north indian,mughlai",rating:4.3,time:"56 mins",price:500},
{id:"food14",img:"image/food14.webp",name:"the high joint",type:"fast food,snacks,beverages",rating:4.5,time:"34 mins",price:400},
{id:"food15",img:"image/food15.webp",name:"la pizza loca",type:"pizzas,desserts,indian",rating:4.5,time:"34 mins",price:800}
]

var array1=[{id:"food1",img:"image/food1.webp",name:"Albi Homemade Cakes",type:"bakery",rating:3.2,time:"29 mins",price:300},
{id:"food2",img:"image/food2.jpg",name:"salem RR biriyani unavagam",type:"biriyany,chettinad,tandoori,chinese",rating:3.7,time:"21 mins",price:400},
{id:"food3",img:"image/food3.webp",name:"the BVK biriyani(bai veetu kalyanam)",type:"biriyani,south indian",rating:3.8,time:"14 mins",price:550},
{id:"food4",img:"image/food4.webp",name:"atho man",type:"burmese,indian,chinese,arabian",rating:3.9,time:"27 mins",price:350},
{id:"food5",img:"image/food5.webp",name:"pally tastei food(perambur)",type:"chinese,north indian,south indian",rating:4.2,time:"29 mins",price:250},
{id:"food6",img:"image/food6.webp",name:"grill & barbeque",type:"chinese,fast food,grill,north indian",rating:4.0,time:"32 mins",price:300},
{id:"food7",img:"image/food7.webp",name:"basheer bai biriyani",type:"south indian,indian,biriyani",rating:3.8,time:"31 mins",price:200},
{id:"food8",img:"image/food8.webp",name:"shawarma kings",type:"arabian,mediterranean",rating:4.2,time:"30 mins",price:200},
{id:"food9",img:"image/food9.webp",name:"the belgian waffle co.",type:"waffle,desert,ice cream",rating:4.3,time:"26 mins",price:200},
{id:"food10",img:"image/food10.webp",name:"bombay tandoor",type:"north indian,biriyani",rating:4.2,time:"28 mins",price:500},
{id:"food11",img:"image/food11.webp",name:"frozen bottle - milkshakes, dessert and ice cream",type:"beverages,desserts,ice creams,waffle",rating:4.1,time:"29 mins",price:250},
{id:"food12",img:"image/food12.webp",name:"cafe amin",type:"indian,chinese,biriyani,tandoor",rating:4.3,time:"28 mins",price:500},
{id:"food13",img:"image/food13.webp",name:"potful - claypot biriyanis",type:"biriyani,kebabs,north indian,mughlai",rating:4.3,time:"56 mins",price:500},
{id:"food14",img:"image/food14.webp",name:"the high joint",type:"fast food,snacks,beverages",rating:4.5,time:"34 mins",price:400},
{id:"food15",img:"image/food15.webp",name:"la pizza loca",type:"pizzas,desserts,indian",rating:4.5,time:"34 mins",price:800}
]

var arrayLength=array.length
// food filter
var filter=document.getElementById("filter")
filter.innerHTML=`<div class="col-4 row align-items-center div-option2-res" id="food">
        <span class="col-5 col-lg-3 fw-bolder text-center fs-1">${arrayLength}</span>
        <h3 class="col-7 col-lg-8 fw-bolder cursr">Restaurent</h3>
    </div>
    <div class="col-12 col-lg-8 row align-items-center pt-2">
        <p class="text-secondary col-4 col-lg-2 cursr" onclick="scriptRelevance()">Relevance</p>
        <p class="text-secondary col-4 col-lg-2 cursr" onclick="scriptDtime()">Delivery</p>
        <p class="text-secondary col-4 col-lg-2 cursr" onclick="scriptRating()">Rating</p>
        <p class="text-secondary col-4 col-lg-3 cursr" onclick="scriptHtL()">cost High to Low</p>
        <p class="text-secondary col-4 col-lg-3 cursr" onclick="scriptLtH()">cost Low to High</p>
    </div>`

//filter1
function food(array){
	var foodfilter=document.getElementById("foodfilter")   
	var indx=0

	array.map((e)=>{
		//creating menu id for id name=menu
		var mnuid=0;
		
		//console.log(idmenu)

		foodfilter.innerHTML+=`<div class="col-12 col-md-6 col-lg-3 position-relative food-hover p-3" id="food" onclick="hotelDetailView('${e.id}')">
								<img class="img" style="height:200px;padding:10px 10px;width:100%">
								<div class="col-12 row" style="padding:10px 10px">
									<h6 class="col-12 fw-bold text-capitalize">${e.name}</h6>
									<p class="col-12 mb-0 text-secondary text-capitalize fontSize">${e.type}</p>
								</div>
								<div class="col-12 ps-3 row span-padding align-items-center">
									<i class="col-3 bi bi-star-fill fontSize" id="${e.id}"></i>
									<span class="col-1 fs-4 pb-3 span-padding">.</span>
									<span class="col-3 text-secondary text-uppercase span-padding fontSize">${e.time}</span>
									<span class="col-1 fs-4 pb-3 span-padding">.</span>
									<span class="bi bi-currency-rupee col-4 text-secondary text-uppercase span-padding fontSize">${e.price} FOR EACH</span>
								</div>
							</div>`

		//food image
		var img=document.getElementsByClassName("img")[indx]
		indx++
		img.setAttribute("src",e.img)

		//hotel rating color setting
		var hotelRating=document.getElementById(`${e.id}`)

		
		var ratings=`${e.rating}`
		if(ratings>=4.0){
			hotelRating.innerHTML=ratings
			hotelRating.setAttribute("style","background-color:#30cd30;color:white;padding:5px 0;text-align:center;")
		}
		else if(ratings>=3.0 && ratings<=4.0){
			hotelRating.innerHTML=ratings
			hotelRating.setAttribute("style","background-color:orange;color:white;padding:5px 0;text-align:center;")
		}
		else if(ratings>=0 && ratings<=3.0){
			hotelRating.innerHTML=ratings
			hotelRating.setAttribute("style","background-color:red;color:white;padding:5px 0;text-align:center;")
		}
		else{
			hotelRating.innerHTML="--"
		}
	})
}
 
food(array)

//relevance(array)
function scriptRelevance(){
	
	var foodfilter=document.getElementById("foodfilter") 
	foodfilter.innerHTML=""
	
	food(array1)
}

//rating(array)
function scriptRating( ){
	let rating= array.sort(function (a,b){
		return b.rating -a.rating
	})
	
	var foodfilter=document.getElementById("foodfilter") 
	foodfilter.innerHTML=""
	
	food(rating)
}

//costHtL(array)
function scriptHtL( ){
	let costHtL= array.sort(function (a,b){
		return b.price -a.price
	})
	
	var foodfilter=document.getElementById("foodfilter") 
	foodfilter.innerHTML=""
	
	food(costHtL)
}

//costLtH(array)
function scriptLtH(){
	let costLtH= array.sort(function (a,b){
		return a.price -b.price
	})
	
	var foodfilter=document.getElementById("foodfilter") 
	foodfilter.innerHTML=""
	
	food(costLtH)
}


//************************************************************************************************************************//
//storing hotel id in local storage
function hotelDetailView(value){
 	localStorage.setItem("hotelId",JSON.stringify(value))
	location.href="hotel-menu.html"
}

 
//hotel menu page 2
//getting card items in local storage
var getOrdersFromLocalStorage=JSON.parse(localStorage.getItem("savedFoodItems"))
var getQuantityFromLocalStorage=JSON.parse(localStorage.getItem("savedFoodQuantity"))

var cardHead=document.getElementById("card")
cardHead.setAttribute("class","headcard-count")
cardHead.innerHTML=getOrdersFromLocalStorage.length

var orderShowing=document.getElementById("orderShowing")
getOrdersFromLocalStorage.map((e) =>{
orderShowing.innerHTML+=`<div class="row" id="${e.items_name}">
                            <div class="col-3">
                                <p>${e.items_name}</p>
                            </div>
                            <div class="col-3">
                                <p>${e.items_price}</p>
                            </div>
                            <div class="col-3">
                                <input type="number" min="1" max="5" onclick="getQunatityInput('${e.id}')" value='${getQuantityFromLocalStorage[e.id].foodCountplaced}'style="width:50%" id="getQunatity${e.id}"></input>
                            </div>
                            <div class="col-3 rmvbtn">
                                <buttom id='${e.items_name}' onclick="removeOrder('${e.items_name}')" style="cursor:pointer;">Remove</button>
                            </div>
                        </div>`				
})




function removeOrder(rmvFoodItem){
	// var getquant=document.getElementById(rmvFoodItem)
	var getOrdersFromLocalStorage=JSON.parse(localStorage.getItem("savedFoodItems"))
    var setNewQuantity=[]
    var setNewOrder=[]
	for(i=0;i<getOrdersFromLocalStorage.length;i++){ 
		if(getOrdersFromLocalStorage[i].items_name === rmvFoodItem){
        
    //Resetting QuantityFromLocalStorage
			getQuantityFromLocalStorage.splice(i,1)
            var newQuantityLength=getQuantityFromLocalStorage.length
            for(var k=0;k<newQuantityLength;k++){
                var x={...getQuantityFromLocalStorage[k],foodsavingId:k}
                setNewQuantity[setNewQuantity.length]=x
                
            } 
			localStorage.setItem("savedFoodQuantity",JSON.stringify(setNewQuantity))

    //Resetting OrdersFromLocalStorage
            getOrdersFromLocalStorage.splice(i,1)
            var newOrderLength=getOrdersFromLocalStorage.length
            for(var i=0;i<newOrderLength;i++){
                var y={...getOrdersFromLocalStorage[i],id:i}
                setNewOrder[setNewOrder.length]=y
                
            } 
			localStorage.setItem("savedFoodItems",JSON.stringify(setNewOrder))
    
    //Removing the particular div
			var removing=document.getElementById(`${rmvFoodItem}`)
			removing.remove()
		}
	}
	
}


function getQunatityInput(userQuant){
	var ordQuantity=document.getElementById(`getQunatity${userQuant}`).value
	saveQuantity={
		...getQuantityFromLocalStorage[userQuant],
		foodsavingId:userQuant,
		foodCountplaced:`${ordQuantity}`}

        var findIndByName=getQuantityFromLocalStorage[userQuant].items_name

        var indValue=getQuantityFromLocalStorage.findIndex((val)=>{
            return val.items_name===findIndByName
        })
		
		getQuantityFromLocalStorage.splice(indValue,1,saveQuantity)
	
		localStorage.setItem("savedFoodQuantity",JSON.stringify(getQuantityFromLocalStorage))
		console.log(getQuantityFromLocalStorage)
}


function addTotal(){
	var totaladdingArray=[]
	var  conformOrder=document.getElementById("conformOrder")
	conformOrder.innerHTML=""
	getOrdersFromLocalStorage.map((e) =>{
		for(i=0;i<getQuantityFromLocalStorage.length;i++){
			if(e.id == getQuantityFromLocalStorage[i].foodsavingId){

			var total=getQuantityFromLocalStorage[i].foodCountplaced*e.items_price
			
			totaladdingArray.push(total)
			conformOrder.innerHTML+=`<div class="row">
										<div class="col-3">
											<p>${e.items_name}</p>
										</div>
										<div class="col-3">
											<p>${e.items_price}</p>
										</div>
										<div class="col-3">
											<p>${getQuantityFromLocalStorage[i].foodCountplaced}</p>
										</div>
										<div class="col-3 rmvbtn">
											<p>${total}</p>
										</div>
									</div>`
			}
		}


	})
	var sum=0
	for(a=0;a<totaladdingArray.length;a++){
		sum+=totaladdingArray[a]
	}

	var finalrow=document.createElement("div")
	var finalTotal=document.createElement("p")
	finalTotal.innerHTML="Total = "
	var finalAmt=document.createElement("p")
	finalAmt.setAttribute("id","finalAmt")
	finalAmt.innerHTML=sum

	finalrow.setAttribute("class","row")
	finalTotal.setAttribute("class","col-9 text-end text-danger")
	finalAmt.setAttribute("class","col-3 text-start")

	conformOrder.append(finalrow)
	finalrow.appendChild(finalTotal)
	finalrow.appendChild(finalAmt)

	localStorage.setItem("Payment_Amt",JSON.stringify(sum))

	var getPaymentAmt=JSON.parse(localStorage.getItem("Payment_Amt"))

var rzp_button=document.getElementById("rzp-button1")
rzp_button.setAttribute("onclick" ,`paymentGateway(${getPaymentAmt})`)
console.log(rzp_button)
}




function paymentGateway(paymntamount){
	var amt= paymntamount*100
		var options = {
			"key": "rzp_test_DeF2QdkgXxWVNm",  
			"amount": amt ,  
			"currency":"INR",
			"name": "Swiggy payment",  
			"description": "Test Transaction",
			"image": "https://www.vhv.rs/dpng/d/433-4338596_swiggy-logo-png-image-free-download-searchpng-swiggy.png",
			//"order_id": "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
			"handler": function (response){
				
			}
			
		};
		var rzp1 = new Razorpay(options);
		
		rzp1.on('payment.failed', function (response){
			
		});
		document.getElementById('rzp-button1').onclick = function(e){
			rzp1.open();
			e.preventDefault();
		}
}