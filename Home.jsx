
// import Card from './Components/card';
import Carddd from './Components/card';
import { Testimanial } from './Components/Testimanial.jsx';
import { useApiHooks } from './Hooks/apihooks.js'





export default function Home() {


  const data = useApiHooks('https://www.themealdb .com/api/json/v1/1/categories')
  const person = {
    person_photo: '',
    person_name: 'dipendra',
    company_detail: ''
  };
  console.log(person);




  return (
    <div className='grid grid-cols-3 gap-4 ssm:grid-cols-2 rounded-sm px-7 py-3'>





      {/* {data && data?.map((movie, i) => {
        return <div key={i}><Carddd movie={movie} /></div>
      })} */}

      <Testimanial person={person} />








    </div>
  )
}
