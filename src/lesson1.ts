// @ts-ignore
type User = number // === string[]
type UserArray = User[] // === string[]


type Plus = () => void
const plus: Plus = () => {}
plus()

type Minus = () => number
const minus: Minus = () => {
    return 1-1
}

interface IUser {
    name: string
    age?: number
    salary: number
}

interface IVlad extends IUser {
    education?: string
}

type MapObject = (object: IVlad) => Array<string> // === тому, что ниже
const mapObject = (object: IVlad): Array<string> => {
    const b = object.salary + 10;
    return ['']
}

mapObject({ name: '', age: 0, education: '', salary: 10 })

enum Currency {
    USD= 'usd',
    BYN = 'byn',
    EUR = 'eur',
}

// ASC - от А до Я
// DESC - от Я до А
// Default - ASC || DESC

type Product = {
    id: number,
    name: string,
    price: number,
    currency: Currency,
    ingredients: string[],
    type: string,
    available: boolean
}

type Products = Product[]

const products: Products = [
    {
        id: 1,
        name: "Burger Premium",
        price: 6,
        currency: Currency.USD,
        ingredients: ["flour", "beef", "salad", "cheese", "sauce"],
        type: "burger",
        available: true
    },
    {
        id: 2,
        name: "Burger Premium",
        price: 3,
        currency: Currency.BYN,
        ingredients: ["flour", "beef", "salad", "cheese", "sauce"],
        type: "burger",
        available: true
    },
    {
        id: 3,
        name: "Burger Lite",
        price: 2.3,
        currency: Currency.EUR,
        ingredients: ["flour", "beef", "cheese", "sauce", "cucumber"],
        type: "burger",
        available: true
    },
];

type GetProduct = (id: number, productsArr: Products) => Product | undefined

const getProduct: GetProduct = (id, productsArr) => productsArr.find((p) => p.id === id);

const prod = getProduct(4, products)

console.log(prod?.name)
