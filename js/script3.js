var array=[{id:"food1",
            img:"image/food1.webp",
            name:"Albi Homemade Cakes",
            type:"bakery",
            rating:3.2,
            time:"29 mins",
            price:300,
            distance:"3.1 Kms"},
            
            {id:"food2",
            img:"image/food2.jpg",
            name:"salem RR biriyani unavagam",
            food:[{ menuListId:"albi1",
                    recommandedType:"Chicken Fried Rice",
                    recommandedPrice:160,
                    recommandedImg:"image/salem rr 1.webp"},

                    {menuListId:"albi2",
                    recommandedType:"Chicken Noodles",
                    recommandedPrice:160,
                    recommandedImg:"image/salem rr 2.webp"},

                    { menuListId:"albi3",
                    recommandedType:"Chicken biriyani",
                    recommandedPrice:160,
                    recommandedImg:"image/food4.webp"}
                ],
            type:"biriyany,chettinad,tandoori,chinese",
            rating:3.7,
            time:"21 mins",
            price:400,
            distance:"5.8 Kms"},

            {id:"food3",
            img:"image/food3.webp",
            name:"the BVK biriyani(bai veetu kalyanam)",
            type:"biriyani,south indian",
            rating:3.8,
            time:"14 mins",
            price:550,
            distance:"2.9 Kms"},

            {id:"food4",
            img:"image/food4.webp",
            name:"atho man",
            type:"burmese,indian,chinese,arabian",
            rating:3.9,
            time:"27 mins",
            price:350,
            distance:"5.6 Kms"},

            {id:"food5",
            img:"image/food5.webp",
            name:"pally tastei food(perambur)",
            type:"chinese,north indian,south indian",
            rating:4.2,
            time:"29 mins",
            price:250,
            distance:"2.3 Kms"},

            {id:"food6",
            img:"image/food6.webp",
            name:"grill & barbeque",
            type:"chinese,fast food,grill,north indian",
            rating:4.0,
            time:"32 mins",
            price:300,
            distance:"6.4 Kms"},

            {id:"food7",
            img:"image/food7.webp",
            name:"basheer bai biriyani",
            type:"south indian,indian,biriyani",
            rating:3.8,
            time:"31 mins",
            price:200,
            distance:"4.5 Kms"},

            {id:"food8",
            img:"image/food8.webp",
            name:"shawarma kings",
            type:"arabian,mediterranean",
            rating:4.2,
            time:"30 mins",
            price:200,
            distance:"3.2 Kms"},

            {id:"food9",
            img:"image/food9.webp",
            name:"the belgian waffle co.",
            type:"waffle,desert,ice cream",
            rating:4.3,
            time:"26 mins",
            price:200,
            distance:"2.9 Kms"},

            {id:"food10",
            img:"image/food10.webp",
            name:"bombay tandoor",
            type:"north indian,biriyani",
            rating:4.2,
            time:"28 mins",
            price:500,
            distance:"1.1 Kms"},

            {id:"food11",
            img:"image/food11.webp",
            name:"frozen bottle - milkshakes, dessert and ice cream",
            type:"beverages,desserts,ice creams,waffle",
            rating:4.1,
            time:"29 mins",
            price:250,
            distance:"4.8 Kms"},

            {id:"food12",
            img:"image/food12.webp",
            name:"cafe amin",
            type:"indian,chinese,biriyani,tandoor",
            rating:4.3,
            time:"28 mins",
            price:500,
            distance:"3.1 Kms"},

            {id:"food13",
            img:"image/food13.webp",
            name:"potful - claypot biriyanis",
            type:"biriyani,kebabs,north indian,mughlai",
            rating:4.3,
            time:"56 mins",
            price:500,
            distance:"3.6 Kms"},

            {id:"food14",
            img:"image/food14.webp",
            name:"the high joint",
            type:"fast food,snacks,beverages",
            rating:4.5,
            time:"34 mins",
            price:400,
            distance:"4.3 Kms"},

            {id:"food15",
            img:"image/food15.webp",
            name:"la pizza loca",
            type:"pizzas,desserts,indian",
            rating:4.5,
            time:"34 mins",
            price:800,
            distance:"2.8 Kms"}
            ]

var getHotelId=JSON.parse(localStorage.getItem("hotelId"))

for(i=0;i<array.length;i++){
    if(array[i].id == getHotelId){
        console.log(array[i])
        var page2HotelName=document.getElementById("page2HotelName")
        page2HotelName.innerHTML=array[i].name

        var page2HotelMenuList=document.getElementById("page2HotelMenuList")
        page2HotelMenuList.innerHTML=array[i].type

        var page2HotelDistance=document.getElementById("page2HotelDistance")
        page2HotelDistance.innerHTML=array[i].distance

        var page2HotelTime=document.getElementById("page2HotelTime")
        page2HotelTime.innerHTML=array[i].time

        var page2Hotelrupee=document.getElementById("page2Hotelrupee")
        page2Hotelrupee.innerHTML=`${array[i].price} FOR TWO`

        if(array[i].rating>=4.0){
			var page2HotelRating=document.getElementById("page2HotelRating")
            page2HotelRating.innerHTML=array[i].rating
            page2HotelRating.setAttribute("class","bi bi-star-fill pe-2")
			page2HotelRating.setAttribute("style","border-bottom:1px solid rgb(235 227 227);color:#30cd30;padding:5px 0;text-align:center;")
		}
		else if(array[i].rating>=3.0 && array[i].rating<=4.0){
			var page2HotelRating=document.getElementById("page2HotelRating")
            page2HotelRating.innerHTML=array[i].rating
            page2HotelRating.setAttribute("class","bi bi-star-fill pe-2")
			page2HotelRating.setAttribute("style","border-bottom:1px solid rgb(235 227 227);color:orange;padding:5px 0;text-align:center;")
		}
		else if(array[i].rating>=0 && array[i].rating<=3.0){
			var page2HotelRating=document.getElementById("page2HotelRating")
            page2HotelRating.innerHTML=array[i].rating
            page2HotelRating.setAttribute("class","bi bi-star-fill pe-2")
			page2HotelRating.setAttribute("style","border-bottom:1px solid rgb(235 227 227);color:red;padding:5px 0;text-align:center;")
		}
		else{
			page2HotelRating.innerHTML="--"
		}

        //hotel food menu card 
        var arrayFoodCount=array[i].food

        for(j=0;j<arrayFoodCount.length;j++){

        var getHotelFoods=document.getElementById("hotel-food-looping")

        getHotelFoods.innerHTML+=`<div class="col-12 row align-items-center justify-content-between">
                        <div class="col-6 col-lg-6 row align-items-center pb-5">
                            <div class="col-2 col-lg-1">
                                <img src="image/veg.png" style="height:20px;width:20px">
                            </div>
                            <div class="col-10 " style="color:orange;font-size: 13px;;">
                                <i class="bi bi-star-fill"></i>
                                <span style="letter-spacing: 3px;">BESTSELLER</span>
                            </div>
                            <div class="col-10 pt-3">
                                <h6 class="menu-card-food" class="text-capitalize"></h6>
                                <p class="menu-card-price" class="text-secondary" style="font-size:13px;"><i class="bi bi-currency-rupee"></i></p>
                            </div>
                        </div>  
                        <div class="col-6 col-lg-2 text-end position-relative">
                            <img src="${array[i].food[j].recommandedImg}" style="height:100px;width:135px;border-radius:16px;">
                            <div>
                                <p class="img-menu-list-page2" onclick="addItems('${j}','${i}','${j}','${0}')" id='addfood${j}'>ADD</p>
                            </div>
                        </div>` 
                    
                        var menuCardFood=document.getElementsByClassName("menu-card-food")[j]
                        menuCardFood.innerHTML=array[i].food[j].recommandedType

                        var menuCardPrice=document.getElementsByClassName("menu-card-price")[j]
                        menuCardPrice.innerHTML=array[i].food[j].recommandedPrice
                      
        }
    }
}


var savedItems=[]
var savedItemsorder=[]
var saveCount=0


function addItems(value,array_i,array_j,clickCount){
    var addItemPos=document.getElementById(`addfood${value}`)
    addItemPos.setAttribute("onclick","addItems(0)")
    ++clickCount
    if(clickCount==1){ 
    addItemPos.innerHTML="ADDED"
    addItemPos.setAttribute("class","d-block img-menu-count-page2")

	//creating object and save them in local storage
    var saved=array[array_i].food[array_j].menuListId
    savedItems[savedItems.length]={id:   savedItems.length,
                                    items_name:array[array_i].food[array_j].recommandedType,
                                    items_price:array[array_i].food[array_j].recommandedPrice}

                                    localStorage.setItem("savedFoodItems",JSON.stringify(savedItems))

    savedItemsorder[savedItemsorder.length]={foodsavingId:  savedItemsorder.length,
                                    foodCountplaced:1,
                                    items_name:array[array_i].food[array_j].recommandedType,
                                    items_price:array[array_i].food[array_j].recommandedPrice}

                                    localStorage.setItem("savedFoodQuantity",JSON.stringify(savedItemsorder))
                                    
                                    ++saveCount

    var cardHead=document.getElementById("card")
    cardHead.setAttribute("class","headcard-count")
    cardHead.innerHTML=saveCount
    }
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
                                <input type="number" min="1" max="5" onclick="getQunatityInput('${e.id}')" value='${getQuantityFromLocalStorage[e.id].foodCountplaced}'style="width:50%" id="getQunatity${e.id}" style="cursor:pointer;"></input>
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