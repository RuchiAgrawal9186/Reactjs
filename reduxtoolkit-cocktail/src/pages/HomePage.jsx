import React, { useEffect, useState } from 'react'
import Layout from '../Components/Layout'
import {useSelector,useDispatch} from "react-redux"
import { fetchCocktails } from '../redux/features/cocktailSlice'
import Spinner from '../Components/Spinner'
import { Link } from 'react-router-dom'
import SearchInput from '../Components/SearchInput'

const HomePage = () => {

  const [modify,setmodify] = useState([])
  const {loading,cocktails,error} = useSelector(state=> ({...state.app}))
  const dispatch = useDispatch()


  useEffect(()=>{
    dispatch(fetchCocktails())
  },[])

  useEffect(()=>{
    if(cocktails)
    {
      const newCocktails = cocktails.map((item)=>{
        const {idDrink,strGlass,strDrinkThumb,strAlcoholic,strDrink} = item
        return {
          id:idDrink,
          name:strDrink,
          img:strDrinkThumb,
          info:strAlcoholic,
          glass:strGlass
        }
        
      })
      setmodify(newCocktails)
    }
    else
    {
      setmodify([])
    }
  },[cocktails])

  if (loading)
  {
    return <Spinner></Spinner>
  }
  if(error)
  {
    return <p>{error.message}</p>
  }
  return (
    <Layout>
      <div className="container">
        <SearchInput></SearchInput>
        <div className="row">
          {modify.map((item) => (
            <div className="col-md-3 mt-3 m-4" key={item.id}>
              <div className="card" style={{ width: "18rem" }}>
                <img src={item.img} className="card-img-top" alt={item.name} />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <h5 className="card-title">{item.glass}</h5>
                  <p className="card-text">{item.info}</p>
                  <Link to={`/products/${item.id}`} className="btn btn-primary">
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default HomePage