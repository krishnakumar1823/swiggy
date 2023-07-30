var array=[{id:"food1",
            img:"image/food1.webp",
            name:"Albi Homemade Cakes",
            food:[{ menuListId:"albi1",
                    recommandedType:"Chicken Fried Rice",
                    recommandedPrice:160,
                    recommandedImg:"image/salem rr 1.webp"},

                    {menuListId:"albi2",
                    recommandedType:"Chicken Noodles",
                    recommandedPrice:160,
                    recommandedImg:"image/salem rr 2.webp"},

                    { menuListId:"albi3",
                    recommandedType:"Chicken Fried Rice",
                    recommandedPrice:160,
                    recommandedImg:"image/salem rr 1.webp"}
                ],
            type:"bakery",
            rating:3.2,
            time:"29 mins",
            price:300,
            distance:"3.1 Kms"},
            
            {id:"food2",
            img:"image/food2.jpg",
            name:"salem RR biriyani unavagam",
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
        console.log(arrayFoodCount.length)

        for(j=0;j<arrayFoodCount.length;j++){

            console.log(array[i].food)

        var getHotelFoods=document.getElementById("hotel-food-looping")

        getHotelFoods.innerHTML+=`<div class="col-12 row align-items-center justify-content-between">
                        <div class="col-6 row align-items-center pb-5">
                            <div class="col-1">
                                <img src="image/veg.png" style="height:20px;width:20px">
                            </div>
                            <div class="col-10" style="color:orange;font-size: 13px;;">
                                <i class="bi bi-star-fill"></i>
                                <span style="letter-spacing: 3px;">BESTSELLER</span>
                            </div>
                            <div class="col-10 pt-3">
                                <h6 class="menu-card-food" class="text-capitalize"></h6>
                                <p class="menu-card-price" class="text-secondary" style="font-size:13px;"><i class="bi bi-currency-rupee"></i></p>
                            </div>
                        </div>  
                        <div class="col-2 text-end position-relative">
                            <img src="${array[i].food[j].recommandedImg}" style="height:100px;width:135px;border-radius:16px;">
                            <div>
                                <p class="img-menu-list-page2" onclick="addItems('${j}')" id='addfood${j}'>ADD</p>
                               
                                <span class="d-none" id='addbtns${j}'>
                                    <span id='plusfood${j}' onclick="minus('${j}')" style="padding-right:5px;font-size:17px;background-color:white;cursor:pointer"><i class="bi bi-dash-lg"></i></span>
                                    <span id='addCard${j}' style="padding-right:5px;font-size:17px">0</span>
                                    <span id='minusfood${j}' onclick="plus('${j}')" style="font-size:17px;background-color:white;cursor:pointer"><i class="bi bi-plus-lg"></i></span>
                                </span>
                            </div>
                        </div>` 
                    
                        var menuCardFood=document.getElementsByClassName("menu-card-food")[j]
                        menuCardFood.innerHTML=array[i].food[j].recommandedType

                        var menuCardPrice=document.getElementsByClassName("menu-card-price")[j]
                        menuCardPrice.innerHTML=array[i].food[j].recommandedPrice
                      
        }
    }
}


function addItems(value){

    var addItemPos=document.getElementById(`addfood${value}`)
    addItemPos.setAttribute("class","d-none")
    
    var addItem=document.getElementById(`addbtns${value}`)
    addItem.setAttribute("class","d-block img-menu-count-page2")

    ++saveCount

    var cardHead=document.getElementById("card")
    cardHead.setAttribute("class","headcard-count")
    cardHead.innerHTML=saveCount
}

//resetting local storage card count
localStorage.setItem("cardCount",JSON.stringify("0"))

var saveCount=0

var pluss=0



function plus(addition){
    ++saveCount
    var addCardCount=document.getElementById(`addCard${addition}`)

    //saved in localstorage
    localStorage.setItem("cardCount",JSON.stringify(saveCount))

    addCardCount.innerHTML= saveCount

    var cardHead=document.getElementById("card")
    cardHead.setAttribute("class","headcard-count")
    cardHead.innerHTML=saveCount
}

function minus(menuId){
    order.pop(menuId)

    console.log(order)

    var addCardCount=document.getElementById("addCard")

    var minusCard=JSON.parse(localStorage.getItem("cardCount"))
    saveCount= --minusCard
    localStorage.setItem("cardCount",JSON.stringify(saveCount))

    addCardCount.innerHTML= saveCount

    var cardHead=document.getElementById("card")
    cardHead.setAttribute("class","headcard-count")
    cardHead.innerHTML=saveCount
}