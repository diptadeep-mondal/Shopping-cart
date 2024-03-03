let basket=JSON.parse(localStorage.getItem('basket')) || [];

function calculate(){
    let totalValue=0;
    let cartIcon=document.querySelector('.cartAmount');
    basket.forEach((item)=>{
      totalValue += item.quantity;
    });
    cartIcon.innerHTML=totalValue;
  
  }
  
  calculate();


    let button=document.querySelector('.text-center');
  function generate(){
    let pairItem;
        if(basket.length!=0){
            button.innerHTML=`
            <h2>Please place your
            order</h2>
            <button class="placeOrd">Place Order</button>
            `;
            let val='';
            basket.forEach((item,index)=>{
              
                shopItemsData.forEach((data)=>{
                    if(item.id===data.id){
                        pairItem=data; 

                       val+=`
                        <div class="cart-item">
                        <img class="cart-img" src="${pairItem.img}" alt="" />
                        <div class="cart-details">
                          <div>
                          <h3>${pairItem.name}</h3>
                          <button onclick="basket.splice(${index},1)
                          localStorage.setItem('basket',JSON.stringify(basket));
                          generate();
                          ">x</button>
                          </div>
                          <p>${pairItem.desc}</p>
                          <h2>$${pairItem.price}</h2>
                        </div>
                        </div>
                        `;        
                    }
                    
                    
                })
            })
            document.querySelector('.shopping-cart').innerHTML=val;
            
        }
        else{
           button.innerHTML=`
           <h2>cart is empty</h2>
           <a href="index.html">
           <button class="HomeBtn">Back To Home</button>
           </a>
           `;
        }
  }

  generate();

