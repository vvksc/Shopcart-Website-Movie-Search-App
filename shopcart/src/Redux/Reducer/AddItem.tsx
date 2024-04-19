//const addItem = [];
const initial = {
    addItem: [],
    Wish: [],
    data: [],
    search:[],
    category:[]
}

const addItems = (state = initial, action) => {
    switch (action.type) {
        case "ADDITEM":
            const product = action.payload;


            const exist = state.addItem.find((x) => x.id === product.id);
            if (exist) {
                return {
                    ...state,
                    addItem: state.addItem.map((x) =>
                        x.id == action.payload.id ? { ...x, qty: x.qty + 1 } : x
                    )
                }

            }
            else {

                return {
                    ...state,
                    addItem: [...state.addItem, { ...product, qty: 1 }]
                   
                }
            }
            break;

            case "DELITEMQTY":{
                const product = action.payload;
                const exist = state.addItem.find((x) => x.id === product.id);
                if (exist) {
    
                    return {
                        ...state,
                        addItem: state.addItem.map((x) =>
                            x.id == action.payload.id ? { ...x, qty: x.qty<=1? 1: x.qty - 1 } : x
                        )
                    }
    
                }}

        case "DELITEM":
                return {
                ...state,
                addItem: state.addItem.filter((x) => x.id !== action.payload.id)
            }
            break;

        case "ADDWISH":
            return {
                ...state,
                Wish: [...state.Wish, action.payload]
            }
            break;

            case "SEARCH":
            return {
                ...state,
                search: action.payload
            }
            break;
            case "SETCATE":
                return {
                    ...state,
                    category: action.payload
                }
                break;

        case "DELWISH":
            return {
                ...state,
                Wish: state.Wish.filter((x) => x.id !== action.payload.id)
            }
            break;

        case "SETDATA":
            return {
                ...state,
                data: [...state.data, action.payload]
            }
            break;

        default: return state;
            break;


    }
}

export default addItems;


