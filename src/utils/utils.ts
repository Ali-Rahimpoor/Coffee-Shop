export function TomanConvertor(price: number): string {
  return new Intl.NumberFormat("fa-IR").format(price);
}

export function calculateDiscount(price:number,discount:number){
  if(discount <= 0 ) return price;
  const discountAmount = (price * discount) / 100;
  return Math.floor(price - discountAmount);
}

export function ShowDiscount(price:number,discount:number){
  if(discount <= 0 ) return price;
  const discountAmount = (price * discount) / 100;
  const calculateDiscount =  Math.floor(price - discountAmount);

  return Math.floor(price - calculateDiscount);
}