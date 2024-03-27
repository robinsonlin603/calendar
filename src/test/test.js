/**
 * 1
 * Q1.
 * */
function sortUserName(user){
    const sortArray = user.sort((a,b)=>{
        const letCompareA = a.firstName+a.lastName+a.customerID
        const letCompareB = b.firstName+b.lastName+b.customerID
        
        return letCompareA.localeCompare(letCompareB)
    })

    return sortArray
}

/**
 * 1
 * Q2.
 * */
function sortByType(user){
    const professionOrder = {
        systemAnalytics : 0,
        engineer:1,
        productOwner:2,
        freelancer:3,
        student:4
    }

    const sortArray = user.sort((a,b)=>professionOrder[a.profession] - professionOrder[b.profession])

    return sortArray
}

/**
 * 2
 * Q1.
 * 原因: css 權重問題，所以 blue 無法覆蓋上去
   調整: .container .shop-list:first-child .item {
   color: blue; 
 * */

/**
 * 2
 * Q2.
 * 用 :nth-child() 去指定下一個元素
 * */

/**
 * 3
 * */

function getUniqueNumber(items){
    return Array.from(new Set(items))
}

/**
 * 4
 * Q1.
 * Interface 通常用在定義一個物件內容有哪些屬性的時候
 * @example
 * interface User{
 *  firstName: string;
 *  lastName: string;
 *  customerID: string;
 *  note:string;
 *  profession:string;
 * }
 * */

/**
 * 4
 * Q2.
 * Enum 可以讓我們定義一組常數，讓我開發的時候可以更了解這組函數 or 數字的意義是什麼
 * @example
 * 當後端如果只傳來這組數字的時候，我們可以透過 Enum 來轉換成我們了解的意義
 * enum UserType {
 * Primary = 1,
 * Secondary = 2,
 * Third = 3,
 * Advanced = 4
 * }
 * */

/**
 * 5
 * Q1. handleAddCount() 不會依照使用者想的一樣增加 3 次，因為 setState 是非同步的，所以 React 會將這 3 次的 setState 合併成一次
 * Q2. this.setState(prevState => ({ count: prevState.count + 1 }));
       this.setState(prevState => ({ count: prevState.count + 1 }));
       this.setState(prevState => ({ count: prevState.count + 1 }));
 * }
 * */

/**
 * 6
 * */

let timer = useRef(null)

const handleOnChange = (event) => {
    if(timer){
        return clearTimeout(timer)
    }
    
    timer.current = setTimeout(()=>{
            // make ajax call 
    }, 1000)
  }; 