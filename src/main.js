let basket=JSON.parse(localStorage.getItem('basket')) || [];

function AutoGenerateItem(){
  let search;
  let html='';
  shopItemsData.forEach((item)=>{
    basket.forEach((x)=>{
      if(x.id===item.id){
        search=x.quantity;
      }
      else{
        return [];
      }
    })
    html+=`
    <div class="item" id=product-id-${item.id}>
      <img width="200" src="${item.img}" alt="">
      <div class="details">
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
        <div class="price-quantity">
          <h2>$${item.price}</h2>
          <div class="button">
            <i onclick="decrement('${item.id}')" class="bi bi-dash"></i>
          <div class="quantity" id=quantity-${item.id}>${search!=undefined? search:0}</div>
          <i onclick="increment('${item.id}')" class="bi bi-plus"></i>
          </div>
        </div>
      </div>
    </div>

    `;
  })

  document.querySelector('.shop').innerHTML=html;
}

AutoGenerateItem();

function increment(id){
  let matchingItem;
  basket.forEach((item)=>{
    if(id===item.id){
      matchingItem=item;
    }
  })
  if(matchingItem){
   matchingItem.quantity++;
  }
  else{
    basket.push({
      id:id,
      quantity:1
    })
  }
  localStorage.setItem('basket',JSON.stringify(basket));
  update(id);
}


let i;
let matchingItem;
function decrement(id){
  
  basket.forEach((item,index)=>{
    if(id===item.id){
      matchingItem=item;
      i=index;
    }
  })
  if(matchingItem===undefined) return;
  if(matchingItem){
   if(matchingItem.quantity>0){
    matchingItem.quantity--;
   }
   else {
   // return;
    basket.splice(i,1);
   }
  }
  localStorage.setItem('basket',JSON.stringify(basket));
  update(id);
  
}

let pair;
function update(id){
  basket.forEach((item)=>{
    if(id===item.id){
      pair=item;
    }
  })
  document.getElementById(`quantity-${id}`).innerHTML=pair.quantity;
  //console.log(pair.quantity);
  calculate();
}


function calculate(){
  let totalValue=0;
  let cartIcon=document.querySelector('.cartAmount');
  basket.forEach((item)=>{
    totalValue += item.quantity;
  });
  cartIcon.innerHTML=totalValue;

}

calculate();