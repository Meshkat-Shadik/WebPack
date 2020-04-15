import {ABC} from './test'
import '../styles/index.css'

const fn = () =>
{
    console.log('I am FN')
}
fn()

console.log(ABC)


class X {
    a = 10
    ABC()
    {
        console.log(a)
    }
}
let a = new X()
a.ABC()